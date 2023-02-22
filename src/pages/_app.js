import '../styles/globals.css'
import '../styles/Id.module.css'
import '../styles/Navbar.module.css'
import {SessionProvider} from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react'
import '../font.css'
  //  import '../assets/fonts/Pe-icon-7-stroke.ttf';
  //   import '../assets/fonts/fa-solid-900.ttf';

  function App({ Component, pageProps,session}) {
    useEffect(()=>{
      
    },[])
   return (

   <SessionProvider>
     <Component {...pageProps} />

   </SessionProvider>
   )
}
export default App