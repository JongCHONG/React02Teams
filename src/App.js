import React from "react"

import teams from "./teams.json"
import Team from "./components/Teams"


class App extends React.Component {
  render() {
    // let test = teams.map(function (person, index) {
    //   if (index < 10) {
    //     return person
    //   }
    // })
    // console.log(test);
    return (
      <div className="container p-3">
        <h1 className="text-center">Teams</h1>
        <div className="row justify-content-evenly">
          {/* {teams.map(element => <Team team={element} />)} */}
          {teams.map((element, index) => {
            if (index < 10) {
              console.log(element);
              <Team team={element} />
            }
          })}

        </div>
      </div>
    )
  }
}
export default App