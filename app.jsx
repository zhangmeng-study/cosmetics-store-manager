// ===== 解构全局变量 =====
const { useState, useEffect, useMemo, useRef, useCallback } = React;
const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
        BarChart, Bar, PieChart, Pie, Cell, Legend } = Recharts;

// ===== 内联 SVG 图标组件 =====
const Icon = ({ children, className = "w-5 h-5", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className} {...props}>{children}</svg>
);

const CartIcon = (props) => (
  <Icon {...props}><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></Icon>
);
const BoxIcon = (props) => (
  <Icon {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.96" x2="12" y2="12" /></Icon>
);
const UsersIcon = (props) => (
  <Icon {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Icon>
);
const ChartIcon = (props) => (
  <Icon {...props}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></Icon>
);
const PlusIcon = (props) => (
  <Icon {...props}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></Icon>
);
const TrashIcon = (props) => (
  <Icon {...props}><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></Icon>
);
const EditIcon = (props) => (
  <Icon {...props}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></Icon>
);
const SearchIcon = (props) => (
  <Icon {...props}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></Icon>
);
const UploadIcon = (props) => (
  <Icon {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></Icon>
);
const DownloadIcon = (props) => (
  <Icon {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></Icon>
);
const CloseIcon = (props) => (
  <Icon {...props}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></Icon>
);
const MinusIcon = (props) => (
  <Icon {...props}><line x1="5" y1="12" x2="19" y2="12" /></Icon>
);
const CheckIcon = (props) => (
  <Icon {...props}><polyline points="20 6 9 17 4 12" /></Icon>
);
const TrendIcon = (props) => (
  <Icon {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></Icon>
);
const MoneyIcon = (props) => (
  <Icon {...props}><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></Icon>
);
const ReceiptIcon = (props) => (
  <Icon {...props}><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z" /><line x1="8" y1="7" x2="16" y2="7" /><line x1="8" y1="12" x2="16" y2="12" /></Icon>
);
const TagIcon = (props) => (
  <Icon {...props}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></Icon>
);
const ScanIcon = (props) => (
  <Icon {...props}><path d="M3 7V4a1 1 0 0 1 1-1h3" /><path d="M17 3h3a1 1 0 0 1 1 1v3" /><path d="M21 17v3a1 1 0 0 1-1 1h-3" /><path d="M7 21H4a1 1 0 0 1-1-1v-3" /><line x1="7" y1="12" x2="17" y2="12" /></Icon>
);
const CameraIcon = (props) => (
  <Icon {...props}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></Icon>
);
const WechatIcon = (props) => (
  <Icon {...props}><path d="M9.5 4C5.36 4 2 6.69 2 10c0 1.89 1.08 3.56 2.78 4.66L4 17l2.5-1.18C7.55 16.27 8.5 16.5 9.5 16.5c.17 0 .33 0 .5-.02C9.68 15.84 9.5 15.18 9.5 14.5c0-3.59 3.36-6.5 7.5-6.5.17 0 .33.01.5.02C16.93 5.73 13.46 4 9.5 4z" /><path d="M22 14.5c0-2.49-2.69-4.5-6-4.5s-6 2.01-6 4.5 2.69 4.5 6 4.5c.78 0 1.53-.12 2.22-.34L20.5 20l-.6-2.05C21.23 17.11 22 15.89 22 14.5z" /></Icon>
);
const AlipayIcon = (props) => (
  <Icon {...props}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 12h18" /><path d="M12 3v18" /><path d="M7 8h2" /><path d="M15 16h2" /></Icon>
);
const CardIcon = (props) => (
  <Icon {...props}><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></Icon>
);
const LockIcon = (props) => (
  <Icon {...props}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></Icon>
);
const KeyboardIcon = (props) => (
  <Icon {...props}><rect x="2" y="4" width="20" height="16" rx="2" /><line x1="6" y1="8" x2="6.01" y2="8" /><line x1="10" y1="8" x2="10.01" y2="8" /><line x1="14" y1="8" x2="14.01" y2="8" /><line x1="18" y1="8" x2="18.01" y2="8" /><line x1="6" y1="12" x2="6.01" y2="12" /><line x1="10" y1="12" x2="10.01" y2="12" /><line x1="14" y1="12" x2="14.01" y2="12" /><line x1="18" y1="12" x2="18.01" y2="12" /><line x1="8" y1="16" x2="16" y2="16" /></Icon>
);
const ListIcon = (props) => (
  <Icon {...props}><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></Icon>
);
const GridViewIcon = (props) => (
  <Icon {...props}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></Icon>
);

// ===== 常量 =====
const CATEGORIES = [
  { id: 'skincare', name: '护肤' },
  { id: 'makeup', name: '彩妆' },
  { id: 'fragrance', name: '香水' },
  { id: 'tools', name: '工具' },
  { id: 'bodycare', name: '身体护理' },
  { id: 'other', name: '其他' },
];

const MEMBER_LEVELS = [
  { id: 'normal', name: '普通会员', discount: 1.0, color: 'text-gray-600', bg: 'bg-gray-100', minPoints: 0 },
  { id: 'silver', name: '银卡会员', discount: 0.95, color: 'text-gray-700', bg: 'bg-gray-200', minPoints: 500 },
  { id: 'gold', name: '金卡会员', discount: 0.9, color: 'text-yellow-700', bg: 'bg-yellow-100', minPoints: 2000 },
  { id: 'diamond', name: '钻石会员', discount: 0.85, color: 'text-blue-700', bg: 'bg-blue-100', minPoints: 5000 },
];

const NAV_TABS = [
  { id: 'pos', name: '收银台', icon: CartIcon },
  { id: 'products', name: '商品管理', icon: BoxIcon },
  { id: 'members', name: '会员管理', icon: UsersIcon },
  { id: 'stats', name: '营业统计', icon: ChartIcon },
];

const PAYMENT_METHODS = [
  { id: 'wechat', name: '微信支付', icon: WechatIcon, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-400' },
  { id: 'alipay', name: '支付宝', icon: AlipayIcon, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-400' },
  { id: 'card', name: '信用卡', icon: CardIcon, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-400' },
  { id: 'cash', name: '现金', icon: MoneyIcon, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-400' },
];

const SHORTCUTS = [
  { key: 'F1', desc: '显示快捷键帮助' },
  { key: 'F2', desc: '搜索会员' },
  { key: 'Enter', desc: '打开/关闭钱箱' },
  { key: 'F9', desc: '结账' },
  { key: 'Esc', desc: '关闭弹窗/取消编辑' },
];

// ===== 工具函数 =====
const fmt = (n) => {
  const num = Number(n) || 0;
  return num.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};
const fmtDate = (d) => {
  const dt = new Date(d);
  return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`;
};
const todayStr = () => fmtDate(new Date());
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const getLevel = (points) => {
  let level = MEMBER_LEVELS[0];
  for (const l of MEMBER_LEVELS) {
    if ((points || 0) >= l.minPoints) level = l;
  }
  return level;
};

// ===== 通用组件 =====
function Modal({ title, onClose, children, footer, wide }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4" onClick={onClose}>
      <div className={"bg-white rounded-xl shadow-2xl w-full max-h-[90vh] overflow-y-auto " + (wide ? "max-w-2xl" : "max-w-lg")} onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 sticky top-0 bg-white rounded-t-xl z-10">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="px-4 sm:px-6 py-4">{children}</div>
        {footer && <div className="flex justify-end gap-2 px-4 sm:px-6 py-4 border-t border-gray-200">{footer}</div>}
      </div>
    </div>
  );
}

function Field({ label, children, required }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

function StatCard({ icon: Ic, label, value, color = "text-blue-600" }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-500">{label}</span>
        <Ic className={"w-5 h-5 " + color} />
      </div>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
}

function EmptyState({ icon: Ic, title, hint }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <Ic className="w-8 h-8 text-gray-300" />
      </div>
      <p className="text-gray-500 font-medium mb-1">{title}</p>
      {hint && <p className="text-sm text-gray-400">{hint}</p>}
    </div>
  );
}

// ===== 扫码弹窗 =====
function ScanModal({ onScan, onClose }) {
  const scanRegionId = "scan-region-" + useRef(Math.random().toString(36).slice(2,8)).current;
  const scannerRef = useRef(null);
  const [status, setStatus] = useState('正在启动摄像头...');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!window.Html5Qrcode) {
      setError('扫码库未加载，请检查网络连接');
      return;
    }
    let active = true;
    const scanner = new Html5Qrcode(scanRegionId, { verbose: false });
    scannerRef.current = scanner;
    const config = {
      fps: 10,
      qrbox: { width: 280, height: 180 },
      aspectRatio: 1.333,
    };
    scanner.start({ facingMode: "environment" }, config,
      (decodedText) => {
        if (!active) return;
        active = false;
        scanner.stop().then(() => {
          onScan(decodedText);
        }).catch(() => {
          onScan(decodedText);
        });
      },
      (err) => { /* per-frame error, ignore */ }
    ).then(() => {
      if (active) setStatus('摄像头已就绪，请将条码对准扫描框');
    }).catch((err) => {
      if (!active) return;
      const msg = String(err && err.message ? err.message : err);
      if (msg.includes('Permission') || msg.includes('denied') || msg.includes('NotAllowed')) {
        setError('摄像头权限被拒绝，请在浏览器设置中允许摄像头访问');
      } else if (msg.includes('NotFound') || msg.includes('device')) {
        setError('未检测到摄像头设备');
      } else {
        setError('摄像头启动失败：' + msg);
      }
    });
    return () => {
      active = false;
      if (scannerRef.current && scannerRef.current.isScanning) {
        scannerRef.current.stop().catch(() => {});
      }
    };
  }, []);

  return (
    <Modal title="扫码录入" onClose={onClose}>
      {error ? (
        <div className="text-center py-8">
          <CameraIcon className="w-12 h-12 text-red-300 mx-auto mb-3" />
          <p className="text-red-500 mb-2">{error}</p>
          <p className="text-sm text-gray-400">你也可以使用 USB 扫码枪，在输入框中直接扫码</p>
        </div>
      ) : (
        <>
          <div id={scanRegionId} className="rounded-lg overflow-hidden bg-gray-900 mb-3" style={{ minHeight: '240px' }} />
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <ScanIcon className="w-4 h-4" />
            <span>{status}</span>
          </div>
        </>
      )}
      <div className="flex justify-end mt-4">
        <button onClick={onClose} className="px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">关闭</button>
      </div>
    </Modal>
  );
}

// ===== 商品弹窗 =====
function ProductModal({ product, onSave, onClose }) {
  const [form, setForm] = useState(() => ({
    name: '', brand: '', category: 'skincare', price: '', cost: '', stock: '', barcode: '', description: '',
    ...(product || {}),
  }));
  const [showScan, setShowScan] = useState(false);
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const submit = () => {
    if (!form.name?.trim()) { alert('请输入商品名称'); return; }
    if (!form.price || parseFloat(form.price) < 0) { alert('请输入有效的价格'); return; }
    const data = {
      ...form,
      price: parseFloat(form.price) || 0,
      cost: parseFloat(form.cost) || 0,
      stock: parseInt(form.stock) || 0,
      category: form.category || 'other',
    };
    if (!data.id) data.id = uid();
    onSave(data);
  };
  return (
    <Modal title={product?.id ? '编辑商品' : '添加商品'} onClose={onClose}
      footer={<>
        <button onClick={onClose} className="px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">取消</button>
        <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">保存</button>
      </>}>
      <Field label="商品名称" required>
        <input value={form.name} onChange={e => update('name', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="如：完美口红" />
      </Field>
      <Field label="品牌">
        <input value={form.brand || ''} onChange={e => update('brand', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="如：兰蔻" />
      </Field>
      <Field label="条码">
        <div className="flex gap-2">
          <input value={form.barcode || ''} onChange={e => update('barcode', e.target.value)}
            className="flex-1 min-w-0 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="商品条码" />
          <button type="button" onClick={() => setShowScan(true)}
            className="flex-shrink-0 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-1 whitespace-nowrap text-sm">
            <ScanIcon className="w-4 h-4" /> 扫码
          </button>
        </div>
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="分类">
          <select value={form.category} onChange={e => update('category', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </Field>
        <Field label="单价（元）" required>
          <input type="number" min="0" step="0.01" value={form.price} onChange={e => update('price', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0.00" />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="成本价（元）">
          <input type="number" min="0" step="0.01" value={form.cost} onChange={e => update('cost', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0.00" />
        </Field>
        <Field label="库存数量">
          <input type="number" min="0" value={form.stock} onChange={e => update('stock', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0" />
        </Field>
      </div>
      <Field label="描述">
        <textarea value={form.description || ''} onChange={e => update('description', e.target.value)} rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="商品描述（选填）" />
      </Field>
      {showScan && <ScanModal onScan={(code) => { update('barcode', code); setShowScan(false); }} onClose={() => setShowScan(false)} />}
    </Modal>
  );
}

// ===== 导入弹窗 =====
function ImportModal({ onImport, onClose }) {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');
  const [importing, setImporting] = useState(false);
  const fileRef = useRef(null);

  const downloadTemplate = () => {
    const template = [
      { 商品名称: '示例商品', 品牌: '示例品牌', 分类: '护肤', 单价: 99.00, 成本价: 50.00, 库存: 100, 条码: '6900000000000', 描述: '商品描述' }
    ];
    const ws = XLSX.utils.json_to_sheet(template);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, '商品模板');
    XLSX.writeFile(wb, '商品导入模板.xlsx');
  };

  const handleFile = (file) => {
    if (!file) return;
    setError('');
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const wb = XLSX.read(data, { type: 'array' });
        const sheet = wb.Sheets[wb.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(sheet);
        if (!json.length) { setError('文件中没有数据'); return; }
        const mapped = json.map(row => ({
          name: row['商品名称'] || row['名称'] || row['name'] || '',
          brand: row['品牌'] || row['brand'] || '',
          category: (() => {
            const cat = row['分类'] || row['类别'] || row['category'] || 'other';
            const found = CATEGORIES.find(c => c.name === cat || c.id === cat);
            return found ? found.id : 'other';
          })(),
          price: parseFloat(row['单价'] || row['价格'] || row['price'] || 0) || 0,
          cost: parseFloat(row['成本价'] || row['成本'] || row['cost'] || 0) || 0,
          stock: parseInt(row['库存'] || row['数量'] || row['stock'] || 0) || 0,
          barcode: String(row['条码'] || row['barcode'] || ''),
          description: row['描述'] || row['说明'] || row['description'] || '',
          id: uid(),
        }));
        setPreview(mapped);
      } catch (err) {
        setError('文件解析失败：' + err.message);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const doImport = () => {
    if (!preview || !preview.length) return;
    setImporting(true);
    onImport(preview);
    setImporting(false);
    onClose();
  };

  return (
    <Modal title="导入商品" onClose={onClose}
      footer={<>
        <button onClick={onClose} className="px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">取消</button>
        <button onClick={downloadTemplate} className="px-4 py-2 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-1">
          <DownloadIcon className="w-4 h-4" /> 下载模板
        </button>
        <button onClick={doImport} disabled={!preview || importing}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
          {importing ? '导入中...' : `导入${preview ? `(${preview.length}条)` : ''}`}
        </button>
      </>}>
      <div className="mb-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
          onClick={() => fileRef.current?.click()}>
          <UploadIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600">点击选择 Excel/CSV 文件</p>
          <p className="text-xs text-gray-400 mt-1">支持 .xlsx, .xls, .csv 格式</p>
          <input ref={fileRef} type="file" accept=".xlsx,.xls,.csv" className="hidden"
            onChange={e => handleFile(e.target.files[0])} />
        </div>
        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
      </div>
      {preview && preview.length > 0 && (
        <div>
          <p className="text-sm text-gray-600 mb-2">预览（前5条）：</p>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="px-3 py-2 text-left">名称</th>
                  <th className="px-3 py-2 text-left">品牌</th>
                  <th className="px-3 py-2 text-right">单价</th>
                  <th className="px-3 py-2 text-right">成本价</th>
                  <th className="px-3 py-2 text-right">库存</th>
                </tr>
              </thead>
              <tbody>
                {preview.slice(0, 5).map((item, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="px-3 py-2">{item.name}</td>
                    <td className="px-3 py-2 text-gray-500">{item.brand || '-'}</td>
                    <td className="px-3 py-2 text-right">¥{fmt(item.price)}</td>
                    <td className="px-3 py-2 text-right">¥{fmt(item.cost || 0)}</td>
                    <td className="px-3 py-2 text-right">{item.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">共 {preview.length} 条数据</p>
        </div>
      )}
    </Modal>
  );
}

// ===== POS 收银台 =====
function DashboardPage({ products, members, onCheckout }) {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [memberId, setMemberId] = useState('');
  const [searching, setSearching] = useState(false);
  const [showScan, setShowScan] = useState(false);
  const [scanHint, setScanHint] = useState('');
  const [editingTotal, setEditingTotal] = useState(false);
  const [customTotal, setCustomTotal] = useState('');
  const [editingDiscount, setEditingDiscount] = useState(false);
  const [customDiscount, setCustomDiscount] = useState('');
  const [receivedAmount, setReceivedAmount] = useState('');
  const [memberSearch, setMemberSearch] = useState('');
  const [memberSearching, setMemberSearching] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [showCashDrawer, setShowCashDrawer] = useState(false);
  const [lastChange, setLastChange] = useState(0);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const memberSearchRef = useRef(null);
  const barcodeRef = useRef(null);

  const filtered = useMemo(() => {
    let list = products;
    if (category !== 'all') list = list.filter(p => p.category === category);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || (p.brand || '').toLowerCase().includes(q) || (p.barcode || '').includes(search.trim()));
    }
    return list;
  }, [products, search, category]);

  const cartTotal = useMemo(() => cart.reduce((s, i) => s + i.price * i.qty, 0), [cart]);
  const member = members.find(m => m.id === memberId);
  const level = member ? getLevel(member.points) : MEMBER_LEVELS[0];
  const discount = editingDiscount && customDiscount !== '' ? (parseFloat(customDiscount) || 1) : level.discount;
  const calculatedTotal = cartTotal * discount;
  const finalTotal = editingTotal && customTotal !== '' ? (parseFloat(customTotal) || 0) : calculatedTotal;
  const change = receivedAmount ? Math.max(0, (parseFloat(receivedAmount) || 0) - finalTotal) : 0;

  const addToCart = (product) => {
    setCart(c => {
      const exist = c.find(i => i.id === product.id);
      if (exist) {
        if (exist.qty >= (product.stock || 0)) { alert('库存不足'); return c; }
        return c.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      if ((product.stock || 0) < 1) { alert('库存不足'); return c; }
      return [...c, { id: product.id, name: product.name, price: product.price, qty: 1, stock: product.stock }];
    });
  };

  // 条码查找并加入购物车
  const handleBarcode = (code) => {
    const barcode = (code || '').trim();
    if (!barcode) return;
    const product = products.find(p => p.barcode === barcode);
    if (product) {
      addToCart(product);
      setScanHint('');
    } else {
      setScanHint('未找到条码为 ' + barcode + ' 的商品');
      setTimeout(() => setScanHint(''), 3000);
    }
  };

  // USB 扫码枪：监听快速输入 + Enter
  const handleBarcodeKeyDown = (e) => {
    if (e.key === 'Enter') {
      const val = e.target.value.trim();
      if (val) {
        handleBarcode(val);
        e.target.value = '';
      }
    }
  };

  // 摄像头扫码回调
  const handleCameraScan = (code) => {
    setShowScan(false);
    handleBarcode(code);
  };

  // 自动聚焦扫码输入框
  useEffect(() => {
    barcodeRef.current?.focus();
  }, [products.length]);
  const removeFromCart = (id) => setCart(c => c.filter(i => i.id !== id));
  const updateQty = (id, delta) => setCart(c => c.map(i => {
    if (i.id !== id) return i;
    const newQty = i.qty + delta;
    if (newQty < 1) return i;
    if (newQty > (i.stock || 0)) { alert('库存不足'); return i; }
    return { ...i, qty: newQty };
  }));

  const checkout = () => {
    if (!cart.length) { alert('购物车为空'); return; }
    const pm = PAYMENT_METHODS.find(p => p.id === paymentMethod);
    onCheckout({
      items: cart.map(i => ({ id: i.id, name: i.name, price: i.price, qty: i.qty })),
      memberId: memberId || null,
      subtotal: cartTotal,
      discount: discount,
      total: finalTotal,
      memberName: member ? member.name : null,
      levelName: level.name,
      paymentMethod: paymentMethod,
      paymentMethodName: pm ? pm.name : '现金',
    });
    setLastChange(change);
    setShowCashDrawer(true);
    setCart([]);
    setMemberId('');
    setEditingTotal(false);
    setCustomTotal('');
    setEditingDiscount(false);
    setCustomDiscount('');
    setReceivedAmount('');
    setPaymentMethod('cash');
    setMemberSearch('');
  };

  const filteredMembers = useMemo(() => {
    if (!memberSearching || !memberSearch.trim()) return [];
    const q = memberSearch.trim().toLowerCase();
    return members.filter(m => m.name.toLowerCase().includes(q) || (m.phone || '').includes(memberSearch.trim()));
  }, [members, memberSearch, memberSearching]);

  // 快捷键处理
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'F1') {
        e.preventDefault();
        setShowShortcuts(true);
      } else if (e.key === 'F2') {
        e.preventDefault();
        memberSearchRef.current?.focus();
      } else if (e.key === 'Enter') {
        const tag = document.activeElement?.tagName;
        if (tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT') {
          e.preventDefault();
          setShowCashDrawer(v => !v);
        }
      } else if (e.key === 'F9') {
        e.preventDefault();
        if (cart.length > 0) checkout();
      } else if (e.key === 'Escape') {
        setShowShortcuts(false);
        setShowCashDrawer(false);
        setEditingDiscount(false);
        setCustomDiscount('');
        setEditingTotal(false);
        setCustomTotal('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cart.length, paymentMethod, receivedAmount, finalTotal, change, memberId]);

  return (
    <div className="flex gap-4 lg:gap-6 h-[calc(100vh-96px)] lg:h-[calc(100vh-128px)]">
      {/* 左侧：分类目录（大屏显示侧边栏） */}
      <div className="hidden lg:block w-44 flex-shrink-0">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800 text-sm">商品分类</h3>
          </div>
          <div className="flex-1 overflow-y-auto py-2">
            <button onClick={() => setCategory('all')}
              className={"w-full text-left px-4 py-2 text-sm transition-colors " +
                (category === 'all' ? "bg-blue-50 text-blue-600 font-medium border-l-2 border-blue-600" : "text-gray-600 hover:bg-gray-50 border-l-2 border-transparent")}>
              全部商品
            </button>
            {CATEGORIES.map(c => (
              <button key={c.id} onClick={() => setCategory(c.id)}
                className={"w-full text-left px-4 py-2 text-sm transition-colors " +
                  (category === c.id ? "bg-blue-50 text-blue-600 font-medium border-l-2 border-blue-600" : "text-gray-600 hover:bg-gray-50 border-l-2 border-transparent")}>
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 中间：商品选择 */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* 扫码录入栏 */}
        <div className="flex gap-2 mb-3">
          <div className="flex-1 relative">
            <ScanIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
            <input ref={barcodeRef} onKeyDown={handleBarcodeKeyDown}
              placeholder="扫码录入（USB 扫码枪或输入条码后回车）"
              className="w-full pl-9 pr-3 py-2 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/30" />
          </div>
          <button onClick={() => setShowScan(true)}
            className="px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-1.5 whitespace-nowrap text-sm">
            <CameraIcon className="w-4 h-4" /> <span className="hidden sm:inline">摄像头扫码</span><span className="sm:hidden">扫码</span>
          </button>
        </div>
        {scanHint && (
          <div className="mb-3 px-3 py-2 bg-orange-50 border border-orange-200 rounded-lg text-sm text-orange-600">
            {scanHint}
          </div>
        )}
        {/* 小屏分类横向滚动条 */}
        <div className="lg:hidden mb-3 flex gap-2 overflow-x-auto pb-1">
          <button onClick={() => setCategory('all')}
            className={"px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-colors " +
              (category === 'all' ? "bg-blue-600 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50")}>
            全部
          </button>
          {CATEGORIES.map(c => (
            <button key={c.id} onClick={() => setCategory(c.id)}
              className={"px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-colors " +
                (category === c.id ? "bg-blue-600 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50")}>
              {c.name}
            </button>
          ))}
        </div>
        <div className="flex gap-3 mb-4">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="搜索商品名称、品牌或条码..."
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {products.length === 0 ? (
            <EmptyState icon={BoxIcon} title="暂无商品" hint="请先在商品管理中添加商品" />
          ) : filtered.length === 0 ? (
            <EmptyState icon={SearchIcon} title="未找到匹配商品" hint="试试其他关键词或分类" />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
              {filtered.map(p => {
                const cat = CATEGORIES.find(c => c.id === p.category);
                return (
                <button key={p.id} onClick={() => addToCart(p)}
                  disabled={(p.stock || 0) < 1}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 text-left hover:shadow-md hover:border-blue-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  <div className="flex items-start justify-between mb-1">
                    <span className="font-medium text-gray-800 text-sm line-clamp-2 flex-1">{p.name}</span>
                    {(p.stock || 0) < 1 && <span className="text-xs text-red-400 ml-1">缺货</span>}
                  </div>
                  <div className="flex items-center gap-1 mb-2 flex-wrap">
                    {p.brand && <span className="inline-block text-xs px-1.5 py-0.5 rounded bg-purple-50 text-purple-600 font-medium">{p.brand}</span>}
                    {cat && <span className="inline-block text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">{cat.name}</span>}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-bold">¥{fmt(p.price)}</span>
                    <span className="text-xs text-gray-400">库存 {p.stock || 0}</span>
                  </div>
                </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* 右侧：购物车 */}
      <div className="w-72 lg:w-80 flex-shrink-0 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col">
        <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2">
          <CartIcon className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-800">购物车</h3>
          <span className="ml-auto text-sm text-gray-400">{cart.length} 件</span>
          <button onClick={() => setShowShortcuts(true)} className="text-gray-400 hover:text-gray-600 ml-1" title="快捷键帮助 (F1)">
            <KeyboardIcon className="w-4 h-4" />
          </button>
        </div>

        {/* 会员选择 */}
        <div className="px-4 py-3 border-b border-gray-200">
          {member ? (
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-gray-700">{member.name}</span>
                <span className={"ml-2 text-xs px-2 py-0.5 rounded-full " + level.bg + " " + level.color}>{level.name}</span>
                <span className="ml-2 text-xs text-gray-400">积分 {member.points || 0}</span>
              </div>
              <button onClick={() => { setMemberId(''); setMemberSearch(''); }} className="text-gray-400 hover:text-gray-600"><CloseIcon className="w-4 h-4" /></button>
            </div>
          ) : (
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input ref={memberSearchRef} value={memberSearch}
                onChange={e => { setMemberSearch(e.target.value); setMemberSearching(true); }}
                onBlur={() => setTimeout(() => setMemberSearching(false), 200)}
                onFocus={() => memberSearch.trim() && setMemberSearching(true)}
                placeholder={members.length === 0 ? '暂无会员' : '搜索会员 (F2)'}
                className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              {memberSearching && filteredMembers.length > 0 && (
                <div className="absolute top-full mt-1 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-40 overflow-y-auto">
                  {filteredMembers.map(m => {
                    const lv = getLevel(m.points);
                    return (
                      <button key={m.id} onClick={() => { setMemberId(m.id); setMemberSearch(''); setMemberSearching(false); }}
                        className="w-full text-left px-3 py-2 hover:bg-blue-50 transition-colors text-sm border-b border-gray-50 last:border-0">
                        <span className="font-medium">{m.name}</span>
                        <span className="text-gray-400 ml-2">{m.phone || ''}</span>
                        <span className={"ml-2 text-xs px-1.5 py-0.5 rounded-full " + lv.bg + " " + lv.color}>{lv.name}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-300">
              <CartIcon className="w-12 h-12 mb-2" />
              <p className="text-sm">购物车空空如也</p>
            </div>
          ) : (
            <div className="space-y-2">
              {cart.map(item => (
                <div key={item.id} className="flex items-center gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-700 truncate">{item.name}</p>
                    <p className="text-xs text-gray-400">¥{fmt(item.price)} × {item.qty}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button onClick={() => updateQty(item.id, -1)} className="w-6 h-6 rounded flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600"><MinusIcon className="w-3 h-3" /></button>
                    <span className="w-6 text-center text-sm">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="w-6 h-6 rounded flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600"><PlusIcon className="w-3 h-3" /></button>
                    <button onClick={() => removeFromCart(item.id)} className="ml-1 text-red-400 hover:text-red-600"><TrashIcon className="w-3.5 h-3.5" /></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="px-4 py-3 border-t border-gray-200 space-y-2">
            <div className="flex justify-between text-sm text-gray-500">
              <span>小计</span><span>¥{fmt(cartTotal)}</span>
            </div>
            {editingDiscount ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 whitespace-nowrap">折扣</span>
                <input type="number" min="0.01" max="1" step="0.01" value={customDiscount}
                  onChange={e => setCustomDiscount(e.target.value)}
                  className="w-20 px-2 py-1 border border-orange-400 rounded text-right text-sm font-medium text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="0.85" autoFocus />
                <span className="text-xs text-gray-400">如 0.85 表示85折</span>
                <button onClick={() => { setEditingDiscount(false); setCustomDiscount(''); }}
                  className="text-xs text-gray-400 hover:text-gray-600 whitespace-nowrap">取消</button>
              </div>
            ) : (
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <span>折扣</span>
                  {discount < 1.0 && <span className="text-xs text-orange-500">({level.name} {(1 - discount) * 100}%off)</span>}
                  <button onClick={() => { setEditingDiscount(true); setCustomDiscount(String(discount)); }}
                    className="text-xs text-blue-500 hover:text-blue-700 flex items-center gap-0.5" title="修改折扣">
                    <EditIcon className="w-3 h-3" />
                  </button>
                </div>
                <span>{discount < 1.0 ? `-¥${fmt(cartTotal - calculatedTotal)}` : '无折扣'}</span>
              </div>
            )}
            {editingTotal ? (
              <div className="flex items-center gap-2 pt-1">
                <span className="text-sm text-gray-500 whitespace-nowrap">实收</span>
                <span className="text-sm text-gray-400">¥</span>
                <input type="number" min="0" step="0.01" value={customTotal}
                  onChange={e => setCustomTotal(e.target.value)}
                  className="flex-1 px-2 py-1 border border-blue-400 rounded text-right text-lg font-bold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0.00" autoFocus />
                <button onClick={() => { setEditingTotal(false); setCustomTotal(''); }}
                  className="text-xs text-gray-400 hover:text-gray-600 whitespace-nowrap">取消</button>
              </div>
            ) : (
              <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700">合计</span>
                  <button onClick={() => { setEditingTotal(true); setCustomTotal(String(calculatedTotal.toFixed(2))); }}
                    className="text-xs text-blue-500 hover:text-blue-700 flex items-center gap-0.5" title="修改实收金额">
                    <EditIcon className="w-3 h-3" /> 改价
                  </button>
                </div>
                <span className="text-xl font-bold text-blue-600">¥{fmt(finalTotal)}</span>
              </div>
            )}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-sm text-gray-500 whitespace-nowrap">收款</span>
              <span className="text-sm text-gray-400">¥</span>
              <input type="number" min="0" step="0.01" value={receivedAmount}
                onChange={e => setReceivedAmount(e.target.value)}
                className="flex-1 px-2 py-1.5 border border-gray-300 rounded text-right text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="输入收款金额" />
            </div>
            {receivedAmount && parseFloat(receivedAmount) >= finalTotal && (
              <div className="flex justify-between items-center text-sm pt-1 border-t border-dashed border-gray-200">
                <span className="text-gray-500">找零</span>
                <span className="font-semibold text-green-600 text-base">¥{fmt(change)}</span>
              </div>
            )}
            {receivedAmount && parseFloat(receivedAmount) < finalTotal && (
              <div className="flex justify-between items-center text-sm pt-1 border-t border-dashed border-gray-200">
                <span className="text-gray-500">还差</span>
                <span className="font-semibold text-red-500 text-base">¥{fmt(finalTotal - (parseFloat(receivedAmount) || 0))}</span>
              </div>
            )}
            {/* 支付方式 */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-gray-500">支付方式</span>
                <button onClick={() => setShowCashDrawer(v => !v)}
                  className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1" title="打开钱箱 (Enter)">
                  <BoxIcon className="w-3 h-3" /> 钱箱
                </button>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {PAYMENT_METHODS.map(pm => {
                  const PmIcon = pm.icon;
                  const active = paymentMethod === pm.id;
                  return (
                    <button key={pm.id} onClick={() => setPaymentMethod(pm.id)}
                      className={"flex flex-col items-center gap-0.5 py-1.5 rounded-lg border text-xs transition-all " +
                        (active ? pm.bg + " " + pm.border + " " + pm.color + " border-2 font-medium" : "border-gray-200 text-gray-500 hover:bg-gray-50")}>
                      <PmIcon className="w-4 h-4" />
                      <span>{pm.name.slice(0, 2)}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <button onClick={checkout}
              className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium">
              <CheckIcon className="w-4 h-4" /> 结账 (F9)
            </button>
          </div>
        )}
      </div>
      {showScan && <ScanModal onScan={handleCameraScan} onClose={() => setShowScan(false)} />}
      {showCashDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" onClick={() => setShowCashDrawer(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-gray-700 to-gray-900 px-6 py-4 text-white text-center">
              <BoxIcon className="w-10 h-10 mx-auto mb-2 opacity-80" />
              <h3 className="text-lg font-bold">钱箱已打开</h3>
              <p className="text-sm text-gray-300 mt-1">{new Date().toLocaleString('zh-CN')}</p>
            </div>
            <div className="px-6 py-5 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">支付方式</span>
                <span className="font-medium text-gray-700">{PAYMENT_METHODS.find(p => p.id === paymentMethod)?.name || '现金'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">应收金额</span>
                <span className="font-bold text-blue-600 text-lg">¥{fmt(finalTotal || 0)}</span>
              </div>
              {lastChange > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">找零</span>
                  <span className="font-bold text-green-600 text-lg">¥{fmt(lastChange)}</span>
                </div>
              )}
              <button onClick={() => setShowCashDrawer(false)}
                className="w-full py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium mt-2">
                关闭钱箱 (Enter)
              </button>
            </div>
          </div>
        </div>
      )}
      {showShortcuts && (
        <Modal title="快捷键帮助" onClose={() => setShowShortcuts(false)}>
          <div className="space-y-3">
            {SHORTCUTS.map(s => (
              <div key={s.key} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-600">{s.desc}</span>
                <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-md text-sm font-mono font-bold text-gray-700 shadow-sm">{s.key}</kbd>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs text-blue-700">提示：在收银台页面可使用以上快捷键提高效率。按 Esc 可关闭弹窗或取消编辑状态。</p>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ===== 商品管理 =====
function ProductsPage({ products, onSaveProduct, onDeleteProduct, onImport }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [showImport, setShowImport] = useState(false);
  const [showScan, setShowScan] = useState(false);
  const [scanHint, setScanHint] = useState('');
  const barcodeRef = useRef(null);

  const filtered = useMemo(() => {
    let list = products;
    if (category !== 'all') list = list.filter(p => p.category === category);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || (p.brand || '').toLowerCase().includes(q) || (p.barcode || '').includes(search.trim()));
    }
    return list;
  }, [products, search, category]);

  const handleAdd = () => { setEditing(null); setShowModal(true); };
  const handleEdit = (p) => { setEditing(p); setShowModal(true); };
  const handleSave = (data) => { onSaveProduct(data); setShowModal(false); };
  const handleDelete = (p) => {
    if (confirm(`确定删除"${p.name}"吗？`)) onDeleteProduct(p.id);
  };

  // 扫码录入：条码查找商品
  const handleBarcode = (code) => {
    const barcode = (code || '').trim();
    if (!barcode) return;
    const existing = products.find(p => p.barcode === barcode);
    if (existing) {
      setEditing(existing);
      setShowModal(true);
      setScanHint('');
    } else {
      setEditing({ barcode });
      setShowModal(true);
      setScanHint('');
    }
  };

  // USB 扫码枪：监听 Enter
  const handleBarcodeKeyDown = (e) => {
    if (e.key === 'Enter') {
      const val = e.target.value.trim();
      if (val) {
        handleBarcode(val);
        e.target.value = '';
      }
    }
  };

  const handleCameraScan = (code) => {
    setShowScan(false);
    handleBarcode(code);
  };

  useEffect(() => {
    if (!showModal && !showImport && !showScan) {
      barcodeRef.current?.focus();
    }
  }, [showModal, showImport, showScan]);

  return (
    <div>
      {/* 扫码录入栏 */}
      <div className="flex flex-wrap gap-2 mb-3">
        <div className="flex-1 min-w-[200px] relative">
          <ScanIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-500" />
          <input ref={barcodeRef} onKeyDown={handleBarcodeKeyDown}
            placeholder="扫码录入商品（USB 扫码枪或输入条码后回车，已存在则编辑，不存在则新增）"
            className="w-full pl-9 pr-3 py-2 border-2 border-indigo-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-indigo-50/30" />
        </div>
        <button onClick={() => setShowScan(true)}
          className="px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-1.5 whitespace-nowrap text-sm">
          <CameraIcon className="w-4 h-4" /> <span className="hidden sm:inline">摄像头扫码</span><span className="sm:hidden">扫码</span>
        </button>
      </div>
      {scanHint && (
        <div className="mb-3 px-3 py-2 bg-orange-50 border border-orange-200 rounded-lg text-sm text-orange-600">
          {scanHint}
        </div>
      )}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="flex-1 min-w-[180px] relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="搜索商品名称、品牌或条码..."
            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <select value={category} onChange={e => setCategory(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="all">全部分类</option>
          {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <button onClick={() => setShowImport(true)}
          className="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-1.5 whitespace-nowrap text-sm">
          <UploadIcon className="w-4 h-4" /> 导入
        </button>
        <button onClick={handleAdd}
          className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1.5 whitespace-nowrap text-sm">
          <PlusIcon className="w-4 h-4" /> 添加商品
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {filtered.length === 0 ? (
          <EmptyState icon={BoxIcon} title={products.length === 0 ? "暂无商品数据" : "未找到匹配商品"}
            hint={products.length === 0 ? "点击「添加商品」或「导入」开始管理" : "试试其他关键词"} />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[800px]">
              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">商品名称</th>
                  <th className="px-4 py-3 text-left font-medium">品牌</th>
                  <th className="px-4 py-3 text-left font-medium">分类</th>
                  <th className="px-4 py-3 text-right font-medium">单价</th>
                  <th className="px-4 py-3 text-right font-medium">成本价</th>
                  <th className="px-4 py-3 text-right font-medium">利润</th>
                  <th className="px-4 py-3 text-right font-medium">库存</th>
                  <th className="px-4 py-3 text-center font-medium">操作</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(p => {
                  const cat = CATEGORIES.find(c => c.id === p.category);
                  return (
                    <tr key={p.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-800">{p.name}</td>
                      <td className="px-4 py-3 text-gray-500">{p.brand || '-'}</td>
                      <td className="px-4 py-3 text-gray-500">{cat ? cat.name : '-'}</td>
                      <td className="px-4 py-3 text-right text-blue-600 font-medium">¥{fmt(p.price)}</td>
                      <td className="px-4 py-3 text-right text-gray-500">¥{fmt(p.cost || 0)}</td>
                      <td className="px-4 py-3 text-right">
                        {(() => {
                          const profit = (p.price || 0) - (p.cost || 0);
                          const cls = profit < 0 ? 'text-red-500 font-medium' : 'text-green-600';
                          return <span className={cls}>¥{fmt(profit)}</span>;
                        })()}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className={(p.stock || 0) < 10 ? 'text-red-500 font-medium' : 'text-gray-600'}>{p.stock || 0}</span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-2">
                          <button onClick={() => handleEdit(p)} className="text-blue-500 hover:text-blue-700 transition-colors">
                            <EditIcon className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(p)} className="text-red-400 hover:text-red-600 transition-colors">
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showModal && <ProductModal product={editing} onSave={handleSave} onClose={() => setShowModal(false)} />}
      {showImport && <ImportModal onImport={onImport} onClose={() => setShowImport(false)} />}
      {showScan && <ScanModal onScan={handleCameraScan} onClose={() => setShowScan(false)} />}
    </div>
  );
}

// ===== 会员弹窗 =====
function MemberModal({ member, onSave, onClose }) {
  const [form, setForm] = useState(() => member ? { ...member } : {
    name: '', phone: '', level: 'normal', points: '', birthday: '', email: '', address: '',
  });
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const submit = () => {
    if (!form.name?.trim()) { alert('请输入会员姓名'); return; }
    const data = {
      ...form,
      points: parseInt(form.points) || 0,
      level: form.level || 'normal',
    };
    if (!data.id) data.id = uid();
    if (!data.createdAt) data.createdAt = new Date().toISOString();
    onSave(data);
  };
  return (
    <Modal title={member ? '编辑会员' : '添加会员'} onClose={onClose}
      footer={<>
        <button onClick={onClose} className="px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">取消</button>
        <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">保存</button>
      </>}>
      <Field label="会员姓名" required>
        <input value={form.name} onChange={e => update('name', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="如：张三" />
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="手机号">
          <input value={form.phone || ''} onChange={e => update('phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="手机号码" />
        </Field>
        <Field label="积分">
          <input type="number" min="0" value={form.points} onChange={e => update('points', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0" />
        </Field>
      </div>
      <Field label="折算价格（积分 × 0.05）">
        <div className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-blue-600 font-medium">
          ¥{fmt((parseInt(form.points) || 0) * 0.05)}
          <span className="ml-2 text-xs text-gray-400">（{(parseInt(form.points) || 0)} 积分）</span>
        </div>
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="会员等级">
          <select value={form.level} onChange={e => update('level', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            {MEMBER_LEVELS.map(l => <option key={l.id} value={l.id}>{l.name}（{(l.discount * 10).toFixed(1)}折）</option>)}
          </select>
        </Field>
        <Field label="生日">
          <input type="date" value={form.birthday || ''} onChange={e => update('birthday', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </Field>
      </div>
      <Field label="邮箱">
        <input type="email" value={form.email || ''} onChange={e => update('email', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="电子邮箱" />
      </Field>
      <Field label="地址">
        <textarea value={form.address || ''} onChange={e => update('address', e.target.value)} rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="联系地址（选填）" />
      </Field>
    </Modal>
  );
}

// 积分记录弹窗
function PointsRecordsModal({ member, records, onAdjust, onClose }) {
  const [adjustPoints, setAdjustPoints] = useState('');
  const [adjustReason, setAdjustReason] = useState('');
  const [showForm, setShowForm] = useState(false);

  const memberRecords = useMemo(() => {
    if (!member) return [];
    return records.filter(r => r.memberId === member.id).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [records, member]);

  const totalIn = memberRecords.filter(r => r.points > 0).reduce((s, r) => s + r.points, 0);
  const totalOut = memberRecords.filter(r => r.points < 0).reduce((s, r) => s + r.points, 0);

  const handleAdjust = () => {
    const pts = parseInt(adjustPoints);
    if (isNaN(pts) || pts === 0) return;
    onAdjust({
      id: uid(),
      memberId: member.id,
      memberName: member.name,
      points: pts,
      type: '手动调整',
      description: adjustReason.trim() || (pts > 0 ? '手动增加积分' : '手动扣减积分'),
      date: todayStr(),
      createdAt: new Date().toISOString(),
    });
    setAdjustPoints('');
    setAdjustReason('');
    setShowForm(false);
  };

  const typeBadge = (type) => {
    if (type === '购买积分') return 'bg-green-100 text-green-700';
    if (type === '退货扣减') return 'bg-orange-100 text-orange-700';
    return 'bg-gray-100 text-gray-600';
  };

  return (
    <Modal title={`${member.name} 的积分记录`} onClose={onClose} wide>
      {/* 汇总 */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-blue-50 rounded-lg p-3 text-center">
          <p className="text-xs text-gray-500">当前积分</p>
          <p className="text-lg font-bold text-blue-600">{member.points || 0}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-3 text-center">
          <p className="text-xs text-gray-500">累计获得</p>
          <p className="text-lg font-bold text-green-600">+{totalIn}</p>
        </div>
        <div className="bg-orange-50 rounded-lg p-3 text-center">
          <p className="text-xs text-gray-500">累计扣减</p>
          <p className="text-lg font-bold text-orange-600">{totalOut}</p>
        </div>
      </div>

      {/* 手动调整 */}
      {!showForm ? (
        <button onClick={() => setShowForm(true)}
          className="mb-3 px-3 py-1.5 text-sm text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-1.5">
          <PlusIcon className="w-3.5 h-3.5" /> 手动调整积分
        </button>
      ) : (
        <div className="mb-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex flex-wrap items-end gap-2">
            <div>
              <label className="text-xs text-gray-500 block mb-1">积分变化</label>
              <input type="number" value={adjustPoints} onChange={e => setAdjustPoints(e.target.value)}
                placeholder="正数增加，负数扣减"
                className="w-40 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
            <div className="flex-1 min-w-[160px]">
              <label className="text-xs text-gray-500 block mb-1">原因（选填）</label>
              <input value={adjustReason} onChange={e => setAdjustReason(e.target.value)}
                placeholder="如：活动赠送、积分过期等"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
            <button onClick={handleAdjust}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm transition-colors">确认</button>
            <button onClick={() => setShowForm(false)}
              className="px-4 py-2 text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm transition-colors">取消</button>
          </div>
        </div>
      )}

      {/* 记录列表 */}
      {memberRecords.length === 0 ? (
        <div className="text-center py-8 text-gray-400 text-sm">暂无积分记录</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="text-left text-xs text-gray-400 border-b border-gray-200">
                <th className="py-2 pr-3 font-medium">日期</th>
                <th className="py-2 pr-3 font-medium">类型</th>
                <th className="py-2 pr-3 font-medium">积分变化</th>
                <th className="py-2 font-medium">说明</th>
              </tr>
            </thead>
            <tbody>
              {memberRecords.map(r => (
                <tr key={r.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2.5 pr-3 text-gray-500 whitespace-nowrap">{r.date}</td>
                  <td className="py-2.5 pr-3">
                    <span className={"text-xs px-2 py-0.5 rounded-full " + typeBadge(r.type)}>{r.type}</span>
                  </td>
                  <td className={"py-2.5 pr-3 font-semibold " + (r.points > 0 ? 'text-green-600' : 'text-orange-600')}>
                    {r.points > 0 ? '+' : ''}{r.points}
                  </td>
                  <td className="py-2.5 text-gray-600">{r.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Modal>
  );
}

// ===== 会员管理 =====
function MembersPage({ members, onSaveMember, onDeleteMember, pointsRecords, onAdjustPoints }) {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [pointsMember, setPointsMember] = useState(null);
  const [viewMode, setViewMode] = useState('card'); // 'card' or 'table'

  const filtered = useMemo(() => {
    if (!search.trim()) return members;
    const q = search.trim().toLowerCase();
    return members.filter(m => m.name.toLowerCase().includes(q) || (m.phone || '').includes(search.trim()));
  }, [members, search]);

  const handleAdd = () => { setEditing(null); setShowModal(true); };
  const handleEdit = (m) => { setEditing(m); setShowModal(true); };
  const handleSave = (data) => { onSaveMember(data); setShowModal(false); };
  const handleDelete = (m) => {
    if (confirm(`确定删除会员"${m.name}"吗？`)) onDeleteMember(m.id);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="flex-1 min-w-[200px] relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="搜索会员姓名或手机号..."
            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <button onClick={() => setViewMode('card')}
            className={"px-2.5 py-2 transition-colors flex items-center gap-1 text-sm " + (viewMode === 'card' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50')}
            title="卡片视图">
            <GridViewIcon className="w-4 h-4" />
          </button>
          <button onClick={() => setViewMode('table')}
            className={"px-2.5 py-2 transition-colors flex items-center gap-1 text-sm border-l border-gray-300 " + (viewMode === 'table' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50')}
            title="表格视图">
            <ListIcon className="w-4 h-4" />
          </button>
        </div>
        <button onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1.5 whitespace-nowrap">
          <PlusIcon className="w-4 h-4" /> 添加会员
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <EmptyState icon={UsersIcon} title={members.length === 0 ? "暂无会员数据" : "未找到匹配会员"}
            hint={members.length === 0 ? "点击「添加会员」开始管理" : "试试其他关键词"} />
        </div>
      ) : viewMode === 'card' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
          {filtered.map(m => {
            const level = getLevel(m.points);
            return (
              <div key={m.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      {m.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{m.name}</p>
                      <p className="text-xs text-gray-400">{m.phone || '无手机号'}</p>
                    </div>
                  </div>
                  <span className={"text-xs px-2 py-1 rounded-full " + level.bg + " " + level.color}>{level.name}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-gray-400">积分</span>
                    <p className="font-medium text-gray-700">{m.points || 0}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">折算价格</span>
                    <p className="font-medium text-blue-600">¥{fmt((m.points || 0) * 0.05)}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">折扣</span>
                    <p className="font-medium text-gray-700">{(level.discount * 10).toFixed(1)}折</p>
                  </div>
                </div>
                {m.birthday && <p className="text-xs text-gray-400 mt-2">生日：{m.birthday}</p>}
                <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
                  <button onClick={() => handleEdit(m)} className="flex-1 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-1">
                    <EditIcon className="w-3.5 h-3.5" /> 编辑
                  </button>
                  <button onClick={() => setPointsMember(m)} className="flex-1 py-1.5 text-sm text-amber-600 hover:bg-amber-50 rounded-lg transition-colors flex items-center justify-center gap-1">
                    <ReceiptIcon className="w-3.5 h-3.5" /> 积分
                  </button>
                  <button onClick={() => handleDelete(m)} className="flex-1 py-1.5 text-sm text-red-400 hover:bg-red-50 rounded-lg transition-colors flex items-center justify-center gap-1">
                    <TrashIcon className="w-3.5 h-3.5" /> 删除
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-4 font-medium">会员</th>
                  <th className="text-left py-3 px-4 font-medium">手机号</th>
                  <th className="text-left py-3 px-4 font-medium">等级</th>
                  <th className="text-right py-3 px-4 font-medium">积分</th>
                  <th className="text-right py-3 px-4 font-medium">折算价格</th>
                  <th className="text-right py-3 px-4 font-medium">折扣</th>
                  <th className="text-left py-3 px-4 font-medium">生日</th>
                  <th className="text-center py-3 px-4 font-medium">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map(m => {
                  const level = getLevel(m.points);
                  return (
                    <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                            {m.name.charAt(0)}
                          </div>
                          <span className="font-medium text-gray-800">{m.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{m.phone || '-'}</td>
                      <td className="py-3 px-4">
                        <span className={"text-xs px-2 py-1 rounded-full " + level.bg + " " + level.color}>{level.name}</span>
                      </td>
                      <td className="py-3 px-4 text-right font-medium text-gray-700">{m.points || 0}</td>
                      <td className="py-3 px-4 text-right text-blue-600">¥{fmt((m.points || 0) * 0.05)}</td>
                      <td className="py-3 px-4 text-right text-gray-700">{(level.discount * 10).toFixed(1)}折</td>
                      <td className="py-3 px-4 text-gray-500">{m.birthday || '-'}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-center gap-1">
                          <button onClick={() => handleEdit(m)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors" title="编辑">
                            <EditIcon className="w-3.5 h-3.5" />
                          </button>
                          <button onClick={() => setPointsMember(m)} className="p-1.5 text-amber-600 hover:bg-amber-50 rounded transition-colors" title="积分记录">
                            <ReceiptIcon className="w-3.5 h-3.5" />
                          </button>
                          <button onClick={() => handleDelete(m)} className="p-1.5 text-red-400 hover:bg-red-50 rounded transition-colors" title="删除">
                            <TrashIcon className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showModal && <MemberModal member={editing} onSave={handleSave} onClose={() => setShowModal(false)} />}
      {pointsMember && (
        <PointsRecordsModal member={pointsMember} records={pointsRecords || []}
          onAdjust={onAdjustPoints} onClose={() => setPointsMember(null)} />
      )}
    </div>
  );
}

// ===== 营业统计 =====
function StatsPage({ sales, products, onDeleteSale }) {
  const [period, setPeriod] = useState('today');

  const stats = useMemo(() => {
    const now = new Date();
    const today = todayStr();
    const filtered = sales.filter(s => {
      if (period === 'today') return s.date === today;
      if (period === 'week') {
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        return new Date(s.date) >= weekAgo;
      }
      if (period === 'month') {
        return s.date.startsWith(now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0'));
      }
      return true;
    });
    const totalRevenue = filtered.reduce((s, sale) => s + sale.total, 0);
    const totalCount = filtered.length;
    const totalItems = filtered.reduce((s, sale) => s + sale.items.reduce((c, i) => c + i.qty, 0), 0);
    const avgOrder = totalCount > 0 ? totalRevenue / totalCount : 0;

    // 按日期汇总
    const byDate = {};
    filtered.forEach(s => {
      if (!byDate[s.date]) byDate[s.date] = 0;
      byDate[s.date] += s.total;
    });
    const chartData = Object.entries(byDate).sort().map(([date, amount]) => ({ date: date.slice(5), amount: Math.round(amount * 100) / 100 }));

    // 按分类汇总
    const byCategory = {};
    filtered.forEach(s => {
      s.items.forEach(item => {
        const product = products.find(p => p.id === item.id);
        const cat = product ? (CATEGORIES.find(c => c.id === product.category)?.name || '其他') : '其他';
        if (!byCategory[cat]) byCategory[cat] = 0;
        byCategory[cat] += item.price * item.qty;
      });
    });
    const categoryData = Object.entries(byCategory).map(([name, value]) => ({ name, value: Math.round(value * 100) / 100 }));

    return { filtered, totalRevenue, totalCount, totalItems, avgOrder, chartData, categoryData };
  }, [sales, products, period]);

  const pieColors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-1 flex">
          {[{k:'today',n:'今日'},{k:'week',n:'本周'},{k:'month',n:'本月'},{k:'all',n:'全部'}].map(t => (
            <button key={t.k} onClick={() => setPeriod(t.k)}
              className={"px-4 py-1.5 rounded-md text-sm transition-colors " + (period === t.k ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100")}>
              {t.n}
            </button>
          ))}
        </div>
      </div>

      {stats.filtered.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <EmptyState icon={ChartIcon} title="暂无销售数据" hint="在收银台完成一笔交易后即可查看统计" />
        </div>
      ) : (
        <>
          {/* 统计卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <StatCard icon={MoneyIcon} label="营业总额" value={"¥" + fmt(stats.totalRevenue)} color="text-blue-600" />
            <StatCard icon={ReceiptIcon} label="订单数量" value={stats.totalCount + " 笔"} color="text-green-600" />
            <StatCard icon={BoxIcon} label="销售件数" value={stats.totalItems + " 件"} color="text-purple-600" />
            <StatCard icon={TrendIcon} label="客单价" value={"¥" + fmt(stats.avgOrder)} color="text-orange-600" />
          </div>

          {/* 图表 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5">
              <h3 className="font-semibold text-gray-700 mb-4">营业额趋势</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={stats.chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip formatter={v => '¥' + fmt(v)} />
                  <Line type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={2} name="营业额" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5">
              <h3 className="font-semibold text-gray-700 mb-4">分类销售占比</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={stats.categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={e => e.name}>
                    {stats.categoryData.map((_, i) => <Cell key={i} fill={pieColors[i % pieColors.length]} />)}
                  </Pie>
                  <Tooltip formatter={v => '¥' + fmt(v)} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 交易记录 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-5 py-3 border-b border-gray-200">
              <h3 className="font-semibold text-gray-700">交易记录</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[768px]">
                <thead className="bg-gray-50 text-gray-500">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium">日期</th>
                    <th className="px-4 py-3 text-left font-medium">商品</th>
                    <th className="px-4 py-3 text-left font-medium">会员</th>
                    <th className="px-4 py-3 text-left font-medium">支付方式</th>
                    <th className="px-4 py-3 text-right font-medium">原价</th>
                    <th className="px-4 py-3 text-right font-medium">实付</th>
                    <th className="px-4 py-3 text-center font-medium">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.filtered.slice().reverse().map(sale => (
                    <tr key={sale.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-gray-500">{sale.date}</td>
                      <td className="px-4 py-3 text-gray-700">
                        {sale.items.map(i => `${i.name}×${i.qty}`).join('，')}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{sale.memberName || '散客'}</td>
                      <td className="px-4 py-3 text-gray-500">{sale.paymentMethodName || '现金'}</td>
                      <td className="px-4 py-3 text-right text-gray-400 line-through">¥{fmt(sale.subtotal)}</td>
                      <td className="px-4 py-3 text-right text-blue-600 font-medium">¥{fmt(sale.total)}</td>
                      <td className="px-4 py-3 text-center">
                        <button onClick={() => {
                          if (confirm(`确定退货吗？\n\n商品：${sale.items.map(i => `${i.name}×${i.qty}`).join('，')}\n退款：¥${fmt(sale.total)}\n\n退货后库存将恢复，会员积分将扣减。`)) {
                            onDeleteSale(sale.id);
                          }
                        }}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded transition-colors text-xs inline-flex items-center gap-1">
                          <ReceiptIcon className="w-3.5 h-3.5" /> 退货
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ===== IndexedDB 持久化存储 =====
const DB_NAME = 'cosmetics_store';
const DB_VERSION = 1;
const DB_STORES = ['products', 'members', 'sales', 'pointsRecords'];

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      DB_STORES.forEach(s => {
        if (!db.objectStoreNames.contains(s)) {
          db.createObjectStore(s, { keyPath: 'id' });
        }
      });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function dbGetAll(storeName) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const req = tx.objectStore(storeName).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

async function dbPutAll(storeName, items) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    store.clear();
    items.forEach(item => store.put(item));
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// 请求永久存储（防止浏览器自动清理）
async function requestPersistentStorage() {
  if (navigator.storage && navigator.storage.persist) {
    try {
      const isPersisted = await navigator.storage.persisted();
      if (!isPersisted) {
        await navigator.storage.persist();
      }
    } catch (e) { /* 部分浏览器不支持，忽略 */ }
  }
}

// ===== SQLite 导出/导入 =====
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector('script[src="' + src + '"]')) return resolve();
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error('加载失败: ' + src));
    document.head.appendChild(s);
  });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

const SQL_JS_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.js';
const SQL_JS_WASM = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/';

async function ensureSqlJs() {
  await loadScript(SQL_JS_CDN);
  const SQL = await window.initSqlJs({ locateFile: f => SQL_JS_WASM + f });
  return SQL;
}

async function exportToSQLite(products, members, sales, pointsRecords) {
  const SQL = await ensureSqlJs();
  const db = new SQL.Database();

  db.run(`CREATE TABLE products (id TEXT PRIMARY KEY, name TEXT, barcode TEXT, brand TEXT, category TEXT, price REAL, stock INTEGER, cost REAL, sku TEXT, createdAt TEXT)`);
  db.run(`CREATE TABLE members (id TEXT PRIMARY KEY, name TEXT, phone TEXT, birthday TEXT, address TEXT, points INTEGER, createdAt TEXT)`);
  db.run(`CREATE TABLE sales (id TEXT PRIMARY KEY, date TEXT, createdAt TEXT, itemsJson TEXT, subtotal REAL, total REAL, memberId TEXT, memberName TEXT, levelName TEXT)`);
  db.run(`CREATE TABLE points_records (id TEXT PRIMARY KEY, memberId TEXT, memberName TEXT, points INTEGER, type TEXT, description TEXT, date TEXT, createdAt TEXT)`);

  products.forEach(p => {
    db.run('INSERT INTO products VALUES (?,?,?,?,?,?,?,?,?,?)',
      [p.id, p.name, p.barcode, p.brand, p.category, p.price, p.stock, p.cost, p.sku, p.createdAt]);
  });
  members.forEach(m => {
    db.run('INSERT INTO members VALUES (?,?,?,?,?,?,?)',
      [m.id, m.name, m.phone, m.birthday, m.address, m.points, m.createdAt]);
  });
  sales.forEach(s => {
    db.run('INSERT INTO sales VALUES (?,?,?,?,?,?,?,?)',
      [s.id, s.date, s.createdAt, JSON.stringify(s.items), s.subtotal, s.total, s.memberId, s.memberName, s.levelName]);
  });
  pointsRecords.forEach(r => {
    db.run('INSERT INTO points_records VALUES (?,?,?,?,?,?,?,?)',
      [r.id, r.memberId, r.memberName, r.points, r.type, r.description, r.date, r.createdAt]);
  });

  const data = db.export();
  db.close();
  return new Blob([data], { type: 'application/x-sqlite3' });
}

async function importFromSQLite(file) {
  const SQL = await ensureSqlJs();
  const buf = await file.arrayBuffer();
  const db = new SQL.Database(new Uint8Array(buf));

  const products = [];
  db.exec('SELECT * FROM products')[0]?.values.forEach(row => {
    products.push({ id: row[0], name: row[1], barcode: row[2], brand: row[3], category: row[4], price: row[5], stock: row[6], cost: row[7], sku: row[8], createdAt: row[9] });
  });
  const members = [];
  db.exec('SELECT * FROM members')[0]?.values.forEach(row => {
    members.push({ id: row[0], name: row[1], phone: row[2], birthday: row[3], address: row[4], points: row[5], createdAt: row[6] });
  });
  const sales = [];
  db.exec('SELECT * FROM sales')[0]?.values.forEach(row => {
    sales.push({ id: row[0], date: row[1], createdAt: row[2], items: JSON.parse(row[3] || '[]'), subtotal: row[4], total: row[5], memberId: row[6], memberName: row[7], levelName: row[8] });
  });
  const pointsRecords = [];
  db.exec('SELECT * FROM points_records')[0]?.values.forEach(row => {
    pointsRecords.push({ id: row[0], memberId: row[1], memberName: row[2], points: row[3], type: row[4], description: row[5], date: row[6], createdAt: row[7] });
  });

  db.close();
  return { products, members, sales, pointsRecords };
}

// ===== 自动备份（File System Access API）=====
const META_DB = 'cosmetics_meta';
const META_STORE = 'kv';

function openMetaDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(META_DB, 1);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(META_STORE)) {
        db.createObjectStore(META_STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function metaGet(key) {
  const db = await openMetaDB();
  return new Promise((resolve) => {
    const tx = db.transaction(META_STORE, 'readonly');
    const req = tx.objectStore(META_STORE).get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => resolve(null);
  });
}

async function metaSet(key, value) {
  const db = await openMetaDB();
  return new Promise((resolve) => {
    const tx = db.transaction(META_STORE, 'readwrite');
    tx.objectStore(META_STORE).put(value, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => resolve();
  });
}

async function verifyDirPermission(handle) {
  if (!handle) return false;
  try {
    if ((await handle.queryPermission({ mode: 'readwrite' })) === 'granted') return true;
    // 需要用户手势才能 requestPermission，这里只查询不请求
    return false;
  } catch (e) { return false; }
}

async function requestDirPermission(handle) {
  if (!handle) return false;
  try {
    return (await handle.requestPermission({ mode: 'readwrite' })) === 'granted';
  } catch (e) { return false; }
}

async function pickBackupDir() {
  if (!window.showDirectoryPicker) {
    throw new Error('当前浏览器不支持文件夹选择，请使用 Chrome 或 Edge');
  }
  const handle = await window.showDirectoryPicker({ mode: 'readwrite' });
  await metaSet('backupDirHandle', handle);
  return handle;
}

async function getBackupDirHandle() {
  return await metaGet('backupDirHandle');
}

async function writeBackupFile(handle, products, members, sales, pointsRecords) {
  const blob = await exportToSQLite(products, members, sales, pointsRecords);
  const now = new Date();
  const ts = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0')
    + '_' + String(now.getHours()).padStart(2, '0') + String(now.getMinutes()).padStart(2, '0');
  const filename = `美妆门店备份_${ts}.sqlite`;
  const fileHandle = await handle.getFileHandle(filename, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(blob);
  await writable.close();
  await metaSet('lastBackupTime', now.toISOString());
  return filename;
}

// ===== 登录弹窗 =====
function LoginModal({ onLogin, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!username.trim()) { alert('请输入用户名'); return; }
    if (!password) { alert('请输入密码'); return; }
    if (isRegister && password !== confirmPassword) { alert('两次密码不一致'); return; }
    if (password.length < 4) { alert('密码至少4位'); return; }
    setLoading(true);
    const success = await onLogin(username.trim(), password, isRegister);
    setLoading(false);
    if (success) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      <div className="relative bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-6 text-center">
          <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mx-auto mb-3">
            <LockIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">美妆门店管理系统</h2>
          <p className="text-sm text-white text-opacity-80 mt-1">{isRegister ? '创建新账户' : '登录到云端'}</p>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">用户名</label>
            <input value={username} onChange={e => setUsername(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="请输入用户名" autoFocus
              onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">密码</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="请输入密码"
              onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
          </div>
          {isRegister && (
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">确认密码</label>
              <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="再次输入密码"
                onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
            </div>
          )}
          <button onClick={handleSubmit} disabled={loading}
            className="w-full py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all font-medium disabled:opacity-50">
            {loading ? '处理中...' : (isRegister ? '注册' : '登录')}
          </button>
          <div className="text-center">
            <button onClick={() => { setIsRegister(!isRegister); setConfirmPassword(''); }}
              className="text-sm text-purple-600 hover:text-purple-800 transition-colors">
              {isRegister ? '已有账户？点击登录' : '没有账户？点击注册'}
            </button>
          </div>
          <button onClick={onClose}
            className="w-full py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors">
            暂不登录，继续使用本地数据
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== 主组件 =====
function App() {
  const [tab, setTab] = useState('pos');
  const [products, setProducts] = useState([]);
  const [members, setMembers] = useState([]);
  const [sales, setSales] = useState([]);
  const [pointsRecords, setPointsRecords] = useState([]);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dbBusy, setDbBusy] = useState(false);
  const [backupDirName, setBackupDirName] = useState('');
  const [lastBackupTime, setLastBackupTime] = useState('');
  const [backingUp, setBackingUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [scheduledBackupEnabled, setScheduledBackupEnabled] = useState(false);

  // 初始化：从 IndexedDB 加载数据 + 请求永久存储
  useEffect(() => {
    let done = false;
    const finish = () => { if (!done) { done = true; setLoading(false); } };
    const timer = setTimeout(finish, 3000); // 安全兜底：3秒后强制完成
    (async () => {
      await requestPersistentStorage();
      try {
        const [p, m, s, r] = await Promise.all([
          dbGetAll('products'), dbGetAll('members'), dbGetAll('sales'), dbGetAll('pointsRecords'),
        ]);
        setProducts(p); setMembers(m); setSales(s); setPointsRecords(r);
      } catch (e) {
        console.error('加载数据失败', e);
      }
      clearTimeout(timer);
      finish();
    })();
    return () => clearTimeout(timer);
  }, []);

  // 登录状态检查 + 定时备份
  useEffect(() => {
    if (loading) return;
    // 检查登录状态
    (async () => {
      try {
        const user = await metaGet('currentUser');
        if (user) {
          setIsLoggedIn(true);
          setCurrentUser(user);
        }
        const backupSetting = await metaGet('scheduledBackup');
        if (backupSetting) setScheduledBackupEnabled(true);
      } catch (e) { /* 忽略 */ }
    })();
  }, [loading]);

  // 定时备份：每日22点自动备份
  useEffect(() => {
    if (loading || !scheduledBackupEnabled) return;
    let lastRunDate = '';
    const checkBackup = async () => {
      const now = new Date();
      if (now.getHours() === 22 && now.getMinutes() === 0 && lastRunDate !== todayStr()) {
        lastRunDate = todayStr();
        try {
          const handle = await getBackupDirHandle();
          if (handle) {
            const ok = await verifyDirPermission(handle);
            if (ok) {
              const filename = await writeBackupFile(handle, products, members, sales, pointsRecords);
              console.log('定时备份完成:', filename);
            }
          }
        } catch (e) {
          console.warn('定时备份失败:', e);
        }
      }
    };
    const timer = setInterval(checkBackup, 60000);
    return () => clearInterval(timer);
  }, [loading, scheduledBackupEnabled, products, members, sales, pointsRecords]);

  // 登录/注册
  const handleLogin = async (username, password, isRegister) => {
    try {
      const msgBuffer = new TextEncoder().encode(password);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      if (isRegister) {
        const existing = await metaGet('user_' + username);
        if (existing) { showToast('用户名已存在'); return false; }
        const user = { username, passwordHash: hashHex, createdAt: new Date().toISOString() };
        await metaSet('user_' + username, user);
        await metaSet('currentUser', user);
        setIsLoggedIn(true);
        setCurrentUser(user);
        showToast('注册成功，欢迎 ' + username);
        return true;
      } else {
        const user = await metaGet('user_' + username);
        if (!user || user.passwordHash !== hashHex) { showToast('用户名或密码错误'); return false; }
        await metaSet('currentUser', user);
        setIsLoggedIn(true);
        setCurrentUser(user);
        showToast('登录成功，欢迎 ' + username);
        return true;
      }
    } catch (e) {
      showToast('登录失败: ' + e.message);
      return false;
    }
  };

  const handleLogout = async () => {
    await metaSet('currentUser', null);
    setIsLoggedIn(false);
    setCurrentUser(null);
    showToast('已退出登录');
  };

  const toggleScheduledBackup = async () => {
    const newVal = !scheduledBackupEnabled;
    setScheduledBackupEnabled(newVal);
    await metaSet('scheduledBackup', newVal);
    showToast(newVal ? '已开启每日22:00自动备份' : '已关闭定时备份');
  };

  // 加载备份设置 + 自动备份
  useEffect(() => {
    if (loading) return;
    (async () => {
      try {
        const handle = await getBackupDirHandle();
        if (handle) {
          setBackupDirName(handle.name || '已设置');
          const lastTime = await metaGet('lastBackupTime');
          if (lastTime) setLastBackupTime(lastTime);
          // 检查今天是否已备份
          const now = new Date();
          const last = lastTime ? new Date(lastTime) : null;
          const todayMatch = last && last.getFullYear() === now.getFullYear() && last.getMonth() === now.getMonth() && last.getDate() === now.getDate();
          if (!todayMatch) {
            const ok = await verifyDirPermission(handle);
            if (ok) {
              try {
                setBackingUp(true);
                const filename = await writeBackupFile(handle, products, members, sales, pointsRecords);
                setLastBackupTime(now.toISOString());
                setBackingUp(false);
                console.log('自动备份完成:', filename);
              } catch (e) {
                setBackingUp(false);
                console.warn('自动备份失败:', e);
              }
            }
          }
        }
      } catch (e) { /* 忽略 */ }
    })();
  }, [loading]);

  // 选择备份目录
  const handlePickBackupDir = async () => {
    try {
      const handle = await pickBackupDir();
      setBackupDirName(handle.name || '已设置');
      showToast('备份目录已设置: ' + (handle.name || ''));
    } catch (e) {
      if (e.name !== 'AbortError') showToast('设置失败: ' + e.message);
    }
  };

  // 立即备份
  const handleBackupNow = async () => {
    try {
      const handle = await getBackupDirHandle();
      if (!handle) {
        showToast('请先选择备份目录');
        return;
      }
      const ok = await verifyDirPermission(handle);
      if (!ok) {
        const granted = await requestDirPermission(handle);
        if (!granted) { showToast('需要文件夹访问权限'); return; }
      }
      setBackingUp(true);
      const filename = await writeBackupFile(handle, products, members, sales, pointsRecords);
      setLastBackupTime(new Date().toISOString());
      setBackingUp(false);
      showToast('备份完成: ' + filename);
    } catch (e) {
      setBackingUp(false);
      showToast('备份失败: ' + e.message);
    }
  };

  // 持久化：数据变化时自动保存到 IndexedDB
  const saveToDB = useCallback((storeName, items) => {
    setDbBusy(true);
    dbPutAll(storeName, items).catch(e => console.error('保存失败:', storeName, e)).finally(() => setDbBusy(false));
  }, []);

  useEffect(() => { if (!loading) saveToDB('products', products); }, [products, loading, saveToDB]);
  useEffect(() => { if (!loading) saveToDB('members', members); }, [members, loading, saveToDB]);
  useEffect(() => { if (!loading) saveToDB('sales', sales); }, [sales, loading, saveToDB]);
  useEffect(() => { if (!loading) saveToDB('pointsRecords', pointsRecords); }, [pointsRecords, loading, saveToDB]);

  // SQLite 导出
  const handleExportDB = async () => {
    try {
      setToast('正在生成数据库文件...');
      const blob = await exportToSQLite(products, members, sales, pointsRecords);
      downloadBlob(blob, `美妆门店_${todayStr()}.sqlite`);
      setToast(null);
      showToast('数据库已导出');
    } catch (e) {
      setToast(null);
      showToast('导出失败: ' + e.message);
    }
  };

  // SQLite 导入
  const fileRef = useRef(null);
  const handleImportDB = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      setToast('正在导入数据库...');
      const data = await importFromSQLite(file);
      setProducts(data.products || []);
      setMembers(data.members || []);
      setSales(data.sales || []);
      setPointsRecords(data.pointsRecords || []);
      setToast(null);
      showToast(`导入成功: ${data.products.length} 商品, ${data.members.length} 会员, ${data.sales.length} 订单`);
    } catch (err) {
      setToast(null);
      showToast('导入失败: ' + err.message);
    }
    e.target.value = '';
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  // 自动导出今日商品和会员数据为 Excel
  const autoExportTodayData = () => {
    try {
      const today = todayStr();
      // 筛选今天创建或更新的商品和会员
      const isToday = (item) => {
        const created = item.createdAt ? fmtDate(item.createdAt) : '';
        const updated = item.updatedAt ? fmtDate(item.updatedAt) : '';
        return created === today || updated === today;
      };
      const todayProducts = products.filter(isToday);
      const todayMembers = members.filter(isToday);
      if (todayProducts.length === 0 && todayMembers.length === 0) return;
      // 获取分类名称
      const getCategoryName = (catId) => {
        const cat = CATEGORIES.find(c => c.id === catId);
        return cat ? cat.name : catId || '';
      };
      // 获取会员等级名称
      const getLevelName = (levelId) => {
        const lv = MEMBER_LEVELS.find(l => l.id === levelId);
        return lv ? lv.name : levelId || '';
      };
      // 构建商品 sheet 数据
      const productRows = todayProducts.map(p => ({
        '商品名称': p.name || '',
        '分类': getCategoryName(p.category),
        '售价': p.price || 0,
        '成本价': p.cost || 0,
        '利润': (p.price || 0) - (p.cost || 0),
        '库存': p.stock || 0,
        '条码': p.barcode || '',
        '单位': p.unit || '',
        '创建时间': p.createdAt ? fmtDate(p.createdAt) : '',
      }));
      // 构建会员 sheet 数据
      const memberRows = todayMembers.map(m => ({
        '姓名': m.name || '',
        '手机号': m.phone || '',
        '等级': getLevelName(m.level),
        '积分': m.points || 0,
        '生日': m.birthday || '',
        '备注': m.note || '',
        '创建时间': m.createdAt ? fmtDate(m.createdAt) : '',
      }));
      // 生成 Excel
      const wb = XLSX.utils.book_new();
      if (productRows.length > 0) {
        const ws1 = XLSX.utils.json_to_sheet(productRows);
        ws1['!cols'] = [{ wch: 20 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 8 }, { wch: 16 }, { wch: 6 }, { wch: 12 }];
        XLSX.utils.book_append_sheet(wb, ws1, '商品记录');
      }
      if (memberRows.length > 0) {
        const ws2 = XLSX.utils.json_to_sheet(memberRows);
        ws2['!cols'] = [{ wch: 12 }, { wch: 14 }, { wch: 12 }, { wch: 8 }, { wch: 12 }, { wch: 20 }, { wch: 12 }];
        XLSX.utils.book_append_sheet(wb, ws2, '会员记录');
      }
      const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([wbout], { type: 'application/octet-stream' });
      downloadBlob(blob, `美妆门店数据_${today}.xlsx`);
    } catch (e) {
      console.warn('自动导出失败:', e);
    }
  };

  // 商品操作
  const saveProduct = (data) => {
    setProducts(ps => {
      const idx = ps.findIndex(p => p.id === data.id);
      if (idx >= 0) {
        const updated = [...ps];
        updated[idx] = { ...data, updatedAt: new Date().toISOString() };
        showToast('商品已更新');
        return updated;
      }
      showToast('商品已添加');
      return [...ps, { ...data, createdAt: new Date().toISOString() }];
    });
    // 自动导出今日数据
    setTimeout(() => autoExportTodayData(), 300);
  };
  const deleteProduct = (id) => {
    setProducts(ps => ps.filter(p => p.id !== id));
    showToast('商品已删除');
  };
  const importProducts = (items) => {
    setProducts(ps => [...ps, ...items]);
    showToast(`成功导入 ${items.length} 条商品`);
  };

  // 会员操作
  const saveMember = (data) => {
    setMembers(ms => {
      const idx = ms.findIndex(m => m.id === data.id);
      if (idx >= 0) {
        const updated = [...ms];
        updated[idx] = { ...data, updatedAt: new Date().toISOString() };
        showToast('会员已更新');
        return updated;
      }
      showToast('会员已添加');
      return [...ms, { ...data, createdAt: new Date().toISOString() }];
    });
    // 自动导出今日数据
    setTimeout(() => autoExportTodayData(), 300);
  };
  const deleteMember = (id) => {
    setMembers(ms => ms.filter(m => m.id !== id));
    showToast('会员已删除');
  };

  // 结账
  const handleCheckout = (sale) => {
    const saleRecord = {
      ...sale,
      id: uid(),
      date: todayStr(),
      createdAt: new Date().toISOString(),
    };
    setSales(s => [...s, saleRecord]);
    // 扣库存
    setProducts(ps => ps.map(p => {
      const item = sale.items.find(i => i.id === p.id);
      if (item) return { ...p, stock: Math.max(0, (p.stock || 0) - item.qty) };
      return p;
    }));
    // 加积分 + 积分记录
    if (sale.memberId) {
      setMembers(ms => ms.map(m => {
        if (m.id !== sale.memberId) return m;
        const points = (m.points || 0) + sale.total;
        return { ...m, points };
      }));
      setPointsRecords(rs => [...rs, {
        id: uid(),
        memberId: sale.memberId,
        memberName: sale.memberName || '',
        points: sale.total,
        type: '购买积分',
        description: `购物消费 ¥${fmt(sale.total)}（${sale.items.map(i => i.name + '×' + i.qty).join('，')}）`,
        date: todayStr(),
        createdAt: new Date().toISOString(),
      }]);
    }
    showToast(`结账成功 ¥${fmt(sale.total)}`);
  };

  // 退货：删除销售记录、恢复库存、扣除积分
  const deleteSale = (saleId) => {
    setSales(ss => {
      const sale = ss.find(s => s.id === saleId);
      if (!sale) return ss;
      // 恢复商品库存
      setProducts(ps => ps.map(p => {
        const item = sale.items.find(i => i.id === p.id);
        if (item) return { ...p, stock: (p.stock || 0) + item.qty };
        return p;
      }));
      // 扣除会员积分 + 积分记录
      if (sale.memberId) {
        setMembers(ms => ms.map(m => {
          if (m.id !== sale.memberId) return m;
          const points = Math.max(0, (m.points || 0) - sale.total);
          return { ...m, points };
        }));
        setPointsRecords(rs => [...rs, {
          id: uid(),
          memberId: sale.memberId,
          memberName: sale.memberName || '',
          points: -sale.total,
          type: '退货扣减',
          description: `退货退款 ¥${fmt(sale.total)}（${sale.items.map(i => i.name + '×' + i.qty).join('，')}）`,
          date: todayStr(),
          createdAt: new Date().toISOString(),
        }]);
      }
      showToast(`退货成功，已恢复库存，退款 ¥${fmt(sale.total)}`);
      return ss.filter(s => s.id !== saleId);
    });
  };

  // 手动调整积分
  const handleAdjustPoints = (record) => {
    setPointsRecords(rs => [...rs, record]);
    setMembers(ms => ms.map(m => {
      if (m.id !== record.memberId) return m;
      const points = Math.max(0, (m.points || 0) + record.points);
      return { ...m, points };
    }));
    showToast(`积分已${record.points > 0 ? '增加' : '扣减'} ${Math.abs(record.points)}`);
  };

  const ActiveIcon = NAV_TABS.find(t => t.id === tab)?.icon || CartIcon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-14 lg:h-16">
          <div className="flex items-center gap-2 mr-2 sm:mr-4 lg:mr-8 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
              <TagIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-base sm:text-lg font-bold text-gray-800 hidden sm:inline">美妆门店管理系统</span>
            <span className="text-base font-bold text-gray-800 sm:hidden">美妆门店</span>
          </div>
          <nav className="flex gap-1 overflow-x-auto flex-1">
            {NAV_TABS.map(t => {
              const TabIcon = t.icon;
              return (
                <button key={t.id} onClick={() => setTab(t.id)}
                  className={"flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap " +
                    (tab === t.id ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100")}>
                  <TabIcon className="w-4 h-4" /> <span className="hidden sm:inline">{t.name}</span>
                </button>
              );
            })}
          </nav>
          {/* 数据库操作 */}
          <div className="flex items-center gap-1.5 ml-2 flex-shrink-0">
            {dbBusy && (
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" title="正在保存..." />
            )}
            <button onClick={handleExportDB}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              title="导出 SQLite 数据库文件">
              <DownloadIcon className="w-3.5 h-3.5" /> <span className="hidden lg:inline">导出</span>
            </button>
            <button onClick={() => fileRef.current && fileRef.current.click()}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              title="从 SQLite 文件导入数据">
              <UploadIcon className="w-3.5 h-3.5" /> <span className="hidden lg:inline">导入</span>
            </button>
            <input ref={fileRef} type="file" accept=".sqlite,.db,application/x-sqlite3" onChange={handleImportDB} className="hidden" />
            <div className="w-px h-5 bg-gray-200 mx-0.5 hidden lg:block" />
            <button onClick={handlePickBackupDir}
              className={"flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm border rounded-lg transition-colors whitespace-nowrap " +
                (backupDirName ? "text-green-700 border-green-300 hover:bg-green-50" : "text-gray-600 border-gray-300 hover:bg-gray-50")}
              title={backupDirName ? "备份目录: " + backupDirName : "选择自动备份目录"}>
              <BoxIcon className="w-3.5 h-3.5" /> <span className="hidden lg:inline">{backupDirName ? '备份✓' : '备份'}</span>
            </button>
            {backupDirName && (
              <button onClick={handleBackupNow} disabled={backingUp}
                className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap disabled:opacity-50"
                title={lastBackupTime ? "上次备份: " + new Date(lastBackupTime).toLocaleString('zh-CN') : "立即备份到已设目录"}>
                {backingUp ? <span className="w-3.5 h-3.5 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin" /> : <DownloadIcon className="w-3.5 h-3.5" />}
                <span className="hidden lg:inline">备份</span>
              </button>
            )}
            <button onClick={toggleScheduledBackup}
              className={"flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm border rounded-lg transition-colors whitespace-nowrap " +
                (scheduledBackupEnabled ? "text-teal-700 border-teal-300 hover:bg-teal-50" : "text-gray-600 border-gray-300 hover:bg-gray-50")}
              title={scheduledBackupEnabled ? "每日22:00自动备份已开启" : "开启每日22:00自动备份"}>
              <span className={"w-2 h-2 rounded-full " + (scheduledBackupEnabled ? "bg-teal-400" : "bg-gray-300")} />
              <span className="hidden lg:inline">{scheduledBackupEnabled ? '定时✓' : '定时'}</span>
            </button>
            <div className="w-px h-5 bg-gray-200 mx-0.5 hidden lg:block" />
            {isLoggedIn ? (
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-gray-500 hidden lg:inline">{currentUser?.username}</span>
                <button onClick={handleLogout}
                  className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
                  title="退出登录">
                  <LockIcon className="w-3.5 h-3.5" /> <span className="hidden lg:inline">退出</span>
                </button>
              </div>
            ) : (
              <button onClick={() => setShowLogin(true)}
                className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm text-purple-600 border border-purple-300 rounded-lg hover:bg-purple-50 transition-colors whitespace-nowrap"
                title="登录云端账户">
                <LockIcon className="w-3.5 h-3.5" /> <span className="hidden lg:inline">登录</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* 主内容 */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <div className="w-10 h-10 border-[3px] border-gray-200 border-t-blue-500 rounded-full animate-spin mb-3"></div>
            <p className="text-sm">正在加载数据库...</p>
          </div>
        ) : (
          <>
            {tab === 'pos' && <DashboardPage products={products} members={members} onCheckout={handleCheckout} />}
            {tab === 'products' && <ProductsPage products={products} onSaveProduct={saveProduct} onDeleteProduct={deleteProduct} onImport={importProducts} />}
            {tab === 'members' && <MembersPage members={members} onSaveMember={saveMember} onDeleteMember={deleteMember} pointsRecords={pointsRecords} onAdjustPoints={handleAdjustPoints} />}
            {tab === 'stats' && <StatsPage sales={sales} products={products} onDeleteSale={deleteSale} />}
          </>
        )}
      </main>

      {/* 登录弹窗 */}
      {showLogin && (
        <LoginModal onLogin={handleLogin} onClose={() => setShowLogin(false)} />
      )}

      {/* Toast 提示 */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50 text-sm">
          {toast}
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
