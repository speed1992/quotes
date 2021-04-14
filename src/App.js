import React, { useRef } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import copy from 'copy-to-clipboard';

import { data } from "./static/data";

const Row = ({ index, style }) => {
  return (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      {`${data[index]}`}
      <button onClick={() => {
        copy(`"${data[index]}"\n\n― Friedrich Nietzsche`);
        localStorage.setItem("scrollPostion", index)
      }}>Copy!</button>

    </div >
  )
};

const Example = () => {
  const listRef = useRef(null);

  const scrollToRowStart = (rowIndex) => {
    let scrollPostion = JSON.parse(localStorage.getItem('scrollPostion'));

    console.log("scrollPostion", scrollPostion)

    if (typeof scrollPostion != undefined && scrollPostion)
      listRef.current.scrollToItem(scrollPostion, "start");
  }

  return (
    <>
      <button onClick={() => scrollToRowStart()}>Remember Last Quote</button>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List"
            height={height}
            itemCount={1000}
            itemSize={150}
            width={width}
            ref={listRef}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </>
  )
};

export default Example