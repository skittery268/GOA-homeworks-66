import { Route, Routes, Navigate } from 'react-router';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Friends from './pages/Friends';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile/:userId' element={<Profile />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
    </>
    
  );
}

export default App;
