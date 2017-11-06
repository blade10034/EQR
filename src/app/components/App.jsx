import React from 'react';
import history from '../../router/history';
import router from '../../router/router';
import routes from '../../router/routes';

import Navbar from './Navbar';
// import Schedule from './schedule/Main';
// import Timesheet from './timesheet/Main';

const mainContainer = document.getElementById('main');

function renderComponent(component) {
        ReactDom.render(component, mainContainer);
}

function render(location) {
    router.resolve(routes, location)
        .then(renderComponent)
        .catch(error => router.resolve(routes, { ...location, error })
        .then(renderComponent));
}

export default class App extends React.Component {
    constructor(props){
        super(props);

        render(history.location);
        history.listen(render);

    }

    render() {
        return (
            <div>
                <Navbar />
                <div id="main"></div>
            </div>
        );
    }
}