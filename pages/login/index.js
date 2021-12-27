import Head from 'next/head'
import Styles from '../../styles/login.module.css'

export default function Login() {
  return (
    <div class="login-form">
            <h1>Login Form</h1>
            <form action="#" method="post">
                <p>User Name</p>
                <input type="text" name="user" placeholder="User Name" />
                                <p>Password</p>
                <input type="password" name="password" placeholder="password" /> 
                <button type="submit">LOGIN </button>
            </form>
    </div>

  )
}
