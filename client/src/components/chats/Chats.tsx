import React, { useContext, useEffect, useState } from "react";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import {app} from '../../firebaseConfig'
import ProfilePic from "../profile-pic/ProfilePic";

const Chats = () => {

    const db = getFirestore(app);
    const [chats, setChats] = useState<any>([]);

    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
      const getChats = () => {
        const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
          setChats(doc.data());
        });

        return () => {
          unsub();
        };
      };

      currentUser.uid && getChats();
    }, [currentUser.uid]);

  const handleSelect = (u:any) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
        { Object.entries(chats)?.sort((a:any,b:any)=>b[1].date - a[1].date).map((chat:any) => {
            const letter = chat[1].userInfo?.username.charAt(0).toUpperCase()
            return (
                <div
                className="userChat"
                key={chat[0]}
                onClick={() => handleSelect(chat[1].userInfo)}
                >
                <ProfilePic letter={letter}  />
                <div className="userChatInfo">
                    <span>{chat[1].userInfo?.username}</span>
                    <p>{chat[1].lastMessage?.text}</p>
                </div>
                </div>
            )
      })}      
    </div>
  )
}

export default Chats