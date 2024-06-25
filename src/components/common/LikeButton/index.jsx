/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import "./index.scss"
import { likePost, getLikesByUser, postComment, getcomments } from "../../../api/FirestoreAPI";
import { AiOutlineHeart,AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { useMemo, useState } from "react"
import { getCurrentTimeStamp } from "../../../helpers/useMoment";



export default function LikeButton({userId, postId}) {
    const [likesCount, setLikesCount] = useState(0);
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const[liked, setLiked] = useState(false);
    const handleLike = () => {
     likePost(userId, postId, liked);
    }

    const getComment = (event) => {
      setComment(event.target.value)
    }

    const addcomment = () => {
      postComment(postId, comment, getCurrentTimeStamp("LLL"));
      setComment("");
    }

    useMemo (() =>{
        getLikesByUser( userId, postId , setLiked, setLikesCount)
        getcomments(postId, setComments)
    },[userId, postId])
    return (
        <div className="like-container" >
      
     <p>{likesCount} People liked this Post</p>

     <div className="hr-tag" >
       <hr />
     </div>
     
     <div className="like-comment">
     <div className="likes-comment-inner" onClick={handleLike}>
      {liked? <AiFillHeart size={25} 
              className="like-btn" color=" rgb(89, 89, 219) " />
               : <AiOutlineHeart size={25}
                className="like-btn" />}
                <p className={liked? "blue" : "black"}>
                    {liked? "Liked" : "Like"}
                 </p> 
      </div>

      <div className="likes-comment-inner" onClick={() => setShowCommentBox(!showCommentBox)}>
      <AiOutlineComment size={25}
              className="like-btn" color= {showCommentBox? " rgb(89, 89, 219) " : "#212121"} />
                <p className={showCommentBox? "blue" : "black"} >
                     Comment
                 </p> 
      </div>
     </div>
     
    
     {   showCommentBox ? (
      <> <input
      onChange = {getComment}
      placeholder="Add a Comment"
      className="comment-input"
      name="comment"
      value={comment}
      />
      <button className="add-comment-btn" onClick={addcomment}>
             Add comment
      </button>
      {comments.length > 0 ? comments.map((comment) => {
        return (
          <div className="all-comments">
            <p>
              {comment.comment}
            </p>
            <p>
            {comment.timestamp}
            </p>
          </div>
        )
      }) : <></>}
      </>
      ) : (
      <>
      </>
    )
      }
     
   
            </div>
           
     
    )
}