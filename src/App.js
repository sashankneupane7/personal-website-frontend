import {useState} from 'react';

import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer'

import Home from './pages/home'
import PostTemplate from './templates/PostTemplate'
import SinglePost from './components/BlogFolder/BlogPage//SinglePost'

import PageRenderer from './components/PageRenderer'

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './styles/global.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const user = false;
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Switch>
        <Route path="/:page" exact component={PageRenderer} />
        <Route path="/" exact component = {Home} />
        <Route path="/post" exact component={PostTemplate} />
        <Route component = {() => 404} />
      </Switch>
      <Footer />
    </Router> 
  );
}

export default App;
