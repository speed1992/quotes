import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import SnackbarProvider from 'react-simple-snackbar'
import QuotesList from "../quotes-list/quotes-list"

export const HomePage = () => {
    return (
        <>
            <SnackbarProvider>
                < AutoSizer disableWidth>
                    {({ height, width }) => (
                        <QuotesList width={width} height={height} />
                    )}
                </AutoSizer>
            </SnackbarProvider>

        </>
    )
};