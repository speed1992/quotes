import React, { Suspense } from "react";
import "./layout.css";

const MobileHeader = React.lazy(() => import('../mobile-header/mobile-header'));
const DesktopHeader = React.lazy(() => import('../desktop-header/desktop-header'));

export const Layout = (props) => {
    const isMobile = window.innerWidth < 700;

    return (
        <Suspense fallback={""}>
            {
                isMobile ? (<div className="mobile"><MobileHeader {...props} /></div>)
                    :
                    (<div className="desktop"><DesktopHeader {...props} /> </div>)}
        </Suspense>
    )
}