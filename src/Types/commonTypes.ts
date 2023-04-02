export type ShipType = {
    locations: Array<string> ,// ["06", "16", "26"]
    hits: Array< "" | "hit" > // ["", "hit", ""]
}
export type setShipsSunkType =  () => void

type CellType = { // ячейка поля игры
    x: number,
    y: string,
    cellStatus: string
}
export type MainFieldType = Array<Array<CellType>> // все поле игры из ячеек

export type processGuessLocalType = (guess: string)  => void
