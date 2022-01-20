import { App } from "../../App";
import withClearCache from "../../components/clear-cache-component/clear-cache-component";
import { isAppInDevMode } from "../../components/row/utils";

export const renderAppAccordingToTheEnv = () => {
    const AppNoCacheOnProdPush = withClearCache(App);
    return (isAppInDevMode() ? App : AppNoCacheOnProdPush)
}