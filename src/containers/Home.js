import React from 'react'

import Nav from '../components/Nav'
import Main from '../components/Main'
import '../styles/styles.css'
import Footer from '../components/Footer'

function Layout() {
    return (
        <div className='h-screen overflow-x-hidden justify-items-center'>
            <div className='grid w-full lg:px-4 lg:w-11/12'>
                <div className='my-0 mx-auto w-full sm:pb-20'>
                    <Nav />
                </div>
                <div className=' mx-auto w-full my-9'>
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
