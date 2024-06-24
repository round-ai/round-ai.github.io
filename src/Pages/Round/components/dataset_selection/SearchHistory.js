import React, { useEffect, useState } from 'react';
import "./SearchHistory.css";
import Dataset from "../../../../Common/Dataset";

// mui imports
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function SearchHistory({onClickDataset, datasets, query}) {
    const [open, setOpen] = useState(false);

    const onClickSearchHistory = () => {
        setOpen(!open)
    }

    return (
        <div className={`searchHistory ${open ? "searchHistory--open point1_background" : "searchHistory--closed base4_background"}`}>
            <div onClick={onClickSearchHistory} className="searchHistory__header">
                <div className={`base1_color searchHistory__arrow ${open ? "searchHistory__arrow--rotate" : "searchHistory__arrow--origin"}`}><KeyboardArrowRightIcon/></div>
                <p>{query}</p>
            </div>
            <div className={`searchHistory__datasets ${open ? "searchHistory__datasets--open" : "searchHistory__datasets--closed"}`}>
                {
                    datasets.map((dataset, index) => {
                        return (
                            <div onClick={() => {onClickDataset(index)}} className="searchHistory__dataset">
                                <Dataset image={process.env.PUBLIC_URL + "/" + dataset["image"]} name={dataset["name"]} description={dataset["description"]} selected={dataset["selected"]}/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SearchHistory