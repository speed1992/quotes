import { ruleEngine } from './ruleEngine'

export const autoAdjustFont = (quote) => {
    const charCount = quote.split('').length
    return `${ruleEngine.makeDecision(charCount)}rem`
}
