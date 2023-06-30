import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import "./message.scss"
import ProfilePic from "../profile-pic/ProfilePic";

const Message = ({message}:any) => {

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    const senderL = currentUser?.displayName.charAt(0).toUpperCase()
    const receiverL = data.user?.username.charAt(0).toUpperCase()
  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <ProfilePic letter={message.senderId === currentUser.uid ? senderL : receiverL} />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  )
}

export default Message