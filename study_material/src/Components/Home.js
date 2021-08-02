import React from 'react'
import GroupChat from './GroupChat';
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();
    const groupChat = () => {
        history.push("/groupchat");
    }
    const studyMaterial = () =>{
        history.push("/studymaterial");
    }
    return (
        <div>
            <button onClick={studyMaterial}>Study Material</button>
            <button onClick={groupChat}>Group Chat</button>
        </div>
    )
}
