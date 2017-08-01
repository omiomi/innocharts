"use strict";
const mm = require("egg-mock");
const assert = require("assert");
const request = require("supertest");

describe("test/app/middleware/robot.test.js", () => {
	let app;
	before(() => {
    // 创建当前应用的 app 实例
		app = mm.app();
     // 等待 app 启动成功，才能执行测试用例
		return app.ready();
	});

	afterEach(mm.restore);
	after(() => app.close());

	it("should block robot", () => {
		return request(app.callback())
      .get("/")
      .set("User-Agent", "Baiduspider")
      .expect(403);
	});  
});
