import {Loader} from "./Loader";
import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

export const CarCreate = ({state, dispatch}) => {
    let history = useHistory();
    console.log(!state)
    const [formState, setFormState] = useState({
        dish: "",
        category: "",
        description: "",
        calories: "",
        weight: "",
        price: "",
        allergic: false
    });
    const onCreateDish = () => {
        axios.post("http://localhost:3000/api/dishes", formState).then(response => {
            dispatch({type: "ADD_DATA_DISH", payload: response.data})
        });
        alert("Блюдо добавлено")
        history.push("/dishes")
    }
    const validate = formState.model && formState.color && formState.category && formState.power &&
        formState.price && formState.year && formState.showroom_id.id &&
        formState.year > 1900 && formState.year <= 2021 && formState.power > 0 && formState.power <= 3000
    return (<div className={"row justify-content-center mt-5"}>
        <h2 className="row text-white justify-content-center">Обновить информацию о автомобиле</h2>
        <div className="row justify-content-center">
            <div className=" col-4 form-group">
                <label htmlFor="model">Блюдо</label>
                <input type="text" className="form-control mt-1" id="model" placeholder="Борщ"
                       onChange={e => {
                           setFormState({...formState, dish: e.target.value})
                       }} value={formState.dish}/>
            </div>
        </div>
        <div className="row mt-2 justify-content-center">
            <div className=" col-4 form-group">
                <label htmlFor="color">Категория</label>
                <input type="text" className="form-control mt-1" id="color" placeholder="Суп"
                       value={formState.category}
                       onChange={e => {
                           setFormState({...formState, category: e.target.value})
                       }}
                />
            </div>
        </div>
        <div className="row mt-2 justify-content-center">
            <div className=" col-4 form-group">
                <label htmlFor="color">Описание</label>
                <input type="text" className="form-control mt-1" id="color" placeholder="красный борщ"
                       value={formState.description}
                       onChange={e => {
                           setFormState({...formState, description: e.target.value})
                       }}
                />
            </div>
        </div>
        <div className="row mt-2 justify-content-center">
            <div className=" col-4 form-group">
                <label>Цена</label>
                <input type="number" className="form-control mt-1" placeholder="1000"
                       value={formState.price}
                       onChange={e => {
                           setFormState({...formState, price: e.target.value})
                       }}
                />
                {!(formState.price > 0 && formState.price <= 3000) &&
                <div style={{color: "red", fontSize: "10px"}}>Не более 3000</div>}
            </div>
        </div>
        <div className="row mt-2 justify-content-center">
            <div className=" col-4 form-group">
                <label>Вес</label>
                <input type="number" className="form-control mt-1" placeholder="100"
                       value={formState.weight}
                       onChange={e => {
                           setFormState({...formState, weight: e.target.value})
                       }}
                />
            </div>
        </div>
        <div className="row mt-2 justify-content-center">
            <div className=" col-4 form-group">
                <label>Каллорийность</label>
                <input type={"number"} className="form-control mt-1" placehold
                       value={formState.calories}
                       onChange={e => {
                           setFormState({...formState, calories: e.target.value})
                       }}
                />
                {!(formState.calories > 0 && formState.calories <= 10000) &&
                <div style={{color: "red", fontSize: "10px"}}> Неверный год</div>}
            </div>
        </div>
        <div className="row mt-3 justify-content-center">
            <div className=" col-4 form-group">
                <input type="checkbox" className="form-check-input" checked={formState.allergic} onChange={e => {
                    setFormState({...formState, allergic: e.target.checked})
                }} id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Аллергия</label>
            </div>
        </div>

        <div className="row mt-5 justify-content-center">
            <button onClick={onCreateDish} type="button"
                    className="btn btn-light col-3 btn-sm">добавить
            </button>
        </div>
    </div>);
}