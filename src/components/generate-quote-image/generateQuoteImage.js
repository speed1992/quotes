import download from 'downloadjs';
import { toJpeg } from 'html-to-image';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const GenerateQuoteImage = ({ quoteRef }) => {

    const onClickHandler = () => {
        toJpeg(
            quoteRef.current,
            {
                quality: 1,
                style: { background: "white" },
            })
            .then(function (dataUrl) {
                download(dataUrl, `quote-${uuidv4()}.jpg`);
            });
    }

    return (
        <>
            <button onClick={onClickHandler}>Download as Image</button>
        </>
    )

}