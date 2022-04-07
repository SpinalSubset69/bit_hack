import React from "react";

export default function LevelRowComponent({ data }) {
  return (
    <div className="row-level-wrapper">
      {data
        ? data.map((x, index) => {
            return (
              <div className="row-wrapper">
                <h1>{x.name}</h1>
              </div>
            );
          })
        : null}
    </div>
  );
}
