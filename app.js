const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks.js");
const connectDB = require("./db/connect.js");
require("dotenv").config();
app.use(express.json());
app.use(express.static("./public"));

const PORT = 5000;

// ルーティング設計
app.use("/api/v1/tasks", taskRoute);

// データベースと接続
const start = async () => {
  try {
    // envファイルを利用したDB接続
    await connectDB(process.env.MONGO_URL);
    // サーバー起動
    app.listen(PORT, console.log("SERVER 起動したZOY"));
  } catch (err) {
    console.log(err);
  }
};

start();
