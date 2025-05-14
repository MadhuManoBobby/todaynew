import React, { Component } from 'react'
import WithHOC from './WithHOC'

class ClassCount extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.HOC}</h1>
        
        <button onClick={this.increment}>Increment: {this.props.count}</button>
      </div>
    )
  }
}

export default WithHOC(ClassCount)

