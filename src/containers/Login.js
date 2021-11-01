import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import * as orderAction from '../store/actions/index'

const Login = (props) => {
    const [message, setMessage] = useState(null)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (props.err) {
            setMessage('Invalid Login')
        } else if (props.tokenId) {
            setMessage('Success')
            props.history.push('/admin/dashboard')
        }
    }, [props])



    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()

            props.onInitLogin(
                email,
                password
            )
        
        
    }

    return (
        <>
            <div className='flex items-center h-screen w-full bg-teal-lighter'>
                <div className='w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto'>
                    <h1 className='block w-full text-center text-[#3375BB] mb-6'>
                        Welcome to DefiWebWallet
                    </h1>
                    <h1 className='block w-full text-center text-black mb-6'>
                        {message}
                    </h1>
                    <form
                        className='mb-4 md:flex md:flex-wrap md:justify-between  text-black'
                        onSubmit={handleLogin}
                    >
                        <div className='field-group mb-4 md:w-full grid '>
                            <label className='field-label' htmlFor='email'>
                                Email
                            </label>
                            <input
                                className='field border rounded border-gray-600 outline-none py-1 px-3'
                                type='email'
                                name='email'
                                value={email}
                                required
                                onChange={handleEmail}
                            />
                        </div>
                        <div className='field-group mb-6 md:w-full grid'>
                            <label className='field-label' htmlFor='password'>
                                Password
                            </label>
                            <input
                                className='field border rounded border-gray-600 outline-none py-1 px-3'
                                type='password'
                                name='password'
                                value={password}
                                required
                                onChange={handlePassword}
                            />
                        </div>
                        <button className=' mx-auto  bg-[#3375BB] justify-self-center py-2 px-6 font-semibold rounded-md outline-none text-white'>
                            {props.loading ? 'Loading...' : 'Login'}{' '}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitLogin: (email, password) =>
            dispatch(orderAction.initLogin(email, password)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
