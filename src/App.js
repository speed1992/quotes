import React, { forwardRef } from "react";
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
      }}>Copy!</button>

    </div>
  )
};

function handleOnWheel(obj) {
  // Your handler goes here ...
  console.log("handleOnWheel()", obj);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const Example = () => (
  <AutoSizer>
    {({ height, width }) => (
      <List
        className="List"
        height={height}
        itemCount={1000}
        itemSize={150}
        width={width}
        outerElementType={outerElementType}
      >
        {Row}
      </List>
    )}
  </AutoSizer>
);

export default Example