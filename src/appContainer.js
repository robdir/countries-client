import React, {PureComponent} from 'react'
import { fetchCountries } from './actions'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'
import CountrySingle from './countrySingle'
import './styles/css/appContainer.css'

const inputStyle = {
    color: 'black'
}

const style = {
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
            currentlyDisplayed: this.props.countries,
        };

        this.onInputChange = this.onInputChange.bind(this)
    }
    
    componentWillMount() {
        this.props.fetchCountries()
    }

    onInputChange(event) {
        let newlyDisplayed = this.props.countries.filter(country =>
             country.name.toLowerCase().includes(event.target.value.toLowerCase()));

        this.setState({
            searchTerm: event.target.value,
            currentlyDisplayed: newlyDisplayed
        });
    }

    renderInitial(country, index){
        return this.props.countries.map((country) => {
            return (
                <CountrySingle key={index} {...country}/>
            )
        })
    }

    renderCountry(country, index) {
        return this.state.currentlyDisplayed.map((country) => {
            return (
                <CountrySingle key={index} {...country} />
            )
        })
    }


render() {
    return (
        <div className="main_container">
            <div className="intro">
                <h4> Displayed are a list of countries,
                    please use to search box to filter the list.
                </h4> 
            </div>

            <div className="search_input">
                <TextField
                    id="search"
                    placeholder="Enter country name"
                    inputStyle={inputStyle}
                    style={style}
                    value={this.state.searchTerm}
                    onChange={this.onInputChange}
                />
            </div>

                {this.state.searchTerm == "" ? (

                    <div className="countries_container">
                        {this.renderInitial()}
                    </div>
                ):(
                    <p> </p>
                )}

                {this.state.currentlyDisplayed == 0
                && this.state.searchTerm !== "" ? (

                    <div className="no_render">
                        <p> Such empty...</p>
                    </div>

            ):(
                    < div className="countries_container">
                        {this.renderCountry()}
                    </div>
            )
        }

        </div>
        )
    }
}

const mapStateToProps = ({ countries }) => ({ countries })

export default connect(mapStateToProps, {fetchCountries})(appContainer)