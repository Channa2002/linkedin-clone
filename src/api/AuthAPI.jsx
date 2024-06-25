/* eslint-disable react-refresh/only-export-components */
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
   } from 'firebase/auth';
import {auth} from "../firebaseConfig"

export const onLogout = () => {
   try {
      signOut(auth).then(() => {
         return "ok";
      });
   } catch (err) {
       return err;
    }
};

export const LoginAPI = (email, passsword) => {
    try {
       let response = signInWithEmailAndPassword(auth, email, passsword);
       return response
    } catch (err) {
        return err;
     }
};

export const RegisterAPI = (email, passsword) => {
   try {
      let response = createUserWithEmailAndPassword(auth, email, passsword);
      return response
   } catch (err) {
       return err;
    }
};

export const GoogleSignINAPI = () => {
   try {
      let googleProvider = new GoogleAuthProvider();
      let res =  signInWithPopup(auth, googleProvider);
      return res;
   } catch (err) {
       return err;
    }
};



