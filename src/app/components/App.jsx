import React from 'react';
import history from '../router/history';
import router from '../router/router';
import routes from '../router/routes';

export default class App extends React.Component {
    render(location) {
        return (
            <div>
                <Navbar />
                <Main />
            </div>
        )
    }
}

class Main extends React.Component () {
    render() {
        return (
            
        );
    }
}

function renderComponent(component) {
    ReactDom.render(component, main);
}

function render(location) {
    router.resolve(routes, location)
        .then(renderComponent)
        .catch(error => router.resolve(routes, { ...location, error })
        .then(renderComponent));
}

render(history.getCurrentLocation());
history.listen(render);