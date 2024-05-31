import React, { useEffect, useState } from 'react';
import TictactoeBoard from './components/tictactoeBoard';
import { XorO } from './types';
import NewGame from './components/newGame';

export const Main = () => {
	const [xTurn, setXTurn] = useState<XorO>("X");
	const [winner, setWinner] = useState<XorO | undefined | false>(undefined);
	const [startGame, setStartGame] =  useState(true);

	const [sliderVal, setSliderVal] = useState<number>(3)

    const handleSlideChange = (event) => {
        setSliderVal(event.target.value)
    }

	useEffect(() =>{
		if(winner) {
			setTimeout(() => {
				setStartGame(true);
				setWinner(undefined);
			}, 1000);
		} else if(winner ===false) {
			setTimeout(() => {
				setStartGame(true);
				setWinner(undefined);
			}, 1000);
		}
	},[winner])
	
	return (
		<div className={`flex flex-col items-center gap-10 min-h-screen text-white
			${winner ? 'bg-green-500': ''}
			${winner === false ? 'bg-yellow-500':  ''}
			${xTurn === "X" && winner === undefined? 'bg-red-500': 'bg-blue-500'}
		`}>
			{!startGame && 
				<div className='flex flex-col items-center gap-10'>
					<div className="font-bold text-2xl mt-10">Tic Tac Toe</div>
					<TictactoeBoard xTurn={xTurn} setXTurn={setXTurn} setWinner={setWinner} winner={winner} boardSize={sliderVal} />
				</div>
			}
			{startGame &&
				<NewGame setStartGame={setStartGame} handleSlideChange={handleSlideChange} sliderVal={sliderVal}/>
			}
		</div>
  	);
};