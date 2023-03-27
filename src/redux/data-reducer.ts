
/*
const SET_AAA = "myApp/bestChangeReducer/SET_BEST_CHANGE_DATA"; //константа задания данных с сервера
*/


/*
type setBestChangeDataActionType = { type: typeof SET_BEST_CHANGE_DATA, bestChangeData: Array<PairType> | null }
export const setBestChangeData = (bestChangeData: Array<PairType> | null): setBestChangeDataActionType => { // экшн задания данных с сервера
    return {type: SET_BEST_CHANGE_DATA, bestChangeData}
};
*/

type ActionTypes = any

type ShipType = {
    locations: Array<string> ,//["00", "00", "00"]
    hits: Array<string> // ["", "", ""]
}

type initialStateType = {
    boardSize: number,// размер клеток поля (пока заглушка)
    numShips: number, // количество кораблей (пока заглушка)
    shipLength: number, //длина кораблей (пока заглушка)
    shipsSunk: number, // сколько кораблей уже потоплено
    ships:Array<ShipType>
}
const initialState: initialStateType = { //стейт по умолчанию
    boardSize:7,
    numShips: 3,
    shipLength: 3,
    shipsSunk:0,
    ships: [ // данные по кораблям (положение на поле и массивы попаданий)
        { locations: ["06", "16", "26"], hits: ["", "", ""] },
        { locations: ["24", "34", "44"], hits: ["", "", ""] },
        { locations: ["10", "11", "12"], hits: ["", "", ""] }
    ]
}

const dataReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {//редьюсер
    let stateCopy: initialStateType; // объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
/*        case SET_AAA: // кейс задания ошибок формы
            stateCopy = {
                ...state, // копия всего стейта
            }
            return stateCopy; // возврат копии стейта после изменения*/
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

/*
export const getBestChangeDataTC //санкреатор получения данных из внешнего источника
    = (): ThunkAction<
        Promise<void>, // санка ничего не возвращает, void
        GlobalStateType, // тип глобального стейта из redux-store
        unknown, // доп аргументы
        ActionTypes // возможные типы экшенов этого редьюсера
        > => {
    return async (dispatch) => { // санка получения данных из внешнего источника
        const response2 = await api.getBestChangeData()  //получить данные из внешнего источника
        if (response2) {// если они не пустые
            dispatch({type: SET_BEST_CHANGE_DATA, bestChangeData:response2})  //записать считаное из localStorage значение темы в store
        }
    }
}

export const getBestChangeDataTC1 = () => {//санкреатор получения данных из внешнего источника
    return async (dispatch: Dispatch<ActionTypes>, getState: () => GlobalStateType) => { // санка получения данных из localStorage
        const response2 = await apiCommon.getData()
        dispatch(response2)  //записать считаное из localStorage значение темы в store
    }
}
*/


export default dataReducer;










