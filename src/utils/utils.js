import { changeData, currentData, currentPhilosopher, dataCollection, resetData } from "./staticDataUtils";

export const scrollToFirstRow = (listRef) => {
    console.log("scrollToFirstRow")
    console.log("currentData.length", currentData.length)
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
    console.log("scrollToMemorizedRow")
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
    const newData = dataCollection[currentPhilosopher].filter(quote => {
        if ((quote.toLowerCase().indexOf(searchText.toLowerCase()) < 0)) {
            return false
        }
        else {
            return true;
        }
    });


    changeData(newData);
}

export const resetSearch = () => resetData();