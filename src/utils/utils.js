import { changeData, data, resetData } from "./staticDataUtils";

export const scrollToFirstRow = (listRef) => listRef.current.scrollToItem(0);

export const scrollToRow = (listRef, scrollPosition) => listRef.current.scrollToItem(scrollPosition);

export const scrollToMemorizedRow = (listRef) => {
    let scrollPosition = JSON.parse(localStorage.getItem('scrollPosition'));

    if (typeof scrollPosition != undefined && scrollPosition && scrollPosition > 0) {
        listRef.current.scrollToItem(scrollPosition - 1);
    }
}

export const search = (searchText, ...callback) => {

    const newData = data.filter(({ quote }, index) => {
        if ((quote.toLowerCase().indexOf(searchText.toLowerCase()) < 0)) {
            return false
        }
        else {
            return true;
        }
    });

    callback.map(eachCallback => eachCallback())

    changeData(newData);

}

export const resetSearch = (...callback) => {
    resetData();
    callback.map(eachCallback => eachCallback())
}