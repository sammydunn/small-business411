import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Details from './components/Details';
import  List  from './components/List';
import Login from './components/Login';
import Navbar from './components/NavBar';
import Router from './Router';


function App() {
  return (
    <div className="App">
      
   <BrowserRouter> 
        <Router />
    </BrowserRouter>
      
    </div>
  );
}

export default App;
