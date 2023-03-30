import React from "react";
import classes from './seaBattle.module.css'

const SeaBattle = ({MainField}) => {

    const localOnClick = (cellY, cellX) => {
        console.log(cellY  + "" + cellX)
    }

    return <div className={classes.FieldClass}>
        {MainField.map(m=>{
            return m.map(cell=>{
                const id =  cell.y + "" +  cell.x
                return <span
                            key={id}
                            id={id}
                            style={{
                                left: `${cell.x*100}px`,
                                top: `${cell.y*100}px`,
                                }}
                            className={classes.cellClass} //остальные классы
                    onClick={()=>{
                        localOnClick(cell.y, cell.x)
                    }}
                >{id}</span>
            })
        })}
    </div>

}

export default SeaBattle