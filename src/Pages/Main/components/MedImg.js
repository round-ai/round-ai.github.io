{/* <MedImg imgSrc={'dataset1.png'} title={'SNU Hospital Dataset'} caption={'by Seoul National University Hospital'} category={['MRI','Spine']} ></MedImg> */}

import React from 'react';
import './MedImg.css';

function MedImg({imgSrc, title, caption, category}) {
    return (
        <div className="medImgContainer">
            <img src={process.env.PUBLIC_URL+imgSrc} alt="Medical" />
            <div className="medImgoContainer__text">
                <div className="medImgContainer__title">
                    <p>{title}</p>
                </div>
                <div className="medImgContainer__caption">
                    <p>{caption}</p>
                </div>
                <div className="medImgContainer__category">
                    {category.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MedImg;