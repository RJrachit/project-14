import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Homepage from './components/homepage';
import { PASSWORD } from './constant';
import "./common.scss";

function App() {

  const [password, setPassword] = useState("");

  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path="/project-14" element={<Login setPassword={setPassword} />} />
          <Route path="/project-14/homepage" element={<Homepage password={password}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
