import React, {PureComponent} from 'react'
import { fetchCountries } from './actions'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import CountrySingle from './countrySingle'
import _ from 'underscore'
import './styles/css/appContainer.css'

const inputStyle = {
    color: 'black'
}

const style = {
    height: 75,
    width: 150,
    margin: 7.5,
    textAlign: 'center',
    display: 'inline-block',
};

export class appContainer extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            searchTerm: '',
            currentlyDisplayed: this.props.countries
        };

        this.onInputChange = this.onInputChange.bind(this)

    }
    componentWillMount() {
        this.props.fetchCountries()
    }

    onInputChange(event) {
        let newlyDisplayed = _.filter(this.props.countries, country => country.name.includes(event.target.value.toLowerCase()));

        this.setState({
            searchTerm: event.target.value,
            currentlyDisplayed: newlyDisplayed
        });
    }

    renderCountry(country, index) {
        return (
            <CountrySingle key={index} {...country} />
        )
    }


render() {

    const {countries} = this.props
    
    return (
        <div className="main_container">
            <div className="intro">
            <h4> This application renders data from Countries
                REST API at your request!            {<br />}
                Search function coming soon... </h4> 
            </div>
            <div className="search_input">
            <p> Enter country or region: </p>
                <TextField
                    id="search"
                    ref="search"
                    inputStyle={inputStyle}
                />
            </div>
                < div className="countries_container">
                {countries.map(this.renderCountry.bind(this))}
                </div>
        </div>
        )
    }
}

const mapStateToProps = ({ countries }) => ({ countries })

export default connect(mapStateToProps, {fetchCountries})(appContainer)