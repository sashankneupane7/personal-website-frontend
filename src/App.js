import {useState} from 'react';

import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'

import Home from './pages/Home'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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
        <Route path="/" exact component ={Home} />
        <Route path="/blog" exact component ={Blog} />
        <Route path="/projects" exact component ={Projects} />
        <Route path="/about" exact component ={About} />
        <Route path="/contact" exact component ={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
