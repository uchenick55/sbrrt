import React from "react";
import classes from './seaBattle.module.css'
import {alphaBet} from "./common/constants";

const SeaBattle = ({MainField}) => {

    const localOnClick = (cellY, cellX) => {
        console.log(cellY  + "" + cellX)
    }
    return <div className={classes.mainBoard}>

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
                       // className={classes.cellCommon} //остальные классы
                        className={
                            `${classes.cellCommon} ${cell.cellStatus === "" // склеиваем общий класс и уловие пустого cell.cellStatus
                                ? "" : cell.cellStatus === "hit" // если да то ничего не добьавляем, иначе условие на hit
                                    ? classes.hit: classes.miss}` // если да то класс hit, иначе класс miss
                        }
                        onClick={()=>{
                            localOnClick(cell.y, cell.x)
                        }}
                    >
        {/*<img src="miss.png" alt=""/>*/}
        {/*<img src="ship.png" alt=""/>*/}
                        {id}
                    </span>
                })
            })}
        </div>
    </div>

}

export default SeaBattle