import React, {useState, useContext} from 'react'
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import {app} from '../../firebaseConfig'
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from "../../context/ChatContext";
import "./search.scss"
import ProfilePic from '../profile-pic/ProfilePic';

const Search = () => {

    const db = getFirestore(app);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<any>(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("username", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e:any) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      dispatch({ type: "CHANGE_USER", payload: {uid:user.uid, username: user.username,} });
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            username: user.username,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            username: currentUser.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("")
  };
  const letter = user?.username.charAt(0).toUpperCase()
  return (
    <div className='search'>
        <div className="searchForm">
            <input
                type="text"
                placeholder="Find a user"
                onKeyDown={handleKey}
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
        </div>
        {err && <span>User not found!</span>}
        {user && (
            <div className="userChat" onClick={handleSelect}>
                <ProfilePic letter={letter} />
                <div className="userChatInfo">
                    <span>{user.username}</span>
                </div>
            </div>
        )}
    </div>
  )
}

export default Search