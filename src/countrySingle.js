import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class CountrySingle extends PureComponent {
    render() {
        return (

            <div className="countries">
            <p> {this.props.countries.map(i => i.name)} </p>
            
            </div>
        )
    }
}


const mapStateToProps = ({ countries }) => ({ countries })


export default connect(mapStateToProps)(CountrySingle)