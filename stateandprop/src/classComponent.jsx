import React, { Component } from 'react'

export default class classComponent extends Component {
    constructor(props){
        super(props);
            this.state={//state is an object defined in the constructor
                count : 0
            }
    }

    increaseCount =()=>{
        this.setState({count:this.state.count+1});//This.setState is used to update state in class components.
        //it tells react to rerender the component when the state changes.
    }
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <h1> count: {this.state.count}</h1>
        <button onClick={this.increaseCount}>Increase Count</button>
      </div>
    )
  }
}
