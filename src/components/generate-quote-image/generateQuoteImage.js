import download from 'downloadjs';
import * as htmlToImage from 'html-to-image';
import React from 'react';

export const GenerateQuoteImage = ({ quoteRef }) => {

    const onClickHandler = () => {
        htmlToImage.toJpeg(
            quoteRef.current,
            {
                quality: 1,
                style: { background: "white" },
            })
            .then(function (dataUrl) {
                download(dataUrl, 'quote.jpg');
            });
    }

    return (
        <>
            <button onClick={onClickHandler}>Download as Image</button>
        </>
    )

}