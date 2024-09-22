import { Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/header/Header';

import Page404 from './pages/Page404';
import Server500 from './pages/Server500';


function App() {
  return (
    <div >

      <Header/>
      
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path="/500" element={<Server500 />} />
          <Route path="*" element={<Page404 />} />
        </Routes>

    </div>
  );
}
export default App;
