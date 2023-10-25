import { useEffect, useState } from 'react'
import { hitTranslationAPI } from '../utils/utils'

export function useTranslation({ inputText, from, to, setIsLocalFetching }) {
    const [translationOutput, setTranslationOutput] = useState('')

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        const wrapped = hitTranslationAPI.bind(this, { inputText, from, to, signal })
        setIsLocalFetching({ button: 'translate', status: true })
        wrapped()
            .then((response) => response.json())
            .then(({ translatedText }) => {
                setTranslationOutput(translatedText)
                setIsLocalFetching({ button: '', status: false })
            })
            .catch((e) => {})

        return () => {
            controller.abort()
            setTranslationOutput('')
        }
    }, [inputText, from, to])

    return translationOutput
}
