/* eslint-disable react-hooks/exhaustive-deps */
import LoginComponent from '../components/LoginComponents'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from "../firebaseConfig"
import { useNavigate } from 'react-router-dom'
import Loader from "../components/common/Loader"



export default function Login() {
    const [loading, setloading] = useState(false);
    let navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (res) =>{
           if(res?.accessToken) {
            navigate('/home');
           }
           else{
           setloading(false)
        }
        })
       },[])
    return loading ? <Loader /> : <LoginComponent />
  
}
