import Koa from "koa";
import { router } from "./routes/results";
import env from "./env";

const app =  new Koa();

const port = env.port;

app.use(router.routes());

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})