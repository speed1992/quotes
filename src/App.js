/* eslint-disable react/jsx-pascal-case */
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SnackbarProvider from 'react-simple-snackbar'
import ErrorBoundary from './components/error-boundary/error-boundary'
import ROUTES from './routes/routes'

export const App = () => (
    <ErrorBoundary>
        <BrowserRouter>
            <SnackbarProvider>
                <Suspense fallback={''}>
                    <Routes>
                        <Route path={ROUTES.homepage.route} element={<ROUTES.homepage.component />} />
                        <Route path={ROUTES.image.route} element={<ROUTES.image.component />} />
                    </Routes>
                </Suspense>
            </SnackbarProvider>
        </BrowserRouter>
    </ErrorBoundary>
)
