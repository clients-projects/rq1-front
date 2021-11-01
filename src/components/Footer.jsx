import React from 'react'

export default function Footer() {
    return (
        <div className='text-center' style={{ fontSize: '16px', marginBottom: '2rem' }}>
            <p className='mb-3 font-Helvetica'>
                <a href='#blank' className='px-3'>
                    Don't have an account?
                </a>{' '}
                &nbsp;&nbsp;&nbsp;
                <a href='#blank'>Forgot password?</a>
                &nbsp;&nbsp;&nbsp;
                <a href='#blank'>Terms</a>
                <br />
            </p>
            <p className='font-Graphik'>
                <a href='#blank'>
                    Have an issue with two factor authentication?
                </a>
            </p>
        </div>
    )
}
