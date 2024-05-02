import React, { Suspense } from 'react'
import { getCurrentPhilosopherFullname } from '../../../../common/static/utils/utils'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
const DesktopSelect = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "DesktopSelect" */ '../../home/desktop/desktop-select/desktop-select')))
const MobileSelect = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "MobileSelect" */ '../../home/mobile/mobile-select/mobile-select')))

const Select = ({ options, currentPhilosopher, onChangeHandler, onFocusHandlerCallback, isMobile, isFetchingOptions, recentPhilosophers, darkMode }) => {
    const optionsWithRecentPhilosophersOnTop = [...options]

    recentPhilosophers
        ?.slice()
        ?.reverse()
        ?.forEach((recentItem, index) => {
            const foundIdx = optionsWithRecentPhilosophersOnTop.findIndex((el) => el.value === recentItem) // -> foundIdx = 3
            const removedItem = optionsWithRecentPhilosophersOnTop.splice(foundIdx, 1)
            optionsWithRecentPhilosophersOnTop.unshift(removedItem[0])
        })

    const renderSelect = () => {
        if (isMobile) {
            return <Suspense fallback={''}>{currentPhilosopher && <MobileSelect recentPhilosophers={recentPhilosophers} onFocusHandlerCallback={onFocusHandlerCallback} onChangeHandler={onChangeHandler} currentPhilosopher={currentPhilosopher} value={getCurrentPhilosopherFullname(currentPhilosopher, optionsWithRecentPhilosophersOnTop)} placeholder={'Search philosopher'} options={optionsWithRecentPhilosophersOnTop} isFetchingOptions={isFetchingOptions} darkMode={darkMode} />}</Suspense>
        } else {
            return (
                <Suspense fallback={''}>
                    <DesktopSelect onFocusHandler={onFocusHandlerCallback} onChangeHandler={onChangeHandler} options={optionsWithRecentPhilosophersOnTop} currentPhilosopher={currentPhilosopher} isFetchingOptions={isFetchingOptions} />
                </Suspense>
            )
        }
    }

    return currentPhilosopher && options?.length > 0 && renderSelect()
}

export default Select
