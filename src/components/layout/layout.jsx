import React from "react";
import { Header } from "../header/header";
import { MobileHeader } from "../mobile-header/header";

export const Layout = (props) => (
    <>
        <div className="desktop">
            <Header {...props} />
        </div>
        <div className="mobile">
            <MobileHeader {...props} />
        </div>

    </>
)