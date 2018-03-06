import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/styles/typography'
import './styles/css/countrySingle.css'

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const style = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
};


class CountrySingle extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        demonym: PropTypes.string.isRequired,
        capital: PropTypes.string.isRequired,
        population: PropTypes.number.isRequired,
        flag: PropTypes.string.isRequired
    }

    render() {
        const {name, demonym, capital, population, flag} = this.props

        return (

            <div className="country_single">
                <Paper>

                    <div className="flaggins">
                        <img src={flag}/>
                    </div>
                <p>Name: {name} </p>
                <p>Demonym: {demonym} </p>
                <p>Capital: {capital} </p>
                <p>Population: {numberWithCommas(population)} </p>
            </Paper>                
            </div>

        )
    }
}


export default CountrySingle