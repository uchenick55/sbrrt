import {MainFieldType} from "../Types/commonTypes";

type generateMainFieldType = (
    boardSize: number
) => MainFieldType


export const generateMainField: generateMainFieldType = (boardSize) => {
  //  const boardSize: number = 7
    const MainField: MainFieldType = [
    ];
    for (let y = 0; y < boardSize; y++) { // проходим по вертикали
        const ArrayX = []// временный массив по оси x (горизонталь)
        for (let x = 0; x < boardSize; x++) { // проходим по горизонтали
            ArrayX.push({
                x: x,
                y: y,
                cellStatus: ""
            })
        }
        MainField.push(ArrayX)// добавляем временный массив x в итоговый MainField
    }
    return MainField
}