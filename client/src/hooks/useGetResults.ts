import { useState, useEffect } from "react";
import env from "../env";

const  useGetResults = () => {
    const [ xWins, setXwins] = useState<number>();
    const [ oWins, setOwins] = useState<number>();
    const [draws, setDraws] =  useState<number>();

    useEffect(() => {
        fetch(`${env.serverUrl}/getresults`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            setXwins(data[0].x_wins);
            setOwins(data[0].o_wins);
            setDraws(data[0].draws);
        })
        .catch(err => {
            console.log(err);
            alert("Failed to collect win record");
        })
    }, []);
    return {
        xWins, oWins, draws
    }
}
export default useGetResults;