import Router from "koa-router";
import pool from "../db/pool";
const bodyParser = require("koa-bodyparser");

export const router = new Router();

// todo mv logic away from router
// todo better error handling
// todo add better typing to avoid errors.
// todo add more stats - past games, the order of go"s, store stats on board size, store usersname and add table based on differnt logins

router.get("/getresults", getResult);
router.post("/addresult", bodyParser(), addresult);

async function getResult(ctx: any) {
    try {
        const {rows} = await pool.query("SELECT x_wins, o_wins, draws FROM tictactoe_results WHERE id = 1");
        const res = rows;
        ctx.status = 200;
        ctx.body = res;
    } catch (e) {
        ctx.status = 500;
        ctx.body = `ERROR: failed to collect ${e}`;
    }
}

async function addresult(ctx: any) {
    const { winner } = ctx.request.body;
    let updateQuery: string ="";
    try {
        switch(winner) {
            case "X":
                updateQuery = "UPDATE tictactoe_results SET x_wins = x_wins + 1 WHERE id = 1";
                break;
            case "O":
                updateQuery = "UPDATE tictactoe_results SET o_wins = o_wins + 1 WHERE id = 1";
                break;
            case "DRAW":
                updateQuery = "UPDATE tictactoe_results SET draws = draws + 1 WHERE id = 1";
                break;
        }
        
        const res = await pool.query(updateQuery);
        if (res && res.rowCount && res.rowCount > 0 ) {
            ctx.status = 200;
            ctx.body = "Sucsessfully addded win";
        } else {
            throw Error("Failed to add result");
        }
    } catch (e) {
        ctx.status = 500;
        ctx.body = `ERROR: failed to collect ${e}`;
    }
}



