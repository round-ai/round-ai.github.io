import React from "react";
import "./SearchOpen.css";

// mui icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Dataset from "../../../Common/Dataset";

function SearchOpen({query, datasets}) {
    return (
        <div className="searchOpen point1_background searchBox">
            <div className="searchOpen__header">
                <KeyboardArrowDownIcon className="base1_color"/>
                <p>{query}</p>
            </div>
            <div className="searchOpen__datasets">
                {
                    datasets.map(dataset => {
                        return (
                            <div className="searchOpen__dataset">
                                <Dataset image={dataset["image"]} name={dataset["name"]} description={dataset["description"]} selected={dataset["selected"]}/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SearchOpen