import React from "react";
import "./RoundSelection.css";

// mui icon
import CloseIcon from '@mui/icons-material/Close';

function RoundSelection({onDeleteSelection, image, name}) {
    return (
        <div className="roundSelection">
            <div onClick={onDeleteSelection} className="roundSelection__closeIcon base3_background">
                <CloseIcon className="base4_color"/>
            </div>
            <img src={image} alt=""/>
            <p>{name}</p>
        </div>
    )
}

export default RoundSelection