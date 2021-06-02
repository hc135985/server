'use strict';

const Service = require('egg').Service;

class Home extends Service {
  async create({ username, password }) {
    const userList = await this.app.mysql.query(`SELECT * FROM mart.USER WHERE username="${username}"`);
    if (userList.length > 0) {
      return 'USERNAME_EXISTENCE';
    }
    const id = new Date().getTime() + parseInt(Math.random() * 100);
    const sql = `INSERT INTO mart.user (username, password, id) VALUES ("${username}", "${password}", "${id}");`;
    const result = await this.app.mysql.query(sql);
    return {
      ...result,
      id,
    };
  }
  async login({ username, password }) {
    const sql = `select * from mart.user where username="${username}" and password="${password}"`;
    return this.app.mysql.query(sql);
  }
}


module.exports = Home;
