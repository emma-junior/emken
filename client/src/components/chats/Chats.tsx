import React, { useContext, useEffect, useState } from "react";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import {app} from '../../firebaseConfig'
import ProfilePic from "../profile-pic/ProfilePic";
import { Link } from "react-router-dom";

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
    }, [currentUser.uid, db]);

  const handleSelect = (u:any) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
        { Object.entries(chats)?.sort((a:any,b:any)=>b[1].date - a[1].date).map((chat:any) => {
            const letter = chat[1].userInfo?.username.charAt(0).toUpperCase()
            return (
              <>
                <div
                className="userChat chat-desktop"
                key={chat[0]}
                onClick={() => handleSelect(chat[1]?.userInfo)}
                >
                  <ProfilePic letter={letter}  />
                  <div className="userChatInfo">
                      <span>{chat[1].userInfo?.username}</span>
                      <p>{chat[1].lastMessage?.text}</p>
                  </div>
                </div>

                {/* for tablet and mobile screens. difference is the router link */}
                <Link to="/chat">
                  <div
                  className="userChat chat-mobile"
                  key={chat[0]}
                  onClick={() => handleSelect(chat[1]?.userInfo)}
                  >
                    <ProfilePic letter={letter}  />
                    <div className="userChatInfo">
                        <span>{chat[1].userInfo?.username}</span>
                        <p>{chat[1].lastMessage?.text}</p>
                    </div>
                  </div>
                </Link>
              </>
            )
      })}      
    </div>
  )
}

export default Chats