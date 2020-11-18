import axios from "axios";
import React from "react";
import { useEffect } from "react";
import "./App.css";

const Repos = (props) => {
  const [repos, setRepos] = React.useState([]);
  const [followers, setFollowers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState(
    props.match.params.username
  );

  const handleClick = (name) => {
    props.history.push(`/repos/${props.match.params.username}/${name}`);
  };

  const handleFollowerClick = (name) => {
    props.history.push("/repos/" + name);
    setCurrentUser(name);
  };

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(
        `https://api.github.com/users/${props.match.params.username}/repos`
      );
      const { data: followersInfo } = await axios.get(
        `https://api.github.com/users/${props.match.params.username}/followers`
      );
      setRepos(data);
      setFollowers(followersInfo);
    }

    getData();
  }, [currentUser]);

  return (
    <>
      <div></div>
      <div className="repo-container">
        {repos.map((repo) => (
          <div
            className="repo"
            key={repo.id}
            onClick={() => handleClick(repo.name)}
          >
            <img
              className="repo-image"
              src={repo.owner.avatar_url}
              alt={"Repo"}
            />
            {repo.name}
            {repo.description}
          </div>
        ))}
      </div>
      <h6>Followers:</h6>
      {followers.length ? (
        <ul>
          {followers.map((follower) => (
            <li
              style={{ cursor: "pointer" }}
              key={follower.id}
              onClick={() => handleFollowerClick(follower.login)}
            >
              {follower.login}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Followers</p>
      )}
    </>
  );
};

export default Repos;
