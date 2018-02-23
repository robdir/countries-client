import React, {PureComponent} from 'react'
import AppBar from 'material-ui/AppBar'
import LanguageIcon from 'material-ui/svg-icons/action/language'


class Nav extends PureComponent {
    render() {
        return (
            <AppBar
                title="Countries"
                color="secondary"
                position='sticky'
                iconElementLeft={<LanguageIcon />}
            />
        )
    }
}

export default Nav