import React, { useEffect, useState } from "react";
import { currentPhilosopher, setCurrentPhilosopher } from "../../utils/staticDataUtils";
import { Loader } from "../loader/loader";
import QuotesList from "../quotes-list/quotes-list";
import PHILOSOPHERS_DATA from "../../static/philosophers-data";
import useDidMountEffect from "../../utils/custom-hooks-utils";
import { checkIfNull } from "../home-page/utils/utils";

const getFilePath = (philosopherName) => {

    let currentArray = PHILOSOPHERS_DATA.filter(({ value }, index) => value === philosopherName);
    return currentArray[0].filePath;

}



const getCurrentPhilosopherFromLocalStorage = () => {
    try {
        let lastReadPhilosopher = localStorage.getItem('lastReadPhilosopher');
        if (checkIfNull()) lastReadPhilosopher = PHILOSOPHERS_DATA[0].value;
        setCurrentPhilosopher(lastReadPhilosopher);
        console.log(lastReadPhilosopher);
        return lastReadPhilosopher
    } catch (e) {

    }
}


export function LazyLoadQuoteList(props) {
    const [isFetching, setIsFetching] = useState(true);


    useEffect(() => {
        getCurrentPhilosopherFromLocalStorage();
        lazyLoadAsset(currentPhilosopher);
    }, []);

    return (isFetching ? (<><Loader />{currentPhilosopher} </>) : <QuotesList {...props} />)
}


