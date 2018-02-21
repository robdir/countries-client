import React, {PureComponent} from 'react'
import TextField from 'material-ui/TextField'
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton'
import './styles/css/appContainer.css'

const inputStyle = {
    color: 'black'
}

export class appContainer extends PureComponent {

    state = {
        countries: []
    }

    componentDidMount() {
        const _this = this;
        const url = "http://localhost:3030/countries"
        this.serverRequest =
            axios
                .get(url)
                .then(function(result) {
                    _this.setState({
                        countries: result.data.countries
                    });
                })
    }


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