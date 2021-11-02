import React, {useState} from 'react'
import OtpInput from 'react-otp-input'


export default function Otp () {

     const [otp, setOtp] = useState('')

     const handleOtp = (e) => {
         setOtp(e.target.value)
     }

    return (
        <div>
            <OtpInput
                value={otp}
                onChange={handleOtp}
                numInputs={6}
                containerStyle='flex flex-row justify-center text-center px-2 mt-5'
                inputStyle='m-2 border h-10 w-10 text-center form-control rounded'
            />{' '}
        </div>
    )
}

