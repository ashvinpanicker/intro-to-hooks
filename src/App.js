import React from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/common/header";
import UserForm from "./components/user-form";
import UserInfo from "./components/user-info";
import Repositories from "./components/repositories";
import UserContext from './context';

function App(props) {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  function onChange(event) {
    event.preventDefault();
    const username = event.target[0].value;
    setLoading(true);
    fetchData(username)
  }

  function fetchData(username) {
    axios
      .get(`https://github-user.now.sh/?username=${username}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <Header />
      <UserForm onChange={onChange} />

      {loading ? <div className="message">fetching data...</div> : null}

      {data.repos ? (
        <div>
          <UserContext.Provider value={data}>
            <UserInfo data={data} />
          </UserContext.Provider>
          <Repositories repos={data.repos} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
