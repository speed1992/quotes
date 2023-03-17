export const rules = [
    function (value) {
        if (value <= 20) return 2.6
    },
    function (value) {
        if (value > 20 && value <= 30) return 2.3
    },
    function (value) {
        if (value > 30 && value <= 40) return 2.2
    },
    function (value) {
        if (value > 40 && value <= 50) return 2.0
    },
    function (value) {
        if (value > 50 && value <= 60) return 1.9
    },
    function (value) {
        if (value > 60 && value <= 70) return 1.6
    },
    function (value) {
        if (value > 70 && value <= 80) return 1.5
    },
    function (value) {
        if (value > 80 && value <= 90) return 1.4
    },
    function (value) {
        if (value > 90) return 1.3
    },
    function () {
        return 1.8
    },
]
