import  React from "react"
import { Winner, XorO } from "../types"
import useTikTacToeBoard from "../hooks/useTikTacToeBoard"

type Props = {
    boardSize: number,
    setWinner: Function,
    winner: Winner | undefined,
    xTurn: XorO,
    setXTurn: Function
}

const TictactoeBoard = (props: Props) => {
    const {xTurn, winner} = props;
    const {board, squareTaken, handleSquareClick} =  useTikTacToeBoard(props);

    return (
        <div className="flex flex-col m-10 items-center gap-10">
            {squareTaken &&
                <div className="font-bold text-2xl">
                    {xTurn} Are you blind, that is taken
                </div>
            }
            {!winner &&
                <div className="font-bold text-2xl">
                    {xTurn}'s turn!
                </div>
            } 
            {winner !==  undefined && winner !== "DRAW" && 
                <div className="font-bold text-2xl">
                    {xTurn} WINS
                </div>
            }
            {winner === "DRAW" &&
                <div className="font-bold text-2xl">
                    DRAW!
                </div>
            }
            <div className="flex flex-col gap-1">
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex gap-1">
                        {row.map((column, columnIndex) => (
                            <div
                                key={columnIndex}
                                className="border-2 border-white w-10 h-10 cursor-pointer items-center justify-center text-2xl font-bold flex"
                                onClick={() => handleSquareClick(rowIndex, columnIndex)}
                                onTouchEnd={() => handleSquareClick(rowIndex, columnIndex)}>
                                {column}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TictactoeBoard;