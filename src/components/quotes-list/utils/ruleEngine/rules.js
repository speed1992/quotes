export const rules = [
    function (value, { start }) {
        if (start <= 40) return 600
    },
    function (value, { start }) {
        if (start > 40 && start <= 60) return 800
    },
    function (value, { start }) {
        if (start > 60 && start <= 100) return 1200
    },
    function (value, { start }) {
        if (start > 100) return 2000
    },
    function () {
        return 800
    },
]
