import React, { Suspense } from 'react'
import { isMobile } from '../../common/utils/utils'
import './header-layout.css'

const MobileHeader = React.lazy(() => import('../mobile-header/mobile-header'))
const DesktopHeader = React.lazy(() => import('../desktop-header/desktop-header'))

export const Header = (props) => {
    return (
        <Suspense fallback={''}>
            {isMobile() ? (
                <div className="mobile">
                    <MobileHeader {...props} />
                </div>
            ) : (
                <div className="desktop">
                    <DesktopHeader {...props} />{' '}
                </div>
            )}
        </Suspense>
    )
}
