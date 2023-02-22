import { Inter } from '@next/font/google'
import React from 'react'
import Id from './components/id'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
    return (
        <div className='Home'>
            <Id />
        </div>
    )
}
