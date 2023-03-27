import React, {useEffect} from "react";
import {connect} from "react-redux";
import {GlobalStateType} from "../redux/store-redux";
import {setFire} from "../redux/data-reducer";
type SeaBattleContainerType = {
    setFire: (guess: string) => void
}
const SeaBattleContainer: React.FC<SeaBattleContainerType> = ({setFire}) => {
    useEffect(()=>{
        setFire("12")
    },[])
    return <div>
        333
    </div>
}
type mapStateToPropsType = {

}
type mapDispatchToPropsType = {
    setFire: (guess: string) => void
}
const mapStateToProps = (state: GlobalStateType) => {
    return {

    }
}
export default connect<
    mapStateToPropsType, // тип mapStateToProps
    mapDispatchToPropsType, // тип mapDispatchToProps
    unknown, // тип входящих пропсов от родителя
    GlobalStateType // глобальный стейт из стора
    >(mapStateToProps, {
    setFire// отправить координаты выстрела на проверку попадания
})(SeaBattleContainer)

