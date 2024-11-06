import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Route from './components/Route';
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';


function App() {

  return (
    <div className="App">

      <header className="App-header">
        <div className='container mx-auto grid gap-4 mt-4 ml-12'>
          <Sidebar />
          <div className='col-span-5'>
            <Route path='/accordion'>
              <AccordionPage />
            </Route>
            <Route path='/table'>
              <TablePage />
            </Route>
            <Route path='/buttons'>
              <ButtonPage />
            </Route>
            <Route path='/'>
              <DropdownPage />
            </Route>
            <Route path='/modal'>
              <ModalPage />
            </Route>
          </div>
        </div>
        <h1 className="text-3xl font-bold">
          Sports Ball!
          <img src={logo} className="App-logo" alt="logo" />
        </h1>
        <div>
        </div>
      </header>
    </div>



  );
}

export default App;

// import Link from './components/Link';

{/* <Link to='/accordion'>Go to Accordion</Link>
    <Link to='/dropdown'>Go to Dropdown</Link>
    <Link to='/button'>Go to Buttons</Link> */}