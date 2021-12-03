import PHILOSOPHERS_DATA from "../static/philosophers-data";

export let dataCollection = PHILOSOPHERS_DATA.reduce((acc, obj, index) => {
    acc[obj.value] = obj.quotes;
    return acc
}, {})

export let currentPhilosopher = ""

export let currentData = [];

export const initializeData = () => {
    console.log(PHILOSOPHERS_DATA)
    currentPhilosopher = PHILOSOPHERS_DATA[0].value;
    currentData = PHILOSOPHERS_DATA[0].quotes;
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