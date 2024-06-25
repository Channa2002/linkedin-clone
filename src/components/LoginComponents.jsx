import { useState } from 'react'
import { LoginAPI} from '../api/AuthAPI'
import '../Sass/LoginComponent.scss'
import LinkedinLogo from '../assets/LinkedinLogo.png'
// import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({});
    const login = async () => {
        try {
            let res = await LoginAPI(credentials.email, credentials.password);
            toast.success('signed In to Linkedin!')
            navigate('/home')
            localStorage.setItem("userEmail", res.user.email);
        }catch (err){
            console.log(err)
            toast.error("please check your credentials")
        }
    };

    // const googleSignIn = () => {
    //   let response = GoogleSignINAPI();
    //   navigate('/home')
    //   console.log(response);
    // }
    return (
        <div className='login-wrapper'>
          <img src={LinkedinLogo} className='linkedinlogo'/>
          
            <div className='login-wrapper-inner'>
            <h1 className='heading'> Sign in</h1>
            <p className='sub-heading'>stay updated on your professinal world</p>
          <div className='auth-inputs'>
            <input onChange={(event) => setcredentials({...credentials, email: event.target.value})} 
            className='common-input'
            placeholder='Enter the email or Phone'
            type='email'
            />
              <input onChange={(event) => setcredentials({...credentials, password: event.target.value})} 
            className='common-input'
            placeholder='Password'
            type='password'
            style={{marginTop:"20px"}}
            />
          </div>
          <button onClick={login} className='login-btn'>
          Sign in
          </button>
            </div>

            <div className="google-button-container">
              <p className='go-to-signup'>New to Linkedin? <span className='join-now' onClick={() => navigate("/register")}>Join now</span> </p>
          </div>
         
        </div>
    )
} 

