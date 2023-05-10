/* eslint-disable react/jsx-pascal-case */
import React, { Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import SnackbarProvider from 'react-simple-snackbar'
import ErrorBoundary from './common/components/error-boundary/error-boundary'
import ROUTES from './common/routes/routes'

export const App = () => (
    <ErrorBoundary>
        <HashRouter>
            <SnackbarProvider>
                <Suspense fallback={''}>
                    <Routes>
                        <Route path={ROUTES.homepage.route} element={<ROUTES.homepage.component />} />
                        <Route path={ROUTES.image.route} element={<ROUTES.image.component />} />
                        <Route path={ROUTES.report.route} element={<ROUTES.report.component />} />
                    </Routes>
                </Suspense>
            </SnackbarProvider>
        </HashRouter>
    </ErrorBoundary>
)
