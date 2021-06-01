'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = {
      status: 1,
      message: '请求成功',
    };
  }
}

module.exports = HomeController;
