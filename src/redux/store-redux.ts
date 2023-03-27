import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleWare from 'redux-thunk'; // thunkMiddleWare позволяет диспатчить санки помимо экшенов дл обновления стейта
import dataReducer from "./data-reducer";

const reducers = combineReducers({ // объединяем стейт редьюсеров в один объект store
    mainData: dataReducer, // стейт данных с сервера
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// возможность пользоваться reduxdevtools - только для разработки

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleWare)//ApplyMiddleWare позволяет сделать прослойку между UI и редьюсером, чтобы можно было диспатчить не только экшены, но и санки.
));

type reducersType = typeof reducers
export type GlobalStateType = ReturnType<reducersType> // глобальный тип стейта

// @ts-ignore
window.store = store; // возможность смотреть стор через консоль - только для разработки
// @ts-ignore
export default store;