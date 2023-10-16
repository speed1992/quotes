import React, { Suspense } from 'react'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { isMobile } from '../../../../common/utils/utils'
import './header-layout.css'
const MobileHeader = React.lazy(() => retryTenTimes(() => import('../mobile/mobile-header/mobile-header')))
const DesktopHeader = React.lazy(() => retryTenTimes(() => import('../desktop/desktop-header/desktop-header')))

const Header = (props) => {
    return (
        <Suspense fallback={''}>
            {isMobile() ? (
                <div className="mobile">
                    <MobileHeader {...props} />
                </div>
            ) : (
                <div className="desktop">
                    <DesktopHeader {...props} />
                </div>
            )}
        </Suspense>
    )
}

export default Header
