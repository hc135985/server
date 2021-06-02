// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportHome = require('../../../app/service/home');
import ExportMenuIndex = require('../../../app/service/menu/index');
import ExportUserIndex = require('../../../app/service/user/index');

declare module 'egg' {
  interface IService {
    home: AutoInstanceType<typeof ExportHome>;
    menu: {
      index: AutoInstanceType<typeof ExportMenuIndex>;
    }
    user: {
      index: AutoInstanceType<typeof ExportUserIndex>;
    }
  }
}
