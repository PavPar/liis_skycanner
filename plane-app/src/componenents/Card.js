import React from 'react';

export default function Card() {

    return (
        <div className="card">
            <div className="card__like">
                <button className="btn btn_type-like"></button>
            </div>
            <div className="card__head">
                <div className="card__image"></div>
                <div className="card__textbox card__textbox_sep-multiple">
                    <p className="card__title">Moscow</p>
                    <p className="card__textseperator"></p>
                    <p className="card__title">New York</p>
                </div>
                <div className="card__textbox card__textbox_sep-multiple">
                    <p className="card__subtitle">VKO</p>
                    <p className="card__textseperator card__textseperator_sep-multiple"></p>
                    <p className="card__subtitle">28 June, 2020</p>
                    <p className="card__textseperator card__textseperator_sep-multiple"></p>
                    <p className="card__subtitle">14:50</p>
                </div>
                <p className="card__subtitle">Aeroflot</p>
            </div>
            <hr className="card__breakline"></hr>
            <div className="card__body">
                <div className="card__textbox">
                    <p className="card__text card__text_font-abel card__text_size-small">Price:</p>
                    <p className="card__text card__text_size-large">23 924 ₽</p>
                </div>
            </div>
        </div>
    )
}
