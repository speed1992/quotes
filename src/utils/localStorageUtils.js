export const updateVersionInLocalStorage = () => {
    console.log("process.env", process.env)
    const APP_VERSION = process.env.REACT_APP_CURRENT_GIT_SHA;

    if (typeof localStorage.APP_VERSION === 'undefined' || localStorage.APP_VERSION === null) {
        localStorage.setItem('APP_VERSION', APP_VERSION);
    }
    // if (localStorage.APP_VERSION !== APP_VERSION) {
    //     localStorage.clear();
    // }
}
