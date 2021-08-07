import React from 'react';

export default function NavBar() {

    return (
        <div className="navbar">
            <div className="navbar__head">
                <h1 className="navbar__title">Flights</h1>
            </div>
            <div className="navbar__menu">
                <div className="navbar__menuitem navbar__menuitem_state-active">Favourites</div>
                <div className="navbar__menuitem">Browse</div>
            </div>
        </div>
    )
}
