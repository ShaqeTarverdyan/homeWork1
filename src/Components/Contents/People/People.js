import React from 'react';
import { Segment } from 'semantic-ui-react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class People extends React.Component {

    render() {
        return (
            <Segment>
                <Link to='/peopleList'>
                    <PeopleListCover />
                </Link>
                <br />
                <Link to='/AddPeople'>
                    <PeopleAddCover />
                </Link>

            </Segment>
        );
    }

}

const PeopleListCover = () => {
    return (
        <Segment>
            See people List
        </Segment>
    );
}


const PeopleAddCover = () => {
    return (
        <Segment>
            Add  new people
        </Segment>
    );
}

export default People;