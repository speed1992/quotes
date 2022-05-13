import React from 'react';
import soundLogo from "../../static/assets/images/sound.png";
import { play } from './utils/speechUtils';

export const Audio = ({ index }) => (
    <img onClick={play.bind(this, index)} className="sound-icon" src={soundLogo} alt="Play quotes" />
)