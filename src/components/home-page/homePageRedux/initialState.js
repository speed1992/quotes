let INITIAL_STATE = {
    currentPhilosopher: 'NIETZSCHE',
    start: 1,
    end: '',
    searchText: '',
    markedMode: false,
    markedQuotes: {},
    currentData: [],
    sorting: 'alphabetical',
    originalOptions: [
        {
            value: 'NIETZSCHE',
            fullName: 'Friedrich Nietzsche',
            fullNameInOtherLanguages: {
                hi: 'फ्रेडरिक नीत्शे',
            },
        },
    ],
    options: [
        {
            value: 'NIETZSCHE',
            fullName: 'Friedrich Nietzsche',
            fullNameInOtherLanguages: {
                hi: 'फ्रेडरिक नीत्शे',
            },
        },
    ],
    quotesLoaded: false,
    darkMode: false,
    voiceSpeed: 0.5,
    scrollPosition: null,
    scheduledPosts: {},
}

export default INITIAL_STATE
