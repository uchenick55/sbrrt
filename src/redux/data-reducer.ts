
import {MainFieldType, ShipType} from "../Types/commonTypes";

const FIRE = "sbrrt/dataReducer/FIRE"; //константа выстрела

export type fireActionType = { type: typeof FIRE, guess: string}
export const setFire = (guess: string): fireActionType => { // экшн получения данных выстрела
    return {type: FIRE, guess}
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


const SET_MAIN_FIELD  = "sbrrt/dataReducer/SET_MAIN_FIELD "; //константа задания сгенерированного поля боя

export type setMainFieldType  = { type: typeof SET_MAIN_FIELD, MainField: MainFieldType}
export const setMainField = (MainField: MainFieldType): setMainFieldType => { // экшн задания сгенерированного поля боя
    return {type: SET_MAIN_FIELD, MainField}
};



type ActionTypes = fireActionType | setStatusActionType | setShipsSunkActionType |
    setGeneratedShipActionType | setMainFieldType

type initialStateType = {
    boardSize: number,// размер клеток поля
    numShips: number, // количество кораблей
    shipLength: number, //длина кораблей
    shipsSunk: number, // сколько кораблей уже потоплено
    ships:Array<ShipType>,
    currentStatus: string,
    MainField: MainFieldType

}
const initialState: initialStateType = { //стейт по умолчанию
    boardSize:7,// размер клеток поля
    numShips: 3,// количество кораблей
    shipLength: 3,//длина кораблей
    shipsSunk:0, // сколько кораблей уже потоплено
    ships: [], // данные по кораблям (положение на поле и массивы попаданий)
    currentStatus: "",
    // @ts-ignore
    MainField: []/*
        [
            {
                "x": 0,
                "y": 0,
                "cellStatus": ""
            },
            {
                "x": 1,
                "y": 0,
                "cellStatus": ""
            },
            {
                "x": 2,
                "y": 0,
                "cellStatus": ""
            },
            {
                "x": 3,
                "y": 0,
                "cellStatus": ""
            },
            {
                "x": 4,
                "y": 0,
                "cellStatus": ""
            },
            {
                "x": 5,
                "y": 0,
                "cellStatus": ""
            },
            {
                "x": 6,
                "y": 0,
                "cellStatus": ""
            }
        ],
        [
            {
                "x": 0,
                "y": 1,
                "cellStatus": ""
            },
            {
                "x": 1,
                "y": 1,
                "cellStatus": ""
            },
            {
                "x": 2,
                "y": 1,
                "cellStatus": ""
            },
            {
                "x": 3,
                "y": 1,
                "cellStatus": ""
            },
            {
                "x": 4,
                "y": 1,
                "cellStatus": ""
            },
            {
                "x": 5,
                "y": 1,
                "cellStatus": ""
            },
            {
                "x": 6,
                "y": 1,
                "cellStatus": ""
            }
        ],
        [
            {
                "x": 0,
                "y": 2,
                "cellStatus": ""
            },
            {
                "x": 1,
                "y": 2,
                "cellStatus": ""
            },
            {
                "x": 2,
                "y": 2,
                "cellStatus": ""
            },
            {
                "x": 3,
                "y": 2,
                "cellStatus": ""
            },
            {
                "x": 4,
                "y": 2,
                "cellStatus": ""
            },
            {
                "x": 5,
                "y": 2,
                "cellStatus": ""
            },
            {
                "x": 6,
                "y": 2,
                "cellStatus": ""
            }
        ],
        [
            {
                "x": 0,
                "y": 3,
                "cellStatus": ""
            },
            {
                "x": 1,
                "y": 3,
                "cellStatus": ""
            },
            {
                "x": 2,
                "y": 3,
                "cellStatus": ""
            },
            {
                "x": 3,
                "y": 3,
                "cellStatus": ""
            },
            {
                "x": 4,
                "y": 3,
                "cellStatus": ""
            },
            {
                "x": 5,
                "y": 3,
                "cellStatus": ""
            },
            {
                "x": 6,
                "y": 3,
                "cellStatus": ""
            }
        ],
        [
            {
                "x": 0,
                "y": 4,
                "cellStatus": ""
            },
            {
                "x": 1,
                "y": 4,
                "cellStatus": ""
            },
            {
                "x": 2,
                "y": 4,
                "cellStatus": ""
            },
            {
                "x": 3,
                "y": 4,
                "cellStatus": ""
            },
            {
                "x": 4,
                "y": 4,
                "cellStatus": ""
            },
            {
                "x": 5,
                "y": 4,
                "cellStatus": ""
            },
            {
                "x": 6,
                "y": 4,
                "cellStatus": ""
            }
        ],
        [
            {
                "x": 0,
                "y": 5,
                "cellStatus": ""
            },
            {
                "x": 1,
                "y": 5,
                "cellStatus": ""
            },
            {
                "x": 2,
                "y": 5,
                "cellStatus": ""
            },
            {
                "x": 3,
                "y": 5,
                "cellStatus": ""
            },
            {
                "x": 4,
                "y": 5,
                "cellStatus": ""
            },
            {
                "x": 5,
                "y": 5,
                "cellStatus": ""
            },
            {
                "x": 6,
                "y": 5,
                "cellStatus": ""
            }
        ],
        [
            {
                "x": 0,
                "y": 6,
                "cellStatus": ""
            },
            {
                "x": 1,
                "y": 6,
                "cellStatus": ""
            },
            {
                "x": 2,
                "y": 6,
                "cellStatus": ""
            },
            {
                "x": 3,
                "y": 6,
                "cellStatus": ""
            },
            {
                "x": 4,
                "y": 6,
                "cellStatus": ""
            },
            {
                "x": 5,
                "y": 6,
                "cellStatus": ""
            },
            {
                "x": 6,
                "y": 6,
                "cellStatus": ""
            }
        ]*/

}

const dataReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {//редьюсер
    let stateCopy: initialStateType; // объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case FIRE:  // кейс задания ошибок формы
            //console.log("FIRE!", action.guess)
            stateCopy = {
                ...state, // копия всего стейта
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
            console.log(action.MainField )
            stateCopy = {
                ...state, // копия всего стейта
                MainField: action.MainField
            }
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default dataReducer;










