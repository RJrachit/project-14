import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Homepage from './components/homepage';
import { PASSWORD } from './constant';
import "./common.scss";

function App() {

  const [password, setPassword] = useState("");
  const [data, setData] = useState();
  useEffect(() => {
    // fetch("https://raw.githubusercontent.com/RJrachit/project-14-data/main/api.json").
    // then( (res) => {
    //   console.log(res.body);
    //   setData(res.body);
    // });
    async function fetchData() {
      const res = await fetch("https://raw.githubusercontent.com/RJrachit/project-14-data/main/api.json?uuid=22");
      res
        .json()
        .then(r => {
          console.log(r);
          setData(r)})
        // .catch(err => setErrors(err));
    }

    fetchData();
  },[])

  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path="/project-14" element={<Login setPassword={setPassword} />} />
          <Route path="/project-14/homepage" element={<Homepage password={password} data={data}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
