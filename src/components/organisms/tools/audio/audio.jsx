import React from 'react'
import { play } from './utils/speechUtils'

const Audio = ({ index, currentData, scrollPosition, setScrollPosition, listRef, voiceSpeed }) => <button onClick={speechSynthesis.speaking ? () => speechSynthesis.cancel() : play.bind(this, index, currentData, voiceSpeed, listRef, scrollPosition, setScrollPosition)}>{speechSynthesis.speaking ? 'Stop' : 'Play'} Audio</button>

export default Audio
