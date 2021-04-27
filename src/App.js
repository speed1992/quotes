import React, { useEffect, useRef, useState } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { data } from "./static/data";
import ErrorBoundary from "./components/error-boundary";
import SnackbarProvider from 'react-simple-snackbar'
import { delayedScrollToRow, scrollToRow, search } from "./components/utils/utils"
import { Row } from "./components/Row/row";
import './App.css';

export const App = () => {
  const listRef = useRef(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    delayedScrollToRow(listRef)
  }, []);

  console.log(searchText);

  return (
    <ErrorBoundary>
      <SnackbarProvider>
        <div className="row">
          <div className="column">
            <button onClick={() => scrollToRow(listRef)}>Recall</button>
          </div>
          <div className="column">
            <input type="text" value={searchText} onChange={({ target: { value } }) => { setSearchText(value) }} />
            <button onClick={(e) => search(e)}>Search</button>
          </div>
        </div>
        <AutoSizer>
          {({ height, width }) => (
            <List
              className="List"
              height={height}
              itemCount={data.length}
              itemSize={300}
              width={width}
              ref={listRef}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </SnackbarProvider>
    </ErrorBoundary >
  )
};