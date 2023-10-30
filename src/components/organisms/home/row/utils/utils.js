import { insert, setCharAt } from '../../../../../common/utils/stringUtils'

export function copyQuoteText(quoteText, philosopherFullName) {
    if (philosopherFullName.toLowerCase().trim() === 'all') {
        let splittingIndex = quoteText.lastIndexOf('― ')
        let updatedQuoteText = setCharAt(quoteText, splittingIndex - 1, '')
        updatedQuoteText = '"' + updatedQuoteText
        updatedQuoteText = insert(updatedQuoteText, splittingIndex, '"\n\n')
        navigator.clipboard.writeText(updatedQuoteText)
    } else navigator.clipboard.writeText(`"${quoteText}"\n\n${philosopherFullName}`)
}

export function rowClickHandler({ openSnackbar, philosopherFullName, quote }) {
    copyQuoteText(quote, philosopherFullName)
    openSnackbar('Quote Text Copied!')
}

export function devModeSignature() {
    return isAppInDevMode() ? <>dev-mode</> : null
}

export function isAppInDevMode() {
    return process.env.NODE_ENV !== 'production'
}

export function rowClickHandlerFoBothQuotes({ openSnackbar, quote: { hindi, english }, philosopherNames: { englishFullname, hindiFullname }, index }, event) {
    event.stopPropagation()
    copyBothQuotesText({ hindiQuote: hindi, englishQuote: english }, { englishFullname, hindiFullname })
    openSnackbar('Quote Text Copied!')
}

export const copyBothQuotesText = ({ englishQuote, hindiQuote }, { englishFullname, hindiFullname }) => navigator.clipboard.writeText(`"${hindiQuote}"\n\n― ${hindiFullname}\n\n\n"${englishQuote}"\n\n― ${englishFullname}`)

export function copyURL(openSnackbar, callback) {
    callback()
    navigator.clipboard.writeText(window.location.href.toString())
    openSnackbar('Quote Link Copied. You can now share!')
}
