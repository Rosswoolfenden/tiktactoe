import { Pool } from "pg";
import env from "../env";
const pool = new Pool({
    host: "tik-tak-to-db",
    port: env.dbport,
    database: env.pgdb,
    user: env.pguser,
});

export default pool;

