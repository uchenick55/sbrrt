import React, {useEffect} from "react";
import {connect} from "react-redux";
import {GlobalStateType} from "../redux/store-redux";
import {processGuess} from "../functions/processGuess";
import {setShipsSunkType, ShipType} from "../Types/commonTypes";
import {setGeneratedShip, setShipsSunk, setStatus} from "../redux/data-reducer";
import {generateShipLocations} from "../functions/generateShipLocations";
import Preloader from "./common/Preloader";
import SeaBattle from "./SeaBattle";
type SeaBattleContainerType = {
    boardSize: number,
    ships:Array<ShipType>,
    shipsSunk: number,
    numShips:number,
    setStatus:  (currentStatus:string)=>void,
    setShipsSunk: setShipsSunkType,
    shipLength: number
    setGeneratedShip: (generatedShip: ShipType)=> void
}
const SeaBattleContainer: React.FC<SeaBattleContainerType> = (
    {boardSize, ships, shipsSunk,numShips, setStatus, setShipsSunk, shipLength, setGeneratedShip}
    ) => {
    useEffect(()=>{
        console.clear()
        generateShipLocations(numShips, ships,boardSize, shipLength, setGeneratedShip)
        /*processGuessLocal("A6")
        processGuessLocal("B6")
        processGuessLocal("C6")
        processGuessLocal("C4")
        processGuessLocal("D4")
        processGuessLocal("E4")
        processGuessLocal("B0")
        processGuessLocal("B1")
        processGuessLocal("B2")*/
    },[])

    type processGuessLocalType = (guess: string)  => void
        // локальная функция, принимающая только координаты выстрела
    const processGuessLocal:processGuessLocalType = (guess) => {
        processGuess(guess, boardSize, ships, shipsSunk, numShips, setStatus, setShipsSunk)
    }

    return <div>
        <SeaBattle/>
    </div>
}

type mapStateToPropsType = {
    boardSize: number,
    ships:Array<ShipType>,
    shipsSunk: number,
    numShips:number,
    shipLength: number
}
const mapStateToProps = (state: GlobalStateType) => {
    return {
        boardSize: state.mainData.boardSize,
        ships: state.mainData.ships,
        shipsSunk: state.mainData.shipsSunk,
        numShips: state.mainData.numShips,
        shipLength: state.mainData.shipLength,
    }
}
type mapDispatchToPropsType = {
    setStatus:  (currentStatus:string)=>void
    setShipsSunk: setShipsSunkType
    setGeneratedShip: (generatedShip: ShipType)=> void
}
export default connect<
    mapStateToPropsType, // тип mapStateToProps
    mapDispatchToPropsType, // тип mapDispatchToProps
    unknown, // тип входящих пропсов от родителя
    GlobalStateType // глобальный стейт из стора
    >(mapStateToProps, { setStatus, setShipsSunk, setGeneratedShip
})(SeaBattleContainer)

