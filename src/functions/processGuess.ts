import {fire} from "./fire";
import {parseGuess} from "./parseGuess";
import {MainFieldType, setShipsSunkType, ShipType} from "../Types/commonTypes";

type processGuessType = (
    guess: string,
    boardSize: number,
    ships: Array<ShipType>,
    shipsSunk: number,
    numShips: number,
    setStatus: (currentStatus:string)=>void,
    setShipsSunk: setShipsSunkType,
    setShips: (ships:Array<ShipType>)=> void,
    MainField: MainFieldType,
    setMainField: (MainField: MainFieldType)=> void,
) => void

export const processGuess:processGuessType = (
    guess,boardSize, ships, shipsSunk,numShips, setStatus,
    setShipsSunk, setShips, MainField, setMainField) => {
    // основная функция. Прроверяет корректность введенных данных выстрела, считает выстрелы, проверка конца игры
    setStatus(guess)
    let location = parseGuess(guess, boardSize, setStatus) // проверить, что введенные данные в определенных границах
    if (location) { // если соответствует
        const hit = fire(location, ships, setStatus, setShipsSunk, setShips, MainField, guess, setMainField) // стреляем по введенным координатам
    }
}