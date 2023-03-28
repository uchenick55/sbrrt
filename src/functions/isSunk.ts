import {ShipType} from "../Types/commonTypes";

type isSunkType = (
    ship: ShipType,
) => boolean

export const isSunk:isSunkType = (ship)=> { // корабль потоплен?
    for (let i = 0; i <= ship.hits.length; i++) {// пробегаем по массиву hits выбранного корабля
        if (ship.hits[i] === "") { // если хотя бы одну часть корабля не попали,
            return false // возвращаем false (корабль не поттоплен)
        }
    }
    return true // иначе возвращаем true (проверяемый корабль потоплен)
}
