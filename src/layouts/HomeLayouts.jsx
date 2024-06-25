import Home from "../pages/Home";
import { useMemo, useState } from "react";
import Topbar from "../components/common/Topbar";
import { getCurrentUser } from "../api/FirestoreAPI";

export default function HomeLayouts() {
   const [currentUser, setCurrentUser] = useState({})
    useMemo(() => {
       getCurrentUser(setCurrentUser)
      },[])

    return(
        <div>
            <Topbar />
            <Home currentUser={currentUser}/>
        </div>
    )
}