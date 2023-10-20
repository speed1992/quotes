/* eslint-disable react/jsx-pascal-case */
import React, { Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import ErrorBoundary from './common/components/error-boundary/error-boundary'
import ROUTES from './common/routes/routes'
import { retryTenTimes } from './common/utils/apiUtils'
const SnackBar = React.lazy(() => retryTenTimes(() => import('./common/components/snackbar/snackbar')))

export const App = () => (
    <ErrorBoundary>
        <HashRouter>
            <Suspense>
                <Routes>
                    <Route path={ROUTES.homepage.route} element={<ROUTES.homepage.component />} />
                    <Route path={ROUTES.image.route} element={<ROUTES.image.component />} />
                    <Route path={ROUTES.report.route} element={<ROUTES.report.component />} />
                </Routes>
                <SnackBar />
            </Suspense>
        </HashRouter>
    </ErrorBoundary>
)
