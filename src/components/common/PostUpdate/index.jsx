/* eslint-disable react/prop-types */
import { useState,useMemo, useEffect } from "react";
import ModalComponent from "../Modal";
import { postStatus, getStatus } from "../../../api/FirestoreAPI";
import './index.scss';
import PostsCard from "../PostCard";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import { getUniqueId } from "../../../helpers/getUniqueId";


export default function PostStatus({currentUser}) {
   let userEmail = localStorage.getItem("userEmail")
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState('');
    const [allStatus, setAllStatuses] = useState([]);
    const sendStatus = async () => {
      let object = {
         status:status,
         timestamp:getCurrentTimeStamp("LLL"),
         userEmail : userEmail,
         userId: currentUser.id,
         userName: currentUser.name,
         postID: getUniqueId(),
      }
       await postStatus(object);
       await setModalOpen(false);
       await setStatus("");
    };


    useMemo(() =>{
   getStatus(setAllStatuses);
    }, [])

    useEffect(() => {
      console.log("render post", allStatus, currentUser);
    }, [allStatus, currentUser]);

    return <><div className="post-status-main">
        <div className="post-status"> 
           <button className="open-post-modal" onClick={() => setModalOpen(true)} >Start a Post</button>
        </div>

        <ModalComponent
         setStatus={setStatus}
         status={status}
         modalOpen={modalOpen}
         setModalOpen={setModalOpen}
         sendStatus={sendStatus} />
         
         <div>
            {allStatus.map((posts) => <PostsCard key={posts.id} posts={posts} />)}
         </div>

    </div>
     
</>
}   
