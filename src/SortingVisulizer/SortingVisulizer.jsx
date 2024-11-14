import React from "react";
import { useState, useEffect } from "react";
import MergeSortingAnimations from "../Algoritham/MergeSort";
import BubbleSortAnimations from "../Algoritham/BubbleSort";
import SelectionSortAnimations from "../Algoritham/SelectionSort";
import InsertionSortAnimations from "../Algoritham/InsertionSort";
import QuickSortAnimations from "../Algoritham/QuickSort";
import "./SortingVisulizer.css";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SortingVisualizer = () => {
  //Change this value for the speed of animations.
  const [ANIMATION_SPEED_MS, SET_ANIMATION_SPEED_MS] = useState(10);

  //CHange this value for no of bars in the array.
  const [NUMBER_OF_ARRAY_BARS, SET_NUMBER_OF_ARRAY_BARS] = useState(115);

  //This is the main color of array bars.
  const PRIMARY_COLOR = "White";

  //This is the color of array bars that are being compared throughout the animations
  const SECONDARY_COLOR = "red";

  const [array, setArray] = useState([]);

  const [arrWidth, setArrWidth] = useState(6);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // returns random number between the given interval
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function resetArray() {
    const newArray = [];

    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      newArray.push(randomIntFromInterval(5, 375));
    }

    newArray.push(375); // add one maximum number so that the height of the array box will be constant

    setArray(newArray);
  }

  useEffect(() => {
    resetArray();
  }, []);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function MergeSort() {
    const animations = MergeSortingAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    setTimeout(() => {
      disableBtn(false);
    }, animations.length * ANIMATION_SPEED_MS);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function BubbleSort() {
    const animations = BubbleSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 0.5 * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIndex, barTwoIndex, newHeight1, newHeight2] =
            animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          barOneStyle.height = `${newHeight1}px`;
          barTwoStyle.height = `${newHeight2}px`;
        }, i * 0.5 * ANIMATION_SPEED_MS);
      }
    }
    setTimeout(() => {
      disableBtn(false);
    }, animations.length * 0.5 * ANIMATION_SPEED_MS);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function SelectionSort() {
    const animations = SelectionSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 0.5 * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIndex, barTwoIndex, newHeight1, newHeight2] =
            animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          barOneStyle.height = `${newHeight1}px`;
          barTwoStyle.height = `${newHeight2}px`;
        }, i * 0.5 * ANIMATION_SPEED_MS);
      }
    }
    setTimeout(() => {
      disableBtn(false);
    }, animations.length * 0.5 * ANIMATION_SPEED_MS);
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function InsertionSort() {
    const animations = InsertionSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 0.5 * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIndex, barTwoIndex, newHeight1, newHeight2] =
            animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          barOneStyle.height = `${newHeight1}px`;
          barTwoStyle.height = `${newHeight2}px`;
        }, i * 0.5 * ANIMATION_SPEED_MS);
      }
    }
    setTimeout(() => {
      disableBtn(false);
    }, animations.length * 0.5 * ANIMATION_SPEED_MS);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function QuickSort() {
    const animations = QuickSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 0.5 * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIndex, barTwoIndex, newHeight1, newHeight2] =
            animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          barOneStyle.height = `${newHeight1}px`;
          barTwoStyle.height = `${newHeight2}px`;
        }, i * 0.5 * ANIMATION_SPEED_MS);
      }
    }
    setTimeout(() => {
      disableBtn(false);
    }, animations.length * 0.5 * ANIMATION_SPEED_MS);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  function setRange(value) {
    setArrWidth(3 * Math.floor(230 / value));
    SET_NUMBER_OF_ARRAY_BARS(value);
    resetArray();
  }

  function setSpeed(value) {
    SET_ANIMATION_SPEED_MS(value);
  }

  function disableBtn(value) {
    document.getElementById("generate-array-btn").disabled = value;
    document.getElementById("bubble-sort-btn").disabled = value;
    document.getElementById("selection-sort-btn").disabled = value;
    document.getElementById("insertion-sort-btn").disabled = value;
    document.getElementById("merge-sort-btn").disabled = value;
    document.getElementById("quick-sort-btn").disabled = value;
    document.getElementById("arraySize").disabled = value;
    document.getElementById("sortingSpeed").disabled = value;
    document.getElementById("stop-animation").disabled = !value;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className="header">
        <div className="title">Sorting Visualizer</div>
        {/* <div className="increment-bars-container"> */}
        <div className="increment-bar-array">
          <label style={{ color: "white" }}>Size of Array</label>
          <br />
          <input
            type="range"
            name="size-of-array"
            min="50"
            max="190"
            className="range-display"
            id="arraySize"
            value={NUMBER_OF_ARRAY_BARS}
            onChange={(e) => setRange(e.target.value)}
          />
        </div>
        <div className="increment-bar-speed">
          <label style={{ color: "white" }}>Sorting Speed</label>
          <br />
          <input
            type="range"
            name="sorting-speed"
            min="1"
            max="10"
            className="speed-display"
            id="sortingSpeed"
            value={ANIMATION_SPEED_MS}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>
        {/* </div> */}
      </div>
      <div className="array-container">
        <div className="array">
          {array.map((value, index) => (
            <div
              className="array-bar"
              key={index}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
                width: `${arrWidth}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="buttons-container">
        <button
          className="generate-array-button"
          id="generate-array-btn"
          onClick={resetArray}
        >
          Generate New Array
        </button>
        <button
          className="sort-button"
          id="bubble-sort-btn"
          onClick={() => {
            disableBtn(true);
            return BubbleSort();
          }}
        >
          Bubble Sort
        </button>
        <button
          className="sort-button"
          id="selection-sort-btn"
          onClick={() => {
            disableBtn(true);
            return SelectionSort();
          }}
        >
          Selection Sort
        </button>
        <button
          className="sort-button"
          id="insertion-sort-btn"
          onClick={() => {
            disableBtn(true);
            return InsertionSort();
          }}
        >
          Insertion Sort
        </button>
        <button
          className="sort-button"
          id="merge-sort-btn"
          onClick={() => {
            disableBtn(true);
            return MergeSort();
          }}
        >
          Merge Sort
        </button>
        <button
          className="sort-button"
          id="quick-sort-btn"
          onClick={() => {
            disableBtn(true);
            return QuickSort();
          }}
        >
          Quick Sort Sort
        </button>
        <button
          className="stop-animation-button"
          id="stop-animation"
          onClick={() => window.location.reload()}
        >
          Stop visualization
        </button>
      </div>
      <ul className="navText">
        <div style={{ marginBottom: "5px" }}>
          <b>
            <u>Instructions</u>
          </b>
        </div>
        <li>
          Please set size of array and sorting speed before sorting the array.
        </li>
        <li>
          Please click "Stop visualization" button and then proceed with the
          next sorting algorithm.
        </li>
      </ul>
      
    </>
  );
};

export default SortingVisualizer;
