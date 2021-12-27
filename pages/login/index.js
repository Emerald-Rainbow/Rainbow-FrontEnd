import Head from 'next/head'


export default function Login() {
  return (
    <div class="loginBody">
    <div class="loginmain">
    <p class="loginsign" align="center">Sign in</p>
    <form class="loginform">
      <input class="loginun " type="text" align="center" placeholder="Username" />
      <input class="loginpass" type="password" align="center" placeholder="Password" />
      <a class="loginsubmit" align="center">Sign in</a>
      <p align = "center" >OR</p>
      <a class="submitgoogle" align="center">Sign in with Google</a>
      <p class="loginforgot" align="center"><a href="#">Forgot Password?</a></p>
       </form>     
                
    </div>
     </div>

  )
}
