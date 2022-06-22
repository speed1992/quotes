import React from 'react';
import soundLogo from "../../static/assets/images/sound.png";
import { play } from './utils/speechUtils';

const Audio = ({ index }) => (
    <>
        <button>
            <img onClick={play.bind(this, index)} className="sound-icon" src={soundLogo} alt="Play quotes" />
            Play Audio
        </button>
    </>
)

export default Audio;