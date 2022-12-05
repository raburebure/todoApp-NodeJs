const Task = require("../models/Task.js");

// 全てのタスクを取得
const getAllTasks = async (req, res) => {
  try {
    const allTask = await Task.find({});
    res.status(200).json(allTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

// タスク作成
const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(200).json(createTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

// 特定のタスクを取得
const getSingleTask = async (req, res) => {
  try {
    // urlにセットしたパラメータidからデータを取得
    const getSingleTask = await Task.findOne({ _id: req.params.id });

    // データが取得出来ない場合
    if (!getSingleTask) {
      return res.status(404).json(`_id:${req.params.id}は存在しません`);
    }

    res.status(200).json(getSingleTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

// タスク情報の更新
const updateTask = async (req, res) => {
  try {
    // urlにセットしたパラメータidからデータを検索し更新
    const updateTask = await Task.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );

    // データが取得出来ない場合
    if (!updateTask) {
      return res.status(404).json(`_id:${req.params.id}は存在しません`);
    }

    res.status(200).json(updateTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

// タスクの削除
const deleteTask = async (req, res) => {
  try {
    // urlにセットしたパラメータidからデータを検索し削除
    const deleteTask = await Task.findOneAndDelete({ _id: req.params.id });

    // データが取得出来ない場合
    if (!deleteTask) {
      return res.status(404).json(`_id:${req.params.id}は存在しません`);
    }

    res.status(200).json(deleteTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
