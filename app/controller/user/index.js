'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async create() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    if (!username || username.trim() === '') {
      ctx.body = {
        status: 0,
        message: '用户名不能为空',
      };
      return;
    } else if (!password || password.trim() === '') {
      ctx.body = {
        status: 0,
        message: '密码不能为空',
      };
      return;
    }

    const result = await ctx.service.user.index.create({ username, password });
    if (result.affectedRows === 1) {
      ctx.body = {
        status: 1,
        message: '注册成功',
        id: result.id,
      };
    } else if (result === 'USERNAME_EXISTENCE') {
      ctx.body = {
        status: 0,
        message: '用户已存在',
      };
    } else {
      ctx.body = {
        status: 0,
        message: '注册失败',
      };
    }


  }
  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    if (!username || username.trim() === '') {
      ctx.body = {
        status: 0,
        message: '用户名不能为空',
      };
      return;
    } else if (!password || password.trim() === '') {
      ctx.body = {
        status: 0,
        message: '密码不能为空',
      };
      return;
    }
    ctx.cookies.set(username, `${username}TOKEN`);
    const result = await ctx.service.user.index.login({ username, password });
    if (result.length > 0) {
      ctx.body = {
        status: 1,
        message: '登陆成功',
        token: `${username}TOKEN`,
      };
    } else {
      ctx.body = {
        status: 0,
        message: '您的用户不存在，请联系后台人员进行添加',
      };
    }
  }
}

module.exports = HomeController;
