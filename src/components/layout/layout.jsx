import React from "react";
import DesktopHeader from "../desktop-header/desktop-header";
import MobileHeader from "../mobile-header/mobile-header";
import "./layout.css";

export const Layout = (props) => (
    <>
        <div className="desktop">
            <DesktopHeader {...props} />
        </div>
        <div className="mobile">
            <MobileHeader {...props} />
        </div>

    </>
)