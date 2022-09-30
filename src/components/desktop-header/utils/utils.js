import { scrollToMemorizedRow } from "../../../common/utils/utils";
import { lazyLoadAllAssets, lazyLoadAsset } from "../../../static/utils/utils";
import { changeQuotesData } from "../../quotes-list/utils/utils";

export function onPhilosopherSelectChange({ philosopher, triggerChange, listRef, setTriggerChange, setIsFetching, setStart, setEnd, setSearchText, setCurrentPhilosopher }) {
    function callback() {
        setCurrentPhilosopher(philosopher);
        changeQuotesData(philosopher);
        setTriggerChange(!triggerChange);
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
        lazyLoadAsset(philosopher).then(callback);
}