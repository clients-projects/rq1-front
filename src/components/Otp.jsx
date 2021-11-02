import React, { useState } from 'react'
import OtpInput from 'react-otp-input'

import padlock from '../assets/padlock.png'

export default function Otp() {
    const [otp, setOtp] = useState('')

    const inputHandler = (input) => {
     

        setOtp(input)
    }

    return (
        <div className='container mx-auto'>
            <div className='max-w-sm mx-auto md:max-w-lg'>
                <div className='w-full grid justify-center justify-items-center'>
                    <img
                        class='signin-logo'
                        width='100rm'
                        alt='roqqu logo'
                        src={padlock}
                        className=' my-8'
                        style={{width: '45%'}}
                    />
                    <div className=' h-64 py-3 rounded text-center'>
                        <h1 className='text-2xl font-bold'>Enter PIN</h1>
                        <div className='flex flex-col mt-4 text-sm'>
                            {' '}
                            <span>
                                For your security, PIN is required to sign into
                                and make transactions on Roqqu wallet
                            </span>{' '}
                        </div>

                        <OtpInput
                            value={otp}
                            onChange={inputHandler}
                            numInputs={6}
                            inputStyle='pinlogin-field'
                            containerStyle='pinlogin'
                        />

                        <div className='flex justify-center text-center mt-5'>
                            {' '}
                            <a className='flex items-center text-blue-700 hover:text-blue-900 cursor-pointer'>
                                <span className='font-bold bg-[#21ba45] text-white py-2 px-11'>
                                    complete
                                </span>
                                <i className='bx bx-caret-right ml-1'></i>
                            </a>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
