// 搜索与自动补全接口
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// 数据库连接配置，请根据实际情况修改
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'chemdb'
});

db.connect();

// 搜索接口
router.get('/', (req, res) => {
  const q = req.query.q || '';
  const sql = 'SELECT id, compound_name, cid, smiles, mol_weight FROM compound_info WHERE compound_name LIKE ? LIMIT 50';
  db.query(sql, [`%${q}%`], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// 自动补全接口
router.get('/autocomplete', (req, res) => {
  const query = req.query.query || '';
  const sql = 'SELECT compound_name FROM compound_info WHERE compound_name LIKE ? LIMIT 10';
  db.query(sql, [`%${query}%`], (err, results) => {
    if (err) return res.status(500).json([]);
    const list = results.map(r => r.compound_name);
    res.json(list);
  });
});

module.exports = router;
