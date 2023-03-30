import React from "react";
import classes from './seaBattle.module.css'

const SeaBattle = ({MainField}) => {

    const localOnClick = (cellY, cellX) => {
        console.log(cellY  + "" + cellX)
    }

    return <div className={classes.mainBoard}>
        <div className={classes.FieldClass}>
            {MainField.map(m=>{
                return m.map(cell=>{
                    const id =  cell.y + "" +  cell.x
                    return <span
                        key={id}
                        id={id}
                        style={{
                            left: `${cell.x*96}px`,/*шаг ячеек по горизонтали*/
                            top: `${cell.y*96}px`,/*шаг ячеек по вертикали*/
                        }}
                        className={classes.cellClass} //остальные классы
                        onClick={()=>{
                            localOnClick(cell.y, cell.x)
                        }}
                    >{id}</span>
                })
            })}
        </div>
    </div>

}

export default SeaBattle