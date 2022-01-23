import { useEffect, useState } from "react";
import { checkIfNull } from "../../components/home-page/utils/utils";
import { setCurrentPhilosopher } from "./staticDataUtils";

export const getCurrentPhilosopherFromLocalStorage = () => {
    try {
        let lastReadPhilosopher = localStorage.getItem('lastReadPhilosopher');
        if (checkIfNull(lastReadPhilosopher)) lastReadPhilosopher = "NIETZSCHE";
        setCurrentPhilosopher(lastReadPhilosopher);
    } catch (e) {

    }
}

function getStorageValue(key, defaultValue) {
    // getting stored value
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};