import { useState } from 'react'
import { RegisterAPI } from '../api/AuthAPI'
import '../Sass/RegisterComponent.scss'
import LinkedinLogo from '../assets/LinkedinLogo.png'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postUserData } from '../api/FirestoreAPI';
import { getUniqueId } from '../helpers/getUniqueId';

export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({});
    const Register = async () => {
        try {
            let res = await RegisterAPI(credentials.email, credentials.password);
            toast.success('Account Created!')
            postUserData({id: getUniqueId(), name: credentials.name, email: credentials.email})
            navigate("/home")
            localStorage.setItem("userEmail", res.user.email);
        } catch (err) {
            console.log(err);
            if (err.message.includes("auth/email-already-in-use")) {
              toast.error("Email already registered, Please login");
            } else {
              toast.error("Cannot Create your Account");
            }
        }
    };
    return (
        <div className='register-wrapper'>
          <img src={LinkedinLogo} className='linkedinlogo'/>
          
            <div className='register-wrapper-inner'>
            <h1 className='heading' style={{color:"#212121"}}> Make the most of your professional life</h1>

       
           
          
          <div className='auth-inputs'>

          <input onChange={(event) => setcredentials({...credentials, name: event.target.value})} 
            className='common-input'
            placeholder='Your Name'
            type='text'
            />
            <input onChange={(event) => setcredentials({...credentials, email: event.target.value})} 
            className='common-input'
            placeholder='email or Phone'
            type='email'
            style={{marginTop:"20px"}}
            />
              <input onChange={(event) => setcredentials({...credentials, password: event.target.value})} 
            className='common-input'
            placeholder='Password 6 or more characters'
            type='password'
            style={{marginTop:"20px"}}
            />
          </div>
          <button onClick={Register} className='login-btn'>
         Agree and Join
          </button>
            </div>

            <div className="google-button-container">
              <p className='go-to-signup'>Already in Linkedin? <span className='join-now' onClick={() => navigate("/login")}>Sign in</span> </p>
          </div>
         
        </div>
    )
} 