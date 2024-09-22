import { Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Page404 from './pages/Page404';


function App() {
  return (
    <div >
      
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path="*" element={<Page404 />} />
        </Routes>

    </div>
  );
}
export default App;
