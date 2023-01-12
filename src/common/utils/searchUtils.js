import { changeQuotesData, searchByWordLength } from '../../components/quotes-list/utils/utils.js';
import { search } from './utils.js';

export function combinedSearch({ searchText, start, end, philosopher, setCurrentData, options }, markedMode = false) {
    let dataForSearch = [];
    // eslint-disable-next-line
    if (searchText === '' && start == 1 && end == '') changeQuotesData({ philosopher, setCurrentData, options }, markedMode);
    else {
        dataForSearch = search({ searchText, philosopher, options });
        if (dataForSearch) searchByWordLength(start, end, dataForSearch, markedMode, setCurrentData);
    }
}
