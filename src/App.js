import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionCreator from './StateManagement/Actions/actions';

import Header from './Components/Header/Header';
import Home from './Components/Contents/Home';
import People from './Components/Contents/People/People';
import AddPeople from './Components/Contents/People/AddPeople';
import PeopleList from './Components/Contents/People/PeopleList';
import PeopleContent from './Components//Contents/People/PeopleContent';


class App extends React.Component {
  componentDidMount() {
    return this.props.makeRequsetForGetPeoples(this.props.peoples)
  }
  render() {
    return (
      <div >

        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/people' exact component={People} />
            <Route path='/peopleList' exact component={PeopleList} />
            <Route path='/AddPeople' exact component={AddPeople} />
            <Route path='/:username' component={PeopleContent} />
          </Switch>

        </Router>
      </div>
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
      makeRequsetForGetPeoples:(val) => dispatch(actionCreator.makeRequsetForGetPeoples(val))

  }
}
export default connect(mapStateToProps,mapDispatchToState)(App);
