import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Id from './components/id'
import Account from './components/account'
import Navbar from './components/navbar'
import sidebar from './components/sidebar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='Home'>
      <Id/>
      
    
      </div>
    
  )
}
