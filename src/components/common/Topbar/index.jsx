
import './index.scss';
import LinkedinLogo from '../../../assets/LinkedinLogo.png';
import { AiOutlineHome} from "react-icons/ai";
// import { BsBriefcase } from "react-icons/bs";
import user from '../../../assets/user.png';
import { useNavigate } from 'react-router-dom';
import ProfilePopup from "../ProfilePopup";
import { useState } from 'react';

export default function Topbar() {
  const [popupVisible, setPopupVisible] = useState(false);
  let navigate = useNavigate();
  const goToRoute = (route) => {
  navigate(route)
  }

  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };

   return (
     <div className='topbar-main'>
          {popupVisible ? (
        <div className="popup-position">
          <ProfilePopup />
        </div>
      ) : (
        <></>
      )}
       <img className='linkedin-logo' src={LinkedinLogo} alt="linkedlogo" />

       <div className='react-icons'>

       {/* <AiOutlineSearch style={{fontSize:"30px"}} className='react-icon'/> */}

      <AiOutlineHome style={{ fontSize:"30px"}} className='react-icon' onClick={() =>goToRoute('/home')} />

       {/* <AiOutlineUserSwitch style={{ fontSize:"30px"}}  */}
      {/* //  className='react-icon'/> */}
       
       {/* <BsBriefcase style={{fontSize:"30px"}} className='react-icon' /> */}
       {/* <AiOutlineMessage style={{fontSize:"30px"}} className='react-icon' /> */}
       {/* <AiOutlineBell style={{ fontSize:"30px"}} className='react-icon' /> */}

       </div>

       <img className='user-logo' onClick={displayPopup} src={user} alt="user" />
   </div>
   )
}