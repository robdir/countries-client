import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './styles/css/countrySingle.css'

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


class CountrySingle extends PureComponent {
    render() {
        const {name, demonym, capital, population, flag} = this.props
        return (

            <div className="country_single">
                    <div className="flaggins">
                        <img src={flag}/>
                    </div>
                <p>Name: {name} </p>
                <p>Demonym: {demonym} </p>
                <p>Capital: {capital} </p>
                <p>Population: {population} </p>
                {console.log(this.props)}
            </div>
        )
    }
}


export default CountrySingle