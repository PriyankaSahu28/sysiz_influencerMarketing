import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from "next-auth/providers/facebook";
import { useSession, signIn, signOut } from 'next-auth/react'

 export default NextAuth(
    // const options=
    { providers:[
    GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      }),
],



secret:process.env.JWT_SECRET 

 }
//  signIn: async (user, session, profile) => {
//     if (profile.birthday) {
//       console.log(profile.birthday);
//       //here you can access the user's date of birth
//       session.set("dob", profile.birthday);
//     } else {
//       console.log('User date of birth is not available')
//       //inform user that date of birth is not available
//     }
//     return Promise.resolve(user)
//   }
 )

 