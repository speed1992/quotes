/* eslint-disable react/jsx-pascal-case */
import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import ErrorBoundary from './common/components/error-boundary/error-boundary'
import { retryTenTimes } from './common/utils/apiUtils'
const Logs = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "Logs" */ './components/organisms/analysis/logs/logs')))
const Report = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "Report" */ './components/organisms/analysis/report/report')))
const Modal = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "Modal" */ './common/components/modal/modal')))
const SnackBar = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "SnackBar" */ './common/components/snackbar/snackbar')))
const HomePage = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "HomePage" */ './components/organisms/home/home-page/home-page')))
const GenerateQuoteImage = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "GenerateQuoteImage" */ './components/organisms/analysis/generate-quote-image/generateQuoteImage')))

export const App = () => {
    const currentModalName = useSelector((state) => state.modal)
    return (
        <ErrorBoundary>
            <Suspense>
                {currentModalName === 'Report' && (
                    <Modal title={currentModalName}>
                        <Report />
                    </Modal>
                )}
                {currentModalName === 'Image' && (
                    <Modal>
                        <GenerateQuoteImage />
                    </Modal>
                )}
                {currentModalName === 'Logs' && (
                    <Modal>
                        <Logs />
                    </Modal>
                )}
                <HomePage />
                <SnackBar />
            </Suspense>
        </ErrorBoundary>
    )
}
