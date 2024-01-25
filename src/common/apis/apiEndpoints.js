const BASEURL = {
    USER_DETAILS: `https://quotes-backend.vercel.app/api`,
    STATIC_ASSETS_BASEURL: `https://cdn.jsdelivr.net/gh/speed1992/quotes/src/common/static`,
}

export const API_ENDPOINTS = {
    STATIC_DATA: {
        STATIC_QUOTES: `${BASEURL.STATIC_ASSETS_BASEURL}/assets/quotes/`,
        STATIC_ASSET_GRAPH: `${BASEURL.STATIC_ASSETS_BASEURL}/philosophers-data.json`,
    },

    MARKED_QUOTES: {
        BACKUP: `${BASEURL.USER_DETAILS}/markedQuotes/backup`,
        RESTORE: `${BASEURL.USER_DETAILS}/markedQuotes/restore`,
        GET_COUNT: `${BASEURL.USER_DETAILS}/markedQuotes/getCount`,
    },

    USER: {
        LOGIN: `${BASEURL.USER_DETAILS}/user/login`,
        CREATE: `${BASEURL.USER_DETAILS}/user/create`,
    },

    TRANSLATE: `https://translate.argosopentech.com/translate`,
    TRANSLATE2: `https://libretranslate.de/translate`,

    ERROR: {
        SEND: `${BASEURL.USER_DETAILS}/errors/`,
    },
}
