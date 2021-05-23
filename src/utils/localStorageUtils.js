export const updateVersionInLocalStorage = () => {
    console.log("process.env", process.env)

    const LATEST_GITHUB_SHA = process.env.REACT_APP_CURRENT_GIT_SHA;
    // const APP_VERSION = process.env.REACT_APP_CURRENT_RELEASE_VERSION;

    if (process.env.REACT_APP_CURRENT_GIT_SHA !== undefined) {

        if (typeof localStorage.LATEST_GITHUB_SHA === undefined || localStorage.LATEST_GITHUB_SHA === 'undefined' || localStorage.LATEST_GITHUB_SHA === null) {
            localStorage.setItem('LATEST_GITHUB_SHA', LATEST_GITHUB_SHA);
        }
        // if (localStorage.LATEST_GITHUB_SHA !== LATEST_GITHUB_SHA) {
        //     localStorage.clear();
        // }
    }

    // if (process.env.REACT_APP_CURRENT_RELEASE_VERSION !== undefined) {

    //     if (typeof localStorage.APP_VERSION === 'undefined' || localStorage.APP_VERSION === null) {
    //         localStorage.setItem('APP_VERSION', APP_VERSION);
    //     }
    //     // if (localStorage.LATEST_GITHUB_SHA !== LATEST_GITHUB_SHA) {
    //     //     localStorage.clear();
    //     // }
    // }

}
