import React, { ChangeEventHandler } from "react";
import useGetResults from "../hooks/useGetResults";

type ModalProps = {
    setStartGame: (value: boolean) => void;
    sliderVal: number,
    handleSlideChange: ChangeEventHandler<HTMLInputElement>
    
}
// todo error handling and messaging
// todo loading skeleton
// todo nicer desgin

const NewGame = (props: ModalProps) => {
    const {
        setStartGame,
        sliderVal,
        handleSlideChange
    } = props;

    const { xWins, oWins, draws } = useGetResults();

    return (
        <div className="h-screen">
            <div className="mx-auto h-4/6  bg-neutral-700  bg-opacity-20 rounded-3xl mt-10 p-10">
                <div className="flex flex-col items-center m-4 gap-10 h-screen text-white">
                    <div className="font-bold text-2xl mt-10">New Game?</div>
                        <div className="flex">
                            <p className="mr-8 mt-1">
                                X wins: {xWins}
                            </p>
                            <p className="mr-8 mt-1">
                                O wins: {oWins}
                            </p>
                            <p className="mr-8 mt-1">
                                Draws wins: {draws}
                            </p>
                        </div>
                        <p className="mr-8 mt-1">
                            Select your board size and press play!
                        </p>
                    <div className="flex h-auto justify-center">
                        <p className="mr-8 mt-1">
                            Select number of rows
                        </p>
                        <div>
                        <input type="range" min={3} max="15" value={sliderVal} className="range" step="1" onChange={handleSlideChange} />
                            <div className="w-full flex justify-center text-xl font-bold px-2">
                                {sliderVal} x {sliderVal}
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-outline" onClick={() => setStartGame(false)}>
                        {/* <span className="loading loading-spinner"></span> */}
                        Play
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default NewGame;