import React, {useState} from 'react'

const Modal = ({ content }) => {

    const [display, setDisplay] = useState(true)

    const handleClose = () => {
        console.log('close')
        setDisplay(false)
    }
    return (
        <div
            className='grid bg-blue-700 text-white p-4 rounded-lg absolute top-28 m-8 sm:m-0 group transition-all ease-in-out'
            style={display ? { display: 'grid' } : { display: 'none' }}
        >
            <p>{content}</p>

            <button
                className='bg-white text-blue-700 justify-self-end py-2 px-6 font-semibold rounded-md outline-none sm:mb-5'
                onClick={handleClose}
            >
                Close
            </button>
        </div>
    )
}

export default Modal
