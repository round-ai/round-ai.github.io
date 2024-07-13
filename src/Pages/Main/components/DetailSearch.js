import React, { useEffect, useState } from 'react';
import './DetailSearch.css';

// mui imports
import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from '@mui/icons-material/Check';

function DetailSearch() {
    return (
        <div className='detailSearch'>
            <div className='detailSearch__title'>
                <p className='detailSearch__titleMain poppins-semibold'>Search for Medical Datasets</p>
                <p className='detailSearch__titleSub poppins-semibold point1_color'>1000+ datasets from 100+ hospitals all over the world</p>
            </div>

            <div className='detailSearch__body'>
                <div className='detailSearch__bodyHeader base3_background'>
                    <p className='detailSearch__bodyHeaderLogo poppins-semibold'>EDGE</p>
                </div>

                <div className='detailSearch__bodyContent base1_background'>
                    <div className='detailSearch__bodySearchInput base3_background'>
                        <p className='detailSearch__bodySearchQuery poppins-medium'>MRI Datasets</p>
                        <SearchIcon className='base4_color' />
                    </div>

                    <div className='detailSearch__bodyContentTags'>
                        <div className='detailSearch__bodyContentTag base4_background'>
                            <p>Type: ALL</p>
                        </div>
                        <div className='detailSearch__bodyContentTag base4_background'>
                            <p>Body Part: ALL</p>
                        </div>
                        <div className='detailSearch__bodyContentTag base4_background'>
                            <p>Creator: ALL</p>
                        </div>
                    </div>

                    <div className='detailSearch__bodyContentDatasets'>
                        <div className='detailSearch__bodyContentDataset base4_background'>
                            <img src={process.env.PUBLIC_URL + '/medImages/dataset2.png'}/>
                            <div className='detailSearch__bodyContentDatasetDescription'>
                                <p className='detailSearch__bodyContentDatasetName'>SNU Hospital Dataset</p>
                                <p className='detailSearch__bodyContentDatasetCreator'>by SNU Hostpital</p>
                            </div>
                            <div className='detailSearch__bodyContentDatasetTags'>
                                <div className='detailSearch__bodyContentDatasetTag base3_background'>
                                    <p>MRI</p>
                                </div>
                                <div className='detailSearch__bodyContentDatasetTag base3_background'>
                                    <p>Spine</p>
                                </div>
                            </div>
                        </div>
                        <div className='detailSearch__bodyContentDataset point1_background'>
                            <CheckIcon className='detailSearch__bodyContentDatasetCheck point2_color'/>
                            <img className='detailSearch__bodyContentDatasetImage--selected' src={process.env.PUBLIC_URL + '/medImages/dataset1.png'}/>
                            <div className='detailSearch__bodyContentDatasetDescription'>
                                <p className='detailSearch__bodyContentDatasetName'>Healthline Dataset</p>
                                <p className='detailSearch__bodyContentDatasetCreator'>by SNU Hostpital</p>
                            </div>
                            <div className='detailSearch__bodyContentDatasetTags'>
                                <div className='detailSearch__bodyContentDatasetTag point2_background'>
                                    <p>MRI</p>
                                </div>
                                <div className='detailSearch__bodyContentDatasetTag point2_background'>
                                    <p>Brain</p>
                                </div>
                            </div>
                        </div>
                        <div className='detailSearch__bodyContentDataset base4_background'>
                            <img src={process.env.PUBLIC_URL + '/medImages/dataset2.png'}/>
                            <div className='detailSearch__bodyContentDatasetDescription'>
                                <p className='detailSearch__bodyContentDatasetName'>SNU Hospital Dataset</p>
                                <p className='detailSearch__bodyContentDatasetCreator'>by SNU Hostpital</p>
                            </div>
                            <div className='detailSearch__bodyContentDatasetTags'>
                                <div className='detailSearch__bodyContentDatasetTag base3_background'>
                                    <p>MRI</p>
                                </div>
                                <div className='detailSearch__bodyContentDatasetTag base3_background'>
                                    <p>Spine</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailSearch;