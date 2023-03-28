import {generateShip} from "./generateShip";
import {collision} from "./collision";
import {ShipType} from "../Types/commonTypes";

type generateShipLocationsType = (
    numShips: number,
    ships:Array<ShipType>,
    boardSizeL: number,
    shipLength: number,
    setGeneratedShip: (generatedShip: ShipType)=> void

) => void
export const generateShipLocations:generateShipLocationsType = (numShips, ships,boardSize, shipLength,setGeneratedShip) => {
    //основной метод. Создает в модели массив ships с количеством
    // кораблей, определяемым свойством numShips модели
    var shipLocal: ShipType;
    for (var i = 0; i<numShips; i++) { // сгенерировать количество кораблей равное numShips
        do {// выполнять в цикле
            shipLocal = generateShip(boardSize, shipLength) // сгенерировать корабль
        } while (collision(shipLocal, numShips, ships)) // пока collision не вернет false (нет пересечений)
       // console.log(shipLocal)
        setGeneratedShip(shipLocal) // добавить сгенерированный корабль в массив до капа
    }

}