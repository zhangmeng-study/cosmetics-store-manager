# GitHub Pages 部署设置指南

## 重要说明

由于 GitHub 的安全策略，workflow 文件（`.github/workflows/deploy.yml`）需要通过以下方式之一推送：

### 方法 A：通过 GitHub 网页界面（推荐 - 最简单）

1. **访问你的仓库**：
   https://github.com/zhangmeng-study/cosmetics-store-manager

2. **启用 GitHub Pages**：
   - 点击 "Settings" 标签
   - 在左侧菜单找到 "Pages"
   - 在 "Build and deployment" 部分：
     - Source: 选择 **"GitHub Actions"**
     - 点击 "Save"

3. **手动触发首次部署**：
   - 回到 "Actions" 标签
   - 点击左侧的 "Deploy to GitHub Pages" workflow
   - 点击 "Run workflow" → "Run workflow"
   - 等待部署完成（约 1-2 分钟）

4. **访问你的网站**：
   部署完成后，访问：
   ```
   https://zhangmeng-study.github.io/cosmetics-store-manager/
   ```

### 方法 B：使用 Git 命令行（需要配置 Personal Access Token）

如果你希望通过命令行推送 workflow 文件：

1. **创建 Personal Access Token**：
   - 访问 https://github.com/settings/tokens
   - 点击 "Generate new token (classic)"
   - 勾选权限：`repo`、`workflow`
   - 生成并复制 token

2. **更新远程仓库 URL**：
   ```bash
   git remote set-url origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/zhangmeng-study/cosmetics-store-manager.git
   ```

3. **推送 workflow 文件**：
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "chore: add GitHub Pages deployment workflow"
   git push origin main
   ```

### 方法 C：简化方案（不使用 Actions）

如果上述方法太复杂，可以使用更简单的方式：

1. **在 GitHub Settings 中**：
   - 访问 https://github.com/zhangmeng-study/cosmetics-store-manager/settings/pages
   - Source: 选择 **"Deploy from a branch"**
   - Branch: 选择 **"main"** 和 **"/ (root)"**
   - 点击 "Save"

2. **等待部署**：
   - GitHub Pages 会自动检测 `index.html` 并部署
   - 大约 1-2 分钟后生效

3. **访问网站**：
   ```
   https://zhangmeng-study.github.io/cosmetics-store-manager/
   ```

## 当前状态

✅ Workflow 文件已创建：`.github/workflows/deploy.yml`
✅ `index.html` 已在仓库根目录
⏳ 需要在 GitHub 上启用 Pages 功能

## 下一步操作

**请选择以下任一方法：**

1. **使用方法 A（网页界面）** - 最简单，推荐
2. **使用方法 C（简化方案）** - 不需要 workflow 文件

完成后，你的网站将在 `https://zhangmeng-study.github.io/cosmetics-store-manager/` 可用，完全免费！

## 优势对比

| 特性 | Netlify Hobby | GitHub Pages |
|------|--------------|--------------|
| 费用 | 免费 | 免费 |
| 带宽 | 100GB/月 | 无限 |
| 构建时间 | 300分钟/月 | 无限 |
| 自定义域名 | 支持 | 支持 |
| 自动 HTTPS | ✅ | ✅ |
| 设置复杂度 | 简单 | 简单 |

GitHub Pages 更适合你的项目，因为它是纯静态网站，没有任何后端依赖。
