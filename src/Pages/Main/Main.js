import React, { useEffect, useState } from 'react';
import './Main.css';

function Main() {
    const [query, setQuery] = useState("");

    const onChangeQuery = (e) => {
        setQuery(e.target.value);
        console.log(query)
    }

    return (
        <div className='main'>
            <div className='main__header base3_background'>
                <div className='main__headerLogo poppins-semibold base1_color'>
                    EDGE
                </div>
                <div className='main__headerDescription poppins-regular base1_color'>
                    Search
                </div>
            </div>

            <div className='main__title'>
                <div className='main__mainTitle poppins-semibold'>
                    Search Medical Datasets
                </div>
                <div className='main__subTitle poppins-semibold point2_color'>
                    Empower your model with medical datasets. EDGE will do the annoying part for you
                </div>
            </div>

            <div className='main__searchInput'>
                <input placeholder='What kind of data would you like to learn from?' value={query} onChange={onChangeQuery}></input>
            </div>
        </div>
    );
}

export default Main