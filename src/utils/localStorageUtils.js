export const updateVersionInLocalStorage = () => {
    console.log(process.env)
    // const APP_VERSION = process.env.REACT_APP_CURRENT_RELEASE_VERSION;
    const { LATEST_GITHUB_SHA } = localStorage;

    if (process.env.REACT_APP_CURRENT_GIT_SHA !== undefined) {

        if (typeof LATEST_GITHUB_SHA === undefined
            || LATEST_GITHUB_SHA === 'undefined'
            || LATEST_GITHUB_SHA === null
            || LATEST_GITHUB_SHA !== process.env.REACT_APP_CURRENT_GIT_SHA
        ) {
            localStorage.setItem('LATEST_GITHUB_SHA', process.env.REACT_APP_CURRENT_GIT_SHA);
        }
        // if (LATEST_GITHUB_SHA !== LATEST_GITHUB_SHA) {
        //     localStorage.clear();
        // }
    }

}
