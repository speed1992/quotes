import React from 'react';
import soundLogo from "../../static/assets/images/sound.png";
import styles from "./audio.module.css";
import { pause, play } from './utils/speechUtils';

const Audio = ({ index, synth, setTriggerChange }) => {
    return (

        <>
            {(<button onClick={play.bind(this, index, synth, setTriggerChange)}>
                <img className={styles.soundIcon} src={soundLogo} alt="Play Quotes" />
                Play Audio
            </button>)}

            {(<button onClick={pause.bind(this, synth, setTriggerChange)} >
                <img className={styles.soundIcon} src={soundLogo} alt="Play Quotes" />
                Pause Audio
            </button >)}
        </>
    )
}

export default Audio;