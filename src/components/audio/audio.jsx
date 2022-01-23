import React, { memo, useEffect, useState } from 'react';
import { audioFeatureKey } from '../../common/utils/urlUtils';
import soundLogo from "../../static/assets/images/sound.png";
import { play } from './utils/speechUtils';

const Audio = ({ index, audio, setAudio }) => {

    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        if (isClicked)
            play(index, audio)
    }, [audio]);

    return (
        audioFeatureKey() ?
            <span>
                <img onClick={() => {
                    setAudio((state) => {
                        let newState = { ...state };
                        newState.isPlaying = !state.isPlaying
                        return newState;
                    })
                    setIsClicked(true);
                }} className="sound-icon" src={soundLogo} alt="Play quotes" />
            </span > : null
    )
}

export default memo(Audio)