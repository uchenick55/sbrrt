import React, {useEffect} from "react";
import {connect} from "react-redux";
import {GlobalStateType} from "../redux/store-redux";
import {processGuess} from "../functions/processGuess";
import {setShipsSunkType, ShipType} from "../Types/commonTypes";
import {setShipsSunk, setStatus} from "../redux/data-reducer";
type SeaBattleContainerType = {
    boardSize: number,
    ships:Array<ShipType>,
    shipsSunk: number,
    numShips:number,
    setStatus:  (currentStatus:string)=>void
    setShipsSunk: setShipsSunkType
}
const SeaBattleContainer: React.FC<SeaBattleContainerType> = ({boardSize, ships, shipsSunk,numShips, setStatus, setShipsSunk}) => {
    useEffect(()=>{
        console.clear()
        processGuessLocal("A6")
        processGuessLocal("B6")
        processGuessLocal("C6")
        processGuessLocal("C4")
        processGuessLocal("D4")
        processGuessLocal("E4")
        processGuessLocal("B0")
/*        processGuessLocal("B1")
        processGuessLocal("B2")*/
    },[])

    type processGuessLocalType = (guess: string)  => void
        // локальная функция, принимающая только координаты выстрела
    const processGuessLocal:processGuessLocalType = (guess) => {
        processGuess(guess, boardSize, ships, shipsSunk, numShips, setStatus, setShipsSunk)
    }

    return <div>
        {shipsSunk}
    </div>
}

type mapDispatchToPropsType = {
    setStatus:  (currentStatus:string)=>void
    setShipsSunk: setShipsSunkType

}
type mapStateToPropsType = {
    boardSize: number,
    ships:Array<ShipType>,
    shipsSunk: number,
    numShips:number
}
const mapStateToProps = (state: GlobalStateType) => {
    return {
        boardSize: state.mainData.boardSize,
        ships: state.mainData.ships,
        shipsSunk: state.mainData.shipsSunk,
        numShips: state.mainData.numShips
    }
}
export default connect<
    mapStateToPropsType, // тип mapStateToProps
    mapDispatchToPropsType, // тип mapDispatchToProps
    unknown, // тип входящих пропсов от родителя
    GlobalStateType // глобальный стейт из стора
    >(mapStateToProps, { setStatus, setShipsSunk
})(SeaBattleContainer)

