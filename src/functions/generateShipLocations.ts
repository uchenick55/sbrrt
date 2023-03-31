import {generateShip} from "./generateShip";
import {collision} from "./collision";
import {ShipType} from "../Types/commonTypes";
import {useState} from "react";

type generateShipLocationsType = (
    numShips: number,
    boardSizeL: number,
    shipLength: number,
    setGeneratedShip: (generatedShip: ShipType)=> void

) => void
export const generateShipLocations:generateShipLocationsType = (numShips,boardSize, shipLength,setGeneratedShip) => {
    //основной метод. Создает в модели массив ships с количеством
    // кораблей, определяемым свойством numShips модели
    let shipLocal: ShipType;
    const shipsLocal1:  Array<ShipType> = []; // временная переменная, содержащая все сгенерированные корабли
    for (let i = 0; i<numShips; i++) { // сгенерировать количество кораблей равное numShips
        do {// выполнять в цикле
            shipLocal = generateShip(boardSize, shipLength) // сгенерировать корабль до тех пор
        } while (collision(shipLocal, numShips, shipsLocal1 )) // пока collision не вернет false (нет пересечений)
        shipsLocal1.push(shipLocal) // добавить сгенерированный уникальный корабль во временный массив для проверки повторений
        setGeneratedShip(shipLocal) // добавить сгенерированный корабль в массив до капа
    }
}