import React from "react";
import SnackbarProvider from 'react-simple-snackbar';
import ErrorBoundary from "./components/error-boundary/error-boundary";
import { HomePage } from "./components/home-page/home-page";

export const App = () => (
  <ErrorBoundary>
    <SnackbarProvider>
      <HomePage />
    </SnackbarProvider>
  </ErrorBoundary >
)