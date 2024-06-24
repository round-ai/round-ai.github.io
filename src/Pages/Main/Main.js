import React, { useEffect, useState } from 'react';
import './Main.css';

// mui imports
import SearchIcon from '@mui/icons-material/Search';
import CodeIcon from '@mui/icons-material/Code';
import { Button } from "@mui/material";

// component imports
import Chats from "../../Common/Chats";
import MainDatasetSelection from './components/MainDatasetSelection';


function Main() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setScrolled(window.scrollY > 1)
            );
        }
    }, []);

    return (
        <div className="main">
            <div className={`main__header ${scrolled ? "main__header--scrolled base2_background" : "main__header--unscrolled"} main__headerTransition`}>
                <div className="main__headerLogo">
                    <img src={process.env.PUBLIC_URL + '/images/ROUND_logo_white.png'} alt=""/>
                </div>
                <div className="main__headerCenter">
                    <img src={process.env.PUBLIC_URL+'/images/ROUND_logo_white_3.png'} alt=""/>
                    <p>End-to-End Data Preparation Service</p>
                </div>
                <div className="main__headerUserIcon base1_background">
                    <p className="point1_color">HJ</p>
                </div>
            </div>

            <div className="main__designBox point2_background"></div>

            <div className="main__slogan">
                <p className="poppins-medium">Stop Wasting Time Searching</p>
                <p className="poppins-medium">Gather High Quality Dataset Now</p>
            </div>

            <div className="main__shortExplanations">
                <div className="main__shortExplanation">
                    <SearchIcon className="svg_icon point1_color"/>
                    <p>Interactive</p>
                    <p>Search</p>
                </div>
                <div className="main__shortExplanation point1_color">
                    <CodeIcon className="svg_icon"/>
                    <p>Automatic</p>
                    <p>Preprocessing</p>
                </div>
            </div>

            <div className="main__techIntroduction">
                <div className="main__interactiveSearch main__bodyContentContainer">
                    <p className="poppins-medium">Search your dataset, Interact with ROUND!</p>
                    <div className="main__chats main__content">
                        <Chats chatList={[
                            {
                                "role": "user",
                                "content": "I want image dataset."
                            },
                            {
                                "role": "assistant",
                                "content": "What type of images are you looking for (e.g. objects, scenes, faces, medical, etc.)?"
                            },
                            {
                                "role": "user",
                                "content": "Image Segmentation Dataset"
                            },
                            {
                                "role": "search",
                                "content": "Search results for \"Image Segmentation Dataset\"",
                                "datasets": [
                                    {
                                        "image": process.env.PUBLIC_URL + '/datasets/LSPet.png',
                                        "name": "LSPet",
                                        "description": "CVPR 2020, SNU AI Lab",
                                        "selected": false
                                    },
                                    {
                                        "image": process.env.PUBLIC_URL + '/datasets/COCO.png',
                                        "name": "COCO",
                                        "description": "CVPR 2020, SNU AI Lab",
                                        "selected": true
                                    },
                                    {
                                        "image": process.env.PUBLIC_URL + '/datasets/BEHAVE.png',
                                        "name": "BEHAVE",
                                        "description": "CVPR 2020, SNU AI Lab",
                                        "selected": false
                                    }
                                ]
                            },
                            {
                                "role": "enterBox",
                                "content": "Search Your Dataset!"
                            }
                        ]} />
                    </div>
                </div>

                <div className="main__datasetSelection main__bodyContentContainer">
                    <p className="poppins-medium">Select dataset from search history</p>
                    <div className="main__searchHistory main__content">
                        <MainDatasetSelection searchHistory={[
                            {
                                "query": "Image Dataset",
                                "datasets": [
                                    {
                                        "name": "LSPet",
                                        "image": process.env.PUBLIC_URL + '/images/ROUND_logo_white.png',
                                        "description": "CVPR 2020, SNU AI Lab",
                                        "selected": false
                                    },
                                ],
                                "isOpen": false
                            },
                            {
                                "query": "Image Segmentation Dataset",
                                "datasets": [
                                    {
                                        "image": process.env.PUBLIC_URL + '/datasets/LSPet.png',
                                        "name": "LSPet",
                                        "description": "CVPR 2020, SNU AI Lab",
                                        "selected": false
                                    },
                                    {
                                        "image": process.env.PUBLIC_URL + '/datasets/COCO.png',
                                        "name": "COCO",
                                        "description": "CVPR 2020, SNU AI Lab",
                                        "selected": true
                                    },
                                    {
                                        "image": process.env.PUBLIC_URL + '/datasets/BEHAVE.png',
                                        "name": "BEHAVE",
                                        "description": "CVPR 2020, SNU AI Lab",
                                        "selected": false
                                    }
                                ],
                                "isOpen": true
                            },
                            {
                                "query": "Animal Segmentation Dataset",
                                "datasets": [
                                    {
                                        "name": "LSPet",
                                        "image": process.env.PUBLIC_URL + '/images/ROUND_logo_white.png',
                                        "description": "CVPR 2020, SNU AI Lab",
                                        "selected": false
                                    },
                                ],
                                "isOpen": false
                            },
                        ]} selections={[
                            {
                                "name": "LSPet",
                                "image": process.env.PUBLIC_URL + '/datasets/LSPet.png',
                            },
                            {
                                "name": "COCO",
                                "image": process.env.PUBLIC_URL + '/datasets/COCO.png',
                            },
                            {
                                "name": "BEHAVE",
                                "image": process.env.PUBLIC_URL + '/datasets/BEHAVE.png',
                            }
                        ]}/>
                    </div>
                </div>

                <div className="main__interactivePreprocessing main__bodyContentContainer">
                    <p className="poppins-medium">Explain ROUND how to preprocess data</p>
                    <div className="main__preprocessingContent main__content">
                        <div className="main__preprocessingChats">
                            <Chats chatList={[
                                {
                                    "role": "user",
                                    "content": "image height 100"
                                },
                                {
                                    "role": "assistant",
                                    "content": "What type of preprocessing would you like to perform on your dataset (e.g. resizing, normalization, data augmentation)?"
                                },
                                {
                                    "role": "user",
                                    "content": "i want flip, rotate"
                                },
                                {
                                    "role": "enterBox",
                                    "content": "Enter message"
                                }
                            ]} />
                        </div>
                        <div className="main__preprocessProperties point1_background">
                            <p className="main__preprocessPropertyTitle">Preprocess Properties</p>
                            <p className="main__preprocessPropertyBody">
                                - Image height: 100
                                <br />
                                - Preprocessing: Flip, Rotate
                            </p>
                        </div>
                    </div>
                </div>

                <div className="main__startButton main__bodyContentContainer">
                    <Button href="/round">Start ROUND!</Button>
                </div>
            </div>
        </div>
    );
}

export default Main