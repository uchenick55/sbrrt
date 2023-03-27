
import {ShipType} from "../Types/commonTypes";

type isSunkType = (
    ship: any,
) => boolean

const isSunk:isSunkType = (ship)=> { // корабль потоплен?
    for (let i = 0; i <= ship.hits.length; i++) {// пробегаем по массиву hits выбранного корабля
        if (ship.hits[i] === "") { // если хотя бы одну часть корабля не попали,
            return false // возвращаем false (корабль не поттоплен)
        }
    }
    return true // иначе возвращаем true (проверяемый корабль потоплен)
}

type fireType = (
    guess: string,
    ships:Array<ShipType>,
    shipsSunk: number
) => boolean

export const fire:fireType = (guess, ships, shipsSunk) => { // проверка попадания по выбранному полю
    for (let i = 0; i < ships.length; i++) { // пробегаем массив ships
        const ship = ships[i]; // получить данные по текущему кораблю
        const locationIndex = ship.locations.indexOf(guess); // поиск guess в массиве позиций кораблей
        if (locationIndex >= 0) { //    если совпадает с одним из полей и попадание не повторно
            if ( ship.hits[locationIndex] === "hit") { // если эта часть корабля уже была потоплена раньше
                console.log("Эта часть корабля уже была потоплена")
                return false // прервать выполнение функции
            }
            ship.hits[locationIndex] = "hit"; // присвоить соответствующему полю hits
            console.log(guess)// отобразить попадания в корабли
            console.log("HIT")
            if (isSunk(ship)) { // если корабль потоплен (вернет true)
                console.log("You sank my battleship!")
                shipsSunk++; // увеличиваем счетчик потопленых корабелей на 1
            }
            return true // вернуть подтвержение попадание
        }
    }

    console.log(guess)// отобразить промахи мимо кораблей
    console.log("MISS")
    return false // если условия не выполнились, попадания не было (MISS)
}


type parseGuessType = (
    guess: string,
    boardSize: number
) => string | null

const parseGuess:parseGuessType = (guess, boardSize ) => {
    const alphaBet = ["A", "B", "C", "D", "E", "F", "G"];
    // Код метода
    if (guess === null || guess.length !== 2) {
        alert("Некорректный ввод. (A-G, 0-6)")
    } else {
        const FirstChar = guess.charAt(0)
        const row:number = alphaBet.indexOf(FirstChar)
        const column:number = Number(guess.charAt(1))
        if (isNaN(row) || isNaN(column)) {
            alert("Не цифры")

        } else if (row < 0 || row >= boardSize ||
            column < 0 || column >= boardSize) {
            alert("за пределами доски")
        } else {
            return row +""+ column
        }
    }
    return null
}

type processGuessType = (
    guess: string,
    boardSize: number,
    ships: any,
    shipsSunk: number,
    numShips: number
) => void

const processGuess:processGuessType = (guess,boardSize, ships, shipsSunk,numShips) => {
    // основная функция. Прроверяет корректность введенных данных выстрела, считает выстрелы, проверка конца игры
    let location = parseGuess(guess, boardSize) // проверить, что введенные данные в определенных границах
    if (location) { // если соответствует
        //this.guesses++  счетчик выстрелов увеличиваем на 1 при кореектном вводе данных выстрела
        const hit = fire(location, ships, shipsSunk) // стреляем по введенным координатам
        if (hit && shipsSunk === numShips) { // если попали, и количество потопленных кораблей достигла порога
            console.log("Вы потопили все корабли") // сообщение о потоплении всех кораблей
        }/**/
    }
}



const FIRE = "sbrrt/dataReducer/FIRE"; //константа выстрела

export type fireActionType = { type: typeof FIRE, guess: string}
export const setFire = (guess: string): fireActionType => { // экшн получения данных выстрела
    return {type: FIRE, guess}
};

type ActionTypes = fireActionType

type initialStateType = {
    boardSize: number,// размер клеток поля
    numShips: number, // количество кораблей
    shipLength: number, //длина кораблей
    shipsSunk: number, // сколько кораблей уже потоплено
    ships:Array<ShipType>,

}
const initialState: initialStateType = { //стейт по умолчанию
    boardSize:7,// размер клеток поля
    numShips: 3,// количество кораблей
    shipLength: 3,//длина кораблей
    shipsSunk:0, // сколько кораблей уже потоплено
    ships: [ // данные по кораблям (положение на поле и массивы попаданий)
        { locations: ["06", "16", "26"], hits: ["", "", ""] },
        { locations: ["24", "34", "44"], hits: ["", "", ""] },
        { locations: ["10", "11", "12"], hits: ["", "", ""] }
    ]
}

const dataReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {//редьюсер
    let stateCopy: initialStateType; // объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case FIRE:  // кейс задания ошибок формы
            console.log("FIRE!", action.guess)
            stateCopy = {
                ...state, // копия всего стейта
            }
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default dataReducer;










