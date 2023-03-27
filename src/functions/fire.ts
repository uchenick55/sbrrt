import {ShipType} from "../Types/commonTypes";
import {isSunk} from "./isSunk";

type fireType = (
    guess: string,
    ships:Array<ShipType>,
    shipsSunk: number
) => boolean

export const fire:fireType = (guess, ships, shipsSunk) => {
    // проверка попадания по выбранному полю
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
