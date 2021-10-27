import React from "react"

import teams from "./teams.json"
import Team from "./components/Teams"
import Counter from "./components/Counter"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 10
    }
  }

  handlePlusClick = () => {
    if (this.state.count < 100) {
      this.setState({count: this.state.count + 1})
    }
  }
  handleMinusClick = () => {
    if (this.state.count > 0) {
      this.setState({count: this.state.count - 1})
    }
  }
  render() {
    return (
      <div className="container p-3">
        <h1 className="text-center">Teams</h1>
        <Counter count={this.state.count} increment={this.handlePlusClick} substract={this.handleMinusClick}/>
        <div className="row justify-content-evenly">
          {/* {teams.map(element => <Team team={element} />)} */}
          {/* {teams.slice(0,this.state.count).map} */}
          {teams.map((element, index) => {
            if (index < this.state.count) {
              console.log(element);
              return <Team team={element} />
            }
          })}
        </div>
      </div>
    )
  }
}
export default App