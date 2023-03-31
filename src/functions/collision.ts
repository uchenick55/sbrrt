import {ShipType} from "../Types/commonTypes";

type collisionType = (
    shipLocal: ShipType,
    numShips: number,
    shipsLocal1: Array<ShipType>
) => boolean
export const collision:collisionType = (shipLocal, numShips, shipsLocal1) => {
    // метод получает один корабль и проверяет, что тот не перекрывается с кораблями,
    // уже находящимися на игровом поле.
    //console.log(shipLocal)
    for (let i = 0; i< numShips; i++) { // пробегаем все корабли
        const ship = shipsLocal1[i];
        for (let j = 0; j< shipLocal.locations.length; j++) {
            if (ship && ship.locations.indexOf(shipLocal.locations[j])>=0) {
                return true // найдены пересечения кораблей, необходимо повторить генерацию корабля
            }
        }
    }
    //console.log(shipLocal)
    return false // пересечений кораблей не найдены, можно генерировать следующий корабль
}