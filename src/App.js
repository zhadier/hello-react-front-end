import { Route, Routes } from 'react-router-dom';
import './App.css';
import Greetings from './components/Greetings';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Greetings />} />
    </Routes>
  </div>
);

export default App;
