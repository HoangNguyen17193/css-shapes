import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import MainLayout from './components/Common/MainLayout/MainLayout';
import BasicShapes from './containers/BasicShapes/BasicShapes';
import AdvantageShapes from './containers/AdvantageShapes/AdvantageShapes';
import { ROUTES }  from './constants';

class App extends Component {
    render() {
        return (
            <MainLayout>
                <Switch>
                    <Route path={ROUTES.home.path} exact component={BasicShapes} />
                    <Route path={ROUTES.advantageShape.path} component={AdvantageShapes} />
                </Switch>
            </MainLayout>
        )
    }
}

export default App;