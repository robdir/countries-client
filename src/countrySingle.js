import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Loading from './UI/Spinner'
import './styles/css/countrySingle.css'

    const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

class CountrySingle extends PureComponent {
    constructor(props){
        super(props);

        this.state = { isLoading: true }

    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        demonym: PropTypes.string.isRequired,
        capital: PropTypes.string.isRequired,
        population: PropTypes.number.isRequired,
        flag: PropTypes.string.isRequired
    }

    componentDidMount(){
        this.setState({isLoading: false})
    }



    render() {
        const {name, demonym,
            capital, population,
            flag, region,
            subregion } = this.props

        return (
                        <div className="country_single" id="single">

                            {this.state.isLoading ? (<Loading/> ) : (
                                <div className="info">
                                        <div className="flaggins">
                                            <img src={flag} alt="flag" />
                                        </div>
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
                                )}
                        </div>

        )
    }
}


export default CountrySingle