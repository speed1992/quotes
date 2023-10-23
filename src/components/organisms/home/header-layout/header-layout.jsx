import React, { Suspense } from 'react'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { isMobile } from '../../../../common/utils/utils'
import styles from './header-layout.module.css'
const MobileHeader = React.lazy(() => retryTenTimes(() => import('../mobile/mobile-header/mobile-header')))
const DesktopHeader = React.lazy(() => retryTenTimes(() => import('../desktop/desktop-header/desktop-header')))

const Header = (props) => {
    return (
        <Suspense>
            {isMobile() ? (
                <div className={`${styles.mobile} ${props?.darkTheme && styles.darkTheme}`}>
                    <MobileHeader {...props} />
                </div>
            ) : (
                <div className={styles.desktop}>
                    <DesktopHeader {...props} />
                </div>
            )}
        </Suspense>
    )
}

export default Header
