import { getReadArrayFromLocalStorage } from "./localStorageUtils";

export let currentPhilosopher;

export let currentData = [];

export const changeData = (newData) => {
    currentData = JSON.parse(JSON.stringify(newData));
}

export const removeReadData = (setTriggerChange) => {
    const readQuotesArray = getReadArrayFromLocalStorage();

    readQuotesArray.forEach(element => {
        const newObject = { quote: currentData[element], read: true };
        currentData[element] = newObject;
    });
    // const newData = currentData.filter((_, index) => readQuotesArray.indexOf(index) === -1);

    // setTriggerChange();
}

export const setCurrentPhilosopher = (name) => {
    currentPhilosopher = name;
    localStorage.setItem("lastReadPhilosopher", currentPhilosopher)
}