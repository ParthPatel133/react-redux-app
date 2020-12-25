import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';
import CoursesPage from './components/courses/CoursesPage';
import DataPage from './components/courses/DataPage';
import TableData from './components/table/TableData';
import Table from './components/table/Table';
function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/courses' component={CoursesPage} />
        <Route path='/data' component={DataPage} />
        <Route path='/tabledata' component={TableData} />
        <Route path='/finaltable' component={Table} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
