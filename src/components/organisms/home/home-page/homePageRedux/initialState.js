export const STATIC_OPTIONS = [
    {
        value: 'NIETZSCHE',
        fullName: 'Friedrich Nietzsche',
        fullNameInOtherLanguages: {
            hi: 'फ्रेडरिक नीत्शे',
        },
    },
]
let INITIAL_STATE = {
    currentPhilosopher: 'NIETZSCHE',
    start: 1,
    end: '',
    searchText: '',
    markedMode: false,
    markedQuotes: {},
    currentData: undefined,
    userName: '',
    password: '',
    sorting: 'alphabetical',
    originalOptions: STATIC_OPTIONS,
    options: STATIC_OPTIONS,
    darkMode: false,
    voiceSpeed: 1,
    scrollPosition: {},
    scheduledPosts: {},
    syncDate: 46190630,
    restoreQuotesFromServerCachedDate: 46190630,
    isLoggedIn: false,
    voiceType: 0,
    recentPhilosophers: [],
    minMode: false,
    logs: [],
    searchFilters: {
        inclusions: '',
        exclusions: '',
    },
}

export default INITIAL_STATE
