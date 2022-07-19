import { useState } from "react";
import Styles from "../styles/search.module.scss";
export default function Home() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState();
  const InputHandler = (e) => {
    setUsername(e.target.value);
  };
  const startSearch = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const foundUser = await res.json();
    setUser(foundUser);
    window.location = `/profile/${foundUser.login}`;
  };
  console.log(user);
  return (
    <div className=" text-center">
      <div className={Styles.searchbarHolder}>
        <label>Search Github Username :</label>{" "}
        <input className="mx-2" onChange={InputHandler} />
        <button onClick={startSearch} className="btn btn-success">
          Search
        </button>
      </div>
    </div>
  );
}
