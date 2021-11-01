import React from 'react'
import Form from './Form'

import '../styles/styles.css'
import LogoWhite from '../assets/logo_white.png'


const Main = () => {

    return (
        <div className=''>
            <div className=''>

                <img src={LogoWhite} alt='' className='lg:w-1/4 w-5/12 justify-self-center '/>
              
                <div className='mx-2'>
                    <Form />
                </div>
            </div>

      
        </div>
    )
}

export default Main
