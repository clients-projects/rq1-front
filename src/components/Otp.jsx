import React, { useState } from 'react'
import OtpInput from 'react-otp-input'

import padlock from '../assets/padlock.png'

export default function Otp() {
    const [otp, setOtp] = useState('')

    const inputHandler = (input) => {
        console.log({ input })
        setOtp(input)
    }

    const handleSubmit = e => {
        e.preventDefault()

        console.log(e)
    }

    return (
        <div className='container mx-auto'>
            <div className='max-w-sm mx-auto md:max-w-lg'>
                <div className='w-full grid justify-center justify-items-center'>
                    <img
                        className='signin-logo my-8'
                        width='100rm'
                        alt='roqqu logo'
                        src={padlock}
                        style={{ width: '45%' }}
                    />
                    <div className=' h-64 py-3 rounded text-center'>
                        <h1 className='text-2xl font-bold'>Enter PIN</h1>
                        <div
                            className='flex flex-col mt-4 mx-5'
                            style={{
                                lineHeight: '2em !important',
                                fontSize: '15px',
                            }}
                        >
                            {' '}
                            <span className='px-8'>
                                For your security, PIN is required to sign into
                                and make transactions on Roqqu wallet
                            </span>{' '}
                        </div>

                        <form onSubmit={handleSubmit}>
                            <OtpInput
                                value={otp}
                                onChange={inputHandler}
                                numInputs={6}
                                inputStyle='pinlogin-field'
                                containerStyle='pinlogin'
                                shouldAutoFocus
                                isInputNum
                            />

                            <div className='flex justify-center text-center mt-20'>
                                {' '}
                                <button className='flex items-center text-blue-700 hover:text-blue-900 cursor-pointer'>
                                    <span className=' bg-[#21ba45] text-white py-2 px-11 rounded-lg'>
                                        Complete
                                    </span>
                                    <i className='bx bx-caret-right ml-1'></i>
                                </button>{' '}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
