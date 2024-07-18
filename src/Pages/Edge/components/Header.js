import React from "react";

function Header () {

    return (
        <div className="header">
            <img className='main__headerLogo' src={process.env.PUBLIC_URL + '/images/ROUND_logo_white.png'} alt=''/>
        </div>
    )
}

export default Header;