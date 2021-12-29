import Head from 'next/head'
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getAuth
} from "firebase/auth";
import firebaseApp from '../../utils/db/firebase';

auth = getAuth(firebaseApp);

export default function Login() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div class="loginBody">
    <div class="loginmain">
    <p class="loginsign" align="center">Sign in</p>
    <form class="loginform">
      <input class="loginun " type="text" align="center" placeholder="Username" onChange={(event) => {
            setLoginEmail(event.target.value);
          }}/>
      <input class="loginpass" type="password" align="center" placeholder="Password"  onChange={(event) => {
            setLoginPassword(event.target.value);
          }} />
      <a class="loginsubmit" align="center" onClick={login}>Sign in</a>
      <p align = "center" >OR</p>
      <a class="submitgoogle" align="center">Sign in with Google</a>
      <p class="loginforgot" align="center"><a href="#">Forgot Password?</a></p>
       </form>     
                
    </div>
     </div>

  )
}
