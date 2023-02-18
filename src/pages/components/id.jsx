import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import styles from '../../styles/Id.module.css'
import Account from './account'
import Navbar from './navbar'
import Sidebar from './sidebar'
// import {GetServerSideProps} from 'next'
const id = () => {
  const { data: session } = useSession()
  async function handleGoogleSignin() {
    signIn('google')
  }
  async function handleFacebookSignin() {
    signIn('facebook')
  }
  if (!session) {
    return (
      <div className={styles.div1}>
        <div id={styles.container}>
          <div id={styles.formcontainer}>
            <img id={styles.img1} src="https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?cs=srgb&dl=background-beverage-brown-414645.jpg&fm=jpg" />
            <p id={styles.text}>Login to your Account</p>
            <input id={styles.email} type="email" placeholder="Email / Phone" />
            <input id={styles.password} type="password" placeholder="Password" />
            <input id={styles.check} type="checkbox" />
            <p id={styles.text1}>Remember Me</p>
            <a id={styles.forget} href="#">Forget Password ?</a>
            <button id={styles.login} type="submit">Log In</button>
            <p id={styles.text2}>or login with</p>
            <button id={styles.facebook} onClick={handleFacebookSignin} >
              <img id={styles.facebook1} src="images/facebook.png" /><span id={styles.btntext}> Facebook</span></button>
            <button id={styles.google} onClick={handleGoogleSignin} >
              <img id={styles.google1} src="images/google.png" /> <span id={styles.btntext}>  Google</span></button>
            <p id={styles.text3}>Not a Member?</p>
            <a id={styles.signup} href="#">Signup Now</a>
          </div>
        </div>
      </div>
    );
  } else {
    submit(session)
    console.log(session);
    return (
      <div>
        <button onClick={() => signOut()}>Sign out</button>
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
          <Navbar />
          <div className="app-main">
            <Sidebar />
            <Account />
          </div>
        </div>
      </div>
    );
  }
}
export async function GetServerSideProps(context) {
  let res = await fetch("http://localhost:3000", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allId = await res.json();
  return {
    props: { allId },
  };
}
let submit = async (session) => {

  let res = await fetch("http://localhost:3000/api/posts", {
    method: "POST",
    body: JSON.stringify({
      name: session.user.name,
      email: session.user.email,
    }),
  });
  res = await res.json();
};
export default id