import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/schedule'>Schedule</Link></li>
                        <li><Link to='/timesheet'>Timesheet</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}