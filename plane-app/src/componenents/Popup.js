import React, { useEffect } from 'react';
import {useState} from 'react';
import image from '../images/popup-background.png'
import { format } from 'date-fns'
import image1 from '../images/image-1.png'
import image2 from '../images/image-2.png'
import image3 from '../images/image-3.jpg'
export default function Popup({displayingCardData={}, isVisible, handleClose, onCardLike }) {
    const {isLiked,cardData} = displayingCardData
    const [isCardLiked, setCardLiked] = useState(isLiked)

    useEffect(()=>{
        setCardLiked(displayingCardData.isLiked)
    },[displayingCardData])

    function handleCardLike(e) {
        setCardLiked(!isLiked)
        onCardLike({isLiked:!isLiked,cardData})//pass cardData
        e.stopPropagation();
    }

    const {
        price,
        departureDate,
        departureTime,
        destination,
        destinationAirport,
        origin,
        originAirport,
        QuoteTime
    } = cardData||{};

    function handleCardLike(e) {
        setCardLiked(!isCardLiked)
        onCardLike({ isLiked: !isCardLiked, cardData })
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
        <div className={`popup ${!isVisible ? "popup__visibility-none" : ""}`}>
            <img className="popup__background" src={image} onClick={handleClose}></img>
            <div className="popup__body">
                <div className="popup__like">
                    <button className={`btn btn_type-like ${isCardLiked ? "btn_type-like_state-active " : ""}`} onClick={handleCardLike}></button>
                </div>
                <div className="popup__header">
                    <ul className="popup__list">
                        <li className="popup__listelement popup__listelement_color-gray">{formatDate(departureDate)}</li>
                        <li className="popup__listelement popup__listelement_size-large popup__listelement_font-abel">{originAirport}</li>
                        <li className="popup__listelement popup__listelement_color-gray">{origin}</li>
                    </ul>
                    <div className="popup__separator popup__separator_type-shortarrow"></div>
                    <ul className="popup__list">
                        <li className="popup__listelement popup__listelement_color-gray">{formatTime(QuoteTime)}</li>
                        <li className="popup__listelement popup__listelement_size-large popup__listelement_font-abel">{destinationAirport}</li>
                        <li className="popup__listelement popup__listelement_color-gray">{destination}</li>
                    </ul>
                </div>
                <div className="popup__main">
                    <button className="btn btn_type-order">
                        <ul className="popup__list popup__list_pos-centered">
                            <li className="popup__listelement popup__listelement_color-white">Price</li>
                            <li className="popup__listelement popup__listelement_color-white popup__listelement_size-big  popup__listelement_font-abel popup__listelement_color-gray">{formatPrice(price)}</li>
                        </ul>
                        <div className="popup__separator popup__separator_type-box"></div>
                        <ul className="popup__list popup__list_pos-centered">
                            <li className="popup__listelement popup__listelement_color-white">Boarding</li>
                            <li className="popup__listelement popup__listelement_size-big popup__listelement_font-abel popup__listelement_color-white">{formatTime(departureTime)}</li>
                        </ul>

                    </button>
                    <div className="roundabout">
                        <img className="roundabout__image" src={image1}></img>
                        <img className="roundabout__image" src={image2}></img>
                        <img className="roundabout__image" src={image3}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
