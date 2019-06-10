import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export default ({ people: { id, name, email, website, username }, onDelete }) => {
    return (
        <>
            <Card >
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>{email}</Card.Meta>
                    <Card.Description>{website}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <NavLink to={username}>
                            <Button basic color='green'>
                                See more...
                            </Button>
                        </NavLink>

                        <Button
                            basic
                            color='red'
                            onClick={() => onDelete(id)}
                        >
                            Delete
                        </Button>
                    </div>
                </Card.Content>
            </Card >
        </>

    );

}

