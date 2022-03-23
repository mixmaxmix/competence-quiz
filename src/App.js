import './App.css';
import axios from 'axios';
import Router from './Router/Router'

axios.defaults.baseURL = 'https://ithub-quiz-platform.herokuapp.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;
