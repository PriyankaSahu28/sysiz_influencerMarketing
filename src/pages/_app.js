import '../styles/globals.css'
import '../styles/Id.module.css'
import '../styles/Navbar.module.css'
import {SessionProvider} from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react'
import '../font.css'
import Id from './components/id'
import {  Switch,Routes ,Route, }from 'react-router-dom';


  function App({ Component, pageProps,session}) {
    useEffect(()=>{
      <Switch>
      <Routes>
          <Route path="/" element={<Id/>}/>
      </Routes>
  </Switch>

    },[])
   return (


   <SessionProvider session={session}>
     <Component {...pageProps} />

   </SessionProvider>

   )
}
export default App