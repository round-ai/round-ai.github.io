import React, { useEffect, useState } from 'react';
import "./RoundInteractiveSearch.css";

// mui imports
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import RoundChats from '../common/RoundChats';

// function imports

function RoundInteractiveSearch({start, onClickSearchInput, onClickDataset, onSubmitSearchQuery, chatList}) {
    const [query, setQuery] = useState("");

    const onChangeQuery = (event) => {
        setQuery(event.target.value)
    }

    const onSubmitQuery = (event) => {
        event.preventDefault()
        onSubmitSearchQuery({
            "role": "user",
            "content": query
        })
        setQuery("")
    }

    return (
        <div className='roundInteractiveSearch'>
            <div className={`roundInteractiveSearch__title ${start? "roundInteractiveSearch__title--hide" : "roundInteractiveSearch__title--show"}`}>
                <p className="poppins-medium">Search your dataset, Interact with ROUND!</p>
            </div>
            <div className={`roundInteractiveSearch__body ${start ? "roundInteractiveSearch__body--start" : "roundInteractiveSearch__body--beforeStart"}`}>
                
                <div className={`roundInteractiveSearch__chatting ${start ? "roundInteractiveSearch__chatting--show" : "roundInteractiveSearch__chatting--hide"}`}>
                    <div className='roundInteractiveSearch__chattingWrap'><RoundChats chatList={chatList} onClickDataset={onClickDataset}/></div>
                </div>

                <div className={`${start? "roundInteractiveSearch__input--bottom" : "roundInteractiveSearch__input--center"} roundInteractiveSearch__input base3_background`} onClick={onClickSearchInput}>
                    <form onSubmit={onSubmitQuery} autoComplete='off'>
                        <input className='base1_color poppins-regular' name="query" placeholder="Search Your Dataset!" value={query} onChange={onChangeQuery}/>
                        <SendRoundedIcon type='submit' className='base4_color'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RoundInteractiveSearch