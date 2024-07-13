import React, { useEffect, useState } from 'react';
import './DetailLaw.css';

// mui imports
import CheckIcon from '@mui/icons-material/Check';

function DetailLaw() {
    return (
        <div className='detailLaw'>
            <div className='detailLaw__title'>
                <p className='detailLaw__titleMain poppins-semibold'>Check to Agree with Legal Terms</p>
                <p className='detailLaw__titleSub poppins-semibold point1_color'>EDGE consulted with 100+ medical lawyers to make this possible</p>
            </div>

            <div className='detailLaw__body'>
                <div className='detailLaw__bodyTerms'>
                    <div className='detailLaw__bodyTerm'>
                        <div className='detailLaw__bodyTermHeader base3_background'>
                            <div className='detailLaw__bodyTermHeaderCheck'><CheckIcon className='point1_color' /></div>
                            <div className='detailLaw__bodyTermHeaderCheckbox base1_background' />
                            <p className='detailLaw__bodyTermName'>Legal Term 1</p>
                        </div>
                        <div className='detailLaw__bodyTermContent base4_background'>
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                        </div>
                    </div>

                    <div className='detailLaw__bodyTerm'>
                        <div className='detailLaw__bodyTermHeader base3_background'>
                            <div className='detailLaw__bodyTermHeaderCheck'><CheckIcon className='point1_color' /></div>
                            <div className='detailLaw__bodyTermHeaderCheckbox base1_background' />
                            <p className='detailLaw__bodyTermName'>Legal Term 2</p>
                        </div>
                        <div className='detailLaw__bodyTermContent base4_background'>
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                        </div>
                    </div>

                    <div className='detailLaw__bodyTerm'>
                        <div className='detailLaw__bodyTermHeader base3_background'>
                            <div className='detailLaw__bodyTermHeaderCheck'><CheckIcon className='point1_color' /></div>
                            <div className='detailLaw__bodyTermHeaderCheckbox base1_background' />
                            <p className='detailLaw__bodyTermName'>Legal Term 3</p>
                        </div>
                        <div className='detailLaw__bodyTermContent base4_background'>
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailLaw;