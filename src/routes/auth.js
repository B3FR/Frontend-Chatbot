import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ChatBot from '../ChatBot';
import App from '../App';
import Login from '../components/Login/Login';
import Register from '../components/Login/Register';

const AuthRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
          <Route path="/chatBot" element={<ChatBot />} />
          <Route path="/App" element={<App />} /> 
          <Route path="*" element={<Navigate to="/App" />} />
        </Routes>
      </BrowserRouter>
    
  );
};

export default AuthRouter;
