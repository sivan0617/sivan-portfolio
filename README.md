# Sivan Portfolio

基于 `React 19 + Vite + Tailwind CSS 4 + Motion` 的个人作品集站。

## 开发

```bash
pnpm dev
```

默认本地地址是 [http://127.0.0.1:3000](http://127.0.0.1:3000)。

## 构建

```bash
pnpm lint
pnpm build
pnpm preview
```

## GitHub Pages 发布

项目已经内置 GitHub Pages 发布链路：

1. 推送到仓库 `main` 分支
2. GitHub Actions 自动构建并部署 `dist`
3. 路由使用 `HashRouter`
4. 生产构建使用相对 `base`，适合项目仓库 Pages

如果仓库还没启用 Pages，在仓库设置里把 `Pages` 的 `Source` 设为 `GitHub Actions` 即可。

## 内容位置

- 页面文案与项目数据：`src/content.ts`
- 静态素材：`public/portfolio`
- 发布工作流：`.github/workflows/deploy-pages.yml`
