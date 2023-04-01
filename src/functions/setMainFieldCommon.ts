import {MainFieldType} from "../Types/commonTypes";

type setMainFieldCommonType = (
    MainField: MainFieldType,
    guess:string,
    hitMiss:string,
    setMainField: (MainField: MainFieldType)=> void,

) => void
export const setMainFieldCommon:setMainFieldCommonType = (
    MainField, guess, hitMiss, setMainField) => {
    const MainFieldLocal: MainFieldType = JSON.parse(JSON.stringify(MainField)) // полная копия массива MainField
    MainFieldLocal.forEach(m1=>{
        m1.forEach(m2=>{
            const Aaa: string = m2.y + "" + m2.x
            if (Aaa === guess) {
                m2.cellStatus = hitMiss
                console.log("Aaa", Aaa, "m2.cellStatus", m2.cellStatus)
            }
        })
    })
    setMainField(MainFieldLocal)

}