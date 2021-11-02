import react from 'React' 
import Form from './Form'

import '../styles/styles.css'
import LogoWhite from '../assets/logo_white.png'

const VerifyOtp = (props) => {

    console.log({props})

    return (
        <div className='grid '>
            <div className=' grid gap-7'>
                <img
                    src={LogoWhite}
                    alt=''
                    className='lg:w-1/4 w-5/12 justify-self-center my-7 '
                />

                <div className='mx-2'>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default VerifyOtp