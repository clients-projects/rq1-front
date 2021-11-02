import React, { useState } from 'react'
import OtpInput from 'react-otp-input'

export default function Otp() {
    const [otp, setOtp] = useState('')

   

    const inputHandler = (input) => {
        console.log('inputName', input.target.name)
        const inputName = input.target.name
        const inputValue = input.target.value

        console.log('inputs;', inputName, inputValue)

                setOtp(input.target.value)


        
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
               
                        <div id="pinlogin" class="pinlogin"><input type="tel" id="pinwrapper_pinlogin_0" name="pinwrapper_pinlogin_0" maxlength="1" pattern="^[0-9]*$" autocomplete="off" class="pinlogin-field" value={otp} onChange={inputHandler}/><input type="tel" id="pinwrapper_pinlogin_1" name="pinwrapper_pinlogin_1" maxlength="1" pattern="^[0-9]*$" autocomplete="off" class="pinlogin-field"/><input type="tel" id="pinwrapper_pinlogin_2" name="pinwrapper_pinlogin_2" maxlength="1" pattern="^[0-9]*$" autocomplete="off" class="pinlogin-field"/><input type="tel" id="pinwrapper_pinlogin_3" name="pinwrapper_pinlogin_3" maxlength="1" pattern="^[0-9]*$" autocomplete="off" class="pinlogin-field"/><input type="tel" id="pinwrapper_pinlogin_4" name="pinwrapper_pinlogin_4" maxlength="1" pattern="^[0-9]*$" autocomplete="off" class="pinlogin-field"/><input type="tel" id="pinwrapper_pinlogin_5" name="pinwrapper_pinlogin_5" maxlength="1" pattern="^[0-9]*$" autocomplete="off" class="pinlogin-field"/></div>
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
