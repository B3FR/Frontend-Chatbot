import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login/Login';
import Register from '../components/Login/Register';
import Home from '../Home';
import ChatBot from '../ChatBot';
import App from '../App';
import Form from "../components//form/form";



const AuthRouter = () => {
  return (
    

      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/chatBot" element={<ChatBot />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/App" element={<App />} />
          <Route path="*" element={<Navigate to="/App" />} />
        </Routes>
      </BrowserRouter>
    
  );
};

export default AuthRouter;
