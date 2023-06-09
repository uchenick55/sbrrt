
import {MainFieldType, ShipType} from "../Types/commonTypes";

const SET_SHIPS = "sbrrt/dataReducer/SET_SHIPS"; //константа выстрела

export type setShipsActionType = { type: typeof SET_SHIPS, ships:Array<ShipType>}
export const setShips = (ships:Array<ShipType>): setShipsActionType => { // экшн получения данных выстрела
    return {type: SET_SHIPS, ships}
};

const SET_GENERATED_SHIP  = "sbrrt/dataReducer/SET_GENERATED_SHIPS "; //константа задания сгенерированного корабля

export type setGeneratedShipActionType  = { type: typeof SET_GENERATED_SHIP, generatedShip: ShipType}
export const setGeneratedShip = (generatedShip: ShipType): setGeneratedShipActionType => { // экшн получения данных выстрела
    return {type: SET_GENERATED_SHIP, generatedShip}
};

const SET_STATUS = "sbrrt/dataReducer/SET_STATUS"; //константа статуса игры

export type setStatusActionType = { type: typeof SET_STATUS, currentStatus: string}
export const setStatus = (currentStatus: string): setStatusActionType => { // экшн задания статуса текущего хода
    return {type: SET_STATUS, currentStatus}
};
const SET_SHIPS_SUNK = "sbrrt/dataReducer/SET_SHIPS_SUNK"; //константа задания количества потопленых кораблей

export type setShipsSunkActionType = { type: typeof SET_SHIPS_SUNK}
export const setShipsSunk = (): setShipsSunkActionType => { // экшн увеличения количества потопленых кораблей
    return {type: SET_SHIPS_SUNK}
};
const SET_GUESS = "sbrrt/dataReducer/SET_GUESS"; //константа задания выстрела

export type setGuessType = { type: typeof SET_GUESS, guess: string}
export const setGuess = (guess: string): setGuessType => { // экшн задания выстрела
    return {type: SET_GUESS, guess}
};


const SET_MAIN_FIELD  = "sbrrt/dataReducer/SET_MAIN_FIELD "; //константа задания сгенерированного поля боя

export type setMainFieldType  = { type: typeof SET_MAIN_FIELD, MainField: MainFieldType}
export const setMainField = (MainField: MainFieldType): setMainFieldType => { // экшн задания сгенерированного поля боя
    return {type: SET_MAIN_FIELD, MainField}
};

type ActionTypes = setShipsActionType | setStatusActionType | setShipsSunkActionType |
    setGeneratedShipActionType | setMainFieldType | setGuessType

type initialStateType = {
    boardSize: number,// размер клеток поля
    numShips: number, // количество кораблей
    shipLength: number, //длина кораблей
    shipsSunk: number, // сколько кораблей уже потоплено
    ships:Array<ShipType>,
    currentStatus: string,
    MainField: MainFieldType
    guess: string
}
const initialState: initialStateType = { //стейт по умолчанию
    boardSize:7,// размер клеток поля
    numShips: 3,// количество кораблей
    shipLength: 3,//длина кораблей
    shipsSunk:0, // сколько кораблей уже потоплено
    ships: [], // данные по кораблям (положение на поле и массивы попаданий)
    currentStatus: "",
    // @ts-ignore
    MainField: [],
    guess: ""
}

const dataReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {//редьюсер
    let stateCopy: initialStateType; // объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case SET_SHIPS:  // кейс задания ошибок формы
          //  console.log("SET_SHIPS!", action.ships)
            stateCopy = {
                ...state, // копия всего стейта
                ships: action.ships,
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_STATUS:  // кейс задания статуса игры
           // console.log("SET_STATUS", action.currentStatus)
            stateCopy = {
                ...state, // копия всего стейта
                currentStatus: action.currentStatus
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_SHIPS_SUNK:  // кейс увеличения количества потопленых кораблей
            stateCopy = {
                ...state, // копия всего стейта
                shipsSunk: state.shipsSunk + 1
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_GENERATED_SHIP:  // кейс загрузки очередного сгенерированного корабля
           // console.log(action.generatedShip)
            stateCopy = {
                ...state, // копия всего стейта
                ships: [...state.ships,action.generatedShip] // добавление новых сгенерированных кораблей
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_MAIN_FIELD:  // кейс задания сгенерированного поля боя
          //  console.log(action.MainField )
            stateCopy = {
                ...state, // копия всего стейта
                MainField: action.MainField
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_GUESS:  // кейс задания выстрела
          //  console.log(action.MainField )
            stateCopy = {
                ...state, // копия всего стейта
                guess: action.guess
            }
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default dataReducer;










