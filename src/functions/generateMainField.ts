import {MainFieldType} from "../Types/commonTypes";
import {alphaBet} from "../components/common/constants";

type generateMainFieldType = (
    boardSize: number
) => MainFieldType


export const generateMainField: generateMainFieldType = (boardSize) => {
    const MainField: MainFieldType = [];

    for (let y = 0; y < boardSize; y++) { // проходим по вертикали
        const ArrayX = []// временный массив по оси x (горизонталь)
        for (let x = 0; x < boardSize; x++) { // проходим по горизонтали
            ArrayX.push({
                x: x,// положение ячейки по горизонтали
                y: alphaBet[y],//alphaBet.indexOf(y) положение ячейки по вертикали +++
                cellStatus: "" // текущий статус ячейки ("" | "hit" | "miss")
            })
        }
        MainField.push(ArrayX)// добавляем временный массив x в итоговый MainField
    }
    return MainField
}