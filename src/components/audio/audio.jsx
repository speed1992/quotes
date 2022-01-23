import React from 'react';
import { audioFeatureKey } from '../../common/utils/urlUtils';
import soundLogo from "../../static/assets/images/sound.png";
import { play } from './utils/speechUtils';

export const Audio = ({ index }) => (
    audioFeatureKey() ?
        <span>
            <img onClick={play.bind(this, index)} className="sound-icon" src={soundLogo} alt="Play quotes" />
        </span > : null
)