import React, { useEffect, useState } from 'react';
import './Main.css';

// mui imports
import SearchIcon from '@mui/icons-material/Search';
import GavelIcon from '@mui/icons-material/Gavel';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Main() {
    return (
        <div className='main base2_background'>
            <div className='main__header'>
                <div className='main__headerTop'>
                    <img className='main__headerLogo' src={process.env.PUBLIC_URL + '/images/ROUND_logo_white.png'} alt=''/>
                    <div className='main__headerTopCenter'>
                        <p className='main__headerTopCenterEdge poppins-semibold'>EDGE</p>
                        <p className='main__headerTopCenterDescription poppins-regular'>End-to-End Medical Data Provider</p>
                    </div>
                    <div className='main__headerTopUserIcon point1_background'>
                        <p className='poppins-semibold'>HJ</p>
                    </div>
                </div>

                <div className='main__headerSlogan'>
                    <p className='poppins-semibold'>Best Healthcare Data You Can Find</p>
                    <p className='poppins-semibold'>De-identified, Model optimized</p>
                </div>

                <div className='main__headerDetails'>
                    <div className='main__headerDetail base3_background'>
                        <div className='main__headerDetailIcon'>
                            <div className='main__headerDetailIconBox point2_background' />
                            <div className='main__headerDetailIconMain'><SearchIcon className='point1_color' preserveAspectRatio="none"/></div>
                        </div>
                        <p className='main__headerDetailTitle poppins-semibold'>Access Data</p>
                        <p className='main__headerDetailDescription poppins-medium'>EDGE enables easy access toward medical datasets that were previously difficult to obtain</p>
                    </div>
                    <div className='main__headerDetail base3_background'>
                        <div className='main__headerDetailIcon'>
                            <div className='main__headerDetailIconBox point2_background' />
                            <div className='main__headerDetailIconMain'><GavelIcon className='point1_color' preserveAspectRatio="none"/></div>
                        </div>
                        <p className='main__headerDetailTitle poppins-semibold'>Legal Problems</p>
                        <p className='main__headerDetailDescription poppins-medium'>EDGE automates the steps of solving legal problems when gaining access towards medical datasets</p>
                    </div>
                    <div className='main__headerDetail base3_background'>
                        <div className='main__headerDetailIcon'>
                            <div className='main__headerDetailIconBox point2_background' />
                            <div className='main__headerDetailIconMain'><VisibilityIcon className='point1_color' preserveAspectRatio="none"/></div>
                        </div>
                        <p className='main__headerDetailTitle poppins-semibold'>Visualization</p>
                        <p className='main__headerDetailDescription poppins-medium'>EDGE provides high quality visualization / statistics of medical datasets to help specify codes</p>
                    </div>
                </div>
            </div>
            <img className='main__headerBackground' src={process.env.PUBLIC_URL + '/images/main_background.png'} alt=''/>
        </div>
    );
}

export default Main