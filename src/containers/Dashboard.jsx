import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'
import PhraseItem from '../components/PhraseItem'

import * as actions from '../store/actions'

const Dashboard = (props) => {
    const [allPhrases, setAllPhrases] = useState()

    useEffect(() => {
        if (props.tokenId) {
            props.onInitGetPhrases(props.tokenId)
        } else {
            props.history.push('/')
        }
    }, [])

    useEffect(() => {
        if (props.AllPhrases) {
            setAllPhrases(props.AllPhrases)
        }

        if (props.deleted) {
            setAllPhrases(props.AllPhrases)
        }
    }, [props.AllPhrases, props.deleted])

    const initLogout = () => {
        props.onInitLogout()
        props.history.push('/')
    }

    console.log({ allPhrases })

    return (
        <div className='my-4 mx-auto w-5/6 mt-10 grid justify-items-center gap-y-4'>
            <button
                onClick={() => initLogout()}
                className='text-[#3375BB] bg-white justify-self-end py-2 px-6 font-semibold rounded-md outline-none mb-5'
            >
                LOGOUT
            </button>
            <h2 className=' text-3xl font-bold text-gray-400 mb-5'>
                ALL PHRASES
            </h2>
            {allPhrases &&
                allPhrases.reverse().map((phrase, index) => {
                    return (
                        <PhraseItem
                            phraseContents={phrase}
                            index={index}
                            key={index}
                            deletePhrase={props.onInitDeletePhrase}
                            loading={props.loading}
                        />
                    )
                })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
        AllPhrases: state.phrase.getAllPhrases,
        loading: state.phrase.loading,
        deleted: state.phrase.deleted,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetPhrases: (token) => dispatch(actions.initGetPhrases(token)),
        onInitLogout: () => dispatch(actions.logOut),
        onInitDeletePhrase: (phraseId) =>
            dispatch(actions.initDeletePhrase(phraseId)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
