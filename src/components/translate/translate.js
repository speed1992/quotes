import { devModeSignature, rowClickHandler } from "../row/utils";
import { useTranslation } from "./custom-hooks/custom-hooks";

export const Translate = ({ inputText, from = "en", to = "hi", openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n }) => {
    const translationOutput = useTranslation({ inputText, from, to })
    const philosopherFullnameIn_SelectedLanguage = philosopherFullName_i10n[to];
    return (
        (
            translationOutput !== "" ?
                (
                    < span key={index} > {translationOutput}
                        < button onClick={rowClickHandler.bind(this, { openSnackbar, searchText, start, end, quote: translationOutput, philosopherFullName: philosopherFullnameIn_SelectedLanguage, index })} >
                            Copy!{devModeSignature()}
                        </button >
                    </span >
                )
                : null
        )

    )
}