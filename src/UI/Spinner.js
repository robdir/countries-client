import React, {PureComponent} from 'react'
import globe from '../globe_PNG40.png'

class Spinner extends PureComponent {
    render() {
        return (
            <div className="spinner">
                <img src={globe} alt="loading"/>
                <h3>Fetching data</h3>
            </div>
        )
    }
}

export default Spinner