import { App } from "../../App";
import withClearCache from "../../components/clear-cache/clear-cache";
import { isAppInDevMode } from "../../components/row/utils";

export const renderAppAccordingToTheEnv = () => {
    const AppNoCacheOnProdPush = withClearCache(App);
    return (isAppInDevMode() ? App : AppNoCacheOnProdPush)
}

export const isUndefined = (value) => typeof value === 'undefined' 