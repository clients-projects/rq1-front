import React, { useState } from 'react'
import OtpInput from 'react-otp-input'

export default function Otp() {
    const [otp, setOtp] = useState('')

    const handleOtp = (e) => {
        setOtp(e.target.value)
    }

    return (
        <div className='container mx-auto'>
            <div className='max-w-sm mx-auto md:max-w-lg'>
                <div className='w-full'>
                    {' '}
                    <div className=' h-64 py-3 rounded text-center'>
                        <h1 className='text-2xl font-bold'>OTP Verification</h1>
                        <div className='flex flex-col mt-4'>
                            {' '}
                            <span>Enter the OTP you received at</span>{' '}
                            <span className='font-bold'>+91 ******876</span>{' '}
                        </div>
                        <OtpInput
                            value={otp}
                            onChange={handleOtp}
                            numInputs={6}
                            containerStyle='flex flex-row justify-center text-center px-2 mt-5'
                            inputStyle='m-2 border h-10 w-10 text-center form-control rounded'
                        />{' '}
                        <div className='flex justify-center text-center mt-5'>
                            {' '}
                            <a className='flex items-center text-blue-700 hover:text-blue-900 cursor-pointer'>
                                <span className='font-bold'>Resend OTP</span>
                                <i className='bx bx-caret-right ml-1'></i>
                            </a>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
