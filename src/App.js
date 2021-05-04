import './App.css';
import {useEffect, useReducer, useState} from 'react';
import axios from "axios";
import {Auth} from "./components/auth";
import {reducer} from "./reducer";
import {CarPage} from "./components/CarPage";
import {Header} from "./components/Header";
import {Route} from "react-router-dom";
import {About} from "./components/About";
import {Loader} from "./components/Loader";
import {CarShowRoomPage} from "./components/CarShowRoomPage";
import {OneShowRoomPage} from "./components/OneShowRoomPage";
import {CarCreate} from "./components/CarCreate";
import {CarUpdate} from "./components/CarUpdate";
import {ShowRoomCreate} from "./components/ShowRoomCreate";
import Bills from "./components/Bills";

function App() {
    const [state, dispatch] = useReducer(reducer, {});
    const [auth, setAuth] = useState(false);
    const [loader, setLoader] = useState(true)
    window.state = state;
    useEffect(() => {
        if (localStorage.getItem("login") === "admin") {
            setAuth(true)
        }
        axios.get('http://localhost:3000/api/orders/').then((response) => {
            dispatch({type: "ADD_DATA_ORDERS", payload: response.data})
        })
        axios.get('http://localhost:3000/api/dishes/').then((response) => {
            dispatch({type: "ADD_DATA_DISH", payload: response.data})
            console.log(response)
        })
        setLoader(false)
    }, [])
    if (loader) {
        return <Loader/>
    }
    const isAuth = (!localStorage.getItem("login") === "admin" || !auth)
    return (
        <div className="App">
            {!isAuth && <Header setAuth={setAuth}/>}
            <div className="container">
                {isAuth ? <Auth setAuth={setAuth}/> :
                    <Route path={'/dishes'} render={() => <CarPage dispatch={dispatch} state={state.cars} />}/>}
                {!isAuth && <Route path={'/carcreate'} exact
                                   render={() => <CarCreate dispatch={dispatch} state={state.orders}/>}/>}
                {!isAuth && <Route path={'/showroomcreate'} exact
                                   render={() => <ShowRoomCreate dispatch={dispatch}/>}/>}
                {!isAuth && <Route path={'/carupdate'} exact
                                   render={() => <CarUpdate dispatch={dispatch} dataCar={state.createPage}/>}/>}
                {!isAuth && <Route path={'/carshowroom'} exact
                                   render={() => <CarShowRoomPage dispatch={dispatch} state={state.orders}/>}/>}
                {!isAuth &&
                <Route path={'/carshowroom/:id'}
                       render={() => <OneShowRoomPage state={state.oneShowRoom} dispatch={dispatch}/>}/>}
                {!isAuth && <Route path={'/bills'} render={() => <Bills/>}/>}
                {!isAuth && <Route path={'/about'} render={() => <About/>}/>}
                {!isAuth &&
                <Route path={"/"} exact render={() => <div className="row justify-content-center">
                    <div className="col-6">
                        <h2 className={"text-white mt-5 text-center"}>Информационно-справочная система ресторана</h2>
                        <img width={'600px'}
                             src="./kaif.jpg" alt=""/>
                    </div>
                </div>}/>}
            </div>
        </div>
    );
}

export default App;
