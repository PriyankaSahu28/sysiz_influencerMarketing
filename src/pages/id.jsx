import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import styles from '../styles/Id.module.css'
import { GetServerSideProps } from 'next'
 
const id = () => {
 const { data:session} = useSession()
 async function handleGoogleSignin(){
  signIn('google')
  signIn: async (user, account, profile) => {
    if (profile.birthday) {
      console.log(profile.birthday);
      //here you can access the user's date of birth
      session.set("dob", profile.birthday);
    } else {
      console.log('User date of birth is not available')
      //inform user that date of birth is not available
    }
    return Promise.resolve(user)
  }
 }
 signIn: async (user, account, profile) => {
  if (profile.birthday) {
    console.log(profile.birthday);
    //here you can access the user's date of birth
    session.set("dob", profile.birthday);
  } else {
    console.log('User date of birth is not available')
    //inform user that date of birth is not available
  }
  return Promise.resolve(user)
}
 async function handleFacebookSignin(){
  signIn('facebook')
 }
  if (!session) {
   // console.log(session.user);
  //  getServerSideProps(session)
    
    return (
      <div className={styles.div1}>
         {/* <p>Welcome,{session.user.name}</p>
             <img src={session.user.image} style={{borderRadius:'50px'}}></img>
            <button onClick={()=>signOut()}>Sign Out</button>  */}
        <div id={styles.container}>
          <div id={styles.formcontainer}>
            <img id={styles.img1} src="https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?cs=srgb&dl=background-beverage-brown-414645.jpg&fm=jpg" />
             {/* <a href="#"><img id={styles.cross} src="https://image.flaticon.com/icons/svg/148/148766.svg" /></a>  */}
            <p id={styles.text}>Login to your Account</p>
            <input id={styles.email} type="email" placeholder="Email / Phone" />
            <input id={styles.password} type="password" placeholder="Password" />
            <input id={styles.check} type="checkbox" />
            <p id={styles.text1}>Remember Me</p>
            <a id={styles.forget} href="#">Forget Password ?</a>
            <button id={styles.login} type="submit">Log In</button>
            {/* <hr id={styles.hrline1} /> */}
            <p id={styles.text2}>or login with</p>
            <hr id={styles.hrline2}/>
           
             <button id={styles.facebook} onClick={handleFacebookSignin} >
             <img id={styles.facebook1} src="images/facebook.png"/><span id={styles.btntext}>Facebook</span></button>
            <button id={styles.google} onClick={handleGoogleSignin} >
            <img id={styles.google1} src="images/google.png" /> <span id={styles.btntext}>Google</span></button>  
            <p id={styles.text3}>Not a Member?</p>
            <a id={styles.signup} href="#">Signup Now</a>
          </div>
        </div>

      </div>
    );
  } else {
    submit(session)
    
    return (
      
      <div>
        
        <p>You are now signed in .</p>
        <p>{session.user.email}</p>
        <p>Welcome,{session.user.name}</p>
        <p>Date of birth, {session.user.dob}</p>
       
        <img src={session.user.image} style={{borderRadius:'50px'}}></img>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
}


export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allPosts = await res.json();

  return {
    props: { allPosts },
  };
}
let submit = async (session) => {
  
  const saved=session;
  let res = await fetch("http://localhost:3000/api/posts", {
    method: "POST",
  
    body: JSON.stringify({
    
      
      facebookid: saved.user.name,
      googleid: saved.user.email,
      
      
    }),
  });
  res = await res.json();
  
};




 
export default id