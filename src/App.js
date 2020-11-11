import React, {Component} from 'react';
import MainLayout from "./components/Common/MainLayout/MainLayout";
import BasicShapes from "./containers/BasicShapes/BasicShapes";

class App extends Component {
    render() {
        return (
            <MainLayout>
                <BasicShapes />
            </MainLayout>
        )
    }
}

export default App;