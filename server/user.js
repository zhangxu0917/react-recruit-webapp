const express = require('express');
const Router = express.Router();
const model = require('./model');
const utility = require('utility');
const User = model.getModel('user')

const _filter = {pwd: 0, '__v': 0};

function md5Salt(target) {
  const salt = 'imooc_is_good_861123@wereww!!!'
  return utility.md5(`${target}${salt}`);
}

Router.get('/info', (req, res) => {
  const {userid} = req.cookies;
  if (!userid) {
    return res.json({code: 1});
  }
  User.findOne({_id: userid}, _filter, (err, doc) => {
    if (err) {
      return res.json({code:1, msg: '后端出错'})
    }
    if (doc) {
      return res.json({code: 0, data: doc});
    }
  })
})

Router.put('/update', (req, res) => {
  const userid = req.cookies.userid;
  if (!userid) {
    return res.json({code: 1})
  }
  const body = req.body;
  // 查找并更新
  User.findByIdAndUpdate(userid, body, (err, doc) => {
    const data = Object.assign({}, {
      user: doc.user,
      type: doc.type
    }, body);
    return res.json({code: 0, data})
  })
});

Router.get('/list', (req, res) => {
  let {type} = req.query;
  return User.find({type}, (err, doc) => {
    return res.json({
      code: 0,
      data: doc
    });
  })
});

Router.post('/register', (req, res) => {
  const {user, pwd, type} = req.body;
  User.findOne({user}, (err, doc) => {
    if(doc) {
      return res.json({code: 1, msg: "用户名重复"});
    }
    const userModel = new User({user, type, pwd:md5Salt(pwd)});
    userModel.save((err, doc) => {
      if (err) {
        return res.json({code: 1, msg: '后端出错'})
      }
      const {user, type, _id} = doc;
      res.cookie("userid", _id);
      return res.json({code: 0, data: {user, type, _id}});
    })
  });
})

Router.post('/login', (req, res) => {
  const {user, pwd} = req.body;
  User.findOne({user, pwd:md5Salt(pwd)}, _filter, (req, doc) => {
    if (!doc) {
      return res.json({code: 1, msg: '用户名不存在或密码错误'});
    }
    res.cookie('userid', doc._id);
    return res.json({code: 0, data: doc});
  })

})

module.exports = Router;
