// 这个函数会在点击按钮时执行
alert("你好")
function changeText() {
    const textElement = document.getElementById("text");
    textElement.innerText = "你刚刚点击了按钮，JavaScript 起作用了！🎉";
}
document.getElementById("text").innerText = "JavaScript 修改了我！";
prompt("你喜欢我")

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
let aa = [3,34,32]
console.log(aa)
// 解析表单数据
app.use(bodyParser.urlencoded({ extended: true }));

// 主页：显示 index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 接收表单数据
app.post('/submit', (req, res) => {
  const name = req.body.username;
  res.send(`你好，${name}，你的信息已收到！`);
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`🌐 网站运行中：http://localhost:${PORT}`);
});
