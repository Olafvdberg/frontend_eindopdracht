import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <TopMenu/>
            <Switch>
                <Route path="/">
                    <HomePage/>
                </Route>
                <Route path="/Page1">
                    <Page1/>
                </Route>
                <Route path="/Page2">
                    <Page2/>
                </Route>
                <Route path="/Page3">
                    <Page3/>
                </Route>
                <Route path="/Page4">
                    <Page4/>
                </Route>
                <Route path="/Page5">
                    <Page5/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
