
import {ShipType} from "../Types/commonTypes";

const FIRE = "sbrrt/dataReducer/FIRE"; //константа выстрела

export type fireActionType = { type: typeof FIRE, guess: string}
export const setFire = (guess: string): fireActionType => { // экшн получения данных выстрела
    return {type: FIRE, guess}
};
const SET_STATUS = "sbrrt/dataReducer/SET_STATUS"; //константа статуса игры

export type setStatusActionType = { type: typeof SET_STATUS, currentStatus: string}
export const setStatus = (currentStatus: string): setStatusActionType => { // экшн задания статуса текущего хода
    return {type: SET_STATUS, currentStatus}
};

type ActionTypes = fireActionType | setStatusActionType

type initialStateType = {
    boardSize: number,// размер клеток поля
    numShips: number, // количество кораблей
    shipLength: number, //длина кораблей
    shipsSunk: number, // сколько кораблей уже потоплено
    ships:Array<ShipType>,
    currentStatus: string

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
    ],
    currentStatus: ""
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
        case SET_STATUS:  // кейс задания статуса игры
            console.log("SET_STATUS", action.currentStatus)
            stateCopy = {
                ...state, // копия всего стейта
            }
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default dataReducer;










