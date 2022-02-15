import { v4 as uuidv4 } from 'uuid';
import { retryTenTimes } from '../../common/utils/apiUtils';
import { sortFeatureDisabled } from '../../common/utils/urlUtils';
import PHILOSOPHERS_DATA from "../philosophers-data";

export const addPhilosopherNameToQuote = (quote, philosopherFullName) => `${quote} ― ${philosopherFullName}`

export const convertQuoteArray = (quoteArr, philosopherFullName) => quoteArr.map((quote) => addPhilosopherNameToQuote(quote, philosopherFullName))

export const doOperationsOnData = (data) => {
    // Sorting except the first element
    const allElement = data.shift();
    if (!sortFeatureDisabled())
        data.sort((a, b) => a.fullName.localeCompare(b.fullName))
    data.unshift(allElement);

    data.forEach(element => {
        element.id = uuidv4()
    });
    return data
}

export const lazyLoadAsset = (philosopherName, callback) => {
    return new Promise((resolve, reject) => {
        const fileName = philosopherName.toLowerCase()
        retryTenTimes(() => import("../assets/quotes/" + fileName + ".json"))
            .then((data) => {
                callback && callback();
                addPhilosopherInGlobalData(philosopherName, data?.default)
                resolve();
            })
            .catch(e => reject(e));
    });
};

export const lazyLoadAllAssets = (callback) => {
    return new Promise((resolve, reject) => {
        const promiseArray = [];
        PHILOSOPHERS_DATA.forEach(({ value: philosopherName, fullName: philosopherFullName }) => {
            if (philosopherName !== "ALL") {
                const fileName = philosopherName.toLowerCase()
                const promise = retryTenTimes(() => import("../assets/quotes/" + fileName + ".json"))
                    .then((data) => {
                        callback && callback();
                        const convertedQuotes = convertQuoteArray(data?.default, philosopherFullName)
                        addPhilosopherInGlobalData("ALL", convertedQuotes)
                    })
                    .catch((e) => console.log(e));
                promiseArray.push(promise);
            }
        });

        Promise.all(promiseArray).then(resolve).catch(reject)
    });
};

export const getPhilosopherObjectIndex = (philosopherName) => PHILOSOPHERS_DATA.findIndex(({ value }) => value === philosopherName);


export const getPhilosopherData = (philosopherName) => PHILOSOPHERS_DATA.filter(({ value }) => value === philosopherName)[0]

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