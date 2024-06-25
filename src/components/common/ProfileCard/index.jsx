/* eslint-disable react/prop-types */
import "./index.scss";
import { useState, useMemo } from "react";
import PostsCard from "../PostCard";
import {getSingleStatus, getSingleUser} from "../../../api/FirestoreAPI";
import { useSearchParams } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi"


// eslint-disable-next-line react/prop-types
export default function ProfileCard({currentUser, onEdit}) {
  const [queryParams] = useSearchParams();
  const userId = queryParams.get("id");
  const [allStatus, setAllStatuses] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});
  useMemo(() =>{
      if (userId) {
        getSingleUser(setCurrentProfile, userId);
        getSingleStatus(setAllStatuses, userId);
      } else {
        setCurrentProfile(currentUser);
        if (currentUser.id) {
          getSingleStatus(setAllStatuses, currentUser.id);
        }
      }
     }, [userId, currentUser]);

    return (
        <>
      <div className="profilecard">

            {!userId && (
              <div className="edit-btn">
              <HiOutlinePencil className="edit-icon" onClick={onEdit}/>
              </div>
            )}


          {Object.keys(currentProfile).length > 0 && (
            <div>
  <div className="profile-info">
              <div>
                <h3 className="user-name">
                  {currentProfile?.name}
                </h3>

                <p className="heading">{currentProfile?.headline}</p>

                 <p
                 className="Location">{currentProfile?.Location},{currentProfile?.Country}
                 </p>

                <a 
                className="Website"
                target="blank"
                href={currentProfile?.Website}>{currentProfile?.Website}
                </a>

               
              </div>

              <div className="right-info">
                <p className="company">{currentProfile?.company}</p>
                <p className="college">{currentProfile?.college}</p>
              </div>

             
            </div>
            <p className="about">{currentProfile?.aboutMe}</p>
            <p className="skills">
           <span className="skill-label">Skills</span>:&nbsp;
              {currentProfile?.skills}
              </p>
            </div>
            
             
          )}


          </div>
          
          <div className="post-status-main">
              {allStatus.map((posts) => <PostsCard key={posts.id} posts={posts} />)}
          </div>
       </>
    );
}
