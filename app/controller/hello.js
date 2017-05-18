// app/controller/news.js
'use strict'; 

module.exports = app => {
  class HelloController extends app.Controller {
    * index() {
      const ctx = this.ctx;
      yield ctx.render('hello.xtpl', {
          data: 'world',
       });
    }
  }
  return HelloController;
};


