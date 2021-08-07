import React from 'react';

export default function NavBar() {

    return (
        <div className="popup">
            <div className="popup__body">
                <div className="popup__like">
                    <div className="btn btn_type-like"></div>
                </div>
                <div className="popup__header">
                    <ul className="popup__list">
                        <li className="popup__listelement popup__listelement_color-gray">1 Aug, 2020</li>
                        <li className="popup__listelement popup__listelement_size-large popup__listelement_font-abel">SVO</li>
                        <li className="popup__listelement popup__listelement_color-gray">Moscow</li>
                    </ul>
                    <div className="popup__separator popup__separator_type-shortarrow"></div>
                    <ul className="popup__list">
                        <li className="popup__listelement popup__listelement_color-gray">11:45</li>
                        <li className="popup__listelement popup__listelement_size-large popup__listelement_font-abel">JFK</li>
                        <li className="popup__listelement popup__listelement_color-gray">New York City</li>
                    </ul>
                </div>
                <div className="popup__main">
                    <button className="btn btn_type-order">
                        <ul className="popup__list popup__list_pos-centered">
                            <li className="popup__listelement popup__listelement_color-white">Price</li>
                            <li className="popup__listelement popup__listelement_color-white popup__listelement_size-big  popup__listelement_font-abel popup__listelement_color-gray">23 311 ₽</li>
                        </ul>
                        <div className="popup__separator popup__separator_type-box"></div>
                        <ul className="popup__list popup__list_pos-centered">
                            <li className="popup__listelement popup__listelement_color-white">Boarding</li>
                            <li className="popup__listelement popup__listelement_size-big popup__listelement_font-abel popup__listelement_color-white">19:20</li>
                        </ul>
                        
                    </button>
                    <div className="roundabout">
                        <img className="roundabout__image"></img>
                        <img className="roundabout__image"></img>
                        <img className="roundabout__image"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
