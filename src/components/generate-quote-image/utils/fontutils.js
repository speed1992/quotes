import { ruleEngine } from '../../../common/utils/ruleEngine'
import { rules } from './ruleEngine/rules/rules'

export const autoAdjustFont = (quote) => {
    const charCount = quote.split('').length
    return `${ruleEngine.makeDecision(rules, { value: charCount, params: null }) * 1.05}rem`
}
