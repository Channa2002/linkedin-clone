
import { useMemo, useState } from "react";
import Topbar from "../components/common/Topbar";
import { getCurrentUser } from "../api/FirestoreAPI";
import Profile from '../pages/Profile';

export default function HomeLayouts() {
   const [currentUser, setCurrentUser] = useState({})
    useMemo(() => {
       getCurrentUser(setCurrentUser)
      },[])

    return(
        <div>
            <Topbar />
            <Profile currentUser={currentUser}/>
        </div>
    )
}