'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, wy88y egg.js';
    }
  }
  return HomeController;
};
