import download from 'downloadjs';
import * as htmlToImage from 'html-to-image';
import React from 'react';

export const GenerateQuoteImage = ({ quoteRef, quotationText, philosopherFullName }) => {

    const onClickHandler = () => {
        htmlToImage.toPng(quoteRef.current)
            .then(function (dataUrl) {
                download(dataUrl, 'quote.png');
            });
    }

    return (
        <>
            <button onClick={onClickHandler}>Download as Image</button>
        </>
    )

}