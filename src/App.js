import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import './App.css';

import TopMenu from "./components/TopMenu";

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
                <Route path="/HomePage">
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
            </Switch>
        </Router>
    );
}

export default App;
