import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onSelectLevel } from "../../../redux/actions/game.actions";

export default function LevelRowComponent({ data }) {
  const navigate = useNavigate(); //TO NAVIGATE BETWEEN LEVELS
  const dispatch = useDispatch();

  const selectLevel = (data) => {
    //HERE WE GONNA BUILD THE LEVEL    
    const { numberBits, operation, expectedResult } = data;
    dispatch(onSelectLevel({ numberBits, operation, expectedResult }));
  }


  return (
    <div className="row-level-wrapper">
      {data
        ? data.map((x, index) => {
          return (
            <div onClick={() => selectLevel(x)} key={index} className="row-wrapper">
              <h1>{x.name}</h1>
            </div>
          );
        })
        : null}
    </div>
  );
}
