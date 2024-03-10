export const ruleEngine = {
    makeDecision: function (rules, { value, params }) {
        for (let i = 0; i < rules.length; i++) {
            debugger
            const returnValue = rules[i](value, params)
            console.log('row height', returnValue)
            if (returnValue) return returnValue
        }
    },
}
