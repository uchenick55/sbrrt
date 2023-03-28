import {ShipType} from "../Types/commonTypes";

type collisionType = (
    locations: Array<string>,
    numShips: number,
    ships:Array<ShipType>,
) => boolean
export const collision:collisionType = (locations, numShips,ships) => {
    // метод получает один корабль и проверяет, что тот не перекрывается с кораблями,
    // уже находящимися на игровом поле.
    for (let i = 0; i< numShips; i++) { // пробегаем все корабли из
        const ship = ships[i];
        for (let j = 0; j< locations.length; j++) {
            if (ship.locations.indexOf(locations[j])>=0) {
                return true // найдены пересечения кораблей, необходимо повторить генерацию корабля
            }
        }
    }
    //   console.log(locations)
    return false // пересечений кораблей не нацйдены, можно генерировать следующий корабль
}