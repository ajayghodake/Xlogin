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
              <label htmlFor="username">Username </label>
              <input
                type="text"
                id="username"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password">Password </label>
              <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <button type="submit">Submit</button>
              {/* <button type="submit" disabled={userName === "" || password === ""}>Submit</button> */}
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
