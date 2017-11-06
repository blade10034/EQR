import React from 'react';
import history from '../../router/history';

export default class Navbar extends React.Component {
    
    // transition = event => {
    //     event.preventDefault();
    //     history.push({
    //         pathname: event.currentTarget.pathname,
    //         search: event.currentTarget.search
    //     });
    // };

    render() {
        return(
            <div>
                Navbar
            </div>
            // <ul>
            //     <li><a href="/schedule" onClick={this.transition}>Schedule</a></li>
            //     <li><a href="/timesheet" onClick={this.transition}>Timesheet</a></li>
            //     <li><a href="/login" onClick={this.transition}>Login</a></li>
            // </ul>
        );
    }

}