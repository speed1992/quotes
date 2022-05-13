import html2canvas from 'html2canvas';
import React from 'react';

export const GenerateQuoteImage = ({ quotationText, philosopherFullName }) => {

    const onClickHandler = async () => {
        const element = <><div>{quotationText}</div><div>{philosopherFullName}</div></>;
        const canvas = await html2canvas(element);

        const data = canvas.toDataURL('image/jpg');
        const link = document.createElement('a');

        if (typeof link.download === 'string') {
            link.href = data;
            link.download = 'image.jpg';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(data);
        }
    }

    return (
        <>
            <button onClick={onClickHandler}>Download as Image</button>
        </>
    )

}