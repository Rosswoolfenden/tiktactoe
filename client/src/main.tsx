import React, { useState } from "react";
import TictactoBoard from "./components/tictactoBoard";
import { XorO } from "./types";



export const Main = () => {
	const [xTurn, setXTurn] = useState<XorO>("X");
	const [winner, setWinner] = useState<XorO | undefined | false>(undefined);
	
	return (
		<div className={`flex flex-col items-center gap-10 min-h-screen text-white
			${winner ? "bg-green-500": ""}
			${winner === false ? "bg-yellow-500":  ""}
			${xTurn === "X" && winner === undefined? "bg-red-500": "bg-blue-500"}
		`}>
			<div className="flex flex-col items-center gap-10">
				<div className="font-bold text-2xl mt-10">Tic Tac Toe</div>
					<TictactoBoard xTurn={xTurn} setXTurn={setXTurn} setWinner={setWinner} winner={winner} boardSize={3} />
				</div>
			</div>
  	);
};