/* eslint-disable react/prop-types */
import HomeComponent from "../components/HomeComponent"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { auth } from "../firebaseConfig"
import { useNavigate } from "react-router-dom"
import Loader from "../components/common/Loader"
import { useState } from "react"

export default function Home({ currentUser }) {
    const [loading, setloading] = useState(false);

 let navigate = useNavigate();
    useEffect(() => {
     onAuthStateChanged(auth, (res) =>{
        if(!res?.accessToken){
            navigate('/login') 
        }
        else{
            setloading(false)
        }
     })
    },[]);
    return loading ? <Loader /> : <HomeComponent currentUser={currentUser} />;
    
}