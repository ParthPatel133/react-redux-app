import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/layout/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
