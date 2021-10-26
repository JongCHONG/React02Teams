import React from "react"

class Team extends React.Component {
    render() {
        const {shortName, crestUrl, venue, address, email, phone, founded} = this.props.team
        return (
            <div className="col-4 my-4">
                <img className="img-fluid" src={crestUrl}/>
                <p>{shortName}</p>
                <p>{venue}</p>
                <p>{address}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{founded}</p>
            </div>
        )
    }
}
export default Team