import { useEffect, useState } from "react";
import { limiter } from "../../../common/settings/bottleneck.settings";
import { hitTranslationAPI } from "../utils/utils";

export function useTranslation({ inputText, from, to }) {

    const [translationOutput, setTranslationOutput] = useState("");

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        const wrapped = limiter.wrap(hitTranslationAPI.bind(this, { inputText, from, to, signal }));

        wrapped()
            .then(response => response.json())
            .then(({ translatedText }) => setTranslationOutput(translatedText))
            .catch((e) => console.log(e));

        return (() => {
            controller.abort();
            setTranslationOutput("")
        })


    }, [inputText, from, to])

    return translationOutput;
}