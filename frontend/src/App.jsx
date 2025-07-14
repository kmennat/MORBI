import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Importing necessary components from 'react-router-dom' for routing.
import { useNavigate } from 'react-router-dom';

import Login from './views/auth/login'; // Importing the 'Login' component.
import Register from './views/auth/Register';
import Dashboard from './views/auth/Dashboard';
import Logout from './views/auth/logout';
import ForgotPassword from './views/auth/ForgotPassword';
import CreatePassword from './views/auth/CreatePassword';
import { SignupForm } from './views/auth/signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/create-new-password' element={<CreatePassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
