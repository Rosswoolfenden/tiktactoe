import { useState, useEffect } from "react";
import { Winner, XorO } from "../types";

type Props = {
    boardSize: number,
    setWinner: Function,
    winner: Winner | undefined,
    xTurn: XorO,
    setXTurn: Function
}

const useTikTacToeBoard = (props: Props) => {
    const {xTurn, setXTurn, setWinner, boardSize} = props;
    const [board, setBoard] = useState<(XorO | undefined)[][]>([
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
    ]);
    function updateBoardSize(newSize: number) {
        const newBoard = Array.from({ length: newSize }, () => 
            Array.from({ length: newSize }, () => undefined)
        );
        setBoard(newBoard);
    }
    useEffect(() => {
        updateBoardSize(boardSize);
    }, [boardSize])

    
    const [squareTaken, setSquareTaken] = useState(false);

    const handleSquareClick = (rowIndex: number, columnIndex: number) => {
        if(board[rowIndex][columnIndex] !== undefined) {
            setSquareTaken(true);
            return;
        }
        setSquareTaken(false);
        const newBoard = [...board];
        newBoard[rowIndex][columnIndex] = xTurn;
        setBoard(newBoard);
        if(checkForWinner()) {
            setWinner(xTurn);
            return;
        }
        if(checkDraw()) {
            setWinner("DRAW");
            return;
        }
        setXTurn(xTurn === "X" ? "O" : "X");
    }

    const checkForWinner = () => {
        for (let row = 0; row < boardSize; row++) {
            if (board[row].every(square => square === board[row][0] && square !== undefined)) {
                return true
            }
        } 
        
        for (let col = 0; col < boardSize; col++) {
            if (board.every(row => row[col] === board[0][col] && row[col] !== undefined)) {
                return true
            }
        }

        let diagonal1Match = true;
        let diagonal2Match = true;

        for (let i = 0; i < boardSize; i++) {
            if (board[i][i] !== board[0][0] || board[i][i] === undefined) {
                diagonal1Match = false;
            }
            if (board[i][boardSize - 1 - i] !== board[0][boardSize - 1] || board[i][boardSize - 1 - i] === undefined) {
                diagonal2Match = false;
            }
        }

        if (diagonal1Match) return true;
        if (diagonal2Match) return true;

        return false;
    }

    const checkDraw = () => {
        return board.every(row => row.every(square => square !== undefined));
    }

    return {
        board, squareTaken, handleSquareClick
    }
}

export default useTikTacToeBoard;