import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("Twitter Handle");
  const [topic, setTopic] = useState("Topics");
  async function getUser(event) {
    event.preventDefault();
    console.log(event.target[0].value, event.target[1].value);
    const username = event.target[0].value;
    const topic = event.target[1].value;
    const url = `http://localhost:4000/tweets/${username}/${topic}/10`;

    const data = await fetch(url);
    console.log("data:", data);
  }
  function handleChange(event) {
    setUsername(event.target.value);
  }
  function handleChange2(event) {
    setTopic(event.target.value);
  }

  return (
    <>
      <div className="headcontainer"> </div>
      <div className="rounded-corners" id="logo">
        <a href="https://imgur.com/GFIH70V">
          <img
            src="https://i.imgur.com/GFIH70Vt.png"
            title="source: imgur.com"
            className="rounded-corners"
          />
        </a>
      </div>
      <div>
        <div className="parent">
          <form onSubmit={getUser}>
            <label htmlFor="user">TWITTER ACCOUNT:</label>
            <input
              value={username}
              onChange={handleChange}
              id="user"
              className="type-2"
            />
            <label htmlFor="topic">FILTER BY TOPICS:</label>
            <input
              value={topic}
              onChange={handleChange2}
              id="topic"
              className="type-2"
            />
            <button type="submit">SEARCH</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
