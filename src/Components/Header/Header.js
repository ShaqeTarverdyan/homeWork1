import React from 'react';
import { BrowserRouter as Router,  Link } from "react-router-dom";
import { Menu , Segment} from 'semantic-ui-react'

const Header = () => {
    return (
        <Segment>
            <Menu>
                <Menu.Item as={Link} to='/'>Home</Menu.Item>
                <Menu.Item as={Link} to='people'>People</Menu.Item>
            </Menu>
        </Segment>
    )
}

export default Header;
