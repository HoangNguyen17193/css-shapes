import React, {Component} from 'react';
import MainLayout from "./components/Common/MainLayout/MainLayout";
import AdvantageShapes from "./components/Shapes/AdvantageShapes/AdvantageShapes";

class App extends Component {
    render() {
        return (
            <MainLayout>
                <AdvantageShapes />
            </MainLayout>
        )
    }
}

export default App;