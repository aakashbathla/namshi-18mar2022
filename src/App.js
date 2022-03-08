import "./App.css";
import React, { useState } from "react";

function App() {
  const [arr, setArr] = useState([
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ]);
  const [initialValue, setInitialValue] = useState(0);
  const [checkColor, setCheckColor] = useState([]);
  function handleClick(key, key2) {
    let newArr = [...arr];
    newArr[key][key2] = "Box" + initialValue;
    let newCheckcolor = [...checkColor];
    if (newCheckcolor.length < 2) {
      newCheckcolor.push([key, key2]);
    } else {
      newCheckcolor.shift();
      newCheckcolor.push([key, key2]);
    }
    console.log(newCheckcolor);
    setCheckColor(newCheckcolor);
    setArr(newArr);
    setInitialValue(initialValue + 1);
  }
  function getClass(key, key2) {
    let a = "";
    if (checkColor.find((el) => el[0] === key && el[1] === key2)) {
      a = "red";
    } else {
      a = "blue";
    }
    return a;
  }
  return (
    <div className="App">
      {arr.map((val, key) => (
        <div className="flex">
          {val.map((val2, key2) => (
            <div
              className={getClass(key, key2)}
              onClick={() => handleClick(key, key2)}
            >
              {val2}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
