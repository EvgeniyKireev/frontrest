import axios from "axios";
import {useHistory} from "react-router";
export const TableCarShowRoom = ({el,dispatch}) => {
    let history = useHistory();
    const onShowRoom = () => {
        history.push(`/bills`)
    }
    return (<tr onClick={onShowRoom}>
        <td>{el.table_id}</td>
        <td>{el.waiter_name}</td>
        <td>{el.customer_name}</td>
        <td>{el.total}</td>
    </tr>)
}