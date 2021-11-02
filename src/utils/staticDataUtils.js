import PHILOSOPHERS_DATA from "../static/philosophers-data";

export let dataCollection = PHILOSOPHERS_DATA.reduce((acc, obj, index) => {
    acc[obj.value] = obj.quotes;
    return acc
}, {})

export let currentPhilosopher = ""

export let currentData = [];

export const initializeData = () => {
    currentPhilosopher = PHILOSOPHERS_DATA[0].value;
    currentData = JSON.parse(JSON.stringify(dataCollection[PHILOSOPHERS_DATA[0].value]));
    localStorage.setItem("lastReadPhilosopher", currentPhilosopher)
}

export const resetData = () => {
    currentData = JSON.parse(JSON.stringify(dataCollection[currentPhilosopher]));
}

export const changeData = (newData) => {
    currentData = JSON.parse(JSON.stringify(newData));
}

export const setCurrentPhilosopher = (name) => {
    currentPhilosopher = name;
    localStorage.setItem("lastReadPhilosopher", currentPhilosopher)
}