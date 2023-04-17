import OPTIONS from '../../../static/philosophers-data.json'

export const INITIAL_STATE = {
    currentPhilosopher: 'NIETZSCHE',
    start: 1,
    end: '',
    searchText: '',
    markedMode: false,
    markedQuotes: {},
    currentData: [],
    sorting: 'alphabetical',
    options: OPTIONS,
    quotesLoaded: false,
    darkMode: false,
    voiceSpeed: 0.5,
    scrollPosition: null,
    scheduledPosts: {},
}
