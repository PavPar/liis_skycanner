import { toDate } from 'date-fns';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { format } from 'date-fns'

export default function Card({ isAlreadyLiked = false, onCardClick, onCardLike, cardData = {} }) {
    const [isLiked, setLiked] = useState(isAlreadyLiked)

    useEffect(()=>{
        setLiked(isAlreadyLiked);
    },[isAlreadyLiked])
    
    const {
        price,
        departureDate,
        departureTime,
        destination,
        origin,
        originAirport,
        carrier } = cardData;

    function handleCardLike(e) {
        setLiked(!isLiked)
        onCardLike({ isLiked: !isLiked, cardData })
        e.stopPropagation();
    }

    function formatPrice(price = 0) {
        return price.toLocaleString({ style: 'currency' }) + ' ₽'
    }

    function formatTime(time = "00:00") {
        const parsedTime = time.split(":")
        return `${parsedTime[0]}:${parsedTime[1]}`
    }

    function formatDate(date = 0) {
        return format(new Date(date), 'dd MMM, yyyy')
    }
    return (
        <div className="card" onClick={()=>{onCardClick({cardData,isLiked})}}>
            <div className="card__like">
                <button className={`btn btn_type-like ${isLiked ? "btn_type-like_state-active " : ""}`} onClick={handleCardLike}></button>
            </div>
            <div className="card__head">
                <div className="card__image"></div>
                <div className="card__textbox card__textbox_sep-multiple">
                    <p className="card__title">{origin}</p>
                    <p className="card__textseperator"></p>
                    <p className="card__title">{destination}</p>
                </div>
                <div className="card__textbox card__textbox_sep-multiple">
                    <p className="card__subtitle">{originAirport}</p>
                    <p className="card__textseperator card__textseperator_sep-multiple"></p>
                    <p className="card__subtitle">{formatDate(departureDate)}</p>
                    <p className="card__textseperator card__textseperator_sep-multiple"></p>
                    <p className="card__subtitle">{formatTime(departureTime)}</p>
                </div>
                <p className="card__subtitle">{carrier}</p>
            </div>
            <hr className="card__breakline"></hr>
            <div className="card__body">
                <div className="card__textbox">
                    <p className="card__text card__text_font-abel card__text_size-small">Price:</p>
                    <p className="card__text card__text_size-large">{`${formatPrice(price)}`}</p>
                </div>
            </div>
        </div>
    )
}
