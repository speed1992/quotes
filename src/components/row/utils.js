
import copy from 'copy-to-clipboard';
import { currentPhilosopher } from '../../utils/staticDataUtils';

export function copyQuoteText(quoteText, philosopherFullName) {
    if (philosopherFullName.toLowerCase().trim() === "all") {
        copy(`${quoteText}`);
    }
    else
        copy(`"${quoteText}"\n\n― ${philosopherFullName}`);
}

export function rememberScrollPosition(searchText, start, end, index) {
    /*eslint-disable-next-line eqeqeq*/
    if (searchText === "" && start == 1 && end == "")
        localStorage.setItem(currentPhilosopher + "-scrollPosition", index)
}

export function rowClickHandler(openSnackbar, { searchText, start, end, philosopherFullName, quote, index }) {
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