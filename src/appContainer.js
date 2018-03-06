import React, {PureComponent} from 'react'
import { fetchCountries } from './actions'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import CountrySingle from './countrySingle'
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
    componentDidMount() {
        this.props.fetchCountries()
    }

    onInputChange(event) {
        let newlyDisplayed = this.props.countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase()));

        this.setState({
            searchTerm: event.target.value,
            currentlyDisplayed: newlyDisplayed
        });
    }

    renderCountry(country, index) {
        return this.state.currentlyDisplayed.map((country) => {
            return (
                <CountrySingle key={index} {...country} />
            )
        })
    }


render() {

    const {countries} = this.props
    
    return (
        <div className="main_container">
            <div className="intro">
            <h4> This application renders data from Countries
                REST API at your request!
                </h4> 
            </div>
            <div className="search_input">
                <TextField
                    id="search"
                    placeholder="Type country name here"
                    inputStyle={inputStyle}
                    value={this.state.searchTerm}
                    onChange={this.onInputChange}
                />
            </div>
                < div className="countries_container">
                    {this.renderCountry()}
                </div>
        </div>
        )
    }
}

const mapStateToProps = ({ countries }) => ({ countries })

export default connect(mapStateToProps, {fetchCountries})(appContainer)