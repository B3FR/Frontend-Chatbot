import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ChatBot from '../ChatBot';
import App from '../App';

const AuthRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/chatBot" element={<ChatBot />} />
          <Route path="/App" element={<App />} />
          <Route path="*" element={<Navigate to="/chatBot" />} />
        </Routes>
      </BrowserRouter>
    
  );
};

export default AuthRouter;
