import {fire} from "./fire";
import {parseGuess} from "./parseGuess";

type processGuessType = (
    guess: string,
    boardSize: number,
    ships: any,
    shipsSunk: number,
    numShips: number,
    setStatus: (currentStatus:string)=>void
) => void

export const processGuess:processGuessType = (guess,boardSize, ships, shipsSunk,numShips, setStatus) => {
    // основная функция. Прроверяет корректность введенных данных выстрела, считает выстрелы, проверка конца игры
    console.log(guess)
    let location = parseGuess(guess, boardSize) // проверить, что введенные данные в определенных границах
    if (location) { // если соответствует
        //this.guesses++  счетчик выстрелов увеличиваем на 1 при кореектном вводе данных выстрела
        const hit = fire(location, ships, shipsSunk, setStatus) // стреляем по введенным координатам
        if (hit && shipsSunk === numShips) { // если попали, и количество потопленных кораблей достигла порога
            console.log("Вы потопили все корабли") // сообщение о потоплении всех кораблей
        }
    }
}