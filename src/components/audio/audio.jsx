import React from 'react'
import { useSelector } from 'react-redux'
import soundLogo from '../../static/assets/images/sound.png'
import styles from './audio.module.css'
import { play } from './utils/speechUtils'

const Audio = ({ index, currentData, scrollPosition, setScrollPosition, listRef }) => {
    const voiceSpeed = useSelector(({ philosophersData: { voiceSpeed } }) => voiceSpeed)

    return (
        <button onClick={play.bind(this, index, currentData, voiceSpeed, listRef, scrollPosition, setScrollPosition)}>
            <img className={styles.soundIcon} src={soundLogo} alt="Play Quotes" />
            Play Audio
        </button>
    )
}

export default Audio
