
import copy from 'copy-to-clipboard';
import { currentPhilosopher } from '../../utils/staticDataUtils';
import { insert, setCharAt } from '../../utils/stringUtils';

export function copyQuoteText(quoteText, philosopherFullName) {
    if (philosopherFullName.toLowerCase().trim() === "all") {
        let splittingIndex = quoteText.lastIndexOf("― ")
        let updatedQuoteText = setCharAt(quoteText, splittingIndex - 1, '')
        updatedQuoteText = "\"" + updatedQuoteText;
        updatedQuoteText = insert(updatedQuoteText, splittingIndex, "\"\n\n")
        copy(updatedQuoteText);
    }
    else
        copy(`"${quoteText}"\n\n― ${philosopherFullName}`);
}

export function rememberScrollPosition(searchText, start, end, index) {
    /*eslint-disable-next-line eqeqeq*/
    if (searchText === "" && start == 1 && end == "")
        localStorage.setItem(currentPhilosopher + "-scrollPosition", index)
}

export function rowClickHandler({ openSnackbar, searchText, start, end, philosopherFullName, quote, index }) {
    copyQuoteText(quote, philosopherFullName)
    rememberScrollPosition(searchText, start, end, index)
    openSnackbar('Copied!', 1000);
}

export function devModeSignature() {
    return (isAppInDevMode() ? <>dev-mode</> : null)
}

export function isAppInDevMode() {
    return process.env.NODE_ENV !== "production"
}

export function rowClickHandlerFoBothQuotes({ openSnackbar, searchText, start, end, quote: { hindi, english }, philosopherNames: { englishFullname, hindiFullname }, index }) {
    debugger
    copyBothQuotesText({ hindiQuote: hindi, englishQuote: english }, { englishFullname, hindiFullname })
    rememberScrollPosition(searchText, start, end, index)
    openSnackbar('Copied!', 1000);
}

export function copyBothQuotesText({ englishQuote, hindiQuote }, { englishFullname, hindiFullname }) {
    copy(`"${englishQuote}"\n\n― ${englishFullname}\n\n\n"${hindiQuote}"\n\n― ${hindiFullname}`);
}