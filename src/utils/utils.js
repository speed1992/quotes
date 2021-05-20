import { changeData, currentData, dataCollection, currentPhilosopher, resetData } from "./staticDataUtils";

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

        if (typeof scrollPosition != undefined && scrollPosition && scrollPosition > 0) {
            listRef.current.scrollToItem(scrollPosition - 1);
        }
    }

}

export const search = (searchText) => {
    const newData = dataCollection[currentPhilosopher].filter(({ quote }, index) => {
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