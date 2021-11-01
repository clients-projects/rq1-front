import React from 'react'

import Nav from '../components/Nav'
import Main from '../components/Main'
import '../styles/styles.css'
import Footer from '../components/Footer'

function Layout() {
    return (
        <div className='h-screen overflow-x-hidden justify-items-center'>
            <div className='grid w-full md:mx-auto'>
                
                <div className=' mx-auto my-9'>
                    <Main />
                </div>
                <div className='mx-auto w-full'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layout
