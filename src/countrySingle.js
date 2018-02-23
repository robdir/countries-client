import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class CountrySingle extends PureComponent {
    static propTypes = {
        countries: PropTypes.array.isRequired
    }

    render() {
        const { countries } = this.props

        return (

            <div className="countries">
            <p>{countries.filter(i => i.name)}</p>
            <p>{countries.capital}</p>
            <p>{countries.demonym}</p>
            {console.log(this.props)}
            </div>
        )
    }
}


const mapStateToProps = ({ countries }) => ({ countries })


export default connect(mapStateToProps)(CountrySingle)