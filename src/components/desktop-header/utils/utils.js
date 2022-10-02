import { scrollToMemorizedRow } from "../../../common/utils/utils";
import { lazyLoadAllAssets, lazyLoadAsset } from "../../../static/utils/utils";
import { changeQuotesData } from "../../quotes-list/utils/utils";

export function onPhilosopherSelectChange({ philosopher, listRef, setIsFetching, setStart, setEnd, setSearchText, setCurrentPhilosopher, setCurrentData,options,setOptions,setQuotesLoaded }) {
    function callback() {
        setCurrentPhilosopher(philosopher);
        changeQuotesData({philosopher, setCurrentData,options});
        scrollToMemorizedRow(listRef);
        setIsFetching(false);
    }
    setStart(1);
    setEnd("");
    setSearchText('');
    setIsFetching(true);

    if (philosopher.trim().toLowerCase() === "all")
        lazyLoadAllAssets().then(callback);

    else
        lazyLoadAsset(philosopher,{options,setOptions},setQuotesLoaded,[]).then(callback);
}