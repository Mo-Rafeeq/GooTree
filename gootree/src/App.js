import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/header/Header';



function App() {
  return (
    <div >

      <Header/>
      
      <Routes>
        
        <Route path='/login' element={<Login/>} />
        <Route path='/sign-up' element={<Signup/>} />

      </Routes>
    </div>
  );
}
export default App;
