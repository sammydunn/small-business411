import { Provider } from 'react-redux';
import './App.css';
import Router from './Router';
import store from './redux/store'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router/>
      </Provider>

      
    </div>
  );
}

export default App;
