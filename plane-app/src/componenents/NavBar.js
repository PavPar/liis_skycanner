import React, { useState } from 'react';

export default function NavBar({setDisplayLiked}) {
    const [showLiked,setShowLiked] = useState(false);

    function handleShowLiked(display){
        setShowLiked(display)
        setDisplayLiked(display)
    }
    return (
        <div className="navbar">
            <div className="navbar__head">
                <h1 className="navbar__title">Flights</h1>
            </div>
            <div className="navbar__menu">
                <div onClick={()=>{handleShowLiked(true)}} className={`navbar__menuitem ${showLiked?"navbar__menuitem_state-active":""}`}>Favourites</div>
                <div onClick={()=>{handleShowLiked(false)}} className={`navbar__menuitem ${!showLiked?"navbar__menuitem_state-active":""}`}>Browse</div>
            </div>
        </div>
    )
}
