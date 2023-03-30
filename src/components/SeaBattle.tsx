import React from "react";
// @ts-ignore
import classes from "./seaBattle.module.css"

type SeaBattleType = {}

const SeaBattle: React.FC<SeaBattleType> = () => {

    return <div id="board">
        <div className={classes.messageArea}>Message</div>
        <table className={classes.tableClass}>

        </table>
        <form>
            <input className={classes.formInput} type="text" id="guessInput" placeholder="A0"/>
            <input className={classes.formInput} type="button" id="fireButton" value="Fire!"/>
        </form>
    </div>
}
export default SeaBattle