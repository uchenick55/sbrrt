import {generateShip} from "./generateShip";
import {collision} from "./collision";
import {ShipType} from "../Types/commonTypes";

type generateShipLocationsType = (
    numShips: number,
    ships:Array<ShipType>,
    boardSizeL: number,
    shipLength: number

) => void
export const generateShipLocations:generateShipLocationsType = (numShips, ships,boardSize, shipLength) => {
    //основной метод. Создает в модели массив ships с количеством
    // кораблей, определяемым свойством numShips модели
    var locations;
    for (var i = 0; i<numShips; i++) { // сгенерировать количество кораблей равное numShips
        do {// выполнять в цикле
            locations = generateShip(boardSize, shipLength) // сгенерировать корабль
        } while (collision(locations, numShips, ships)) // пока collision не вернет false (нет пересечений)
        ships[i].locations = locations
    }
}