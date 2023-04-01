import {MainFieldType, setShipsSunkType, ShipType} from "../Types/commonTypes";
import {isSunk} from "./isSunk";
import {setMainFieldCommon} from "./setMainFieldCommon";
import {setMainField} from "../redux/data-reducer";

type fireType = (
    location: string,
    ships:Array<ShipType>,
    setStatus: (currentStatus:string)=>void,
    setShipsSunk: setShipsSunkType,
    setShips: (ships:Array<ShipType>)=> void,
    MainField: MainFieldType,
    guess: string,
    setMainField: (MainField: MainFieldType)=> void,

) => boolean

export const fire:fireType = (
    location, ships, setStatus, setShipsSunk, setShips,
    MainField, guess, setMainField) => {
    // проверка попадания по выбранному полю
    for (let i = 0; i < ships.length; i++) { // пробегаем массив ships
        const ship = ships[i]; // получить данные по текущему кораблю
        const locationIndex = ship.locations.indexOf(location); // поиск location в массиве позиций кораблей
        if (locationIndex >= 0) { //    если совпадает с одним из полей и попадание не повторно
            if ( ship.hits[locationIndex] === "hit") { // если эта часть корабля уже была потоплена раньше
                setStatus("В эту палубу уже попали!")
                return false // прервать выполнение функции
            }
            const shipsLocal = JSON.parse(JSON.stringify(ships)) // полная копия массива ships
            shipsLocal[i].hits[locationIndex] = "hit"// присвоить соответствующему полю hits
          //  console.log(shipsLocal)
            setShips(shipsLocal)
            setStatus("HIT")

            setMainFieldCommon(MainField, guess, "hit", setMainField)

            if (isSunk(shipsLocal[i])) { // если корабль потоплен (вернет true)
                setStatus("You sank my battleship!")
                setShipsSunk(); // увеличиваем счетчик потопленых корабелей на 1
            }
            return true // вернуть подтвержение попадание
        }
    }

    setMainFieldCommon(MainField, guess, "miss", setMainField)

    setStatus("MISS")

    return false // если условия не выполнились, попадания не было (MISS)
}
