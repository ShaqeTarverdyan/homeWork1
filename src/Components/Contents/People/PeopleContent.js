import React from 'react';
import { Segment, Table } from 'semantic-ui-react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionCreator from '../../../StateManagement/Actions/actions';


const Tablet = (props) => {
    return (
        <Table.Row warning>
            <Table.Cell width='3'><strong>{props.name}:</strong></Table.Cell>
            <Table.Cell width='9'>{props.value}</Table.Cell>
        </Table.Row>
    )
}

class PeopleContent extends React.Component {
    getPeople = () => {
        const getRoutePath = this.props.match.params.username;
        const exactPeople = this.props.peoples.filter(people => people.username === getRoutePath)[0]
        return exactPeople
    }
    render() {
        const people = this.getPeople()
        const data = [
            { name: 'Name', value: people.name },
            { name: 'UserName', value: people.username },
            { name: 'Email', value: people.email },
            { name: 'Street', value: people.address.street },
            { name: 'Phone', value: people.phone },
            { name: 'Website', value: people.website },
            { name: 'Company Name', value: people.company.name }

        ]
        return (
            <Segment>
                <Table 
                    selectable
                    sortable
                    striped
                >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='2' style={{ textAlign: 'center' }}>Full Information</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            data.map(entry =>
                                <Tablet
                                    key={entry.id}
                                    {...entry}
                                />
                            )
                        }
                    </Table.Body>

                </Table>

            </Segment>
        );
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {
        loading: state.loading,
        error: state.error,
        peoples: state.peoples
    }
}
const mapDispatchToState = dispatch => {
    return {
        makeRequsetForGetPeoples:(val) => dispatch(actionCreator.makeRequsetForGetPeoples(val))
  
    }
  }
export default connect(mapStateToProps,mapDispatchToState)(PeopleContent);