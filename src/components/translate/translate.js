import React, { useEffect, useState } from "react";

export const Translate = ({ index, inputText, from = "en", to = "hi", triggerChange }) => {

    // const [isFetching, setIsFetching] = useState(false);
    const [translationOutput, setTranslationOutput] = useState("");
    const [triggerRender, setTriggerRender] = useState(triggerChange)

    useEffect(() => {

        console.log(triggerChange)
        setTriggerRender(triggerChange)
    }, [triggerChange])

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

    }, [])

    return (
        <span key={index}>
            {translationOutput !== "" ? translationOutput : null}
        </span>)
}