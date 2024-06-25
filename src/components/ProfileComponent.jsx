import ProfileCard from "../components/common/ProfileCard";
import { useState } from "react";
import ProfileEdit from "./common/ProfileEdit";

// eslint-disable-next-line react/prop-types
export default function ProfileComponent({currentUser}) {
    const [isEdit,setisEdit] = useState(false);

    const onEdit = () => {
        setisEdit(!isEdit);
    }
   return(
    <div>
        {isEdit? (<ProfileEdit onEdit={onEdit} currentUser={currentUser}  />)
         : (<ProfileCard currentUser={currentUser} onEdit={onEdit}/>)}
    </div>
   )
}