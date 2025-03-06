import { useState } from "react";

import "./App.css";

function App() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [welcome, setWelcome] = useState("");
  const [pass, setPass] = useState(false);

  const handleUserAuth = (e) => {
    e.preventDefault();
    if (userName === "user" && password === "password") {
      setWelcome("Welcome, user!");
      setPass(true);
    } else {
      setWelcome("Invalid username or password");
      setPass(false);
    }
  };
  return (
    <>
      <h1>Login Page</h1>
      {!pass ? (
        <>
        {welcome && <p>{welcome}</p>}
         <form onSubmit={handleUserAuth}>
          <div>
            <label>
            Username:
              <input type="text" onChange={(e) => setUsername(e.target.value)} required />
            </label>
          </div>

          <div>
            <label>
            Password:
              <input type="text" onChange={(e) => setPassword(e.target.value)} required/>
            </label>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
    </>
      ) : (
        <p>{welcome}</p>
      )}
    </>
  );
}

export default App;
