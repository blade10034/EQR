import React from 'react';
import history from '../router/history';

class Navbar extends React.Component {
    
    transition = event => {
        event.preventDefault();
        history.push({
            pathname: event.currentTarget.pathname,
            search: event.currentTarget.search
        });
    };

    render() {
        return(
            <ul>
                <li><a href="/schedule" onClick={this.transition}>Schedule</a></li>
                <li><a href="/timesheet" onClick={this.transition}>Timesheet</a></li>
                <li><a href="/login" onClick={this.transition}>Login</a></li>
            </ul>
        );
    }

}