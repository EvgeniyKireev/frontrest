import {useState, useEffect} from 'react';
import {Loader} from "./Loader";
import {Tablecar} from "./Tablecar";
import {NavLink} from "react-router-dom";

export const CarPage = ({state, dispatch, onDelete, showrooms}) => {
    const [loader, setLoader] = useState(true)
    const [masters, setMasters] = useState();
    const [bool, setBool] = useState(false);
    useEffect(() => {
            setMasters(state)
        },
        [state])
    if (state) {
        setTimeout(() => {
            setLoader(false)
        }, 500)
    }
    let updateMastersList = (e) => {
        const pattern = e.target.value;

        if (pattern && pattern !== "") {
            let newMastersList = [];

            state.forEach(m => {
                if (m.dish.toLowerCase().indexOf(pattern.toLowerCase()) !== -1)
                    newMastersList.push(m);
            })

            setMasters(newMastersList)
        } else {
            setMasters(state)
        }
    }
    return (<div className={'text-white'}>
        <NavLink to={'/carcreate'}>
            <button type="button" className="btn btn-light mt-5">Добавить блюдо</button>
        </NavLink>
        <div class={"row my-4"}><div className="col-3"><input disabled={!state}  placeholder={"Введите название блюда"} className={"form-control"} type="text"
                                                              onChange={updateMastersList}/></div></div>
        <div className="row d-flex justify-content-end">
            <button style={{marginRight: "5px"}} disabled={!state} type="button" className="btn-sm btn-light col-2" onClick={() => {
                masters.sort((a, b) => a.price > b.price ? 1 : -1)
                console.log(masters);
                setBool(!bool);
            }}>Цена: низкая -> высокая
            </button>
            <button disabled={!state} type="button" className="btn btn-light ml-auto col-2" onClick={() => {
                masters.sort((a, b) => a.price < b.price ? 1 : -1)
                console.log(masters);
                setBool(!bool);
            }}>Цена: высокая -> низкая
            </button>
        </div>
        <table className="table table-hover table-dark mt-2">
            <thead>
            <tr>
                <th scope="col">Блюдо</th>
                <th scope="col">Категория</th>
                <th scope="col">Описание блюда</th>
                <th scope="col">Каллорийность</th>
                <th scope="col">Вес</th>
                <th scope="col">Цена</th>
                <th scope="col">Аллергия</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {masters && masters.map(el => <Tablecar onDelete={onDelete} dispatch={dispatch} key={el.id} el={el}/>)}
            </tbody>
        </table>
    </div>)
}