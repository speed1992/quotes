import React, { useEffect, useRef, useState } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { data } from "./static/data";
import ErrorBoundary from "./components/error-boundary";
import SnackbarProvider from 'react-simple-snackbar'
import { delayedScrollToRow, resetSearch, scrollToFirstRow, search } from "./components/utils/utils"
import { Row } from "./components/row/row";
import './App.css';

export const App = () => {
  const listRef = useRef(null);
  const [searchText, setSearchText] = useState('');
  const [searchFlag, setSearchFlag] = useState(false);

  useEffect(() => {
    delayedScrollToRow(listRef)
  }, []);

  //!! check scrollToMemorizedRow setTimeout bug, search before 1.5 sec
  // useEffect(() => {
  //   changeData([{ id: 1, quote: "reset" }]);
  // }, []);

  return (
    <ErrorBoundary>
      <SnackbarProvider>
        <div className="row">
          <div className="column">
            <button onClick={() => { resetSearch(() => setSearchText(''), () => setSearchFlag(false), () => delayedScrollToRow(listRef)) }}>Home</button>
          </div>
          <div className="column">
            {/* {!searchFlag ? (
              <button onClick={() => {
                resetSearch(() => setSearchText(''), () => setSearchFlag(false), () => delayedScrollToRow(listRef))
                scrollToMemorizedRow(listRef)
              }}>Recall</button>
            ) : null} */}
          </div>
          <div className="column">
            <input type="text" value={searchText} onChange={({ target: { value } }) => { setSearchText(value); setSearchFlag(false) }} />
            <button onClick={() => { search(searchText, () => setSearchFlag(true), () => scrollToFirstRow(listRef)) }}>Search</button>
          </div>
        </div>
        {
          searchFlag ?
            <span>Search Results: {searchText}</span> : null
        }
        < AutoSizer >
          {({ height, width }) => (
            <List
              className="List"
              height={height}
              itemCount={data.length}
              itemSize={600}
              width={width}
              ref={listRef}
              itemData={{ searchFlag }}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </SnackbarProvider>
    </ErrorBoundary >
  )
};