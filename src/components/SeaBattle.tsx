import React from "react";
import classes from './seaBattle.module.css'
import {alphaBet} from "./common/constants";
import {MainFieldType, processGuessLocalType} from "../Types/commonTypes";

type SeaBattleType = {
    MainField: MainFieldType
    processGuessLocal: processGuessLocalType,
    currentStatus: string
}
const SeaBattle: React.FC<SeaBattleType> = ({MainField, processGuessLocal, currentStatus}) => {

    const localOnClick = (cellY: string, cellX: number) => {
      //  console.log(cellY  + "" + cellX)
        processGuessLocal(cellY  + "" + cellX)
    }
    return <div className={classes.mainBoard}>
        <div className={classes.messageArea} >{currentStatus}</div>

        <div className={classes.FieldClass}>
            {MainField.map(m=>{
                return m.map(cell=>{
                    const id =  cell.y + "" +  cell.x;
                    return <span
                        key={id}
                        id={id}
                        style={{
                            left: `${cell.x*96}px`,/*шаг ячеек по горизонтали*/
                            top: `${alphaBet.indexOf(cell.y)*96}px`,/*шаг ячеек по вертикали*/
                        }}
                        className={
                            `${classes.cellCommon} ${cell.cellStatus === "" // склеиваем общий класс и уловие пустого cell.cellStatus
                                ? "" : cell.cellStatus === "hit" // если да то ничего не добьавляем, иначе условие на hit
                                    ? classes.hit: classes.miss}` // если да то класс hit, иначе класс miss
                        }
                        onClick={()=>{
                            localOnClick(cell.y, cell.x)
                        }}
                    >
                    </span>
                })
            })}
        </div>
    </div>

}

export default SeaBattle