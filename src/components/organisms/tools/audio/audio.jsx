import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { play } from './utils/speechUtils'

const Audio = ({ index, currentData, scrollPosition, setScrollPosition, listRef, voiceSpeed }) => {
    const voiceType = useSelector((state) => state.philosophersData.voiceType)

    const playHandler = useCallback(() => play(index, currentData, voiceSpeed, voiceType, listRef, setScrollPosition), [currentData, index, listRef, scrollPosition, setScrollPosition, voiceSpeed, voiceType])

    return <button onClick={speechSynthesis.speaking ? () => speechSynthesis.cancel() : playHandler}>{speechSynthesis.speaking ? 'Stop' : 'Play'} Audio</button>
}
export default Audio
