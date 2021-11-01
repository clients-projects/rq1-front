import React from 'react'
import Form from './Form'

import '../styles/styles.css'
import LogoWhite from '../assets/logo_white.png'


const Main = () => {

    return (
        <div className='grid '>
            <div className=' grid gap-7 md:justify-center'>

                <img src={LogoWhite} alt='' className='lg:w-1/4 w-5/12 '/>
              
                <div className=''>
                    <Form />
                </div>
            </div>

      
        </div>
    )
}

export default Main
