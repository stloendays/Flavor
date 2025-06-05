// Express 服务器入口
const express = require('express');
const path = require('path');

const searchRouter = require('./routes/search');

const app = express();
const PORT = 3000; // 可根据需要修改端口

// 静态文件目录
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use(express.json());

// 视图文件
app.use('/', express.static(path.join(__dirname, 'views')));

// API 路由
app.use('/search', searchRouter);

// 复合物详情接口（示例）
app.get('/compound', (req, res) => {
  const id = req.query.id;
  // TODO: 这里应从数据库查询对应 id 的化合物信息
  res.json({
    id,
    compound_name: '示例化合物',
    cid: '123',
    smiles: 'C1=CC=CC=C1',
    mol_weight: '100'
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
