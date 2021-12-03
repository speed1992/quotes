import PHILOSOPHERS_DATA from "../philosophers-data"

export const addPhilosopherNameToQuote = (quote, philosopherFullName) => `${quote} ― ${philosopherFullName}`

export const convertQuoteArray = (quoteArr, philosopherFullName) => quoteArr.map((quote) => addPhilosopherNameToQuote(quote, philosopherFullName))

export const doOperationsOnData = (data) => {
    // Sort options alphabetically
    data.sort((a, b) => a.displayName.localeCompare(b.displayName))

    // Insert All option
    var allQuotesCombined = data.reduce((acc, { quotes, fullName }) => {
        let newQuoteArray = convertQuoteArray(quotes, fullName)
        acc.quotes = [...acc.quotes, ...newQuoteArray]
        return acc
    }, { id: 99, value: "ALL", displayName: "All", fullName: "", quotes: [] })

    data.unshift(allQuotesCombined);

    return data
}

export const lazyLoadAsset = (philosopherName, callback) => {
    return new Promise(async (res, rej) => {
        const fileName = philosopherName.split("_").join("-").toLowerCase()
        import("../assets/" + fileName + ".json").then((data) => {
            callback && callback();
            addPhilosopherInGlobalData(philosopherName, data?.default)
        });
    });
};

const getFilePath = (philosopherName) => {
    let currentArray = PHILOSOPHERS_DATA.filter(({ value }, index) => value === philosopherName);
    return currentArray[0].filePath;
}

const getPhilosopherObjectIndex = (philosopherName) => {
    let index = PHILOSOPHERS_DATA.findIndex(({ value }, index) => value === philosopherName);
    return index;
}

export const addPhilosopherInGlobalData = (philosopherName, data) => {
    const index = getPhilosopherObjectIndex(philosopherName);
    PHILOSOPHERS_DATA[index].quotes = data;
}