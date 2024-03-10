export const rules = [
    function (value, { end }) {
        if (end <= 20) return 500
    },
    function (value, { end }) {
        if (end <= 40) return 600
    },
    function (value, { end }) {
        if (end <= 100) return 900
    },
    function (value, { end }) {
        if (end > 100) return 1100
    },
]
