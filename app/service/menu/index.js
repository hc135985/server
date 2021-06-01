'use strict';

const Service = require('egg').Service;

class Home extends Service {
  async getMenuList() {
    const sql = 'select * from menu';
    const res =  await this.app.mysql.query(sql);
    const list = [];
    list.push(...res.filter(item => item.level === 1))
    const mapList = data => {
      if (!Array.isArray(data)) return [];
      return data.map(item => {
        item.children = mapList(res.filter(it => it.parentId === item.id));
        (item.children.length === 0) && (delete item.children)
        return item;
      })
    }
    console.log(mapList(list))
    return mapList(list)
  }
  async menuAdd({ path, name, parentMenu }) {
    const isMenu = await this.app.mysql.query(`select * from menu where path='${path}' or path='${parentMenu + path}';`);
    let res = {};
    if (isMenu.length > 0) return { status: 0, message: 'path 已存在' };
    if (!parentMenu) {
      const sql = "INSERT INTO menu (`name`, `path`, `level`, `parentId`) VALUES " + `('${name}', '${path}', 1, 0);`
      res = await this.app.mysql.query(sql);
    } else {
      const result = await this.app.mysql.query(`select * from menu where path='${parentMenu}'`)
      const sql = "INSERT INTO menu (`name`, `path`, `level`, `parentId`) VALUES " + `('${name}', '${parentMenu + path}', ${result[0].level + 1}, ${result[0].id});`
      res = await this.app.mysql.query(sql);
    }
    if (res.affectedRows > 0) return { status: 1, message: '保存成功' };
    return { status: 0, message: '保存失败' };
  }
}


module.exports = Home;
