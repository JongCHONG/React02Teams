import React from "react"

class Team extends React.Component {
    render() {
        const {shortName, crestUrl, venue, address, email, phone, founded} = this.props.team      
        return (
            <div className="col-3 my-4 border border-1 p-2 m-1">
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