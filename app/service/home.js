'use strict';

const Service = require('egg').Service;

class Home extends Service {
  async userList() {
    const sql = 'select * from user';
    return this.app.mysql.query(sql);
  }
}


module.exports = Home;
