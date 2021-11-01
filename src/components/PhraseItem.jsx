import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const PhraseItem = ({ phraseContents, index, deletePhrase, loading }) => {
    console.log(phraseContents._id)

    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        setIsCopied(true)
    }

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(false)
            }, 4000)
        }
    }, [isCopied])

    return (
        <div className='grid p-4 border rounded-md bg-white text-black font-semibold shadow-inner gap-y-2 justify-items-center'>
            <p>{index + 1}</p>
            {isCopied && (
                <p className=' bg-green-800 px-2 py-1 text-white'>Copied!</p>
            )}
            <div className='border-t-2 border-b-2 border-gray-300 grid'>
                <p className='my-1'>{phraseContents.phrase}</p>

                <div className='flex justify-between'>
                    <button
                        className=' bg-red-700 text-white justify-self-end py-2 px-6 font-semibold rounded-md outline-none sm:mb-5 my-2 mr-4'
                        onClick={() => deletePhrase(phraseContents._id)}
                    >
                        {loading ? 'Loading...' : 'delete'}
                    </button>

                    <CopyToClipboard
                        text={phraseContents.phrase}
                        onCopy={() => handleCopy()}
                    >
                        <button
                            className='bg-[#3375BB] text-white justify-self-end py-2 px-6 font-semibold rounded-md outline-none sm:mb-5 my-2'
                            data-clipboard-target='#linkRef'
                        >
                            Copy Phrase
                        </button>
                    </CopyToClipboard>
                </div>
            </div>
            <p>{phraseContents.createdAt}</p>
        </div>
    )
}

export default PhraseItem
