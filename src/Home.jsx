import React from "react";

const Home = (props) => {
  const handleClick = () => {
    props.history.push("/repos/" + username);
  };

  const [username, setUsername] = React.useState("");
  return (
    <>
      <input
        name="username"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </>
  );
};

export default Home;
