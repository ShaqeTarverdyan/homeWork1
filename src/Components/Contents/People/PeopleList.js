import React from 'react';
import { Segment, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actionCreator from '../../../StateManagement/Actions/actions';

import PeopleCard from './PeopleCard';

 const  PeopleList = (props) =>   {
        return (
            <Segment>
                <Card.Group itemsPerRow='3'>
                    {
                        props.peoples.map(people => {
                            return (
                                <PeopleCard people={ people } onDelete={ props.onDelete } key={ people.id }/>
                            )
                        })

                    }
                </Card.Group>
            </Segment>
        );
    }

    const mapStateToProps = state => {
        console.log(state)
        return {
            peoples:state.peoples
        }
    }
    const mapDispatchToState = dispatch => {
        return {
            onDelete:id => {
                dispatch(actionCreator.deletePeople(id))
            }
        };
    };
export default connect(mapStateToProps, mapDispatchToState)(PeopleList);