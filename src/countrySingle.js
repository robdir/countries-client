import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class CountrySingle extends PureComponent {
    render() {
        const {country} = this.props
        return (

            <div className="country_single">
            <p> {this.props.name} </p>
            <p> {this.props.demonym} </p>
            <p> {this.props.capital} </p>
            <p> {this.props.population} </p>
            <div className="flaggins">
            <img src={this.props.flag}/>
            </div>
            </div>
        )
    }
}


export default CountrySingle