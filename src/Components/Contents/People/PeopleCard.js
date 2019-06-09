import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionCreator from '../../../StateManagement/Actions/actions';

class PeopleCard extends React.Component {
    deletePeopleFromServer = () => {
        return this.props.deletePeopleFromServer()
    }
    render() {
        return (
            <>
                {
                    this.props.peoples.map(people => (

                        <Card key={people.id}>
                            <Card.Content>
                                <Image
                                    floated='right'
                                    size='mini'
                                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                />
                                <Card.Header>{people.name}</Card.Header>
                                <Card.Meta>{people.email}</Card.Meta>
                                <Card.Description>{people.company.catchPhrase}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <NavLink to={people.username}>
                                        <Button basic color='green'>
                                            See more...
                                        </Button>
                                    </NavLink>

                                    <Button 
                                        basic 
                                        color='red'
                                        onClick={this.props.deletePeopleFromServer}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card >
                    ))
                }

            </>

        );
    }

}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        peoples: state.peoples
    }
}
const mapDispatchToState = dispatch => {
    return {
        makeRequsetForGetPeoples: (data) => dispatch(actionCreator.makeRequsetForGetPeoples(data)),
        getPeoples: () => dispatch(actionCreator.getPeoples()),
        deleteItem:() => dispatch(actionCreator.deleteItem()),
        deletePeopleFromServer:(id) => dispatch(actionCreator.deletePeopleFromServer(id))
    }
}
export default connect(mapStateToProps, mapDispatchToState)(PeopleCard);