import { getPhilosopherData } from "../static/utils/utils";
import { currentData, currentPhilosopher } from "./staticDataUtils";

export const scrollToFirstRow = (listRef) => {
    if (currentData.length > 0 && listRef.current) {
        listRef.current.scrollToItem(0)
    }
}

export const scrollToRow = (listRef, scrollPosition) => {
    if (currentData.length > 0 && listRef.current) {
        listRef.current.scrollToItem(scrollPosition)
    }
};

export const scrollToMemorizedRow = (listRef) => {

    if (currentData.length > 0 && listRef.current) {
        let scrollPosition = JSON.parse(localStorage.getItem(currentPhilosopher + '-scrollPosition'));

        if (typeof scrollPosition !== undefined && scrollPosition !== "undefined" && scrollPosition && scrollPosition > 0) {
            listRef.current.scrollToItem(scrollPosition);
        } else {
            scrollToFirstRow(listRef);
        }
    }
}

export const search = (searchText) => {
    const obj = getPhilosopherData(currentPhilosopher);
    const { quotes } = obj;
    const filteredQuotes = quotes && quotes.filter(quote => {
        if ((quote.toLowerCase().indexOf(searchText.toLowerCase()) < 0)) {
            return false
        }
        else {
            return true;
        }
    });

    return filteredQuotes;
}

export const isMobile = () => ((window.innerWidth <= 800) && (window.innerHeight <= 600))
