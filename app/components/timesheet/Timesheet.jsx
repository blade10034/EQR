import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullList from './FullList.jsx';
import Week from './Week.jsx';

class TimesheetHeader extends React.Component {
    render() {
        return(
            <div>
                <h1>Timesheet</h1>
                <ul>
                    <li>Employee First Name</li>
                    <li>Employee Last Name</li>
                    <li>Employee Number</li>
                </ul>
            </div>
        );
    }
}

export default class Timesheet extends React.Component {
    render() {
        return (
            <div>
                <TimesheetHeader />
                <Switch>
                    <Route exact path='/timesheet' component={FullList}/>
                    <Route path='/timesheet/:number' component={Week}/>
                </Switch>
            </div>
        );
    }
}