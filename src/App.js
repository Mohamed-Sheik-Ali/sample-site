import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className='px-10'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
