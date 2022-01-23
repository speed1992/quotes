import PHILOSOPHERS_DATA from "../../static/philosophers-data";

export let currentPhilosopher;

export let currentData = [];

export const initializeData = () => {
    currentPhilosopher = PHILOSOPHERS_DATA[0].value;
    currentData = PHILOSOPHERS_DATA[0].quotes;
    localStorage.setItem("lastReadPhilosopher", currentPhilosopher)
}

export const changeData = (newData) => {
    currentData = JSON.parse(JSON.stringify(newData));
}

export const setCurrentPhilosopher = (name) => {
    currentPhilosopher = name;
    localStorage.setItem("lastReadPhilosopher", currentPhilosopher)
}