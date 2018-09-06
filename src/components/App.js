import React from 'react';
import './App.css';

const arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
let sorted = arr.sort((a, b) => a - b);
console.log(sorted)

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: ''
    }
  }

  linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return `It took ${i + 1} tries to find value`;
      }
    }
    return `Value is not in the list`;
  };

  binarySearch(sorted, value, start=0, end=sorted.length, count = 1) {
    // var start = start === undefined ? 0 : start;
    // var end = end === undefined ? sorted.length : end;

    if (start > end) {
      return `value is not in the list`;
    }

    const index = Math.floor((start + end) / 2);
    const item = sorted[index];

    console.log(start, end);
    if (item === value) {
      return `it took ${count} tries to find value`;
    }
    else if (item < value) {
      return this.binarySearch(sorted, value, index + 1, end, count+1);
    }
    else if (item > value) {
      return this.binarySearch(sorted, value, start, index - 1, count +1);
    }
  };

  onLinearSubmit(e) {
    e.preventDefault();
    const result = this.linearSearch(arr, Number(this.state.input));
    this.setState({
      output: result
    })
  }

  onBinarySubmit(e) {
    e.preventDefault();
    const result = this.binarySearch(sorted, Number(this.state.input));
    this.setState({
      output: result
    })
  }

  onValueChange(value) {
    this.setState({
      input: value
    });
  }

  render() {
    return (
      <div>
        <h1>Search for a number</h1>
        <p>Check how many steps it takes in the iteartion to match your number</p>
        <form>
          <input type='text' onChange={e => this.onValueChange(e.currentTarget.value)} />
          <button onClick={e => this.onLinearSubmit(e)}>Linear Search</button>
          <button onClick={e => this.onBinarySubmit(e)}>Binary Search</button>
        </form>
        <div>
          {this.state.output}
        </div>
      </div>
    );
  }
}


