import {ShipType} from "../Types/commonTypes";

type generateShipType = (
    boardSizeL: number,
    shipLength: number
) => ShipType

export const generateShip:generateShipType = (boardSize, shipLength) => {
    //метод создает один корабль, находящийся в произвольном месте игрового
    // поля. При этом не исключено перекрытие с другими кораблями.
    const direction = Math.floor(Math.random()*2)// округлять вниз рендом для получения 1 и 0
    let row, col;
    if (direction === 1) { // горизонтальное размещение
        row = Math.floor(Math.random()*boardSize); // в любой строчке из boardSize
        col = Math.floor(Math.random()*(boardSize - shipLength)); // начальная колонка ограничена длиной корабля
        //console.log("Горизонтально", row, col)
    } else { // сгенерировать вериткальное размещение
        row = Math.floor(Math.random()*(boardSize - shipLength)); // начальный ряд ограничен длиной корабля
        col = Math.floor(Math.random()*boardSize); // в любой колонке из boardSize
        //console.log("Вертикально", row, col)
    }
    const locations:Array<string> = []; // массив позиций корабля (пока пустой)
    const hits:Array<""|"hit"> = []; // массив попаданий в корабль (пока пустой)
    for (let i = 0; i< shipLength; i++) {// цикл до длины корабля
        if (direction === 1) { // сформировать позиции горизонтального корабля
            locations.push(row + "" + (col + i))
        } else { // сформировать позиции вертикального корабля
            locations.push((row  + i)  + "" + col)
        }
        hits.push("")
    }
   // console.log({locations, hits})
    return {locations, hits} // возврат сгенерированных позиций корабля
}