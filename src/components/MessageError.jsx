import React, { useEffect } from 'react'
import { ContainerMessageError } from '../assets/styles/StyleMessageError';

const MessageError = ({ messageError, setError }) => {

    useEffect(() => {
        let timer;

        timer = setTimeout(() => {
            setError(false)

        }, 3000);

        return () => (clearTimeout(timer))

    }, [messageError])


    return (
        <ContainerMessageError>
            <p>{messageError}</p>
        </ContainerMessageError>
    )
}

export default MessageError;