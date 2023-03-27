
import {ShipType} from "../Types/commonTypes";

type fireType = (
    uess: any,
    ships:Array<ShipType>,
    isSunk: (ship:ShipType)=>boolean,
    shipsSunk: number
) => boolean

const fire:fireType = (guess, ships, isSunk, shipsSunk) => { // проверка попадания по выбранному полю
    for (var i = 0; i < ships.length; i++) { // пробегаем массив ships
        var ship = ships[i]; // получить данные по текущему кораблю
        var locationIndex = ship.locations.indexOf(guess); // поиск guess в массиве позиций кораблей
        if (locationIndex >= 0) { //    если совпадает с одним из полей и попадание не повторно
            if ( ship.hits[locationIndex] === "hit") { // если эта часть корабля уже была потоплена раньше
                // view.displayMessage("Эта часть корабля уже была потоплена")
                return false // прервать выполнение функции
            }
            ship.hits[locationIndex] = "hit"; // присвоить соответствующему полю hits
            //  view.displayHit(guess)// отобразить попадания в корабли
            //  view.displayMessage("HIT")
            if (isSunk(ship)) { // если корабль потоплен (вернет true)
                //    ships[i].isSunk=true
                //    view.displayMessage("You sank my battleship!")
                shipsSunk++; // увеличиваем счетчик потопленых корабелей на 1
            }
            return true // вернуть подтвержение попадание
        }
    }

    // view.displayMiss(guess)// отобразить промахи мимо кораблей
    //view.displayMessage("MISS")
    return false // если условия не выполнились, попадания не было (MISS)
}

const FIRE = "sbrrt/dataReducer/FIRE"; //константа выстрела

type fireActionType = { type: typeof FIRE, guess: string}
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

            stateCopy = {
                ...state, // копия всего стейта
            }
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default dataReducer;










