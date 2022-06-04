import { useEffect, useState } from "react";
import { checkIfNull } from "../../components/home-page/utils/utils";
import { currentPhilosopher, setCurrentPhilosopher } from "./staticDataUtils";

export const getCurrentPhilosopherFromLocalStorage = () => {
    try {
        let lastReadPhilosopher = localStorage.getItem('lastReadPhilosopher');
        if (checkIfNull(lastReadPhilosopher)) lastReadPhilosopher = "NIETZSCHE";
        setCurrentPhilosopher(lastReadPhilosopher);
    } catch (e) { }
}

export function getStorageValue(key, defaultValue) {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    if (initial === undefined || initial === "undefined" || initial === "null" || initial === null) {
        setStorageValue(key, defaultValue);
        return defaultValue;
    }
    else
        return initial;
}

export function setStorageValue(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export function getReadArrayFromLocalStorage() {
    const READ_ARRAY_LOCALSTORAGE_KEY = `${currentPhilosopher}-MARKED_AS_READ`;
    return getStorageValue(READ_ARRAY_LOCALSTORAGE_KEY, []);
}

export function setReadArrayFromLocalStorage(readQuotesArr, index) {
    const READ_ARRAY_LOCALSTORAGE_KEY = `${currentPhilosopher}-MARKED_AS_READ`;
    readQuotesArr.push(index);
    readQuotesArr = [...new Set(readQuotesArr)];
    setStorageValue(READ_ARRAY_LOCALSTORAGE_KEY, readQuotesArr);
}
