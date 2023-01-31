import React from 'react'

import { useSession,signOut } from 'next-auth/react'

const account = () => {
  const {data:session,status}=useSession({required:true});
  if(status==='authenticated'){
    return (
        <div>
            <p>Welcome,{session.user.name}</p>
             <img src={session.user.image}  style={{borderRadius:'50px'}}></img>
            <button onClick={()=>signOut()}>Sign Out</button>

        </div>  
    );
  }else{
    return(
        <div>
            <p>You are not signed in .</p>
            <button onClick={()=>signIn()}>Sign in</button>
        </div>
    )
  }
 
}

export default account