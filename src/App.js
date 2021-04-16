import React, { useEffect, useRef } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import copy from 'copy-to-clipboard';

import { data } from "./static/data";
import ErrorBoundary from "./components/error-boundary";
import SnackbarProvider, { useSnackbar } from 'react-simple-snackbar'

// var debounce = require('lodash.debounce');

const Row = ({ index, isScrolling, style }) => {

  const [openSnackbar] = useSnackbar()

  // const rememberScrollPosition = debounce(() => {
  //   localStorage.setItem("scrollPostion", index - 4)
  // }, 1000)

  // useEffect(() => {
  //   rememberScrollPosition();
  // }, [isScrolling]);

  return (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      {`${index}. ${data[index]}`}
      <button onClick={() => {
        copy(`"${data[index]}"\n\n― Friedrich Nietzsche`);
        localStorage.setItem("scrollPostion", index)
        openSnackbar('Copied!', 1000);
      }}>Copy!</button>
    </div >
  )
};

const Example = () => {
  const listRef = useRef(null);

  const scrollToRow = () => {
    let scrollPostion = JSON.parse(localStorage.getItem('scrollPostion'));

    // console.log("scrollPostion", scrollPostion)

    if (typeof scrollPostion != undefined && scrollPostion && scrollPostion > 0)
      listRef.current.scrollToItem(scrollPostion, "center");
  }

  useEffect(() => {
    setTimeout(() => {
      try {
        scrollToRow();
      }
      catch (e) {
        console.log(e)
      }
    }, 1000)
  }, []);

  return (
    <ErrorBoundary scrollToRow={scrollToRow}>
      <SnackbarProvider>
        {/* <button onClick={() => scrollToRow()}>Remember Last Quote</button> */}
        <AutoSizer>
          {({ height, width }) => (
            <List
              useIsScrolling
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

export default Example