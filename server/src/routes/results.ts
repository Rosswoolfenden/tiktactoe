import Router from "koa-router";

export const router = new Router();

router.get("/wins", (ctx, next) => {
    ctx.body = "hello world"
});