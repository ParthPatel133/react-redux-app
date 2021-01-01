import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/layout/Navbar';

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  );
}
