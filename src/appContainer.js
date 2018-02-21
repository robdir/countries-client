import React, {PureComponent} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import './styles/css/appContainer.css'

const inputStyle = {
    color: 'black'
}

export class appContainer extends PureComponent {


// findCountries(url, request) {
    
// }


render() {

    return (
        <div className="main_container">
        <h4> This application renders data from Countries
             REST API at your request!            {<br />}
             Search function coming soon... </h4> 
            <div className="search_input">
            <p> Enter country or region: </p>
                <TextField
                    id="search"
                    ref="search"
                    inputStyle={inputStyle}
                />
            </div>

        </div>
        )
    }
}

export default appContainer