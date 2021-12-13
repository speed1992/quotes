import { useEffect, useState } from "react";

export function useTranslation({ inputText, from, to }) {

    const [translationOutput, setTranslationOutput] = useState("");

    useEffect(() => {
        try {
            const controller = new AbortController()
            const signal = controller.signal

            fetch("https://translate.api.skitzen.com/translate", {
                method: "POST",
                body: JSON.stringify({ q: inputText, source: from, target: to, format: "text", api_key: "" }),
                headers: { "Content-Type": "application/json" },
                signal
            })
                .then(response => response.json())
                .then(({ translatedText }) => setTranslationOutput(translatedText));

            return (() => {
                controller.abort();
                setTranslationOutput("")
            })

        } catch (error) {
            console.log(error)
        }
        finally {
            // setIsFetching(false)
        }

    }, [inputText, from, to])

    return translationOutput;
}