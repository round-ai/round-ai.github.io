import React from "react";
import "./Dataset.css";

// mui imports
import CheckIcon from '@mui/icons-material/Check';

function Dataset({image, name, description, selected}) {
    return (
        <div className={`dataset ${selected ? "dataset--selected point2_background" : ""}`}>
            <div className={`dataset__checkIcon ${selected ? "dataset__checkIcon--selected" : "dataset__checkIcon--unselected"}`}>
                <CheckIcon className="point1_color"/>
            </div>
            <img className={`dataset__image ${selected ? "dataset__image--selected" : ""}`} src={image} alt=""/>
            <p className="dataset__name">{name}</p>
            <p className="dataset__description">{description}</p>
        </div>
    );
}

export default Dataset