import React, { useEffect, useState } from "react";

export const Translate = ({ index, inputText, from = "en", to = "hi" }) => {

    const [translationOutput, setTranslationOutput] = useState("");

    useEffect(() => {
        (async function () {
            try {
                // setIsFetching(true);

                const res = await fetch("https://translate.api.skitzen.com/translate", {
                    method: "POST",
                    body: JSON.stringify({
                        q: inputText,
                        source: from,
                        target: to,
                        format: "text",
                        api_key: ""
                    }),
                    headers: { "Content-Type": "application/json" }
                });

                const { translatedText } = await res.json();
                setTranslationOutput(translatedText);
            } catch (error) {
                console.log(error)
            }
            finally {
                // setIsFetching(false)
            }
        })();

        return (() => {
            setTranslationOutput("")
        })

    }, [inputText, from, to])

    return (
        <span key={index}>
            {translationOutput !== "" ? translationOutput : null}
        </span>)
}