import DisplayAlgoLine from "./DisplayAlgoLine";
import React from "react";

const DisplayAlgo = ({ rows }) => {
  console.log(rows.length + " lengthed");

  return (
    <div className='DisplayAlgo'>
      {rows.map((row) => (
        <DisplayAlgoLine key={row.id} height={row.height} width={row.width}>
          {row.height}
        </DisplayAlgoLine>
      ))}
    </div>
  );
};
export default DisplayAlgo;
