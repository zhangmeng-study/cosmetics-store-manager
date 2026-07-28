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
const KeyboardIcon = (props) => (
  <Icon {...props}><rect x="2" y="4" width="20" height="16" rx="2" /><line x1="6" y1="8" x2="6.01" y2="8" /><line x1="10" y1="8" x2="10.01" y2="8" /><line x1="14" y1="8" x2="14.01" y2="8" /><line x1="18" y1="8" x2="18.01" y2="8" /><line x1="6" y1="12" x2="6.01" y2="12" /><line x1="10" y1="12" x2="10.01" y2="12" /><line x1="14" y1="12" x2="14.01" y2="12" /><line x1="18" y1="12" x2="18.01" y2="12" /><line x1="8" y1="16" x2="16" y2="16" /></Icon>
);
const ListIcon = (props) => (
  <Icon {...props}><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></Icon>
);
const GridViewIcon = (props) => (
  <Icon {...props}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></Icon>
);
const SyncIcon = (props) => (
  <Icon {...props}><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></Icon>
);
const ServerIcon = (props) => (
  <Icon {...props}><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></Icon>
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
  { key: 'F3', desc: '搜索商品' },
  { key: 'F4', desc: '聚焦收款金额输入框' },
  { key: 'Ctrl+R', desc: '聚焦收款金额输入框（备选）' },
  { key: 'F5', desc: '编辑折扣' },
  { key: 'F6', desc: '修改总价' },
  { key: 'F7', desc: '编辑购物车最后一项的价格/折扣' },
  { key: '+/-', desc: '购物车最后一项数量增减' },
  { key: '1-4', desc: '选择支付方式（微信/支付宝/信用卡/现金）' },
  { key: 'Enter', desc: '结账 / 关闭钱箱' },
  { key: 'F9', desc: '结账（备选）' },
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
          price: parseFloat(row['单价'] || row['售价'] || row['价格'] || row['price'] || 0) || 0,
          cost: parseFloat(row['成本价'] || row['成本'] || row['cost'] || 0) || 0,
          stock: parseInt(row['库存'] || row['数量'] || row['stock'] || 0) || 0,
          barcode: String(row['条码'] || row['barcode'] || ''),
          description: row['描述'] || row['备注'] || row['说明'] || row['description'] || '',
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
  const [confirmedDiscount, setConfirmedDiscount] = useState(null); // Persist custom discount after Enter confirmation
  const [confirmedTotal, setConfirmedTotal] = useState(null); // Persist custom total price after Enter confirmation
  const [receivedAmount, setReceivedAmount] = useState('');
  const [receivedAmountManuallyEdited, setReceivedAmountManuallyEdited] = useState(false);
  const [memberSearch, setMemberSearch] = useState('');
  const [showMemberSearchModal, setShowMemberSearchModal] = useState(false);
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);
  const [showProductSearchModal, setShowProductSearchModal] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [showCashDrawer, setShowCashDrawer] = useState(false);
  const [lastChange, setLastChange] = useState(0);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [postCheckout, setPostCheckout] = useState(false); // true after checkout, waiting for Enter to close drawer
  const [lastPaymentMethod, setLastPaymentMethod] = useState('cash'); // Save payment method used in last checkout
  const [lastTotal, setLastTotal] = useState(0); // Save total amount from last checkout
  
  // Per-item editing states
  const [editingItemId, setEditingItemId] = useState(null); // ID of item being edited
  const [itemCustomPrices, setItemCustomPrices] = useState({}); // Map: itemId -> custom price
  const [itemCustomDiscounts, setItemCustomDiscounts] = useState({}); // Map: itemId -> custom discount (0-1)
  const [confirmedItemPrices, setConfirmedItemPrices] = useState({}); // Map: itemId -> confirmed custom price
  const [confirmedItemDiscounts, setConfirmedItemDiscounts] = useState({}); // Map: itemId -> confirmed custom discount
  const memberSearchRef = useRef(null);
  const barcodeRef = useRef(null);
  const receivedAmountRef = useRef(null);
  const paymentMethodRef = useRef(paymentMethod); // Track current payment method
  const cartRef = useRef(cart); // Track current cart
  const finalTotalRef = useRef(0); // Track current finalTotal - initialized with default value
  const changeRef = useRef(0); // Track current change - initialized with default value
  const memberIdRef = useRef(''); // Track current memberId - initialized with default value

  // Keep refs in sync with state (only for variables declared before refs)
  useEffect(() => {
    paymentMethodRef.current = paymentMethod;
  }, [paymentMethod]);
  useEffect(() => {
    cartRef.current = cart;
  }, [cart]);
  // Note: finalTotalRef, changeRef, memberIdRef are initialized with defaults
  // and don't need useEffect sync to avoid TDZ errors

  const filtered = useMemo(() => {
    let list = products;
    if (category !== 'all') list = list.filter(p => p.category === category);
    if (!showProductSearchModal && search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || (p.brand || '').toLowerCase().includes(q) || (p.barcode || '').includes(search.trim()));
    }
    return list;
  }, [products, search, category, showProductSearchModal]);

  const filteredProductsForModal = useMemo(() => {
    let list = products;
    if (category !== 'all') list = list.filter(p => p.category === category);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || (p.brand || '').toLowerCase().includes(q) || (p.barcode || '').includes(search.trim()));
    }
    return list;
  }, [products, search, category]);

  const cartTotal = useMemo(() => {
    return cart.reduce((s, i) => {
      const effectivePrice = confirmedItemPrices[i.id] !== undefined ? confirmedItemPrices[i.id] : i.price;
      return s + effectivePrice * i.qty;
    }, 0);
  }, [cart, confirmedItemPrices]);
  const member = members.find(m => m.id === memberId);
  // 使用会员保存的等级，如果没有则根据积分自动计算
  const level = member ? (MEMBER_LEVELS.find(l => l.id === member.level) || getLevel(member.points)) : MEMBER_LEVELS[0];
  // Use confirmedDiscount if set, otherwise fall back to level.discount
  const discount = confirmedDiscount !== null ? confirmedDiscount : (editingDiscount && customDiscount !== '' ? (parseFloat(customDiscount) || 1) : level.discount);
  // 会员/全局折扣仅对没有单品折扣的商品生效，有单品折扣的商品直接用折后价
  const calculatedTotal = useMemo(() => {
    return cart.reduce((s, i) => {
      const effectivePrice = confirmedItemPrices[i.id] !== undefined ? confirmedItemPrices[i.id] : i.price;
      const hasItemDiscount = confirmedItemDiscounts[i.id] !== undefined;
      const itemDiscount = hasItemDiscount ? confirmedItemDiscounts[i.id] : discount;
      return s + effectivePrice * itemDiscount * i.qty;
    }, 0);
  }, [cart, confirmedItemPrices, confirmedItemDiscounts, discount]);
  // Use confirmedTotal if set, otherwise fall back to calculatedTotal
  const finalTotal = confirmedTotal !== null ? confirmedTotal : (editingTotal && customTotal !== '' ? (parseFloat(customTotal) || 0) : calculatedTotal);
  // 计算实际收款金额：未手动编辑时使用 finalTotal，避免异步状态更新导致找零计算错误
  const effectiveReceivedAmount = receivedAmountManuallyEdited ? (parseFloat(receivedAmount) || 0) : finalTotal;
  const change = effectiveReceivedAmount > 0 ? Math.max(0, effectiveReceivedAmount - finalTotal) : 0;

  // 同步 finalTotalRef 供结账时使用
  useEffect(() => { finalTotalRef.current = finalTotal; }, [finalTotal]);
  // 同步 memberIdRef 供结账时使用
  useEffect(() => { memberIdRef.current = memberId; }, [memberId]);

  // Auto-fill received amount when finalTotal changes (if not manually edited)
  useEffect(() => {
    if (finalTotal > 0 && !receivedAmountManuallyEdited) {
      setReceivedAmount(finalTotal.toFixed(2));
    }
  }, [finalTotal, receivedAmountManuallyEdited]);

  const addToCart = (product) => {
    setCart(c => {
      const exist = c.find(i => i.id === product.id);
      if (exist) {
        if (exist.qty >= (product.stock || 0)) { alert('库存不足'); return c; }
        return c.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      if ((product.stock || 0) < 1) { alert('库存不足'); return c; }
      return [...c, { id: product.id, name: product.name, price: product.price, cost: product.cost || 0, qty: 1, stock: product.stock }];
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
  const setItemQty = (id, value) => {
    const qty = parseInt(value);
    if (isNaN(qty) || qty < 1) return;
    setCart(c => c.map(i => {
      if (i.id !== id) return i;
      if (qty > (i.stock || 0)) { alert('库存不足'); return i; }
      return { ...i, qty };
    }));
  };

  // Per-item editing functions
  const openItemEdit = (itemId) => {
    setEditingItemId(itemId);
  };

  const closeItemEdit = () => {
    setEditingItemId(null);
  };

  const updateItemCustomPrice = (value) => {
    setItemCustomPrices(prev => ({ ...prev, [editingItemId]: value }));
  };

  const updateItemCustomDiscount = (value) => {
    setItemCustomDiscounts(prev => ({ ...prev, [editingItemId]: value }));
  };

  const confirmItemPrice = () => {
    if (!editingItemId) return;
    const price = parseFloat(itemCustomPrices[editingItemId]);
    if (!isNaN(price) && price >= 0) {
      setConfirmedItemPrices(prev => ({ ...prev, [editingItemId]: price }));
    }
    closeItemEdit();
  };

  const confirmItemDiscount = () => {
    if (!editingItemId) return;
    const disc = parseFloat(itemCustomDiscounts[editingItemId]);
    if (!isNaN(disc) && disc > 0 && disc <= 1) {
      setConfirmedItemDiscounts(prev => ({ ...prev, [editingItemId]: disc }));
    }
    closeItemEdit();
  };

  // Get effective price for an item (considering custom price or discount)
  const getItemEffectivePrice = (item) => {
    // Check for confirmed custom price first
    if (confirmedItemPrices[item.id] !== undefined) {
      return confirmedItemPrices[item.id];
    }
    // Otherwise use original price
    return item.price;
  };

  // Get effective discount for an item
  const getItemEffectiveDiscount = (item) => {
    // Check for confirmed custom discount first
    if (confirmedItemDiscounts[item.id] !== undefined) {
      return confirmedItemDiscounts[item.id];
    }
    // Otherwise no item-level discount (use 1.0)
    return 1.0;
  };

  const checkout = () => {
    if (!cartRef.current.length) { alert('购物车为空'); return; }
    const currentPaymentMethod = paymentMethodRef.current; // Use ref to get latest value
    const pm = PAYMENT_METHODS.find(p => p.id === currentPaymentMethod);
    onCheckout({
      items: cartRef.current.map(i => {
        const ep = confirmedItemPrices[i.id] !== undefined ? confirmedItemPrices[i.id] : i.price;
        const hasItemDiscount = confirmedItemDiscounts[i.id] !== undefined;
        const itemDiscount = hasItemDiscount ? confirmedItemDiscounts[i.id] : discount;
        return { id: i.id, name: i.name, price: i.price, cost: i.cost || 0, qty: i.qty, effectivePrice: +(ep * itemDiscount).toFixed(2) };
      }),
      memberId: memberIdRef.current || null,
      subtotal: cartTotal,
      discount: discount, // Use current discount value from closure
      total: finalTotal,
      memberName: member ? member.name : null,
      levelName: level.name,
      paymentMethod: currentPaymentMethod,
      paymentMethodName: pm ? pm.name : '现金',
    });
    setLastChange(change);
    setLastPaymentMethod(currentPaymentMethod); // Save for cash drawer display
    setLastTotal(finalTotal); // Save for cash drawer display
    setShowCashDrawer(true);
    setPostCheckout(true);
    setCart([]);
    setMemberId('');
    setEditingTotal(false);
    setCustomTotal('');
    setEditingDiscount(false);
    setCustomDiscount('');
    setConfirmedDiscount(null); // Reset confirmed discount for next transaction
    setConfirmedTotal(null); // Reset confirmed total for next transaction
    setReceivedAmount('');
    setReceivedAmountManuallyEdited(false);
    setPaymentMethod('cash');
    setMemberSearch('');
  };

  const filteredMembers = useMemo(() => {
    if (!showMemberSearchModal || !memberSearch.trim()) return members;
    const q = memberSearch.trim().toLowerCase();
    return members.filter(m => m.name.toLowerCase().includes(q) || (m.phone || '').includes(memberSearch.trim()));
  }, [members, memberSearch, showMemberSearchModal]);

  // 快捷键处理
  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = document.activeElement?.tagName;
      const isInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
      
      if (e.key === 'F1') {
        e.preventDefault();
        setShowShortcuts(true);
      } else if (e.key === 'F2') {
        e.preventDefault();
        setMemberSearch('');
        setSelectedMemberIndex(0);
        setShowMemberSearchModal(true);
      } else if (e.key === 'F3') {
        e.preventDefault();
        setSearch('');
        setSelectedProductIndex(0);
        setShowProductSearchModal(true);
      } else if (e.key === 'F4' || (e.ctrlKey && e.key === 'r')) {
        e.preventDefault();
        receivedAmountRef.current?.focus();
        receivedAmountRef.current?.select();
      } else if (e.key === 'F5') {
        e.preventDefault();
        setEditingDiscount(true);
        // Show current effective discount (confirmed or member level or default 1.0)
        const currentDiscount = confirmedDiscount !== null ? confirmedDiscount : (member ? level.discount : 1.0);
        setCustomDiscount(String(currentDiscount));
      } else if (e.key === 'F6') {
        e.preventDefault();
        setEditingTotal(true);
        // Show current effective total (confirmed or calculated)
        const currentTotal = confirmedTotal !== null ? confirmedTotal : calculatedTotal;
        setCustomTotal(String(currentTotal.toFixed(2)));
      } else if (e.key === 'Enter' && editingItemId) {
        // Confirm item edit (works even when input is focused in modal)
        e.preventDefault();
        confirmItemPrice();
        confirmItemDiscount();
      } else if (e.key === 'Escape' && editingItemId) {
        // Close item edit modal (works even when input is focused in modal)
        e.preventDefault();
        closeItemEdit();
      } else if (e.key === 'Enter' && !isInput && !editingDiscount && !editingTotal) {
        e.preventDefault();
        if (postCheckout) {
          // Second Enter after checkout: close cash drawer
          setShowCashDrawer(false);
          setPostCheckout(false);
        } else if (cart.length > 0) {
          // First Enter: trigger checkout
          checkout();
        }
      } else if (!isInput && cart.length > 0 && !editingDiscount && !editingTotal) {
        // Number keys 1-4 for payment methods (only when not in any input field)
        if (e.key >= '1' && e.key <= '4') {
          e.preventDefault();
          const idx = parseInt(e.key) - 1;
          if (idx < PAYMENT_METHODS.length) {
            setPaymentMethod(PAYMENT_METHODS[idx].id);
          }
        }
        // +/- for last cart item quantity adjustment
        else if (e.key === '+' || e.key === '=') {
          e.preventDefault();
          const lastItem = cart[cart.length - 1];
          if (lastItem && lastItem.qty < (lastItem.stock || 0)) {
            updateQty(lastItem.id, 1);
          }
        } else if (e.key === '-' || e.key === '_') {
          e.preventDefault();
          const lastItem = cart[cart.length - 1];
          if (lastItem && lastItem.qty > 1) {
            updateQty(lastItem.id, -1);
          }
        }
      } else if (e.key === 'F7') {
        e.preventDefault();
        // Open item edit modal for last cart item
        if (cart.length > 0) {
          openItemEdit(cart[cart.length - 1].id);
        }
      } else if (e.key === 'F9') {
        e.preventDefault();
        if (cart.length > 0) checkout();
      } else if (e.key === 'Escape') {
        setShowShortcuts(false);
        setShowCashDrawer(false);
        setPostCheckout(false);
        setEditingDiscount(false);
        setCustomDiscount('');
        setConfirmedDiscount(null);
        setEditingTotal(false);
        setCustomTotal('');
        setConfirmedTotal(null);
        setShowProductSearchModal(false);
        setSearch('');
        setSelectedProductIndex(0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cart.length, editingDiscount, editingTotal, postCheckout, editingItemId]);

  // Member search modal keyboard navigation
  useEffect(() => {
    if (showMemberSearchModal) {
      const handleKey = (e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedMemberIndex(i => Math.min(i + 1, filteredMembers.length - 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedMemberIndex(i => Math.max(i - 1, 0));
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (filteredMembers[selectedMemberIndex]) {
            setMemberId(filteredMembers[selectedMemberIndex].id);
            setConfirmedDiscount(null); // Reset custom discount when member changes
            setConfirmedTotal(null); // Reset custom total when member changes
            setShowMemberSearchModal(false);
            setMemberSearch('');
            setSelectedMemberIndex(0);
          }
        } else if (e.key === 'Escape') {
          setShowMemberSearchModal(false);
          setMemberSearch('');
          setSelectedMemberIndex(0);
        }
      };
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
    }
  }, [showMemberSearchModal, selectedMemberIndex, filteredMembers]);

  // Product search modal keyboard navigation
  useEffect(() => {
    if (showProductSearchModal) {
      const handleKey = (e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedProductIndex(i => Math.min(i + 1, filteredProductsForModal.length - 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedProductIndex(i => Math.max(i - 1, 0));
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (filteredProductsForModal[selectedProductIndex]) {
            addToCart(filteredProductsForModal[selectedProductIndex]);
            setShowProductSearchModal(false);
            setSearch('');
            setSelectedProductIndex(0);
          }
        } else if (e.key === 'Escape') {
          setShowProductSearchModal(false);
          setSearch('');
          setSelectedProductIndex(0);
        }
      };
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
    }
  }, [showProductSearchModal, selectedProductIndex, filteredProductsForModal]);

  // Discount adjustment Enter handler
  useEffect(() => {
    if (editingDiscount) {
      const handleKey = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const discountValue = parseFloat(customDiscount);
          if (!isNaN(discountValue) && discountValue > 0) {
            setConfirmedDiscount(discountValue); // Persist the confirmed discount
            setEditingDiscount(false);
          } else {
            alert('请输入有效折扣倍数（如 0.8 表示8折）');
          }
        } else if (e.key === 'Escape') {
          setEditingDiscount(false);
          setCustomDiscount('');
        }
      };
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
    }
  }, [editingDiscount, customDiscount]);

  // Price adjustment Enter handler
  useEffect(() => {
    if (editingTotal) {
      const handleKey = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const totalValue = parseFloat(customTotal);
          if (!isNaN(totalValue) && totalValue >= 0) {
            setConfirmedTotal(totalValue); // Persist the confirmed total price
            setEditingTotal(false);
          } else {
            alert('请输入有效价格');
          }
        } else if (e.key === 'Escape') {
          setEditingTotal(false);
          setCustomTotal('');
        }
      };
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
    }
  }, [editingTotal, customTotal]);

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
          <button onClick={() => { setSearch(''); setSelectedProductIndex(0); setShowProductSearchModal(true); }}
            className="flex-1 flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-colors">
            <SearchIcon className="w-4 h-4" />
            <span className="text-sm">搜索商品 (F3)</span>
          </button>
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
              <button onClick={() => { setMemberId(''); setConfirmedDiscount(null); setConfirmedTotal(null); setMemberSearch(''); }} className="text-gray-400 hover:text-gray-600"><CloseIcon className="w-4 h-4" /></button>
            </div>
          ) : (
            <button onClick={() => { setMemberSearch(''); setSelectedMemberIndex(0); setShowMemberSearchModal(true); }}
              className="w-full flex items-center gap-2 text-sm text-gray-400 hover:text-blue-600 transition-colors py-1.5">
              <UsersIcon className="w-4 h-4" />
              <span>{members.length === 0 ? '暂无会员' : '搜索会员 (F2)'}</span>
            </button>
          )}
        </div>

        {/* 会员搜索弹窗 */}
        {showMemberSearchModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4" onClick={() => setShowMemberSearchModal(false)}>
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">搜索会员</h3>
                <button onClick={() => { setShowMemberSearchModal(false); setMemberSearch(''); setSelectedMemberIndex(0); }} className="text-gray-400 hover:text-gray-600"><CloseIcon className="w-5 h-5" /></button>
              </div>
              <div className="p-4">
                <div className="relative mb-3">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input value={memberSearch} onChange={e => { setMemberSearch(e.target.value); setSelectedMemberIndex(0); }}
                    autoFocus
                    placeholder="输入姓名或手机号搜索..."
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="max-h-64 overflow-y-auto space-y-1">
                  {filteredMembers.length === 0 ? (
                    <div className="text-center py-8 text-gray-400 text-sm">
                      {memberSearch.trim() ? '未找到匹配会员' : '按 ↑↓ 键选择，回车确认'}
                    </div>
                  ) : (
                    filteredMembers.map((m, idx) => {
                      const lv = MEMBER_LEVELS.find(l => l.id === m.level) || getLevel(m.points);
                      return (
                        <button key={m.id} onClick={() => { setMemberId(m.id); setConfirmedDiscount(null); setConfirmedTotal(null); setShowMemberSearchModal(false); setMemberSearch(''); setSelectedMemberIndex(0); }}
                          onMouseEnter={() => setSelectedMemberIndex(idx)}
                          className={"w-full text-left px-3 py-2.5 rounded-lg transition-colors text-sm " +
                            (idx === selectedMemberIndex ? 'bg-blue-50 border border-blue-300' : 'hover:bg-gray-50 border border-transparent')}>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-medium text-gray-800">{m.name}</span>
                              {m.phone && <span className="text-gray-400 ml-2">{m.phone}</span>}
                            </div>
                            <span className={"text-xs px-2 py-0.5 rounded-full " + lv.bg + " " + lv.color}>{lv.name}</span>
                          </div>
                          <div className="text-xs text-gray-400 mt-0.5">积分 {m.points || 0}</div>
                        </button>
                      );
                    })
                  )}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-400 text-center">
                  <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-[10px]">↑↓</kbd> 选择
                  <span className="mx-2">|</span>
                  <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-[10px]">Enter</kbd> 确认
                  <span className="mx-2">|</span>
                  <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-[10px]">Esc</kbd> 取消
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 商品搜索弹窗 */}
        {showProductSearchModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4" onClick={() => setShowProductSearchModal(false)}>
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">搜索商品</h3>
                <button onClick={() => { setShowProductSearchModal(false); setSearch(''); setSelectedProductIndex(0); }} className="text-gray-400 hover:text-gray-600"><CloseIcon className="w-5 h-5" /></button>
              </div>
              <div className="p-4">
                <div className="relative mb-3">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input value={search} onChange={e => { setSearch(e.target.value); setSelectedProductIndex(0); }}
                    autoFocus
                    placeholder="输入商品名称、品牌或条码搜索..."
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="max-h-80 overflow-y-auto space-y-1">
                  {filteredProductsForModal.length === 0 ? (
                    <div className="text-center py-8 text-gray-400 text-sm">
                      {search.trim() ? '未找到匹配商品' : '按 ↑↓ 键选择，回车加入购物车'}
                    </div>
                  ) : (
                    filteredProductsForModal.map((p, idx) => {
                      const cat = CATEGORIES.find(c => c.id === p.category);
                      const outOfStock = (p.stock || 0) < 1;
                      return (
                        <button key={p.id} onClick={() => { if (!outOfStock) { addToCart(p); setShowProductSearchModal(false); setSearch(''); setSelectedProductIndex(0); } }}
                          onMouseEnter={() => setSelectedProductIndex(idx)}
                          disabled={outOfStock}
                          className={"w-full text-left px-3 py-2.5 rounded-lg transition-colors text-sm " +
                            (outOfStock ? 'opacity-50 cursor-not-allowed ' : '') +
                            (idx === selectedProductIndex ? 'bg-blue-50 border border-blue-300' : 'hover:bg-gray-50 border border-transparent')}>
                          <div className="flex items-center justify-between">
                            <div className="flex-1 min-w-0">
                              <span className="font-medium text-gray-800">{p.name}</span>
                              {p.brand && <span className="text-gray-400 ml-2 text-xs">{p.brand}</span>}
                            </div>
                            <span className="text-blue-600 font-bold ml-2">¥{fmt(p.price)}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-0.5">
                            {cat && <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">{cat.name}</span>}
                            <span className="text-xs text-gray-400">库存 {p.stock || 0}</span>
                            {outOfStock && <span className="text-xs text-red-400">缺货</span>}
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-400 text-center">
                  <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-[10px]">↑↓</kbd> 选择
                  <span className="mx-2">|</span>
                  <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-[10px]">Enter</kbd> 加入购物车
                  <span className="mx-2">|</span>
                  <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-[10px]">Esc</kbd> 取消
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-4 py-3">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-300">
              <CartIcon className="w-12 h-12 mb-2" />
              <p className="text-sm">购物车空空如也</p>
            </div>
          ) : (
            <div className="space-y-2">
              {cart.map(item => {
                const effectivePrice = getItemEffectivePrice(item);
                const effectiveDiscount = getItemEffectiveDiscount(item);
                const hasCustomPrice = confirmedItemPrices[item.id] !== undefined;
                const hasCustomDiscount = confirmedItemDiscounts[item.id] !== undefined && confirmedItemDiscounts[item.id] < 1.0;
                const itemTotal = effectivePrice * effectiveDiscount * item.qty;
                
                return (
                  <div key={item.id} className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                    <div className="flex-1 min-w-0 cursor-pointer" onClick={() => openItemEdit(item.id)}>
                      <div className="flex items-center justify-between">
                        <p className={`text-sm font-medium truncate ${hasCustomPrice ? 'text-blue-600' : 'text-gray-700'}`}>
                          {item.name}
                          {hasCustomPrice && <span className="ml-1 text-xs text-blue-500">(改价)</span>}
                          {hasCustomDiscount && <span className="ml-1 text-xs text-orange-500">({(effectiveDiscount * 10).toFixed(1)}折)</span>}
                        </p>
                        <button 
                          onClick={(e) => { e.stopPropagation(); openItemEdit(item.id); }}
                          className="opacity-0 group-hover:opacity-100 text-blue-500 hover:text-blue-700 transition-opacity"
                          title="编辑数量、价格和折扣">
                          <EditIcon className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                        <span>¥{fmt(effectivePrice)}</span>
                        {effectiveDiscount < 1.0 && (
                          <>
                            <span>×</span>
                            <span className="text-orange-500">{(effectiveDiscount * 100).toFixed(0)}%</span>
                          </>
                        )}
                        <span>× {item.qty}</span>
                        <span className="text-gray-300">=</span>
                        <span className="font-medium text-gray-600">¥{fmt(itemTotal)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600"><TrashIcon className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                );
              })}
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
                <span className="text-xs text-gray-400">如 0.85 表示85折，回车确认</span>
                <button onClick={() => { setEditingDiscount(false); setCustomDiscount(''); setConfirmedDiscount(null); }}
                  className="text-xs text-gray-400 hover:text-gray-600 whitespace-nowrap">取消</button>
              </div>
            ) : (
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <span>折扣</span>
                  {discount < 1.0 && <span className="text-xs text-orange-500">({confirmedDiscount !== null ? '手动折扣' : level.name} {(discount * 10).toFixed(1)}折)</span>}
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
                <span className="text-xs text-gray-400 whitespace-nowrap">回车确认</span>
                <button onClick={() => { setEditingTotal(false); setCustomTotal(''); setConfirmedTotal(null); }}
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
              <input ref={receivedAmountRef} type="number" min="0" step="0.01" value={receivedAmount}
                onChange={e => { setReceivedAmount(e.target.value); setReceivedAmountManuallyEdited(true); }}
                className="flex-1 px-2 py-1.5 border border-gray-300 rounded text-right text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="输入收款金额 (F4)" />
            </div>
            {paymentMethod === 'cash' && effectiveReceivedAmount >= finalTotal && change > 0 && (
              <div className="flex justify-between items-center text-sm pt-1 border-t border-dashed border-gray-200">
                <span className="text-gray-500">找零</span>
                <span className="font-semibold text-green-600 text-base">¥{fmt(change)}</span>
              </div>
            )}
            {paymentMethod === 'cash' && effectiveReceivedAmount < finalTotal && (
              <div className="flex justify-between items-center text-sm pt-1 border-t border-dashed border-gray-200">
                <span className="text-gray-500">还差</span>
                <span className="font-semibold text-red-500 text-base">¥{fmt(finalTotal - effectiveReceivedAmount)}</span>
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
                {PAYMENT_METHODS.map((pm, idx) => {
                  const PmIcon = pm.icon;
                  const active = paymentMethod === pm.id;
                  return (
                    <button key={pm.id} onClick={() => setPaymentMethod(pm.id)}
                      className={"flex flex-col items-center gap-0.5 py-1.5 rounded-lg border text-xs transition-all relative " +
                        (active ? pm.bg + " " + pm.border + " " + pm.color + " border-2 font-medium" : "border-gray-200 text-gray-500 hover:bg-gray-50")}>
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-gray-600 text-white text-[9px] rounded-full flex items-center justify-center font-bold">{idx + 1}</span>
                      <PmIcon className="w-4 h-4" />
                      <span>{pm.name.slice(0, 2)}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <button onClick={checkout}
              className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium">
              <CheckIcon className="w-4 h-4" /> 结账 (Enter)
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
                <span className="font-medium text-gray-700">{PAYMENT_METHODS.find(p => p.id === lastPaymentMethod)?.name || '现金'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">应收金额</span>
                <span className="font-bold text-blue-600 text-lg">¥{fmt(lastTotal)}</span>
              </div>
              {lastPaymentMethod === 'cash' && lastChange > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">找零</span>
                  <span className="font-bold text-green-600 text-lg">¥{fmt(lastChange)}</span>
                </div>
              )}
              <button onClick={() => { setShowCashDrawer(false); setPostCheckout(false); }}
                className="w-full py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium mt-2">
                关闭钱箱 (Enter)
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Item Edit Modal */}
      {editingItemId && (() => {
        const item = cart.find(i => i.id === editingItemId);
        if (!item) return null;
        
        const currentPrice = getItemEffectivePrice(item);
        const currentDiscount = getItemEffectiveDiscount(item);
        const tempPrice = itemCustomPrices[editingItemId] !== undefined ? 
          parseFloat(itemCustomPrices[editingItemId]) : currentPrice;
        const tempDiscount = itemCustomDiscounts[editingItemId] !== undefined ? 
          parseFloat(itemCustomDiscounts[editingItemId]) : currentDiscount;
        
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" onClick={closeItemEdit}>
            <div className="bg-white rounded-2xl shadow-2xl w-96 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <EditIcon className="w-5 h-5" />
                  编辑商品
                </h3>
                <p className="text-sm text-blue-100 mt-1 truncate">{item.name}</p>
              </div>
              
              <div className="px-6 py-5 space-y-4">
                {/* Current Info */}
                <div className="p-3 bg-gray-50 rounded-lg space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">原价</span>
                    <span className="font-medium">¥{fmt(item.price)}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2">
                    <span className="text-gray-500">当前小计</span>
                    <span className="font-bold text-blue-600">¥{fmt(currentPrice * currentDiscount * item.qty)}</span>
                  </div>
                </div>
                
                {/* Quantity Edit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    数量 <span className="text-xs text-gray-400">(库存: {item.stock || 0})</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateQty(editingItemId, -1)} 
                      disabled={item.qty <= 1}
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                      <MinusIcon className="w-4 h-4" />
                    </button>
                    <input 
                      type="number" 
                      min="1" 
                      max={item.stock || 999}
                      value={item.qty}
                      onChange={e => setItemQty(editingItemId, e.target.value)}
                      autoFocus
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-center text-lg font-bold"
                    />
                    <button 
                      onClick={() => updateQty(editingItemId, 1)} 
                      disabled={item.qty >= (item.stock || 999)}
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                      <PlusIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Price Edit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    修改单价 <span className="text-xs text-gray-400">(可选)</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">¥</span>
                    <input 
                      type="number" 
                      min="0" 
                      step="0.01" 
                      value={itemCustomPrices[editingItemId] !== undefined ? itemCustomPrices[editingItemId] : ''}
                      onChange={e => updateItemCustomPrice(e.target.value)}
                      placeholder={currentPrice.toFixed(2)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right font-medium"
                    />
                  </div>
                  {itemCustomPrices[editingItemId] && (
                    <p className="text-xs text-blue-500 mt-1">
                      新价格: ¥{tempPrice.toFixed(2)} 
                      {tempPrice !== currentPrice && (
                        <span className="ml-1">
                          ({tempPrice > currentPrice ? '↑' : '↓'}{Math.abs(((tempPrice - currentPrice) / currentPrice * 100)).toFixed(1)}%)
                        </span>
                      )}
                    </p>
                  )}
                </div>
                
                {/* Discount Edit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    修改折扣 <span className="text-xs text-gray-400">(可选)</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number" 
                      min="0.01" 
                      max="1" 
                      step="0.01" 
                      value={itemCustomDiscounts[editingItemId] !== undefined ? itemCustomDiscounts[editingItemId] : ''}
                      onChange={e => updateItemCustomDiscount(e.target.value)}
                      placeholder={(currentDiscount * 100).toFixed(0) + '%'}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-right font-medium"
                    />
                    <span className="text-gray-500 text-sm">折</span>
                  </div>
                  {itemCustomDiscounts[editingItemId] && (
                    <p className="text-xs text-orange-500 mt-1">
                      新折扣: {(tempDiscount * 10).toFixed(1)}折
                      {tempDiscount < 1.0 && (
                        <span className="ml-1">
                          (省 ¥{fmt((1 - tempDiscount) * currentPrice * item.qty)})
                        </span>
                      )}
                    </p>
                  )}
                </div>
                
                {/* Preview */}
                {(itemCustomPrices[editingItemId] || itemCustomDiscounts[editingItemId]) && (
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-xs text-blue-600 font-medium mb-1">预计小计</p>
                    <p className="text-xl font-bold text-blue-700">
                      ¥{fmt(tempPrice * tempDiscount * item.qty)}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="px-6 py-4 border-t border-gray-200 flex gap-2">
                <button 
                  onClick={closeItemEdit}
                  className="flex-1 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  取消 (Esc)
                </button>
                <button 
                  onClick={() => {
                    confirmItemPrice();
                    confirmItemDiscount();
                  }}
                  className="flex-1 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  确认修改
                </button>
              </div>
            </div>
          </div>
        );
      })()}
      
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
  const [viewMode, setViewMode] = useState('table'); // 'card' or 'table'

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
            const level = MEMBER_LEVELS.find(l => l.id === m.level) || getLevel(m.points);
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
                  const level = MEMBER_LEVELS.find(l => l.id === m.level) || getLevel(m.points);
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
  const [returningSaleId, setReturningSaleId] = useState(null);
  const [returnQtys, setReturnQtys] = useState({});

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

    // Calculate total cost and profit
    let totalCost = 0;
    filtered.forEach(s => {
      s.items.forEach(item => {
        // 使用销售时记录的成本，如果没有则从当前商品查找
        const cost = item.cost !== undefined ? item.cost : (products.find(p => p.id === item.id)?.cost || 0);
        totalCost += cost * item.qty;
      });
    });
    const totalProfit = totalRevenue - totalCost;
    const profitMargin = totalRevenue > 0 ? (totalProfit / totalRevenue * 100) : 0;

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

    return { filtered, totalRevenue, totalCount, totalItems, avgOrder, totalCost, totalProfit, profitMargin, chartData, categoryData };
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            <StatCard icon={MoneyIcon} label="营业总额" value={"¥" + fmt(stats.totalRevenue)} color="text-blue-600" />
            <StatCard icon={ReceiptIcon} label="订单数量" value={stats.totalCount + " 笔"} color="text-green-600" />
            <StatCard icon={BoxIcon} label="销售件数" value={stats.totalItems + " 件"} color="text-purple-600" />
            <StatCard icon={TrendIcon} label="客单价" value={"¥" + fmt(stats.avgOrder)} color="text-orange-600" />
            <StatCard 
              icon={TagIcon} 
              label="总成本" 
              value={"¥" + fmt(stats.totalCost)} 
              color="text-gray-600" 
            />
            <StatCard 
              icon={TrendIcon} 
              label="总利润" 
              value={"¥" + fmt(stats.totalProfit)} 
              color={stats.totalProfit >= 0 ? "text-green-600" : "text-red-600"} 
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            <StatCard 
              icon={ChartIcon} 
              label="利润率" 
              value={fmt(stats.profitMargin) + "%"} 
              color={stats.profitMargin >= 0 ? "text-green-600" : "text-red-600"} 
            />
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
                        <button onClick={() => setReturningSaleId(sale.id)}
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

      {/* 退货确认弹窗 - 支持部分退货 */}
      {returningSaleId && (() => {
        const sale = sales.find(s => s.id === returningSaleId);
        if (!sale) return null;
        // 计算退货商品退款金额：优先用每个商品自己的 effectivePrice，旧数据无此字段时用统一折扣比例兜底
        const discountRatio = sale.subtotal > 0 ? (sale.total || sale.subtotal) / sale.subtotal : 1;
        const itemRefundPrice = (i) => i.effectivePrice != null ? i.effectivePrice : (i.price || 0) * discountRatio;
        const calcRefund = (items) => items.reduce((sum, i) => sum + itemRefundPrice(i) * i.qty, 0);
        const allSelected = (sale.items || []).every(i => (returnQtys[i.id] || 0) > 0);
        const selectedItems = (sale.items || []).filter(i => (returnQtys[i.id] || 0) > 0).map(i => ({ ...i, qty: returnQtys[i.id] }));
        const refundAmount = calcRefund(selectedItems);
        const isAllReturned = selectedItems.length === (sale.items || []).length &&
          selectedItems.every(si => {
            const orig = (sale.items || []).find(oi => oi.id === si.id);
            return orig && si.qty >= orig.qty;
          });
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" onClick={() => { setReturningSaleId(null); setReturnQtys({}); }}>
            <div className="bg-white rounded-2xl shadow-2xl w-[440px] max-h-[85vh] flex flex-col" onClick={e => e.stopPropagation()}>
              <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 text-white rounded-t-2xl flex-shrink-0">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <ReceiptIcon className="w-5 h-5" />
                  退货
                </h3>
                <p className="text-xs text-red-100 mt-1">选择需要退货的商品和数量</p>
              </div>
              <div className="px-6 py-4 flex-1 overflow-y-auto space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">订单号</span>
                    <span className="font-medium text-xs">{sale.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">日期</span>
                    <span className="font-medium">{sale.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">会员</span>
                    <span className="font-medium">{sale.memberName || '散客'}</span>
                  </div>
                </div>
                {/* 商品列表 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-3 py-2 flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-600">
                      <input type="checkbox" checked={allSelected} onChange={() => {
                        if (allSelected) {
                          setReturnQtys({});
                        } else {
                          const q = {};
                          (sale.items || []).forEach(i => { q[i.id] = i.qty; });
                          setReturnQtys(q);
                        }
                      }} className="rounded border-gray-300" />
                      全选
                    </label>
                    <span className="text-xs text-gray-400">共{(sale.items || []).length}种商品</span>
                  </div>
                  {(sale.items || []).map(item => {
                    const rq = returnQtys[item.id] || 0;
                    return (
                      <div key={item.id} className="px-3 py-2.5 border-t border-gray-100 flex items-center gap-3">
                        <input type="checkbox" checked={rq > 0} onChange={() => {
                          if (rq > 0) {
                            setReturnQtys(prev => { const n = { ...prev }; delete n[item.id]; return n; });
                          } else {
                            setReturnQtys(prev => ({ ...prev, [item.id]: item.qty }));
                          }
                        }} className="rounded border-gray-300 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-800 truncate">{item.name}</div>
                          <div className="text-xs text-gray-400">
                            {item.effectivePrice != null && item.effectivePrice !== item.price
                              ? <><span className="text-red-500 font-medium">¥{fmt(item.effectivePrice)}</span> <span className="line-through">¥{fmt(item.price)}</span> × {item.qty}</>
                              : <>¥{fmt(item.price)} × {item.qty}</>}
                          </div>
                        </div>
                        {rq > 0 && (
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <button onClick={() => setReturnQtys(prev => {
                              const v = Math.max(0, (prev[item.id] || 0) - 1);
                              const n = { ...prev }; if (v === 0) delete n[item.id]; else n[item.id] = v; return n;
                            })} className="w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold">−</button>
                            <span className="w-8 text-center text-sm font-semibold">{rq}</span>
                            <button onClick={() => setReturnQtys(prev => ({
                              ...prev, [item.id]: Math.min(item.qty, (prev[item.id] || 0) + 1)
                            }))} className="w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold">+</button>
                            <span className="text-xs text-gray-400">/ {item.qty}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                {/* 退款金额 */}
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-sm text-gray-600">退款金额</span>
                  <span className="text-xl font-bold text-red-600">¥{fmt(refundAmount)}</span>
                </div>
                <p className="text-xs text-gray-400">退货后库存将恢复，会员积分将按比例扣减。</p>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 flex gap-2 flex-shrink-0">
                <button onClick={() => { setReturningSaleId(null); setReturnQtys({}); }}
                  className="flex-1 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  取消
                </button>
                <button disabled={selectedItems.length === 0}
                  onClick={() => {
                    onDeleteSale(sale.id, selectedItems);
                    setReturningSaleId(null);
                    setReturnQtys({});
                  }}
                  className="flex-1 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium">
                  {isAllReturned ? '确认全部退货' : `确认退货(${selectedItems.length}项)`}
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

// ===== IndexedDB 本地存储 =====
const DB_NAME = 'cosmetics_store_v2';
const DB_VERSION = 1;
const STORES = ['products', 'members', 'sales', 'pointsRecords', 'meta'];

let dbInstance = null;

function openDB() {
  if (dbInstance) return Promise.resolve(dbInstance);
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      for (const store of STORES) {
        if (!db.objectStoreNames.contains(store)) {
          db.createObjectStore(store, { keyPath: 'id' });
        }
      }
    };
    req.onsuccess = () => { dbInstance = req.result; resolve(dbInstance); };
    req.onerror = () => reject(req.error);
  });
}

function dbGetAll(table) {
  return openDB().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(table, 'readonly');
    const req = tx.objectStore(table).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  }));
}

function dbPutAll(table, items) {
  return openDB().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(table, 'readwrite');
    const store = tx.objectStore(table);
    // 先清空再插入
    store.clear();
    for (const item of items) {
      store.put(item);
    }
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  }));
}

function metaGet(key) {
  return openDB().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction('meta', 'readonly');
    const req = tx.objectStore('meta').get(key);
    req.onsuccess = () => resolve(req.result ? req.result.value : null);
    req.onerror = () => reject(req.error);
  })).catch(() => null);
}

function metaSet(key, value) {
  return openDB().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction('meta', 'readwrite');
    tx.objectStore('meta').put({ id: key, value });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  }));
}

// 初始化：从 IndexedDB 加载全部数据
async function initFromIndexedDB() {
  try {
    const [p, m, s, r] = await Promise.all([
      dbGetAll('products'), dbGetAll('members'), dbGetAll('sales'), dbGetAll('pointsRecords'),
    ]);
    return { products: p, members: m, sales: s, pointsRecords: r };
  } catch (e) {
    console.error('IndexedDB 加载失败:', e);
    return { products: [], members: [], sales: [], pointsRecords: [] };
  }
}

// 数据变更同步到 IndexedDB（防抖）
let syncTimer = null;
function syncToIndexedDB(products, members, sales, pointsRecords) {
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(async () => {
    try {
      await Promise.all([
        dbPutAll('products', products),
        dbPutAll('members', members),
        dbPutAll('sales', sales),
        dbPutAll('pointsRecords', pointsRecords),
      ]);
      console.log('数据已保存到本地');
    } catch (e) {
      console.error('保存到本地失败:', e);
    }
  }, 300);
}

// ===== 局域网同步 =====
async function pushToServer(serverUrl, data) {
  const res = await fetch(serverUrl + '/api/data', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      products: data.products,
      members: data.members,
      sales: data.sales,
      pointsRecords: data.pointsRecords,
    }),
  });
  if (!res.ok) throw new Error('推送数据失败: ' + res.status);
}

async function pullFromServer(serverUrl) {
  const res = await fetch(serverUrl + '/api/data');
  if (!res.ok) throw new Error('拉取数据失败: ' + res.status);
  return res.json();
}

// 合并数据：按 updatedAt 时间戳取较新版本
function mergeArrays(localArr, serverArr) {
  const localMap = new Map();
  for (const item of localArr) localMap.set(item.id, item);
  const serverMap = new Map();
  for (const item of serverArr) serverMap.set(item.id, item);

  const allIds = new Set([...localMap.keys(), ...serverMap.keys()]);
  const merged = [];
  for (const id of allIds) {
    const local = localMap.get(id);
    const server = serverMap.get(id);
    if (!local) { merged.push(server); continue; }
    if (!server) { merged.push(local); continue; }
    const lt = new Date(local.updatedAt || local.createdAt || 0).getTime();
    const st = new Date(server.updatedAt || server.createdAt || 0).getTime();
    merged.push(st >= lt ? server : local);
  }
  return merged;
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// 通用下载
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// 导出全部数据为 Excel 文件
async function exportToJSON() {
  const [p, m, s, r] = await Promise.all([
    dbGetAll('products'), dbGetAll('members'), dbGetAll('sales'), dbGetAll('pointsRecords'),
  ]);

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
  const productRows = p.map(item => ({
    'ID': item.id || '',
    '商品名称': item.name || '',
    '分类': getCategoryName(item.category),
    '售价': item.price || 0,
    '成本价': item.cost || 0,
    '利润': (item.price || 0) - (item.cost || 0),
    '库存': item.stock || 0,
    '条码': item.barcode || '',
    '单位': item.unit || '',
    '备注': item.description || '',
    '创建时间': item.createdAt ? fmtDate(item.createdAt) : '',
  }));

  // 构建会员 sheet 数据
  const memberRows = m.map(item => ({
    'ID': item.id || '',
    '姓名': item.name || '',
    '手机号': item.phone || '',
    '等级': getLevelName(item.level),
    '积分': item.points || 0,
    '折算价格': (item.points || 0) * 0.05,
    '生日': item.birthday || '',
    '备注': item.note || '',
    '创建时间': item.createdAt ? fmtDate(item.createdAt) : '',
  }));

  // 构建销售记录 sheet 数据
  const salesRows = s.map(item => ({
    '订单号': item.id || '',
    '日期': item.date || '',
    '商品明细': typeof item.itemsJson === 'string' ? item.itemsJson : JSON.stringify(item.items || item.itemsJson || []),
    '小计': item.subtotal || 0,
    '折扣': item.discount || 1,
    '会员折扣': item.memberDiscount || 1,
    '总计': item.total || 0,
    '支付方式': item.paymentMethod || '',
    '收款金额': item.receivedAmount || 0,
    '找零': item.change || 0,
    '会员ID': item.memberId || '',
    '会员': item.memberName || '',
    '会员等级': item.levelName || '',
    '获得积分': item.pointsEarned || 0,
    '创建时间': item.createdAt ? fmtDate(item.createdAt) : '',
  }));

  // 构建积分记录 sheet 数据
  const pointsRows = r.map(item => ({
    'ID': item.id || '',
    '会员ID': item.memberId || '',
    '会员': item.memberName || '',
    '积分': item.points || 0,
    '类型': item.type || '',
    '说明': item.description || '',
    '日期': item.date || '',
    '创建时间': item.createdAt ? fmtDate(item.createdAt) : '',
  }));

  // 生成 Excel
  const wb = XLSX.utils.book_new();
  if (productRows.length > 0) {
    const ws1 = XLSX.utils.json_to_sheet(productRows);
    ws1['!cols'] = [{ wch: 16 }, { wch: 20 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 8 }, { wch: 8 }, { wch: 16 }, { wch: 6 }, { wch: 20 }, { wch: 12 }];
    XLSX.utils.book_append_sheet(wb, ws1, '商品');
  }
  if (memberRows.length > 0) {
    const ws2 = XLSX.utils.json_to_sheet(memberRows);
    ws2['!cols'] = [{ wch: 16 }, { wch: 12 }, { wch: 14 }, { wch: 12 }, { wch: 8 }, { wch: 10 }, { wch: 12 }, { wch: 20 }, { wch: 12 }];
    XLSX.utils.book_append_sheet(wb, ws2, '会员');
  }
  if (salesRows.length > 0) {
    const ws3 = XLSX.utils.json_to_sheet(salesRows);
    ws3['!cols'] = [{ wch: 16 }, { wch: 12 }, { wch: 40 }, { wch: 10 }, { wch: 8 }, { wch: 8 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 16 }, { wch: 12 }, { wch: 12 }, { wch: 10 }, { wch: 12 }];
    XLSX.utils.book_append_sheet(wb, ws3, '销售记录');
  }
  if (pointsRows.length > 0) {
    const ws4 = XLSX.utils.json_to_sheet(pointsRows);
    ws4['!cols'] = [{ wch: 16 }, { wch: 16 }, { wch: 12 }, { wch: 8 }, { wch: 12 }, { wch: 20 }, { wch: 12 }, { wch: 12 }];
    XLSX.utils.book_append_sheet(wb, ws4, '积分记录');
  }

  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  return new Blob([wbout], { type: 'application/octet-stream' });
}

// 从 Excel 文件导入数据
async function importFromJSON(file) {
  const data = await file.arrayBuffer();
  const wb = XLSX.read(data, { type: 'array' });

  const parseSheet = (names) => {
    // 支持多个 sheet 名称变体，兼容全量导出和自动导出的命名
    for (const name of names) {
      const sheet = wb.Sheets[name];
      if (sheet) return XLSX.utils.sheet_to_json(sheet);
    }
    return [];
  };

  const productRows = parseSheet(['商品', '商品记录']);
  const memberRows = parseSheet(['会员', '会员记录']);
  const salesRows = parseSheet(['销售记录', '销售']);
  const pointsRows = parseSheet(['积分记录', '积分']);

  // 转换商品数据
  const products = productRows.map(row => ({
    id: row['ID'] || uid(),
    name: row['商品名称'] || row['名称'] || row['name'] || '',
    category: CATEGORIES.find(c => c.name === row['分类'])?.id || row['分类'] || '',
    price: parseFloat(row['售价'] || row['单价'] || row['价格'] || row['price']) || 0,
    cost: parseFloat(row['成本价'] || row['成本'] || row['cost']) || 0,
    stock: parseInt(row['库存'] || row['数量'] || row['stock']) || 0,
    barcode: row['条码'] || row['barcode'] || '',
    unit: row['单位'] || row['unit'] || '',
    description: row['备注'] || row['描述'] || row['说明'] || row['description'] || '',
    createdAt: row['创建时间'] ? new Date(row['创建时间']).toISOString() : new Date().toISOString(),
  }));

  // 转换会员数据
  const members = memberRows.map(row => ({
    id: row['ID'] || uid(),
    name: row['姓名'] || row['名称'] || row['name'] || '',
    phone: row['手机号'] || row['电话'] || row['phone'] || '',
    level: MEMBER_LEVELS.find(l => l.name === row['等级'])?.id || row['等级'] || '',
    points: parseInt(row['积分'] || row['points']) || 0,
    birthday: row['生日'] || row['birthday'] || '',
    note: row['备注'] || row['说明'] || row['note'] || '',
    createdAt: row['创建时间'] ? new Date(row['创建时间']).toISOString() : new Date().toISOString(),
  }));

  // 构建会员名称到 ID 的映射，用于恢复销售/积分记录中的会员关联
  const memberNameToId = {};
  members.forEach(m => { if (m.name) memberNameToId[m.name] = m.id; });
  // 同时用手机号建立映射
  members.forEach(m => { if (m.phone && !memberNameToId[m.phone]) memberNameToId[m.phone] = m.id; });

  // 转换销售记录数据
  const sales = salesRows.map(row => {
    const memberName = row['会员'] || row['会员名'] || row['memberName'] || '';
    const memberId = row['会员ID'] || row['memberId'] || memberNameToId[memberName] || '';
    const itemsJson = row['商品明细'] || row['itemsJson'] || '[]';
    let items = [];
    try { items = typeof itemsJson === 'string' ? JSON.parse(itemsJson) : itemsJson; } catch(e) { items = []; }
    return {
      id: row['订单号'] || row['id'] || uid(),
      date: row['日期'] || row['date'] || '',
      items,
      itemsJson,
      subtotal: parseFloat(row['小计'] || row['subtotal']) || 0,
      discount: parseFloat(row['折扣'] || row['discount']) || 1,
      memberDiscount: parseFloat(row['会员折扣'] || row['memberDiscount']) || 1,
      total: parseFloat(row['总计'] || row['total']) || 0,
      paymentMethod: row['支付方式'] || row['paymentMethod'] || '',
      receivedAmount: parseFloat(row['收款金额'] || row['receivedAmount']) || 0,
      change: parseFloat(row['找零'] || row['change']) || 0,
      memberId,
      memberName,
      levelName: row['会员等级'] || row['levelName'] || '',
      pointsEarned: parseInt(row['获得积分'] || row['pointsEarned']) || 0,
      createdAt: row['创建时间'] ? new Date(row['创建时间']).toISOString() : new Date().toISOString(),
    };
  });

  // 转换积分记录数据
  const pointsRecords = pointsRows.map(row => {
    const memberName = row['会员'] || row['会员名'] || row['memberName'] || '';
    const memberId = row['会员ID'] || row['memberId'] || memberNameToId[memberName] || '';
    return {
      id: row['ID'] || row['id'] || uid(),
      memberId,
      memberName,
      points: parseInt(row['积分'] || row['points']) || 0,
      type: row['类型'] || row['type'] || '',
      description: row['说明'] || row['描述'] || row['description'] || '',
      date: row['日期'] || row['date'] || '',
      createdAt: row['创建时间'] ? new Date(row['创建时间']).toISOString() : new Date().toISOString(),
    };
  });

  await Promise.all([
    dbPutAll('products', products),
    dbPutAll('members', members),
    dbPutAll('sales', sales),
    dbPutAll('pointsRecords', pointsRecords),
  ]);

  return { products, members, sales, pointsRecords };
}

// ===== 同步设置弹窗 =====
function SyncSettingsModal({ currentUrl, connected, onSave, onClose }) {
  const [url, setUrl] = useState(currentUrl || '');
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);

  const handleTest = async () => {
    const trimmed = url.trim().replace(/\/+$/, '');
    if (!trimmed) { setTestResult('error'); return; }
    setTesting(true);
    setTestResult(null);
    try {
      const res = await fetch(trimmed + '/api/health');
      if (res.ok) {
        setTestResult('success');
      } else {
        setTestResult('error');
      }
    } catch (e) {
      setTestResult('error');
    }
    setTesting(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden"
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="flex items-center gap-2">
            <ServerIcon className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-bold text-gray-800">局域网同步设置</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><CloseIcon className="w-5 h-5" /></button>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">同步服务器地址</label>
            <input
              type="text"
              value={url}
              onChange={e => { setUrl(e.target.value); setTestResult(null); }}
              placeholder="例如: http://192.168.1.100:3800"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              autoFocus
            />
            <p className="text-xs text-gray-500 mt-1">
              在另一台电脑上运行 <code className="bg-gray-100 px-1 rounded">node sync-server.js</code> 后，将显示的地址填入上方
            </p>
          </div>

          {testResult === 'success' && (
            <div className="flex items-center gap-2 text-green-600 text-sm bg-green-50 px-3 py-2 rounded-lg">
              <CheckIcon className="w-4 h-4" /> 连接成功！
            </div>
          )}
          {testResult === 'error' && (
            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-3 py-2 rounded-lg">
              <CloseIcon className="w-4 h-4" /> 无法连接，请检查地址和网络
            </div>
          )}

          <div className="flex items-center gap-2 text-sm">
            <span className={"w-2.5 h-2.5 rounded-full " + (connected ? "bg-green-400" : "bg-gray-300")} />
            <span className="text-gray-600">{connected ? '已连接' : '未连接'}</span>
          </div>

          <div className="flex gap-3 pt-2">
            <button onClick={handleTest} disabled={testing || !url.trim()}
              className="flex-1 px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors disabled:opacity-50">
              {testing ? '测试中...' : '测试连接'}
            </button>
            <button onClick={() => onSave(url)}
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
              保存
            </button>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <p className="text-xs text-amber-800">
              <strong>使用说明：</strong>两台电脑需在同一局域网内。在其中一台运行同步服务器，另一台填入服务器地址即可实时同步数据。数据存储在运行服务器的那台电脑上。
            </p>
          </div>
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
  const initialLoadDoneRef = useRef(false);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dbBusy, setDbBusy] = useState(false);
  const [lastBackupTime, setLastBackupTime] = useState('');
  const [backingUp, setBackingUp] = useState(false);
  const [scheduledBackupEnabled, setScheduledBackupEnabled] = useState(false);

  // 局域网同步状态
  const [syncServerUrl, setSyncServerUrl] = useState('');
  const [syncConnected, setSyncConnected] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [showSyncSettings, setShowSyncSettings] = useState(false);
  const [syncStatus, setSyncStatus] = useState(''); // '' | 'pushing' | 'pulling' | 'error'
  const syncUrlRef = useRef('');
  const isFromSyncRef = useRef(false);
  const syncTimer2Ref = useRef(null);
  const pushTimerRef = useRef(null);

  // 初始化：从 IndexedDB 加载数据
  useEffect(() => {
    let done = false;
    const finish = () => { 
      if (!done) { 
        done = true; 
        console.log('Loading complete, setting loading=false');
        setLoading(false); 
      } 
    };
    const timer = setTimeout(() => {
      console.warn('Loading timeout - forcing finish after 3 seconds');
      finish();
    }, 3000); // 安全兜底：3秒后强制完成
    (async () => {
      try {
        console.log('从本地数据库加载数据...');
        const data = await initFromIndexedDB();
        console.log('Data loaded:', { products: data.products.length, members: data.members.length, sales: data.sales.length, pointsRecords: data.pointsRecords.length });
        setProducts(data.products); setMembers(data.members); setSales(data.sales); setPointsRecords(data.pointsRecords);
        initialLoadDoneRef.current = true;
      } catch (e) {
        console.error('加载数据失败', e);
        console.error('Error details:', e.message, e.stack);
      }
      clearTimeout(timer);
      finish();
    })();
    return () => {
      console.log('Cleanup: clearing timer');
      clearTimeout(timer);
    };
  }, []);

  // 数据变更自动保存到本地（初始加载完成后才生效）
  useEffect(() => {
    if (!initialLoadDoneRef.current) return;
    syncToIndexedDB(products, members, sales, pointsRecords);
  }, [products, members, sales, pointsRecords]);

  // 加载备份设置和同步设置
  useEffect(() => {
    if (loading) return;
    (async () => {
      try {
        const backupSetting = await metaGet('scheduledBackup');
        if (backupSetting) setScheduledBackupEnabled(true);
        const lastTime = await metaGet('lastBackupTime');
        if (lastTime) setLastBackupTime(lastTime);
        const syncUrl = await metaGet('syncServerUrl');
        if (syncUrl) {
          setSyncServerUrl(syncUrl);
          syncUrlRef.current = syncUrl;
        }
      } catch (e) { /* 忽略 */ }
    })();
  }, [loading]);

  // 定时备份：每日22:00自动下载备份到本地
  useEffect(() => {
    if (loading || !scheduledBackupEnabled) return;
    let lastRunDate = '';
    const checkBackup = async () => {
      const now = new Date();
      if (now.getHours() === 22 && now.getMinutes() === 0 && lastRunDate !== todayStr()) {
        lastRunDate = todayStr();
        try {
          const blob = await exportToJSON();
          const ts = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0')
            + '_' + String(now.getHours()).padStart(2, '0') + String(now.getMinutes()).padStart(2, '0');
          downloadBlob(blob, '美妆门店备份_' + ts + '.xlsx');
          await metaSet('lastBackupTime', now.toISOString());
          setLastBackupTime(now.toISOString());
          console.log('定时备份下载完成');
        } catch (e) {
          console.warn('定时备份失败:', e);
        }
      }
    };
    const timer = setInterval(checkBackup, 60000);
    return () => clearInterval(timer);
  }, [loading, scheduledBackupEnabled]);

  // 局域网同步 - 初始连接和拉取
  useEffect(() => {
    if (loading || !syncServerUrl) return;
    let cancelled = false;
    (async () => {
      try {
        const serverData = await pullFromServer(syncServerUrl);
        if (cancelled) return;
        setSyncConnected(true);
        setSyncStatus('');
        // 合并数据
        const mp = mergeArrays(products, serverData.products || []);
        const mm = mergeArrays(members, serverData.members || []);
        const ms = mergeArrays(sales, serverData.sales || []);
        const mr = mergeArrays(pointsRecords, serverData.pointsRecords || []);
        if (mp.length !== products.length || mm.length !== members.length ||
            ms.length !== sales.length || mr.length !== pointsRecords.length) {
          isFromSyncRef.current = true;
          setProducts(mp); setMembers(mm); setSales(ms); setPointsRecords(mr);
          setTimeout(() => { isFromSyncRef.current = false; }, 500);
        }
      } catch (e) {
        if (cancelled) return;
        console.warn('同步服务器连接失败:', e.message);
        setSyncConnected(false);
        setSyncStatus('');
      }
    })();
    return () => { cancelled = true; };
  }, [syncServerUrl]);

  // 局域网同步 - 定时拉取（每5秒）
  useEffect(() => {
    if (loading || !syncServerUrl || !syncConnected) return;
    syncTimer2Ref.current = setInterval(async () => {
      try {
        const serverData = await pullFromServer(syncUrlRef.current);
        const mp = mergeArrays(products, serverData.products || []);
        const mm = mergeArrays(members, serverData.members || []);
        const ms = mergeArrays(sales, serverData.sales || []);
        const mr = mergeArrays(pointsRecords, serverData.pointsRecords || []);
        if (mp.length !== products.length || mm.length !== members.length ||
            ms.length !== sales.length || mr.length !== pointsRecords.length) {
          isFromSyncRef.current = true;
          setProducts(mp); setMembers(mm); setSales(ms); setPointsRecords(mr);
          setTimeout(() => { isFromSyncRef.current = false; }, 500);
        }
        setSyncConnected(true);
        setSyncStatus('');
      } catch (e) {
        setSyncConnected(false);
        setSyncStatus('');
      }
    }, 5000);
    return () => { if (syncTimer2Ref.current) clearInterval(syncTimer2Ref.current); };
  }, [loading, syncServerUrl, syncConnected, products, members, sales, pointsRecords]);

  // 局域网同步 - 数据变更时推送
  useEffect(() => {
    if (!initialLoadDoneRef.current || !syncServerUrl || !syncConnected || isFromSyncRef.current) return;
    if (pushTimerRef.current) clearTimeout(pushTimerRef.current);
    pushTimerRef.current = setTimeout(async () => {
      try {
        setSyncing(true);
        setSyncStatus('pushing');
        await pushToServer(syncUrlRef.current, { products, members, sales, pointsRecords });
        setSyncStatus('');
      } catch (e) {
        console.warn('同步推送失败:', e.message);
        setSyncConnected(false);
        setSyncStatus('');
      } finally {
        setSyncing(false);
      }
    }, 800);
    return () => { if (pushTimerRef.current) clearTimeout(pushTimerRef.current); };
  }, [products, members, sales, pointsRecords, syncServerUrl, syncConnected]);

  // 同步设置处理函数
  const handleSaveSyncUrl = async (url) => {
    const trimmed = url.trim().replace(/\/+$/, '');
    setSyncServerUrl(trimmed);
    syncUrlRef.current = trimmed;
    await metaSet('syncServerUrl', trimmed);
    if (trimmed) {
      try {
        await pullFromServer(trimmed);
        setSyncConnected(true);
        showToast('同步服务器已连接');
      } catch (e) {
        setSyncConnected(false);
        showToast('无法连接同步服务器: ' + e.message);
      }
    } else {
      setSyncConnected(false);
      setSyncStatus('');
      showToast('已断开同步');
    }
    setShowSyncSettings(false);
  };

  const toggleScheduledBackup = async () => {
    const newVal = !scheduledBackupEnabled;
    setScheduledBackupEnabled(newVal);
    await metaSet('scheduledBackup', newVal);
    showToast(newVal ? '已开启每日22:00自动下载备份' : '已关闭定时备份');
  };

  // 立即备份
  const handleBackupNow = async () => {
    try {
      setBackingUp(true);
      const blob = await exportToJSON();
      const now = new Date();
      const ts = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0')
        + '_' + String(now.getHours()).padStart(2, '0') + String(now.getMinutes()).padStart(2, '0');
      const filename = '美妆门店备份_' + ts + '.xlsx';
      downloadBlob(blob, filename);
      await metaSet('lastBackupTime', now.toISOString());
      setLastBackupTime(now.toISOString());
      setBackingUp(false);
      showToast('备份已下载: ' + filename);
    } catch (e) {
      setBackingUp(false);
      showToast('备份失败: ' + e.message);
    }
  };

  // 导出全部数据为 Excel
  const handleExportDB = async () => {
    try {
      setToast('正在生成数据文件...');
      const blob = await exportToJSON();
      downloadBlob(blob, `美妆门店备份_${todayStr()}.xlsx`);
      setToast(null);
      showToast('数据已导出');
    } catch (e) {
      setToast(null);
      showToast('导出失败: ' + e.message);
    }
  };

  // 从 JSON 文件导入数据
  const fileRef = useRef(null);
  const handleImportDB = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      setToast('正在导入数据...');
      const data = await importFromJSON(file);
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
        'ID': p.id || '',
        '商品名称': p.name || '',
        '分类': getCategoryName(p.category),
        '售价': p.price || 0,
        '成本价': p.cost || 0,
        '利润': (p.price || 0) - (p.cost || 0),
        '库存': p.stock || 0,
        '条码': p.barcode || '',
        '单位': p.unit || '',
        '备注': p.description || '',
        '创建时间': p.createdAt ? fmtDate(p.createdAt) : '',
      }));
      // 构建会员 sheet 数据
      const memberRows = todayMembers.map(m => ({
        'ID': m.id || '',
        '姓名': m.name || '',
        '手机号': m.phone || '',
        '等级': getLevelName(m.level),
        '积分': m.points || 0,
        '折算价格': (m.points || 0) * 0.05,
        '生日': m.birthday || '',
        '备注': m.note || '',
        '创建时间': m.createdAt ? fmtDate(m.createdAt) : '',
      }));
      // 生成 Excel
      const wb = XLSX.utils.book_new();
      if (productRows.length > 0) {
        const ws1 = XLSX.utils.json_to_sheet(productRows);
        ws1['!cols'] = [{ wch: 16 }, { wch: 20 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 8 }, { wch: 8 }, { wch: 16 }, { wch: 6 }, { wch: 20 }, { wch: 12 }];
        XLSX.utils.book_append_sheet(wb, ws1, '商品');
      }
      if (memberRows.length > 0) {
        const ws2 = XLSX.utils.json_to_sheet(memberRows);
        ws2['!cols'] = [{ wch: 16 }, { wch: 12 }, { wch: 14 }, { wch: 12 }, { wch: 8 }, { wch: 10 }, { wch: 12 }, { wch: 20 }, { wch: 12 }];
        XLSX.utils.book_append_sheet(wb, ws2, '会员');
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
      return [...ps, { ...data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }];
    });
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
      return [...ms, { ...data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }];
    });
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
      updatedAt: new Date().toISOString(),
    };
    setSales(s => [...s, saleRecord]);
    // 扣库存
    setProducts(ps => ps.map(p => {
      const item = sale.items.find(i => i.id === p.id);
      if (item) return { ...p, stock: Math.max(0, (p.stock || 0) - item.qty), updatedAt: new Date().toISOString() };
      return p;
    }));
    // 加积分 + 积分记录
    if (sale.memberId) {
      setMembers(ms => ms.map(m => {
        if (m.id !== sale.memberId) return m;
        const points = (m.points || 0) + sale.total;
        return { ...m, points, updatedAt: new Date().toISOString() };
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
        updatedAt: new Date().toISOString(),
      }]);
    }
    showToast(`结账成功 ¥${fmt(sale.total)}`);
  };

  // 退货：支持全部退货和部分退货
  // returnItems: [{ id, name, price, cost, qty }] 要退的商品列表；不传或为空则整单退
  const deleteSale = (saleId, returnItems) => {
    setSales(ss => {
      const sale = ss.find(s => s.id === saleId);
      if (!sale) return ss;

      // 如果没有传 returnItems，视为整单退
      const items = (returnItems && returnItems.length > 0) ? returnItems : (sale.items || []);
      // 按每个商品的实际成交价计算退款（旧数据无 effectivePrice 时用统一折扣比例兜底）
      const discountRatio = sale.subtotal > 0 ? (sale.total || sale.subtotal) / sale.subtotal : 1;
      const itemRefundPrice = (i) => i.effectivePrice != null ? i.effectivePrice : (i.price || 0) * discountRatio;
      const refundAmount = items.reduce((sum, i) => sum + itemRefundPrice(i) * i.qty, 0);

      // 判断是否全部退货
      const isFullReturn = items.length === (sale.items || []).length &&
        items.every(ri => {
          const orig = (sale.items || []).find(oi => oi.id === ri.id);
          return orig && ri.qty >= orig.qty;
        });

      // 恢复商品库存（仅退被退的商品）
      setProducts(ps => ps.map(p => {
        const item = items.find(i => i.id === p.id);
        if (item) return { ...p, stock: (p.stock || 0) + item.qty, updatedAt: new Date().toISOString() };
        return p;
      }));

      // 扣除会员积分 + 积分记录
      if (sale.memberId && refundAmount > 0) {
        setMembers(ms => ms.map(m => {
          if (m.id !== sale.memberId) return m;
          const points = Math.max(0, (m.points || 0) - refundAmount);
          return { ...m, points, updatedAt: new Date().toISOString() };
        }));
        setPointsRecords(rs => [...rs, {
          id: uid(),
          memberId: sale.memberId,
          memberName: sale.memberName || '',
          points: -refundAmount,
          type: '退货扣减',
          description: `${isFullReturn ? '退货' : '部分退货'}退款 ¥${fmt(refundAmount)}（${items.map(i => i.name + '×' + i.qty).join('，')}）`,
          date: todayStr(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }]);
      }

      if (isFullReturn) {
        // 全部退货：删除销售记录
        showToast(`退货成功，已恢复库存，退款 ¥${fmt(refundAmount)}`);
        return ss.filter(s => s.id !== saleId);
      } else {
        // 部分退货：更新销售记录，保留剩余商品
        const remainingItems = (sale.items || []).map(orig => {
          const returned = items.find(ri => ri.id === orig.id);
          if (returned) {
            const remainQty = orig.qty - returned.qty;
            if (remainQty <= 0) return null;
            return { ...orig, qty: remainQty };
          }
          return orig;
        }).filter(Boolean);

        const remainingSubtotal = remainingItems.reduce((sum, i) => sum + (i.effectivePrice != null ? i.effectivePrice : (i.price || 0)) * i.qty, 0);
        const remainingTotal = +remainingSubtotal.toFixed(2);

        showToast(`部分退货成功，退款 ¥${fmt(refundAmount)}，剩余 ¥${fmt(remainingTotal)}`);
        return ss.map(s => {
          if (s.id !== saleId) return s;
          return {
            ...s,
            items: remainingItems,
            itemsJson: JSON.stringify(remainingItems),
            subtotal: remainingSubtotal,
            total: remainingTotal,
          };
        });
      }
    });
  };

  // 手动调整积分
  const handleAdjustPoints = (record) => {
    const recordWithTime = { ...record, updatedAt: new Date().toISOString() };
    setPointsRecords(rs => [...rs, recordWithTime]);
    setMembers(ms => ms.map(m => {
      if (m.id !== record.memberId) return m;
      const points = Math.max(0, (m.points || 0) + record.points);
      return { ...m, points, updatedAt: new Date().toISOString() };
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
              title="导出 Excel 数据文件">
              <DownloadIcon className="w-3.5 h-3.5" /> <span className="hidden lg:inline">导出</span>
            </button>
            <button onClick={() => fileRef.current && fileRef.current.click()}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              title="从 Excel 文件导入数据">
              <UploadIcon className="w-3.5 h-3.5" /> <span className="hidden lg:inline">导入</span>
            </button>
            <input ref={fileRef} type="file" accept=".xlsx,.xls" onChange={handleImportDB} className="hidden" />
            <div className="w-px h-5 bg-gray-200 mx-0.5 hidden lg:block" />
            <button onClick={handleBackupNow} disabled={backingUp}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap disabled:opacity-50"
              title={lastBackupTime ? "上次备份: " + new Date(lastBackupTime).toLocaleString('zh-CN') : "立即下载备份文件"}>
              {backingUp ? <span className="w-3.5 h-3.5 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin" /> : <DownloadIcon className="w-3.5 h-3.5" />}
              <span className="hidden lg:inline">备份</span>
            </button>
            <button onClick={toggleScheduledBackup}
              className={"flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm border rounded-lg transition-colors whitespace-nowrap " +
                (scheduledBackupEnabled ? "text-teal-700 border-teal-300 hover:bg-teal-50" : "text-gray-600 border-gray-300 hover:bg-gray-50")}
              title={scheduledBackupEnabled ? "每日22:00自动备份已开启" : "开启每日22:00自动备份"}>
              <span className={"w-2 h-2 rounded-full " + (scheduledBackupEnabled ? "bg-teal-400" : "bg-gray-300")} />
              <span className="hidden lg:inline">{scheduledBackupEnabled ? '定时✓' : '定时'}</span>
            </button>
            <div className="w-px h-5 bg-gray-200 mx-0.5 hidden lg:block" />
            <button onClick={() => setShowSyncSettings(true)}
              className={"flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm border rounded-lg transition-colors whitespace-nowrap " +
                (syncConnected ? "text-green-700 border-green-300 hover:bg-green-50" : syncServerUrl ? "text-red-600 border-red-300 hover:bg-red-50" : "text-gray-600 border-gray-300 hover:bg-gray-50")}
              title={syncConnected ? "局域网同步已连接" : syncServerUrl ? "同步服务器未连接，点击设置" : "点击设置局域网同步"}>
              {syncing ? (
                <span className="w-3.5 h-3.5 border-2 border-indigo-300 border-t-indigo-600 rounded-full animate-spin" />
              ) : (
                <SyncIcon className="w-3.5 h-3.5" />
              )}
              <span className="hidden lg:inline">{syncConnected ? '已同步' : syncServerUrl ? '未连接' : '同步'}</span>
            </button>
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

      {/* 同步设置弹窗 */}
      {showSyncSettings && (
        <SyncSettingsModal
          currentUrl={syncServerUrl}
          connected={syncConnected}
          onSave={handleSaveSyncUrl}
          onClose={() => setShowSyncSettings(false)}
        />
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
