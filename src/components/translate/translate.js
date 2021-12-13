import React from "react";
import { useTranslation } from "./custom-hooks/custom-hooks";

export const Translate = ({ index, inputText, from = "en", to = "hi" }) => {
    const translationOutput = useTranslation({ inputText, from, to })
    return (<span key={index}>{translationOutput}</span>)
}