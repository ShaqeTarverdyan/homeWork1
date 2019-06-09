import React from 'react';
import { Segment, Card } from 'semantic-ui-react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from 'axios';

import PeopleCard from './PeopleCard';

class PeopleList extends React.Component {
    render() {
        return (
            <Segment>
                <Card.Group itemsPerRow='3'>
                    <PeopleCard 
                    />
                </Card.Group>
            </Segment>
        );
    }

}

export default PeopleList;