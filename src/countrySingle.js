import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group'
import './styles/css/countrySingle.css'

    const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

class CountrySingle extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        demonym: PropTypes.string.isRequired,
        capital: PropTypes.string.isRequired,
        population: PropTypes.number.isRequired,
        flag: PropTypes.string.isRequired
    }

    render() {
        const {name, demonym,
            capital, population,
            flag, region,
            subregion } = this.props

        return (

            <div className="country_single" id="single">
                    <div className="flaggins">
                        <img src={flag} alt="flag"/>
                    </div>
                    <div className="info">
                        <p>Name: {name} </p>
                        <br/>
                        <p>Demonym: {demonym} </p>
                        <br/>
                        <p>Capital: {capital} </p>
                        <br />
                        <p>Population: {numberWithCommas(population)} </p>
                        <br />
                        <p>Continent: {region} </p>
                        <br />
                        <p>Region: {subregion} </p>
                    </div>
            </div>

        )
    }
}


export default CountrySingle