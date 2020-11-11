import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import MainLayout from './components/Common/MainLayout/MainLayout';
import BasicShapes from './containers/BasicShapes/BasicShapes';
import AdvantageShapes from './containers/AdvantageShapes/AdvantageShapes';

class App extends Component {
    render() {
        return (
            <MainLayout>
                <Switch>
                    <Route path='/' exact component={BasicShapes} />
                    <Route path='/basic-shapes' component={BasicShapes} />
                    <Route path='/advantage-shapes' component={AdvantageShapes} />
                </Switch>
            </MainLayout>
        )
    }
}

export default App;