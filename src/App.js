import React, { useEffect } from "react";
import ErrorBoundary from "./components/error-boundary";
import { HomePage } from "./components/home-page/home-page";
import { updateVersionInLocalStorage } from "./utils/localStorageUtils";

export const App = () => {

  useEffect(() => {
    // updateVersionInLocalStorage();
  }, []);

  return (
    <ErrorBoundary>
      {/* env: {process.env.NODE_ENV} */}
      <HomePage />
    </ErrorBoundary >
  )
};