import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Landing from './pages/Landing';
import { Route, Routes } from 'react-router-dom';
import DevPortal from './pages/DevPortal';



function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/devportal" element={<DevPortal/>}/>
      </Routes>
    </main>
  );
}

export default App;
