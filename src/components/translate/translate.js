import { adminFeatureKey } from "../../utils/urlUtils";
import { devModeSignature, rowClickHandler, rowClickHandlerFoBothQuotes } from "../row/utils";
import { useTranslation } from "./custom-hooks/custom-hooks";

export const Translate = ({ inputText, from = "en", to = "hi", openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n }) => {
    const translationOutput = useTranslation({ inputText, from, to })
    const philosopherFullnameIn_SelectedLanguage = philosopherFullName_i10n[to];
    return (
        (
            translationOutput !== "" && translationOutput !== undefined && translationOutput ?
                (
                    < span key={index} > {translationOutput}
                        < button onClick={rowClickHandler.bind(this, { openSnackbar, searchText, start, end, quote: translationOutput, philosopherFullName: philosopherFullnameIn_SelectedLanguage, index })} >
                            Copy!{devModeSignature()}
                        </button >
                        {adminFeatureKey() ? < button onClick={rowClickHandlerFoBothQuotes.bind(this, { openSnackbar, searchText, start, end, quote: { hindi: translationOutput, english: inputText }, philosopherNames: { englishFullname: philosopherFullName, hindiFullname: philosopherFullnameIn_SelectedLanguage }, index })} >
                            Copy Both!{devModeSignature()}
                        </button > : null}
                    </span >
                )
                : null
        )

    )
}