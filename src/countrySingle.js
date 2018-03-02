import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class CountrySingle extends PureComponent {
    render() {
        const {country} = this.props
        return (

            <div className="country_single">
            {console.log(this.props)}
            </div>
        )
    }
}


const mapStateToProps = ({ countries }) => ({ countries })


export default connect(mapStateToProps)(CountrySingle)