import React from "react";
import "./SearchClosed.css";

// mui imports
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function SearchClosed({query}) {
    return (
        <div className="searchClosed base4_background searchBox">
            <KeyboardArrowRightIcon className="base1_color"/>
            <p>{query}</p>
        </div>
    );
}

export default SearchClosed