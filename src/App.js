import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/layout/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from './pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/users/add' component={AddUser} />
          <Route exact path='/users/edit/:id' component={EditUser} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
