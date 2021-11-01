import React from 'react'
import Form from './Form'

import '../styles/styles.css'
import LogoWhite from '../assets/logo_white.png'


const Main = () => {

    return (
        <div className='grid '>
            <div className='sm:text-left grid gap-7 md:justify-center'>

                <img src={LogoWhite} alt='' className='w-1/5'/>
              
                <h1 className='main__text'>Sign in to Coinbase Wallet</h1>

                <div className=''>
                    <Form />
                </div>
            </div>

      
        </div>
    )
}

export default Main
