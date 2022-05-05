import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  getRandomNo = () => {
    const {count} = this.state
    const rn = Math.floor(Math.random() * 100)
    this.setState({count: rn})
    console.log(count)
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-cont">
        <div className="app-cont">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100{' '}
          </p>
          <button type="button" className="button" onClick={this.getRandomNo}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
