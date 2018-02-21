import React, {PureComponent} from 'react'
import './styles/css/appContainer.css'

export class appContainer extends PureComponent {


// findCountries(url, request) {
    
// }

render() {

    return (
        <div className="main_container">
        <h4> This application renders data from Countries
             REST API at your request!            {<br />}
             Search function coming soon... </h4> 
        </div>
        )
    }
}

export default appContainer