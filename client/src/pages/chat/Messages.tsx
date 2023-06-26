import React, { useContext, useEffect, useState } from "react";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { ChatContext } from "../../context/ChatContext";
import {app} from '../../firebaseConfig'
import Message from "./Message";

const Messages = () => {
    const db = getFirestore(app);

    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);

    useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);
  console.log("messages", messages)
  return (
    <div className="messages">
      {messages.map((m, index) => (
        <Message message={m}  />
      ))}
    </div>
  )
}

export default Messages