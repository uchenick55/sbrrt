export type ShipType = {
    locations: Array<string> ,// ["06", "16", "26"]
    hits: Array< "" | "hit" > // ["", "hit", ""]
}
export type setShipsSunkType =  () => void

type CellType = { // ячейка поля игры
    x: number,
    y: number,
    cellStatus: string
}
export type MainFieldType = Array<Array<CellType>> | null // все поле игры из ячеек