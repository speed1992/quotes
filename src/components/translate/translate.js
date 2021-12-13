import { devModeSignature, rowClickHandler } from "../row/utils";
import { useTranslation } from "./custom-hooks/custom-hooks";

export const Translate = ({ inputText, from = "en", to = "hi", openSnackbar, searchText, start, end, philosopherFullName, index }) => {
    const translationOutput = useTranslation({ inputText, from, to })
    return (
        (
            translationOutput !== "" ?
                (
                    < span key={index} > {translationOutput}
                        < button onClick={rowClickHandler.bind(this, { openSnackbar, searchText, start, end, quote: translationOutput, philosopherFullName, index })} >
                            Copy!{devModeSignature()}
                        </button >
                    </span >
                )
                : null
        )

    )
}