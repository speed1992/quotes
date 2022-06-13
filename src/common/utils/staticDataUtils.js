
export let currentPhilosopher;

export let currentData = [];


export const changeData = (newData) => {
    currentData = JSON.parse(JSON.stringify(newData));
}

export const removeReadData = (setTriggerChange) => {
    return new Promise(async (resolve) => {
        let readQuotesArray = [];

        await fetch("https://jsonblob.com/api/985437161566519296").then(response => response.json())
            .then(response => {
                readQuotesArray = response;
            })

        const newData = currentData.filter(({ id }, _) => readQuotesArray.indexOf(id) === -1);
        changeData(newData);
        setTriggerChange();
        resolve();
    });
}

export const setCurrentPhilosopher = (name) => {
    currentPhilosopher = name;
    localStorage.setItem("lastReadPhilosopher", currentPhilosopher)
}