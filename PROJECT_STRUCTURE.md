项目结构说明：

- **css/** 存放公共样式表 `style.css`
- **js/** 存放公共脚本文件 `main.js`
- **img/** 存放图片资源，如 `placeholder.png`
- **views/** 前端页面模板：
  - `index.html` 首页
  - `search.html` 搜索结果页
  - `compound.html` 化合物详情页
  - `about.html` 关于我们
- **routes/** Express 路由：
  - `search.js` 提供搜索与自动补全接口
- **data/** 示例数据库脚本：`compound_info.sql`
- `app.js` Node.js 服务器入口
