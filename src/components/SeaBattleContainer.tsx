import React, {useEffect} from "react";
import {connect} from "react-redux";
import {GlobalStateType} from "../redux/store-redux";
import {processGuess} from "../functions/processGuess";
import {MainFieldType, setShipsSunkType, ShipType} from "../Types/commonTypes";
import {setShips, setGeneratedShip, setMainField, setShipsSunk, setStatus} from "../redux/data-reducer";
import {generateShipLocations} from "../functions/generateShipLocations";
import Preloader from "./common/Preloader";
import SeaBattle from "./SeaBattle";
import {generateMainField} from "../functions/generateMainField";
type SeaBattleContainerType = {
    boardSize: number,
    ships:Array<ShipType>,
    shipsSunk: number,
    numShips:number,
    setStatus:  (currentStatus:string)=>void,
    setShipsSunk: setShipsSunkType,
    shipLength: number,
    setGeneratedShip: (generatedShip: ShipType)=> void,
    setMainField: (MainField: MainFieldType)=> void,
    MainField: MainFieldType,
    setShips: (ships:Array<ShipType>)=> void,
    currentStatus: string

}
const SeaBattleContainer: React.FC<SeaBattleContainerType> = (
    {boardSize, ships, shipsSunk,numShips, setStatus,
        setShipsSunk, shipLength, setGeneratedShip, setMainField, MainField, setShips, currentStatus}
    ) => {

    useEffect(()=>{
        setMainField(generateMainField(boardSize)) // сгенерировать пустое поле боя
        generateShipLocations(numShips, boardSize, shipLength, setGeneratedShip)// сгенерировать положение кораблей
    },[])

    useEffect(()=>{
        if (shipsSunk === numShips) { // если попали, и количество потопленных кораблей достигла порога
            setStatus("Вы потопили все корабли") // сообщение о потоплении всех кораблей
        }
    }, [shipsSunk, numShips ])

    type processGuessLocalType = (guess: string)  => void
        // локальная функция, принимающая только координаты выстрела
    const processGuessLocal:processGuessLocalType = (guess) => {
        processGuess(guess, boardSize, ships, shipsSunk, numShips, setStatus, setShipsSunk, setShips)

    }

    return <div>
        <SeaBattle MainField={MainField}
                   processGuessLocal = {processGuessLocal}
                   currentStatus={currentStatus}
        />
    </div>
}

type mapStateToPropsType = {
    boardSize: number,
    ships:Array<ShipType>,
    shipsSunk: number,
    numShips:number,
    shipLength: number,
    MainField: MainFieldType,
    currentStatus: string
}
const mapStateToProps = (state: GlobalStateType) => {
    return {
        boardSize: state.mainData.boardSize,
        ships: state.mainData.ships,
        shipsSunk: state.mainData.shipsSunk,
        numShips: state.mainData.numShips,
        shipLength: state.mainData.shipLength,
        MainField: state.mainData.MainField,
        currentStatus: state.mainData.currentStatus
    }
}
type mapDispatchToPropsType = {
    setStatus:  (currentStatus:string)=>void
    setShipsSunk: setShipsSunkType
    setGeneratedShip: (generatedShip: ShipType)=> void
    setMainField: (MainField: MainFieldType)=> void
    setShips: (ships:Array<ShipType>)=> void
}
export default connect<
    mapStateToPropsType, // тип mapStateToProps
    mapDispatchToPropsType, // тип mapDispatchToProps
    unknown, // тип входящих пропсов от родителя
    GlobalStateType // глобальный стейт из стора
    >(mapStateToProps, { setStatus, setShipsSunk, setGeneratedShip, setMainField, setShips
})(SeaBattleContainer)

