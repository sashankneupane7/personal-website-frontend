import {useState} from 'react';

import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer'
import PageRenderer from './components/PageRenderer'
// import Home from './pages/Home'
// import Blog from './pages/Blog'
// import Projects from './pages/Projects'
// import About from './pages/About'
// import Contact from './pages/Contact'

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './styles/global.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Switch>
        <Route path="/:page" component={PageRenderer} />
        <Route path="/" render={()=> <Redirect to="/home" />} />
        <Route component = {() => 404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
