/**
 * 美妆门店管理系统 - 局域网同步服务器
 *
 * 使用方法：
 *   1. 确保已安装 Node.js（https://nodejs.org）
 *   2. 在此文件所在目录运行：node sync-server.js
 *   3. 记下终端显示的 IP 地址，在另一台电脑的浏览器中打开系统后输入该地址
 *
 * 数据存储在同目录下的 data.json 文件中
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 3800;
const DATA_FILE = path.join(__dirname, 'data.json');

// ===== CORS =====
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// ===== 数据读写 =====
function readData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('读取数据文件失败:', e.message);
  }
  return { products: [], members: [], sales: [], pointsRecords: [], meta: {} };
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

// ===== JSON 响应 =====
function jsonResponse(res, data, status = 200) {
  res.writeHead(status, { 'Content-Type': 'application/json', ...CORS_HEADERS });
  res.end(JSON.stringify(data));
}

// ===== 读取请求体 =====
function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try { resolve(JSON.parse(body)); }
      catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

// ===== 获取本机局域网 IP =====
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1';
}

// ===== 请求路由 =====
const server = http.createServer(async (req, res) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS_HEADERS);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;

  try {
    // 健康检查
    if (pathname === '/api/health' && req.method === 'GET') {
      return jsonResponse(res, { status: 'ok', time: new Date().toISOString() });
    }

    // 全量获取数据
    if (pathname === '/api/data' && req.method === 'GET') {
      const data = readData();
      return jsonResponse(res, data);
    }

    // 全量同步（覆盖写入）
    if (pathname === '/api/data' && req.method === 'PUT') {
      const body = await readBody(req);
      const current = readData();
      // 合并：前端传来的数据覆盖本地
      if (body.products) current.products = body.products;
      if (body.members) current.members = body.members;
      if (body.sales) current.sales = body.sales;
      if (body.pointsRecords) current.pointsRecords = body.pointsRecords;
      if (body.meta) Object.assign(current.meta, body.meta);
      writeData(current);
      return jsonResponse(res, { ok: true });
    }

    // 增量同步 - 获取指定表的最后更新时间
    if (pathname === '/api/sync' && req.method === 'POST') {
      const body = await readBody(req);
      const data = readData();

      // body 中包含各表的上次同步时间戳
      // 返回比该时间戳更新的数据
      const result = {};
      for (const table of ['products', 'members', 'sales', 'pointsRecords']) {
        const lastSync = body[table] || 0;
        result[table] = (data[table] || []).filter(item => {
          const itemTime = new Date(item.updatedAt || item.createdAt || 0).getTime();
          return itemTime > lastSync;
        });
      }
      result.meta = data.meta || {};
      result.serverTime = Date.now();
      return jsonResponse(res, result);
    }

    // Meta 键值存储
    if (pathname.startsWith('/api/meta/') && req.method === 'GET') {
      const key = decodeURIComponent(pathname.split('/')[3]);
      const data = readData();
      const value = data.meta ? data.meta[key] : null;
      return jsonResponse(res, value !== undefined ? value : null);
    }

    if (pathname.startsWith('/api/meta/') && req.method === 'PUT') {
      const key = decodeURIComponent(pathname.split('/')[3]);
      const body = await readBody(req);
      const data = readData();
      if (!data.meta) data.meta = {};
      data.meta[key] = body.value;
      writeData(data);
      return jsonResponse(res, { ok: true });
    }

    // 404
    jsonResponse(res, { error: 'not found' }, 404);

  } catch (e) {
    console.error('请求处理错误:', e);
    jsonResponse(res, { error: e.message }, 500);
  }
});

// ===== 启动 =====
server.listen(PORT, '0.0.0.0', () => {
  const ip = getLocalIP();
  console.log('');
  console.log('========================================');
  console.log('  美妆门店管理系统 - 局域网同步服务器');
  console.log('========================================');
  console.log('');
  console.log(`  本机 IP 地址: ${ip}`);
  console.log(`  服务端口: ${PORT}`);
  console.log('');
  console.log('  在另一台电脑的系统中输入同步地址：');
  console.log(`  http://${ip}:${PORT}`);
  console.log('');
  console.log('  数据文件: ' + DATA_FILE);
  console.log('  按 Ctrl+C 停止服务器');
  console.log('========================================');
  console.log('');
});
