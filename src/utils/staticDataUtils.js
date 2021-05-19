import { NIETZSCHE } from "../static/nietzsche";
import { MARIE_KONDO } from "../static/marie-kondo"

export let dataCollection = { NIETZSCHE, MARIE_KONDO };

export let currentData = [];

export let currentPhilosopher = ""

export const initializeData = () => {
    currentData = JSON.parse(JSON.stringify(NIETZSCHE));
    currentPhilosopher = "NIETZSCHE";
}

export const resetData = () => {
    currentData = JSON.parse(JSON.stringify(NIETZSCHE));
}

export const changeData = (newData) => {
    currentData = JSON.parse(JSON.stringify(newData));
}

export const setCurrentPhilosopher = (name) => {
    currentPhilosopher = name;
}