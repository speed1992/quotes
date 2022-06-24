import React from 'react';
import soundLogo from "../../static/assets/images/sound.png";
import styles from "./audio.module.css";
import { play } from './utils/speechUtils';

console.log(styles);

const Audio = ({ index }) => (
    <button onClick={play.bind(this, index)}>
        <img className={styles.soundIcon} src={soundLogo} alt="Play Quotes" />
        Play Audio
    </button>
)

export default Audio;