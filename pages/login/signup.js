import Head from 'next/head'
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {auth} from './firebase'


export default function signup() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
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
            setRegisterEmail(event.target.value);
          }} />
      <input class="loginpass" type="password" align="center" placeholder="Password" onChange={(event) => {
            setRegisterPassword(event.target.value);
          }} />
      <a class="loginsubmit" align="center" onClick={register}>Sign up</a>
      <p align = "center" >OR</p>
      <a class="submitgoogle" align="center">Sign in with Google</a>
      <p class="loginforgot" align="center"><a href="#">Forgot Password?</a></p>
       </form>     
                
    </div>
     </div>

  )
}
