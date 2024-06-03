import Koa from "koa";
import { router } from "./routes/results";
import cors from "@koa/cors";
import env from "./env";

const app =  new Koa();

const port = env.port;

app.use(cors({
    origin: "http://localhost:3001",
    allowMethods: ['GET', 'POST'],
}));

app.use(router.routes());

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})