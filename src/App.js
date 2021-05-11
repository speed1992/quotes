import React from "react";
import ErrorBoundary from "./components/error-boundary";
import { HomePage } from "./components/home-page/home-page";

export const App = () => {
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary >
  )
};