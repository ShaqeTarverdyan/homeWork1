import React from 'react';
import { Segment } from 'semantic-ui-react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionCreator from '../../../StateManagement/Actions/actions';

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
const mapStateToProps = state => {
    return {
        peoples:state.peoples,
        people:state.people

    }
}
const mapDispatchToState = dispatch => {
    return {
        makeRequsetForGetPeoples:(val) => dispatch(actionCreator.makeRequsetForGetPeoples(val))

    }
}
export default connect(mapStateToProps,mapDispatchToState)(People);