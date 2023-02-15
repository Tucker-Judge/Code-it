import React, { useState } from 'react';

// import Header from './Header'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function handleSubmit(event){
    event.preventDefault();
      fetch("/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "username": "seb",
          "password": "123"
        })
      })
      .then((r)=> r.json())
      .then(res => console.log(res))

    //   fetch("/profile")
    // .then((r) => {
    //   if (r.ok) {
    //     r.json().then((user) => console.log(user));
    //   } else {
    //     console.log("no")
    //   }
    // });
      
  };
  return (
    <div>
      {/* <Header/> */}
    <form onSubmit={handleSubmit}>

      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
    </div>
  );
}
export default Login;