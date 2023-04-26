import React, { Suspense } from 'react'
import { retryTenTimes } from '../../common/utils/apiUtils'
import { getCurrentPhilosopherFullname } from '../../static/utils/utils'
import './select.css'
const DesktopSelect = React.lazy(() => retryTenTimes(() => import('../desktop-select/desktop-select')))
const MobileSelect = React.lazy(() => retryTenTimes(() => import('../mobile-select/mobile-select')))

const Select = ({ options, currentPhilosopher, onChangeHandler, onFocusHandlerCallback, isMobile, isFetchingOptions }) => {
    const renderSelect = () => {
        if (isMobile) {
            return (
                <Suspense fallback={''}>
                    <MobileSelect onFocusHandlerCallback={onFocusHandlerCallback} onChangeHandler={onChangeHandler} currentPhilosopher={currentPhilosopher} value={getCurrentPhilosopherFullname(currentPhilosopher, options)} placeholder={'Search philosopher'} options={options} isFetchingOptions={isFetchingOptions} />
                </Suspense>
            )
        } else {
            return (
                <Suspense fallback={''}>
                    <DesktopSelect onFocusHandler={onFocusHandlerCallback} onChangeHandler={onChangeHandler} options={options} currentPhilosopher={currentPhilosopher} isFetchingOptions={isFetchingOptions} />
                </Suspense>
            )
        }
    }

    return renderSelect()
}

export default Select
