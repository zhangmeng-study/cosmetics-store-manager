#!/bin/bash
echo "========================================"
echo "  美妆门店管理系统 - 启动中..."
echo "========================================"
echo ""

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "[错误] 未检测到 Node.js，请先安装 Node.js"
    echo "下载地址: https://nodejs.org/"
    echo ""
    read -p "按回车键退出..."
    exit 1
fi

# 检查 npx
if ! command -v npx &> /dev/null; then
    echo "[错误] 未检测到 npx，请确认 Node.js 安装完整"
    read -p "按回车键退出..."
    exit 1
fi

echo "正在启动本地服务器..."
echo "浏览器将自动打开 http://localhost:8765"
echo "如未自动打开，请手动访问上述地址"
echo ""
echo "按 Ctrl+C 可停止服务器"
echo "========================================"

# 延迟打开浏览器
(sleep 2 && open "http://localhost:8765/cosmetics-store-manager.html" 2>/dev/null || xdg-open "http://localhost:8765/cosmetics-store-manager.html" 2>/dev/null) &

# 启动服务器
npx http-server -p 8765 --cors -c-1 -o /cosmetics-store-manager.html
