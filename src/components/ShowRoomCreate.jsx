import {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

export const ShowRoomCreate = ({state, dispatch}) => {
    let history = useHistory();
    const [formState, setFormState] = useState({
        customer_name: "",
        customer_surname: "",
        table_id: "",
        total: "",
        waiter_name: "",
        waiter_surname: ""

    });

    const onCreateShowRoom = () => {
        axios.post("http://localhost:3000/api/orders", formState).then(response => {
            dispatch({type: "ADD_DATA_ORDERS", payload: response.data})
        });
        alert("Заказ добавлен!")
        history.push("/carshowroom")
    }
    let validatePhone = (phone) => {
        let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        return regex.test(phone);
    }
    // const validate = formState.name && formState.address && formState.phone && formState.workingHours && validatePhone(formState.phone)
    return (<div className={"row justify-content-center mt-5"}>
        <h2 className="row text-white justify-content-center">Добавить новый заказ</h2>
        <div className="row justify-content-center">
            <div className=" col-4 form-group">
                <label htmlFor="name">Имя официанта</label>
                <input type="text" className="form-control mt-1" id="name" placeholder="Имя официантаa"
                       onChange={e => {
                           setFormState({...formState, customer_name: e.target.value})
                       }} value={formState.customer_name}/>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className=" col-4 form-group">
                <label htmlFor="name">Фамилия официанта</label>
                <input type="text" className="form-control mt-1" id="name" placeholder="Фамилия официанта"
                       onChange={e => {
                           setFormState({...formState, customer_surname: e.target.value})
                       }} value={formState.customer_surname}/>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className=" col-4 form-group">
                <label htmlFor="name">Имя клиента</label>
                <input type="text" className="form-control mt-1" id="name" placeholder="Имя клиента"
                       onChange={e => {
                           setFormState({...formState, waiter_name: e.target.value})
                       }} value={formState.waiter_name}/>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className=" col-4 form-group">
                <label htmlFor="name">Фамилия клиента</label>
                <input type="text" className="form-control mt-1" id="name" placeholder="Фамилия клиента"
                       onChange={e => {
                           setFormState({...formState, waiter_surname: e.target.value})
                       }} value={formState.waiter_surname}/>
            </div>
        </div>
        <div className="row mt-2 justify-content-center">
            <div className=" col-4 form-group">
                <label htmlFor="address">Номер стола</label>
                <input type="text" className="form-control mt-1" id="address" placeholder="Номер стола"
                       value={formState.table_id}
                       onChange={e => {
                           setFormState({...formState, table_id: e.target.value})
                       }}
                />
            </div>
        </div>
        <div className="row mt-2 justify-content-center">
            <div className=" col-4 form-group">
                <label>Итого</label>
                <input type="text" className="form-control mt-1" placeholder="12000"
                       value={formState.total}
                       onChange={e => {
                           setFormState({...formState, total: e.target.value})
                       }}
                />
            </div>
        </div>

        <div className="row mt-5 justify-content-center">
            <button onClick={onCreateShowRoom} type="button"
                    className="btn btn-light col-3 btn-sm">Добавить новый заказ
            </button>
        </div>
    </div>);
}