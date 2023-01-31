import '../styles/globals.css'
import '../styles/Id.module.css'
import {SessionProvider} from 'next-auth/react'




  function App({ Component, pageProps,session}) {
 
   return (<SessionProvider>
     <Component {...pageProps} />
   </SessionProvider>)


}















export default App