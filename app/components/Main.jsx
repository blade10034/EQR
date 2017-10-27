import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Schedule from './schedule/Schedule.jsx';
import Timesheet from './timesheet/Timesheet.jsx';

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Schedule}/>
                    <Route path='/schedule' component={Schedule}/>
                    <Route path='/timesheet' component={Timesheet}/>
                </Switch>
            </main>
        );
    }
}