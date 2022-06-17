import PHILOSOPHERS_DATA from "../../static/philosophers-data";
import { getPhilosopherObjectIndex } from "../../static/utils/utils";
import { getStorageValue } from "./localStorageUtils";
export let currentPhilosopher;

export let currentData = [];

export const changeData = (newData) => {
    currentData = JSON.parse(JSON.stringify(newData));
}

export const resetData = () => {
    const index = getPhilosopherObjectIndex(currentPhilosopher);
    // console.log(PHILOSOPHERS_DATA[index]["quotes"].length);
    currentData = JSON.parse(JSON.stringify(PHILOSOPHERS_DATA[index]["quotes"]));
}

export const removeReadData = (setTriggerChange = null) => {
    return new Promise(async (resolve) => {
        let readQuotesArray = [];

        // await fetch("https://jsonblob.com/api/985437161566519296").then(response => response.json())
        //     .then(response => {
        //         readQuotesArray = response;
        //     })
        const READ_ARRAY_LOCALSTORAGE_KEY = `${currentPhilosopher}-MARKED_AS_READ`;

        readQuotesArray = getStorageValue(READ_ARRAY_LOCALSTORAGE_KEY, [])

        const newData = currentData.filter(({ id }, _) => readQuotesArray.indexOf(id) === -1);

        changeData(newData);
        setTriggerChange && setTriggerChange();
        resolve();
    });
}

export const setCurrentPhilosopher = (name) => {
    currentPhilosopher = name;
    localStorage.setItem("lastReadPhilosopher", currentPhilosopher)
}