import React, {Component} from 'react';
import MainLayout from "./components/Common/MainLayout/MainLayout";
import Shapes from "./containers/Shapes/Shapes";

class App extends Component {
    render() {
        return (
            <MainLayout>
                <Shapes />
            </MainLayout>
        )
    }
}

export default App;