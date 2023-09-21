import React from 'react'
import { useSelector } from 'react-redux'
import { play } from './utils/speechUtils'

const Audio = ({ index, currentData, scrollPosition, setScrollPosition, listRef, voiceSpeed }) => {
    const voiceType = useSelector((state) => state.philosophersData.voiceType)

    return <button onClick={speechSynthesis.speaking ? () => speechSynthesis.cancel() : play.bind(this, index, currentData, voiceSpeed, voiceType, listRef, scrollPosition, setScrollPosition)}>{speechSynthesis.speaking ? 'Stop' : 'Play'} Audio</button>
}
export default Audio
