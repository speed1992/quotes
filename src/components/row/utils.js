
import copy from 'copy-to-clipboard';

export function copyQuoteText(quoteText, philosopherFullName) {
    if (philosopherFullName.toLowerCase().trim() === "all") {
        copy(`${quoteText}`);
    }
    else
        copy(`"${quoteText}"\n\n― ${philosopherFullName}`);
}