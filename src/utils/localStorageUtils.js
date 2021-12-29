// import { refreshPageWithNewKey } from "./routeUtils";
import { checkIfNull } from "../components/home-page/utils/utils";
import { setCurrentPhilosopher } from "./staticDataUtils";

export const updateVersionInLocalStorage = () => {
    // const APP_VERSION = process.env.REACT_APP_CURRENT_RELEASE_VERSION;
    const { LATEST_GITHUB_SHA } = localStorage;

    if (process.env.REACT_APP_CURRENT_GIT_SHA !== undefined) {
        if (LATEST_GITHUB_SHA !== process.env.REACT_APP_CURRENT_GIT_SHA) {
            localStorage.setItem('LATEST_GITHUB_SHA', process.env.REACT_APP_CURRENT_GIT_SHA);
            // refreshPageWithNewKey(process.env.REACT_APP_CURRENT_GIT_SHA)
        }
        // if (LATEST_GITHUB_SHA !== LATEST_GITHUB_SHA) {
        //     localStorage.clear();
        // }
    }
}

export const getCurrentPhilosopherFromLocalStorage = () => {
    try {
        let lastReadPhilosopher = localStorage.getItem('lastReadPhilosopher');
        if (checkIfNull(lastReadPhilosopher)) lastReadPhilosopher = "NIETZSCHE";
        setCurrentPhilosopher(lastReadPhilosopher);
        return lastReadPhilosopher
    } catch (e) {

    }
}
