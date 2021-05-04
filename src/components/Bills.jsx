import React from 'react';

function Bills(props) {
    return (
        <div className={"text-white"}>
            <div className="row mt-5 text-center">
                <h5>Номер стола: 5</h5>
            </div>
            <div className="row text-center">
                <h5>Официант: Антон Башун</h5>
            </div>
            <div className="row text-center">
                <h5>Клиент: Юля Петрова</h5>
            </div>
            <div className="row mt-5 text-center">
                <h5>Блюда: <br/>Суп с гренками 900
                <br/>
                    Салат "Цезарь" 800
                    <br/>
                    Напиток "Свежесть" 200
                </h5>
            </div>
            <div className="row"></div>
            <div className="row mt-2 text-center">
                <h5>Итого: 1900 рублей</h5>
            </div>
        </div>
    );
}

export default Bills;