'use strict';

const Controller = require('egg').Controller;

class MenuController extends Controller {
  async menuList() {
    const { ctx } = this;
    const result = await ctx.service.menu.index.getMenuList();
    ctx.body = {
      content: result,
      status: 1
    }
  }
  async menuAdd() {
    const { ctx } = this;
    ctx.body = await ctx.service.menu.index.menuAdd(ctx.request.body);
  }
}

module.exports = MenuController;
