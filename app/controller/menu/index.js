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
  async menuDetail() {
    const { ctx } = this;
    const result = await ctx.service.menu.index.menuDetail(ctx.request.query);
    let content = "{}";
    try {
      content = JSON.parse(result.length ? result[0].content : "\"{}\"")
    } catch (error) {
      console.log('menuDetail >> JSON.parse', error)
      content = "{}"
    }
    ctx.body = {
      content,
      status: 1
    }
  }
  async deleteMenu() {
    const { ctx } = this;
    const result = await ctx.service.menu.index.deleteMenu(ctx.request.query);
    ctx.body = {
      content: result,
      status: 1
    }
  }
  async updateMenuContent() {
    const { ctx } = this;
    const result = await ctx.service.menu.index.updateMenuContent(ctx.request.query);
    ctx.body = {
      content: result,
      status: 1
    }
  }
}

module.exports = MenuController;
