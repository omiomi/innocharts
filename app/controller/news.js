// app/controller/news.js
"use strict"; 

module.exports = app => {
	class NewsController extends app.Controller {
		* list() {
			const ctx = this.ctx.body;
      //const page = ctx.query.page || 1;
      //const newsList = yield ctx.service.news.list(page);
			const dataList = {
				list: [
          { id: 1, title: "this is news 1", url: "/news/1" },
          { id: 2, title: "this is news 2", url: "/news/2" },
				],
			};
			yield ctx.render("news/list.tpl", { list: dataList });
		}
  }
	return NewsController;
};

