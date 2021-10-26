import React from "react"

import teams from "./teams.json"
import Team from "./components/Teams"

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Teams</h1>
        <div className="row">
          {teams.map(element => <Team team={element} />)}
        </div>
      </div>
    )
  }
}
export default App