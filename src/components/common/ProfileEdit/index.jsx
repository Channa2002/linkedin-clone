// /* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { editProfile, getSingleUser } from "../../../api/FirestoreAPI"
import { AiOutlineClose } from "react-icons/ai"
import "./index.scss"

export default function ProfileEdit({onEdit, currentUser }) {

   const [editInputs, setEditInputs] = useState({});
   const [currentProfile, setCurrentProfile] = useState({});
    const getInput = (event) => {
     let {name, value} = event.target;
      let input = {[name]: value};
    setEditInputs({ ...editInputs, ...input})
    }
    
    const updateProfileData = async () => {
      await editProfile(currentUser?.id, editInputs);
      await onEdit();
    }

    useEffect(() => {
      getSingleUser(setCurrentProfile, currentUser?.id);
    }, [currentUser.id]);

    return <div className="profilecard">
        <div className="edit-btn">
        <AiOutlineClose onClick = {onEdit} className="close-icon"/>
      </div>

     <div className="profile-edit-input">
     <label>Name</label>
     <input
      onChange={getInput}
      className="common-input"
      placeholder="Name" 
      defaultValue={currentProfile.name}
      name = "name"/>
     
    <label>Headline</label>
    <input
     onChange={getInput}
     className="common-input" 
     placeholder="Headline"
     defaultValue={currentProfile.headline}
     name ="headline" />


    <label>Country</label>
    <input
     onChange={getInput}
     className="common-input" 
     placeholder="Country" 
     defaultValue={currentProfile.Country}
     name ="Country"/>

    <label>City</label>
    <input
     onChange={getInput}
     className="common-input" 
     placeholder="City" 
     defaultValue={currentProfile.city}
     name ="city"/>

    <label>company</label>
    <input 
    onChange={getInput}
    className="common-input" 
    placeholder="company"
    defaultValue={currentProfile.company}
    name ="company" />

    
    <label>Industry</label>
    <input
     onChange={getInput}
     className="common-input" 
     placeholder="industry"
     defaultValue={currentProfile.industry}
     name ="industry" />

    <label>college</label>
    <input
     onChange={getInput}
     className="common-input" 
     placeholder="college"
     defaultValue={currentProfile.college}
     name ="college" />

     
    <label>Website</label>
    <input
     onChange={getInput}
     className="common-input" 
     placeholder="Website"
     defaultValue={currentProfile.Website}
     name ="Website" />

    <label>About</label>
    <textarea 
    className="common-textArea"
       onChange={getInput}
       rows={5}
     name ="aboutMe"
     defaultValue={currentProfile.aboutMe}
     placeholder="About Me" />

<label>skills</label>
    <input
     onChange={getInput}
     className="common-input" 
     placeholder="skills"
     defaultValue={currentProfile.skills}
     name ="skills" />
    
   


     </div>

     <div className="save-container">
     <button className="save-btn"
     onClick={updateProfileData}
     >
      Save
     </button>
     </div>
   

    </div>
}