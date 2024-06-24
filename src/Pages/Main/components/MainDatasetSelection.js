import React from "react";
import "./MainDatasetSelection.css";

// function imports
import SearchOpen from "./SearchOpen";
import SearchClosed from "./SearchClosed";
import MainSelection from "./MainSelection";

function MainDatasetSelection({searchHistory, selections}) {
    return (
        <div className="mainDatasetSelection">
            <div className="mainDatasetSelection__selections">
                {
                    selections.map(selection => {
                        return (
                            <div className="mainDatasetSelection__selection">
                                <MainSelection image={selection["image"]} name={selection["name"]}/>
                            </div>
                        );
                    })
                }
            </div>
            <div className="mainDatasetSelection__history">
                {
                    searchHistory.map(search => {
                        if(search["isOpen"]) {
                            return <SearchOpen query={search["query"]} datasets={search["datasets"]}/>
                        }
                        else {
                            return <SearchClosed query={search["query"]} />
                        }
                    })
                }
            </div>
        </div>
    );
}

export default MainDatasetSelection