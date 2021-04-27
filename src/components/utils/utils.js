import { changeData, INITIAL_DATA, resetData } from "../../static/data";

export const scrollToFirstRow = (listRef) => listRef.current.scrollToItem(0);

export const scrollToRow = (listRef, scrollPosition) => listRef.current.scrollToItem(scrollPosition);

export const scrollToMemorizedRow = (listRef, rowNumber = null, align = "center") => {
    let scrollPosition = JSON.parse(localStorage.getItem('scrollPosition'));

    if (typeof scrollPosition != undefined && scrollPosition && scrollPosition > 0) {
        listRef.current.scrollToItem(scrollPosition, align);
    }
}

export const delayedScrollToRow = (listRef) => {
    setTimeout(() => {
        try {
            scrollToMemorizedRow(listRef);
        }
        catch (e) {
            console.log(e)
        }
    }, 1500)
}

export const search = (searchText, ...callback) => {

    const newData = INITIAL_DATA.filter(({ quote }, index) => {
        if ((quote.indexOf(searchText) < 0)) {
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