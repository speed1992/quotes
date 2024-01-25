/* eslint-disable react/jsx-pascal-case */
import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import ErrorBoundary from './common/components/error-boundary/error-boundary'
import { retryTenTimes } from './common/utils/apiUtils'
const Logs = React.lazy(() => retryTenTimes(() => import('./components/organisms/analysis/logs/logs')))
const Report = React.lazy(() => retryTenTimes(() => import('./components/organisms/analysis/report/report')))
const Modal = React.lazy(() => retryTenTimes(() => import('./common/components/modal/modal')))
const SnackBar = React.lazy(() => retryTenTimes(() => import('./common/components/snackbar/snackbar')))
const HomePage = React.lazy(() => retryTenTimes(() => import('./components/organisms/home/home-page/home-page')))
const GenerateQuoteImage = React.lazy(() => retryTenTimes(() => import('./components/organisms/analysis/generate-quote-image/generateQuoteImage')))

export const App = () => {
    const currentModalName = useSelector((state) => state.modal)
    const darkMode = useSelector((state) => state.philosophersData.darkMode)
    return (
        <ErrorBoundary>
            <Suspense>
                {currentModalName === 'Report' && (
                    <Modal title={currentModalName} darkMode={darkMode}>
                        <Report />
                    </Modal>
                )}
                {currentModalName === 'Image' && (
                    <Modal darkMode={darkMode}>
                        <GenerateQuoteImage />
                    </Modal>
                )}
                {currentModalName === 'Logs' && (
                    <Modal darkMode={darkMode}>
                        <Logs />
                    </Modal>
                )}
                <HomePage />
                <SnackBar />
            </Suspense>
        </ErrorBoundary>
    )
}
