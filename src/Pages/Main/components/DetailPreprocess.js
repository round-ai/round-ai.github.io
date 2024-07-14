import React, { useEffect, useState } from 'react';
import './DetailPreprocess.css';

// mui imports
import CodeIcon from '@mui/icons-material/Code';

function DetailPreprocess() {
    return (
        <div className='detailPreprocess'>
            <div className='detailPreprocess__title'>
                <p className='detailPreprocess__titleMain poppins-semibold'>Submit Custom Pre-processing Code</p>
                <p className='detailPreprocess__titleSub poppins-semibold point1_color'>Example pre-processing code and dataset details are given by EDGE!</p>
            </div>

            <div className='detailPreprocess__body'>
                <div className='detailPreprocess__bodyHeader point2_background'>
                    <p className='ibm-plex-mono-medium'>Example Code</p>
                    <CodeIcon className='base1_color'/>
                </div>
                <div className='detailPreprocess__bodyCodes base3_background'>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>1</p>
                        <p className='ibm-plex-mono-medium'><span className='codeColor1'>def</span> <span className='codeColor8'>remove_constant_pixels</span><span className='codeColor2'>(</span><span className='codeColor3'>pixels_df</span><span className='codeColor2'>)</span>:</p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>2</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'><span className='codeColor6'>"""Removes from the images the pixels that have a constant intensity</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>3</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'><span className='codeColor6'>value, either always black (0) or white (255)</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>4</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'><span className='codeColor6'>Returns the cleared dataset & the list of the removed pixels (columns)"""</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>5</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>6</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'><span className='codeColor7'># Remove the pixels that are always black to compute faster</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>7</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'>changing_pixels_df = pixels_df.loc<span className='codeColor2'>[</span>:<span className='codeColor2'>]</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>8</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'>dropped_pixels_b = <span className='codeColor2'>[]</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>9</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>10</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'><span className='codeColor7'># Pixels with max value=0 are pixels that never change</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>11</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'><span className='codeColor5'>for</span> col <span className='codeColor1'>in</span> pixels_df:</p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>12</p>
                        <p className='ibm-plex-mono-medium codeLine--tab2'><span className='codeColor5'>if</span> changing_pixels_df<span className='codeColor2'>[</span>col<span className='codeColor2'>]</span>.max<span className='codeColor2'>()</span> == <span className='codeColor4'>0</span>:</p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>13</p>
                        <p className='ibm-plex-mono-medium codeLine--tab3'>changing_pixels_df.drop<span className='codeColor2'>(</span>columns=<span className='codeColor5'>[</span>col<span className='codeColor5'>]</span>, inplace=<span className='codeColor1'>True</span><span className='codeColor2'>)</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>14</p>
                        <p className='ibm-plex-mono-medium codeLine--tab3'>dropped_pixels_b.append<span className='codeColor2'>(</span>col<span className='codeColor2'>)</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>15</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'><span className='codeColor8'>print</span><span className='codeColor2'>(</span><span className='codeColor6'>"Constantly black pixels that have been dropped: {"{}"}"</span>.format<span className='codeColor5'>(</span>dropped_pixels_b<span className='codeColor5'>)</span><span className='codeColor2'>)</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>16</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>17</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'><span className='codeColor7'># Same with pixels with min=255 (white pixels)</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>18</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'>dropped_pixels_w = <span className='codeColor2'>[]</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>19</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'><span className='codeColor5'>for</span> col <span className='codeColor1'>in</span> changing_pixels_df:</p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>20</p>
                        <p className='ibm-plex-mono-medium codeLine--tab2'><span className='codeColor5'>if</span> changing_pixels_df<span className='codeColor2'>[</span>col<span className='codeColor2'>]</span>.min<span className='codeColor2'>()</span> == <span className='codeColor4'>255</span>:</p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>21</p>
                        <p className='ibm-plex-mono-medium codeLine--tab3'>changing_pixels_df.drop<span className='codeColor2'>(</span>columns=<span className='codeColor5'>[</span>col<span className='codeColor5'>]</span>, inplace=<span className='codeColor1'>True</span><span className='codeColor2'>)</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>22</p>
                        <p className='ibm-plex-mono-medium codeLine--tab3'>dropped_pixels_w.append<span className='codeColor2'>(</span>col<span className='codeColor2'>)</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>23</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'><span className='codeColor8'>print</span><span className='codeColor2'>(</span><span className='codeColor6'>"\n Constantly white pixels that have been dropped: {"{}"}"</span>.format<span className='codeColor5'>(</span>dropped_pixels_w<span className='codeColor5'>)</span><span className='codeColor2'>)</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>24</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>25</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'><span className='codeColor8'>print</span><span className='codeColor2'>(</span>changing_pixels_df.head<span className='codeColor5'>()</span><span className='codeColor2'>)</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>26</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'><span className='codeColor8'>print</span><span className='codeColor2'>(</span><span className='codeColor6'>"Remaining pixels: {"{}"}"</span>.format<span className='codeColor5'>(</span>len<span className='codeColor1'>(</span>changing_pixels_df.columns<span className='codeColor1'>)</span><span className='codeColor5'>)</span><span className='codeColor2'>)</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>27</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'><span className='codeColor8'>print</span><span className='codeColor2'>(</span><span className='codeColor6'>"Pixels removed: {"{}"}"</span>.format<span className='codeColor5'>(</span><span className='codeColor4'>784</span>-len<span className='codeColor1'>(</span>changing_pixels_df.columns<span className='codeColor1'>)</span><span className='codeColor5'>)</span><span className='codeColor2'>)</span></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>28</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'></p>
                    </div>
                    <div className='detailPreprocess__bodyCodeLine'>
                        <p className='detailPreprocess__bodyCodeLineNumber ibm-plex-mono-medium'>29</p>
                        <p className='ibm-plex-mono-medium codeLine--tab1'><span className='codeColor5'>return</span> changing_pixels_df, dropped_pixels_b + dropped_pixels_w</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPreprocess;