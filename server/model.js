// FIXME:连接mongodb
const mongoose = require('mongoose');
const DB_URL = 'mongodb://127.0.0.1:27017/imooc-chat';
mongoose.connect(DB_URL, {useNewUrlParser:true})

const models = {
  user: {
    user: {type: String, require: true},
    pwd: {type: String, require: true},
    type: {type: String, require: true},
    // 头像
    avatar: {type: String},
    // 个人简介或者职位简介
    desc: {type: String},
    title: {type: String},
    // 如果你是boss，还有两个字段
    company: {type: String},
    money: {type: String}
  },
  chat: {}
}

for (const m in models) {
  if (models.hasOwnProperty(m)) {
    mongoose.model(m, new mongoose.Schema(models[m]));
  }
}

module.exports = {
  getModel (name) {
    return mongoose.model(name);
  }
}