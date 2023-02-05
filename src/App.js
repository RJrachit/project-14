import { useEffect, useState } from 'react';
import Login from './components/login';
import Homepage from './components/homepage';
import { PASSWORD } from './constant';
import "./common.scss";

function App() {

  const [password, setPassword] = useState("");
  const [loggedIn, setLogin] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    if(password === PASSWORD) {
      setLogin(true);
    }
  },[password]);

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
          setData(r)})
        // .catch(err => setErrors(err));
    }

    fetchData();
  },[])

  return (
    <div className="body">
      {loggedIn ? (
        <Homepage data={data} password={password} />
      ) : (
        <Login setPassword={setPassword} />
      )}
      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/project-14"
            element={<Login setPassword={setPassword} />}
          />
          <Route
            path="/project-14/homepage"
            element={<Homepage password={password} data={data} />}
          />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
