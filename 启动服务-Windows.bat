@echo off
chcp 65001 >nul
title 美妆门店管理系统
echo ========================================
echo   美妆门店管理系统 - 启动中...
echo ========================================
echo.

:: 检查 Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [错误] 未检测到 Node.js，请先安装 Node.js
    echo 下载地址: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

:: 检查 npx
where npx >nul 2>nul
if %errorlevel% neq 0 (
    echo [错误] 未检测到 npx，请确认 Node.js 安装完整
    pause
    exit /b 1
)

echo 正在启动本地服务器...
echo 浏览器将自动打开 http://localhost:8765
echo 如未自动打开，请手动访问上述地址
echo.
echo 按 Ctrl+C 可停止服务器
echo ========================================

:: 延迟打开浏览器
start /b cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:8765/cosmetics-store-manager.html"

:: 启动服务器
npx http-server -p 8765 --cors -c-1 -o /cosmetics-store-manager.html

pause
