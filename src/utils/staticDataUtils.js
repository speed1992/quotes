import { NIETZSCHE } from "../static/nietzsche";
import { MARIE_KONDO } from "../static/marie-kondo"

export let dataCollection = { NIETZSCHE, MARIE_KONDO };
export let currentPhilosopher = ""

export let currentData = [];

export const initializeData = () => {
    currentData = JSON.parse(JSON.stringify(NIETZSCHE));
    currentPhilosopher = "NIETZSCHE";
    localStorage.setItem("lastReadPhilosopher", currentPhilosopher)
}

export const resetData = () => {
    currentData = JSON.parse(JSON.stringify(NIETZSCHE));
}

export const changeData = (newData) => {
    currentData = JSON.parse(JSON.stringify(newData));
    console.log("currentData", currentData)
    debugger
}

export const setCurrentPhilosopher = (name) => {
    currentPhilosopher = name;
    localStorage.setItem("lastReadPhilosopher", currentPhilosopher)
}