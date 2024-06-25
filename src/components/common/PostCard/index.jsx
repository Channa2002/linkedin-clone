/* eslint-disable react/prop-types */
import "./index.scss";
import { useNavigate } from "react-router-dom";
import LikeButton from "../LikeButton";
import {getCurrentUser} from "../../../api/FirestoreAPI"
import { useMemo, useState } from "react";

export default function PostsCard ({posts}) {
  let navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState({})
  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])


    return (
       <div className="posts-card" >
        <p className="name" onClick={() => navigate(`/profile?id=${posts.userId}`, {
          state: {id:posts?.id, email: posts.userEmail}
        })}>{posts.userName}</p>
        <p className="timestamp">{posts.timestamp}</p>
        <p className="status">{posts.status}</p>

        <LikeButton userId = {currentUser?.id} postId={posts.id} />
       </div>
     )    
}