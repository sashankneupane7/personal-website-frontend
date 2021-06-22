import { useState, useContext } from "react";
import {Context} from './context/Context'

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home";
// import PostTemplate from './templates/PostTemplate'

import Settings from "./pages/settings";
import Register from "./pages/register";
import Login from "./pages/login";
import Write from "./pages/blog/write";
import PostTemplate from './templates/PostTemplate'

import PageRenderer from "./components/PageRenderer";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import "./styles/global.css";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const {user} = useContext(Context);
    return (
        <Router>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Switch>
                <Route path="/settings">
                    { user ? <Settings /> : <Register />}
                </Route>
                <Route path="/register">{user ? <Home /> : <Register />}</Route>
                <Route path="/login">{user ? <Home /> : <Login />}</Route>
                <Route path="/:page" exact component={PageRenderer} />
                <Route path="/" exact component={Home} />
                <Route path="/post/:postid" component={PostTemplate} />
                <Route path="/blog/write">
                    {user ? <Write /> : <Register />}
                </Route>
                <Route component={() => 404} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
