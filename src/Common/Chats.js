import React from "react";
import "./Chats.css";

// mui imports
import SendRoundedIcon from '@mui/icons-material/SendRounded';

// function imports
import Dataset from "./Dataset";

function UserChat({content}) {
    return (
        <div className="userChat chat base3_background">
            <p>{content}</p>
        </div>
    )
}

function AssistantChat({content}) {
    return (
        <div className="assistantChat chat base4_background">
            <img alt="" src={process.env.PUBLIC_URL + '/images/ROUND_logo_white.png'}/>
            <p>{content}</p>
        </div>
    )
}

function SearchChat({content, datasets}) {
    return (
        <div className="searchChat chat point1_background">
            <img alt="" src={process.env.PUBLIC_URL + '/images/ROUND_logo_white.png'}/>
            <p>{content}</p>
            <div className="searchChat__datasets">
                {
                    datasets.map(dataset => {
                        return (
                            <div className="searchChat__dataset">
                                <Dataset image={dataset["image"]} name={dataset["name"]} description={dataset["description"]} selected={dataset["selected"]}/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

function EnterBox({content}) {
    return (
        <div className="enterBox base3_background">
            <p className="base4_color">{content}</p>
            <SendRoundedIcon className="base4_color"/>
        </div>
    )
}

function Chats({chatList}) {
    return (
        <div className="chats">
            {
                chatList.map(chat => {
                    if(chat["role"] === "user") {
                        return <UserChat content={chat["content"]}/>
                    }
                    else if(chat["role"] === "assistant") {
                        return <AssistantChat content={chat["content"]}/>
                    }
                    else if(chat["role"] === "search") {
                        return <SearchChat content={chat["content"]} datasets={chat["datasets"]}/>
                    }
                    else if(chat["role"] === "enterBox") {
                        return <EnterBox content={chat["content"]}/>
                    }
                    else {
                        return <p>error</p>
                    }
                })
            }
        </div>
    );
}

export default Chats