import { useEffect, useState } from "react";
import { checkIfNull } from "../../components/home-page/utils/utils";
import { setCurrentPhilosopher } from "./staticDataUtils";

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
        setStorageValue(defaultValue);
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