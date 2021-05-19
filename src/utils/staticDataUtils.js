import { NIETZSCHE } from "../static/nietzsche";
import { MARIE_KONDO } from "../static/marie-kondo"

export let dataCollection = { NIETZSCHE, MARIE_KONDO };

export let currentData = [];

export const resetData = () => {
    currentData = NIETZSCHE;
}

export const changeData = (newData) => {
    currentData = JSON.parse(JSON.stringify(newData));
}
