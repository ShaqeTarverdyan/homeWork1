import React from 'react';
import { Segment, Form, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actionCreator from '../../../StateManagement/Actions/actions';


class AddPeople extends React.Component {
    addNewPeopleToServer = (e) => {
        e.preventDefault();
        this.props.addNewPeopleToServer()
    }
    render() {

        return (
            <Segment onSubmit={this.addNewPeopleToServer}>
                <Form>
                    <Input
                        name='name'
                        placeholder='Name'
                        onChange={this.props.getInputValue}
                        value={this.props.people.name}
                    />
                     <Input
                        name='username'
                        placeholder='userName'
                        onChange={this.props.getInputValue}
                        value={this.props.people.username}
                    />
                   <Input
                        name='email'
                        placeholder='Email'
                        onChange={this.props.getInputValue}
                        value={this.props.people.email}
                    />
                    <Input
                        name='phone'
                        placeholder='Phone'
                        onChange={this.props.getInputValue}
                        value={this.props.people.phone}
                    />
                    <Input
                        name='website'
                        placeholder='Website'
                        onChange={this.props.getInputValue}
                        value={this.props.people.website}
                    />
                    {/* <Input
                        name='company.name'
                        placeholder='Company Name'
                        onChange={this.props.getInputValue}
                    />
                    <Input
                        name='catchPhrase'
                        value={this.props.people.company.catchPhrase}
                        placeholder='Catch Phrase'
                        onChange={this.props.getInputValue}
                    /> */}
                    <Button primary>Submit</Button>
                </Form>
            </Segment>
        );
    }

}

const mapStateToProps = state => {
    return {
        peoples:state.peoples,
        people:state.people

    }
}
const mapDispatchToState = dispatch => {
    return {
        getInputValue: (event) => dispatch(actionCreator.getInputValue(event)),
        addNewPeopleToServer:() => dispatch(actionCreator.addNewPeopleToServer()),

    }
}
export default connect(mapStateToProps, mapDispatchToState)(AddPeople);