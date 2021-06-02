'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/user/create', controller.user.index.create);
  router.post('/user/login', controller.user.index.login);
  router.get('/menu/menuList', controller.menu.index.menuList);
  router.post('/menu/add', controller.menu.index.menuAdd);
  router.get('/menu/detail', controller.menu.index.menuDetail);
  router.del('/menu/del', controller.menu.index.deleteMenu);
  router.post('/menu/update/content', controller.menu.index.updateMenuContent);
};
