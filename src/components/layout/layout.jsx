import React, { Suspense } from "react";
import { useCheckMobileScreen } from "../../common/utils/custom-hooks-utils";
import "./layout.css";

export const Layout = (props) => {
    const isMobile = useCheckMobileScreen();

    const renderLayout = () => {
        if (isMobile) {
            const MobileHeader = React.lazy(() => import('../mobile-header/mobile-header'));
            return (<div className="mobile"><MobileHeader {...props} /></div>)
        }
        else {
            const DesktopHeader = React.lazy(() => import('../desktop-header/desktop-header'));
            return (<div className="desktop"><DesktopHeader {...props} /> </div>)
        }
    }

    return (
        <Suspense fallback={""}>
            {renderLayout()}
        </Suspense>
    )
}