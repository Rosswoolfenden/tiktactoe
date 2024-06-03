import { useEffect } from "react";
import env from "../env";
import { Winner } from "../types";

type Props = {
    winner: Winner | undefined
    setStartGame: (value: boolean) => void;
    setWinner: Function
}

const useAddResult = (props: Props) => {
    const {winner, setStartGame, setWinner} = props;
    useEffect(() =>{
		if(winner) {
			const body = { winner: winner}
			fetch(`${env.serverUrl}/addresult`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body)
			})
			.then((response) => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
				alert("Failed to save result!");
			})
			setTimeout(() => {
				setStartGame(true);
				setWinner(undefined);
			}, 1000);
		}
	},[winner]);
}

export default useAddResult;