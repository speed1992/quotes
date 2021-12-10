import { v4 as uuidv4 } from 'uuid';
import { getIndividualVersion } from "../../utils/urlUtils";
import PHILOSOPHERS_DATA from "../philosophers-data";

export const addPhilosopherNameToQuote = (quote, philosopherFullName) => `${quote} ― ${philosopherFullName}`

export const convertQuoteArray = (quoteArr, philosopherFullName) => quoteArr.map((quote) => addPhilosopherNameToQuote(quote, philosopherFullName))

export const doOperationsOnData = (data) => {
    // Sorting except the first element
    const allElement = data.shift();
    if (getIndividualVersion() !== "paras")
        data.sort((a, b) => a.displayName.localeCompare(b.displayName))
    data.unshift(allElement);

    data.forEach(element => {
        element.id = uuidv4()
    });
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

export const lazyLoadAllAssets = (callback) => {
    return new Promise(async (resolve, reject) => {
        const promiseArray = [];
        PHILOSOPHERS_DATA.forEach(async ({ value: philosopherName, fullName: philosopherFullName }) => {
            if (philosopherName !== "ALL") {
                const fileName = philosopherName.toLowerCase()
                const promise = import("../assets/" + fileName + ".json").then((data) => {
                    callback && callback();
                    const convertedQuotes = convertQuoteArray(data?.default, philosopherFullName)
                    addPhilosopherInGlobalData("ALL", convertedQuotes)
                }).catch((e) => console.log(e));
                promiseArray.push(promise);
            }
        });

        Promise.all(promiseArray).then(() => {
            debugger;
            resolve()
        }).catch(reject)
    });
};

export const getPhilosopherObjectIndex = (philosopherName) => {
    let index = PHILOSOPHERS_DATA.findIndex(({ value }, index) => value === philosopherName);
    return index;
}

export const getPhilosopherData = (philosopherName) => {
    return PHILOSOPHERS_DATA.filter(({ value }) => value === philosopherName)[0]
}

export const addPhilosopherInGlobalData = (philosopherName, quotes) => {
    if (philosopherName.trim().toLowerCase() === "all") {
        const index = getPhilosopherObjectIndex(philosopherName);
        let existingQuotes;
        if (PHILOSOPHERS_DATA[index].quotes === undefined)
            existingQuotes = [];
        else {
            existingQuotes = PHILOSOPHERS_DATA[index].quotes
        }
        PHILOSOPHERS_DATA[index].quotes = [...existingQuotes, ...quotes]
    } else {
        const index = getPhilosopherObjectIndex(philosopherName);
        PHILOSOPHERS_DATA[index].quotes = quotes;
    }

}