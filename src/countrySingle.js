import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './styles/css/countrySingle.css'

class CountrySingle extends PureComponent {
    render() {
        const {country} = this.props
        return (

            <div className="country_single">
                    <div className="flaggins">
                        <img src={this.props.flag}/>
                    </div>
                <p>Name: {this.props.name} </p>
                <p>Demonym: {this.props.demonym} </p>
                <p>Capital: {this.props.capital} </p>
                <p>Population: {this.props.population} </p>
                {console.log(this.props)}
            </div>
        )
    }
}


export default CountrySingle