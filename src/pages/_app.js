import '../styles/globals.css'
import '../styles/Id.module.css'
import {SessionProvider} from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from 'react'
  function App({ Component, pageProps,session}) {
    useEffect(()=>{
      require("bootstrap/dist/js/bootstrap");
    },[])
   return (

   <SessionProvider>
     <Component {...pageProps} />
   </SessionProvider>
   )
}
export default App