import React from 'react'
import {render} from 'react-dom'

import {constants} from './constants/constants.js'
import {actions} from './actions/actions.js'
import {CountStore} from './stores/count-store.js'

function getCount() {
  return {
    count: CountStore.getCount() 
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = getCount()
  }

  componentDidMount() {
    CountStore.addEventListener(this._onChange.bind(this))
  }

  clickHandle() {
    console.log('button clicked')
    actions.increment()
  }

  _onChange() {
    this.setState(getCount())
  }

  render() {
    return (
      <div>
        <h1>Our Count</h1>
        <p>Count: {this.state.count} </p>
        <button onClick={this.clickHandle.bind(this)}>Increment Count</button>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))
