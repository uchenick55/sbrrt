import React from "react";
// @ts-ignore
import classes from "./seaBattle.module.css"

type SeaBattleType = {}

const SeaBattle: React.FC<SeaBattleType> = () => {

    return <div id="board">
        <div className={classes.messageArea}>Message</div>
        <table className={classes.tableClass}>
            {/* цикл внешний*/}
            {(() => {
                const tdArr = []; // массив пока пустой jsx элементов строк и ячеек
                for (let i = 0; i < 7; i++) { // пробегаем по колонкам
                    tdArr.push(<tr></tr>)
                    for (let j = 0; j < 7; j++) {
                        tdArr.push(<td id={`${i}${j}`} className={classes.tdClass} >{`${i}${j}`} </td>)
                    }
                }
                return tdArr
            })()}
        </table>
        <form>
            <input className={classes.formInput} type="text" id="guessInput" placeholder="A0"/>
            <input className={classes.formInput} type="button" id="fireButton" value="Fire!"/>
        </form>
    </div>
}
export default SeaBattle