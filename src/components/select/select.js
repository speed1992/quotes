import React, { Suspense } from 'react'
import { getCurrentPhilosopherFullname } from '../../static/utils/utils'
import './select.css'
const DesktopSelect = React.lazy(() => import('../desktop-select/desktop-select'))
const MobileSelect = React.lazy(() => import('../mobile-select/mobile-select'))

const Select = ({ options, currentPhilosopher, onChangeHandler, isMobile }) => {
    const renderSelect = () => {
        if (isMobile) {
            return (
                <Suspense fallback={''}>
                    <MobileSelect onChangeHandler={onChangeHandler} currentPhilosopher={currentPhilosopher} value={getCurrentPhilosopherFullname(currentPhilosopher, options)} placeholder={'Search philosopher'} options={options} />
                </Suspense>
            )
        } else {
            return (
                <Suspense fallback={''}>
                    <DesktopSelect onChangeHandler={onChangeHandler} options={options} currentPhilosopher={currentPhilosopher} />
                </Suspense>
            )
        }
    }

    return renderSelect()
}

export default Select
