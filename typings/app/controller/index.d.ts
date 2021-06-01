// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportMenuIndex = require('../../../app/controller/menu/index');
import ExportUserIndex = require('../../../app/controller/user/index');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    menu: {
      index: ExportMenuIndex;
    }
    user: {
      index: ExportUserIndex;
    }
  }
}
