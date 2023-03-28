import {setShipsSunkType, ShipType} from "../Types/commonTypes";
import {isSunk} from "./isSunk";

type fireType = (
    guess: string,
    ships:Array<ShipType>,
    setStatus: (currentStatus:string)=>void,
    setShipsSunk: setShipsSunkType
) => boolean

export const fire:fireType = (guess, ships, setStatus, setShipsSunk) => {
    // проверка попадания по выбранному полю
    for (let i = 0; i < ships.length; i++) { // пробегаем массив ships
        const ship = ships[i]; // получить данные по текущему кораблю
        const locationIndex = ship.locations.indexOf(guess); // поиск guess в массиве позиций кораблей
        if (locationIndex >= 0) { //    если совпадает с одним из полей и попадание не повторно
            if ( ship.hits[locationIndex] === "hit") { // если эта часть корабля уже была потоплена раньше
                setStatus("В эту палубу уже попали!")
                return false // прервать выполнение функции
            }
            ship.hits[locationIndex] = "hit"; // присвоить соответствующему полю hits
            setStatus("HIT")
            if (isSunk(ship)) { // если корабль потоплен (вернет true)
                setStatus("You sank my battleship!")
                setShipsSunk(); // увеличиваем счетчик потопленых корабелей на 1
            }
            return true // вернуть подтвержение попадание
        }
    }

    setStatus("MISS")

    return false // если условия не выполнились, попадания не было (MISS)
}
