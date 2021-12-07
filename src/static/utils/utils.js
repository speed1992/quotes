import PHILOSOPHERS_DATA from "../philosophers-data"
import { v4 as uuidv4 } from 'uuid';

export const addPhilosopherNameToQuote = (quote, philosopherFullName) => `${quote} ― ${philosopherFullName}`

export const convertQuoteArray = (quoteArr, philosopherFullName) => quoteArr.map((quote) => addPhilosopherNameToQuote(quote, philosopherFullName))

export const doOperationsOnData = (data) => {
    // Sort options alphabetically
    data.sort((a, b) => a.displayName.localeCompare(b.displayName))
    data.forEach(element => {
        element.id = uuidv4()
    });

    // Insert All option
    // var allQuotesCombined = data.reduce((acc, { quotes, fullName }) => {
    //     let newQuoteArray = convertQuoteArray(quotes, fullName)
    //     acc.quotes = [...acc.quotes, ...newQuoteArray]
    //     return acc
    // }, { id: 99, value: "ALL", displayName: "All", fullName: "", quotes: [] })

    // data.unshift(allQuotesCombined);

    return data
}

export const lazyLoadAsset = (philosopherName, callback) => {
    return new Promise(async (resolve, reject) => {
        const fileName = philosopherName.toLowerCase()
        import("../assets/" + fileName + ".json").then((data) => {
            callback && callback();
            addPhilosopherInGlobalData(philosopherName, data?.default)
            resolve();
        }).catch(() => reject());
    });
};

export const getPhilosopherObjectIndex = (philosopherName) => {
    let index = PHILOSOPHERS_DATA.findIndex(({ value }, index) => value === philosopherName);
    return index;
}

export const getPhilosopherData = (philosopherName) => {
    return PHILOSOPHERS_DATA.filter(({ value }) => value === philosopherName)[0]
}

export const addPhilosopherInGlobalData = (philosopherName, data) => {
    const index = getPhilosopherObjectIndex(philosopherName);
    PHILOSOPHERS_DATA[index].quotes = data;
}