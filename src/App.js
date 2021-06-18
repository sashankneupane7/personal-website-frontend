import Home from './pages/Home'
import {BrowserRouter as Router} from 'react-router-dom'
import './styles/global.css'

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
