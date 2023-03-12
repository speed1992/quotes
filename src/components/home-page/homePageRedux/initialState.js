import OPTIONS from '../../../static/philosophers-data.json'

export const INITIAL_STATE = {
    currentPhilosopher: 'NIETZSCHE',
    start: 1,
    end: '',
    searchText: '',
    markedMode: false,
    markedQuotes: {},
    currentData: [],
    originalData: [],
    translate: false,
    sorting: 'alphabetical',
    options: OPTIONS.reverse(),
    quotesLoaded: false,
    darkMode: false,
    voiceSpeed: 5,
    scrollPosition: null,
}
