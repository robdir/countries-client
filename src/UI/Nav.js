import React, {PureComponent} from 'react'
import AppBar from 'material-ui/AppBar'
import LanguageIcon from 'material-ui/svg-icons/action/language'


class Nav extends PureComponent {
    render() {
        return (
            <AppBar
                title="Countries"
                style={{ position: "sticky" }}
                iconElementLeft={<LanguageIcon />}
                iconStyleLeft={{ marginTop: 'auto', marginBottom: 'auto'}}
            />
        )
    }
}

export default Nav