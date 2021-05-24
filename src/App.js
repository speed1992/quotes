import React, { useEffect } from "react";
import SnackbarProvider from 'react-simple-snackbar';
import ErrorBoundary from "./components/error-boundary";
import { HomePage } from "./components/home-page/home-page";
import { updateVersionInLocalStorage } from "./utils/localStorageUtils";

export const App = () => {

  useEffect(() => {
    updateVersionInLocalStorage();
  }, []);

  return (
    <ErrorBoundary>
      <SnackbarProvider>
        <HomePage />
      </SnackbarProvider>
    </ErrorBoundary >
  )
};