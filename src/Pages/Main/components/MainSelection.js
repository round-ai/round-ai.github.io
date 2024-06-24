import React from "react";
import "./MainSelection.css";

// mui icon
import CloseIcon from '@mui/icons-material/Close';

function MainSelection({image, name}) {
    return (
        <div className="mainSelection">
            <div className="mainSelection__closeIcon base3_background">
                <CloseIcon className="base4_color"/>
            </div>
            <img src={image} alt=""/>
            <p>{name}</p>
        </div>
    )
}

export default MainSelection