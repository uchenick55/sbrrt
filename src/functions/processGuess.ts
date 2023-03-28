import {fire} from "./fire";
import {parseGuess} from "./parseGuess";
import {setShipsSunkType} from "../Types/commonTypes";

type processGuessType = (
    guess: string,
    boardSize: number,
    ships: any,
    shipsSunk: number,
    numShips: number,
    setStatus: (currentStatus:string)=>void,
    setShipsSunk: setShipsSunkType
) => void

export const processGuess:processGuessType = (guess,boardSize, ships, shipsSunk,numShips, setStatus, setShipsSunk) => {
    // основная функция. Прроверяет корректность введенных данных выстрела, считает выстрелы, проверка конца игры
    setStatus(guess)
    let location = parseGuess(guess, boardSize, setStatus) // проверить, что введенные данные в определенных границах
    if (location) { // если соответствует
        const hit = fire(location, ships, setStatus, setShipsSunk) // стреляем по введенным координатам
        if (hit && shipsSunk === numShips) { // если попали, и количество потопленных кораблей достигла порога
            setStatus("Вы потопили все корабли") // сообщение о потоплении всех кораблей
        }
    }
}