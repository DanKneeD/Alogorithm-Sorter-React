import Header from "./components/Header";
import DisplayAlgo from "./components/DisplayAlgo";
import DisplayAlgoLine from "./components/DisplayAlgoLine";
import Footer from "./components/Footer";
import { useState, useEffect, useMemo } from "react";

import "./App.css";

function App() {
  // let tempWidth = 0;

  const buttons = document.querySelectorAll("button");

  const [numRows, setNumRows] = useState(window.innerWidth / 6);
  const [runningAlgorithm, setRunningAlgorithm] = useState(false);
  const [arrayAccessCounter, setArrayAccessCounter] = useState(0);
  const [comparisonCounter, setComparisonCounter] = useState(0);
  const [widths, setWidths] = useState(5);
  const [rows, setRows] = useState([]);
  const [speed, setSpeed] = useState(500);

  //_____________________Functions________________________________________

  //randomize graph
  const randomize = () => {
    console.log(widths);
    const tempArr = [];
    for (var i = 0; i < numRows; i++) {
      tempArr.push({
        height: Math.floor(Math.random() * 500),
        width: widths,
        id: i,
      });
    }
    setRows(tempArr);
  };

  //setStates running program
  const changeRunningAlgorithm = (running) => {
    setRunningAlgorithm(running);

    if (running) {
      buttons.forEach((button) => {
        button.style.setProperty("--button-background-color", "#d40303");
        document.getElementById("widths").disabled = true;
        document.getElementById("speeds").disabled = true;
      });
    } else {
      buttons.forEach((button) => {
        button.style.setProperty("--button-background-color", "#f6b93b");
        document.getElementById("widths").disabled = false;
        document.getElementById("speeds").disabled = false;
      });
    }
  };

  const changeLineWidth = (event) => {
    let tempWidth = event.target.value;
    tempWidth++;
    const tempNumRows = Math.ceil(window.innerWidth / tempWidth);
    const tempArr = [];

    for (var i = 0; i < tempNumRows; i++) {
      tempArr.push({
        height: Math.floor(Math.random() * 500),
        width: tempWidth,
        id: i,
      });
    }

    setNumRows(tempNumRows);
    setWidths(tempWidth);
    setRows(tempArr);
  };

  const changeSortingSpeed = (event) => {
    setSpeed(event.target.value);
  };

  //____________________Sorters_start___________________________________

  const bubbleSort = () => {
    let tempArr = [...rows];
    let tempNum = 0;
    let tempArrCount = 0;

    changeRunningAlgorithm(true);

    var innerLoop = () => {
      //inner loop
      for (let y = 1; y < numRows; y++) {
        if (tempArr[y].height < tempArr[y - 1].height) {
          //swap if height is bigger
          let copy = [...tempArr];
          [copy[y - 1], copy[y]] = [copy[y], copy[y - 1]];
          tempArr = copy;
          tempArrCount++;
        }
        tempNum++;
        tempArrCount = tempArrCount + 2;
      }
      //add to States
      setRows(tempArr);
      setComparisonCounter(tempNum);
      setArrayAccessCounter(tempArrCount);
    };

    //outer loop
    for (let i = 0; i < numRows; i++) {
      const isLast = i === numRows - 1;

      setTimeout(() => {
        innerLoop();
        if (isLast) {
          changeRunningAlgorithm(false);
        }
      }, speed * i);
    }
  };

  const selectionSort = () => {
    let tempNumCount = 0;
    let tempArrCount = 0;
    let tempArr = [...rows];
    let minVal = 0;
    let x = 0;

    changeRunningAlgorithm(true); //disable button

    var innerLoop = () => {
      minVal = x;

      for (let i = 1 + x; i < numRows; i++) {
        if (tempArr[i].height < tempArr[minVal].height) {
          minVal = i;
        }
        tempArrCount = tempArrCount + 2;
        tempNumCount++;
      }

      //swapping array positions
      let data = [...tempArr];
      let temp = [data[x]];
      [data[x]] = [data[minVal]];
      [data[minVal]] = temp;
      tempArr = data;

      //adding new states to DOM
      tempArrCount = tempArrCount + 3;
      setRows(tempArr);
      setArrayAccessCounter(tempArrCount);
      setComparisonCounter(tempNumCount);
      x++;
    };

    //outerloop
    for (let y = 0; y < numRows; y++) {
      const isLast = y === numRows - 1;
      setTimeout(() => {
        innerLoop();
        if (isLast) {
          changeRunningAlgorithm(false);
        }
      }, speed * y);
    }
  };
  //______________________Sorters_End______________________________

  //runs only on first render
  useEffect(() => {
    randomize();
  }, []);

  return (
    <div className='App'>
      <Header />
      <DisplayAlgo rows={rows} />
      <Footer
        sort={runningAlgorithm ? undefined : randomize}
        bubbleSort={runningAlgorithm ? undefined : bubbleSort}
        selectionSort={runningAlgorithm ? undefined : selectionSort}
        displayNum={comparisonCounter}
        displayArrayCount={arrayAccessCounter}
        changeLineWidth={changeLineWidth}
        changeSortingSpeed={changeSortingSpeed}
      />
    </div>
  );
}

export default App;
