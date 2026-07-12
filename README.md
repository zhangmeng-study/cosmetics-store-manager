# 美妆门店管理系统

一款基于 Web 的美妆门店管理应用，纯前端实现，无需后端服务器。

## 功能

- **收银台** — 快速结账，支持扫码枪/摄像头扫码、会员选择、自动积分计算
- **商品管理** — 增删改查商品，支持 Excel 批量导入导出，库存预警
- **会员管理** — 会员等级体系（普通/银卡/金卡/钻石），积分记录查询与手动调整
- **营业统计** — 销售趋势图表、品类分析、会员排行
- **数据持久化** — IndexedDB 本地存储，支持 SQLite 格式导入导出
- **自动备份** — 每日自动备份到本地指定文件夹（File System Access API）

## 技术栈

- React 18 (UMD)
- Tailwind CSS (Play CDN)
- Recharts (图表)
- SheetJS (Excel 处理)
- sql.js (SQLite 导出/导入)
- html5-qrcode (扫码)
- IndexedDB (数据持久化)

## 本地运行

需要安装 [Node.js](https://nodejs.org/)。

```bash
# 克隆仓库
git clone https://github.com/zhangmeng-study/cosmetics-store-manager.git
cd cosmetics-store-manager

# 启动本地服务器
npx http-server -p 8765 --cors -c-1
```

然后访问 http://localhost:8765/cosmetics-store-manager.html

> **注意**：由于浏览器安全策略，不能直接双击 HTML 文件打开（`file://` 协议会阻止脚本加载），必须通过 HTTP 服务器访问。

## 部署上线

### Vercel（推荐）

1. Fork 本仓库
2. 访问 [vercel.com](https://vercel.com)，用 GitHub 登录
3. 点击 "New Project"，选择本仓库
4. 点击 "Deploy"，等待部署完成

### Netlify

1. 访问 [netlify.com](https://netlify.com)，用 GitHub 登录
2. 点击 "Add new site" → "Import an existing project"
3. 选择本仓库，点击 "Deploy site"

### GitHub Pages

1. 在仓库 Settings → Pages 中，选择 `main` 分支作为源
2. 保存后等待部署完成
3. 访问 `https://zhangmeng-study.github.io/cosmetics-store-manager/`

## 代码更新

部署到线上后，更新代码只需：

```bash
# 修改代码后
git add .
git commit -m "更新说明"
git push
```

Vercel/Netlify 会自动检测推送并重新部署。

## 项目结构

```
├── cosmetics-store-manager.html  # 主应用（编译后的完整 HTML）
├── react.js                      # React 18
├── react-dom.js                  # ReactDOM 18
├── tailwind.js                   # Tailwind CSS
├── prop-types.js                 # PropTypes
├── recharts.min.js               # Recharts 图表库
├── xlsx.full.min.js              # SheetJS Excel 处理
├── html5-qrcode.min.js           # 扫码库
├── vercel.json                   # Vercel 部署配置
├── netlify.toml                  # Netlify 部署配置
└── README.md
```

## 浏览器兼容性

- Chrome 86+（推荐）
- Edge 86+
- Firefox（备份功能不可用）
- Safari（备份功能不可用）

> 自动备份功能依赖 File System Access API，仅 Chromium 内核浏览器支持。

## License

MIT
