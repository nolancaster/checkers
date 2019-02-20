import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Board>
      test1
      </Board>
    );
  }
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(8).fill(null).map(()=>Array(8).fill(null)),
    };
  }

  render() {
    return this.state.squares.map(row => {
      return <div class="row">
        {row.map(square => { return <Square/> })}
      </div>
    });
  }
}

class Square extends React.Component {
  render() {
    return (
      <div className="square">
      </div>
    );
  }
}

export default App;
