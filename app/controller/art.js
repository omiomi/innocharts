"use strict"; 

module.exports = app => {
	class NewsController extends app.Controller {
		* list() {
			const ctx = this.ctx;
      //const page = ctx.query.page || 1;
      //const newsList = yield ctx.service.news.list(page);
			const dataList = {
				list: [
		          { id: 1, title: "this is news 1", url: "/news/1" },
		          { id: 2, title: "this is news 2", url: "/news/2" },
				],
			};
			yield ctx.render("art.jade", { list: dataList });
		}
  }
	return NewsController;
};

