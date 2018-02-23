import React, {PureComponent} from 'react'
import { fetchCountries } from './actions'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import './styles/css/appContainer.css'

const inputStyle = {
    color: 'black'
}

const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

export class appContainer extends PureComponent {
    componentWillMount() {
        this.props.fetchCountries()
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

const mapStateToProps = ({ countries }) => ({ countries })

export default connect(mapStateToProps, {fetchCountries})(appContainer)