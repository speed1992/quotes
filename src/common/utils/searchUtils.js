import { changeQuotesData, searchByWordLength } from "../../components/quotes-list/utils/utils.js";
import { currentPhilosopher } from "./staticDataUtils.js";
import { search } from "./utils.js";

export function combinedSearch(searchText, start, end, markedMode = false) {
    let dataForSearch = [];
    // eslint-disable-next-line
    if (searchText === "" && start == 1 && end == "")
        changeQuotesData(currentPhilosopher, markedMode);
    else {
        dataForSearch = search(searchText);
        searchByWordLength(start, end, dataForSearch, markedMode)
    }
}