import React, { Component } from 'react';
import '../css/styles.css';




class Counter extends Component {
    state = { count: 0 }

    increment = () =>this.setState({ count: this.state.count + 1});
    decrement = () =>this.setState({ count: this.state.count - 1});
  
    render() {
    return ( 
        <div className="counter">
            <p className="paragraph">{this.state.count}</p>
            <button className="button" onClick={this.increment}>+</button>
            <button className="button" onClick={this.decrement}>-</button>
        </div>
    );
  }
}

export default Counter;