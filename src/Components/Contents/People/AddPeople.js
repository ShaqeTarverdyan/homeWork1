import React from 'react';
import { Segment, Form, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actionCreator from '../../../StateManagement/Actions/actions';


class AddPeople extends React.Component {

    state = {
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
    };
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        // if (this.state.name.trim()) {
        //     this.props.addPeople(this.state);
        //     this.handleReset();
        // }
    };
    handleReset = () => {
        this.setState({
            name: '',
            username: '',
            email: '',
            phone: '',
            website: '',
        })
    }
    render() {

        return (
            <Segment >
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        name='name'
                        placeholder='Name'
                        onChange={this.handleInputChange}
                        value={this.state.name}
                    />
                    <Input
                        name='username'
                        placeholder='userName'
                        onChange={this.handleInputChange}
                        value={this.state.username}
                    />
                    <Input
                        name='email'
                        placeholder='Email'
                        onChange={this.handleInputChange}
                        value={this.state.email}
                    />
                    <Input
                        name='phone'
                        placeholder='Phone'
                        onChange={this.handleInputChange}
                        value={this.state.phone}
                    />
                    <Input
                        name='website'
                        placeholder='Website'
                        onChange={this.handleInputChange}
                        value={this.state.website}
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
                    <Button primary >Submit</Button>
                    <Button secondary onClick={this.handleReset}>Reset</Button>

                </Form>
            </Segment>
        );
    }

}

const mapStateToProps = state => {
    console.log(state)
    return {
        peoples: state.peoples
    }
}
const mapDispatchToState = dispatch => {
    return {
        onAddPeople: people => dispatch(actionCreator.AddPeople(people))
    }
}
export default connect(mapStateToProps, mapDispatchToState)(AddPeople);