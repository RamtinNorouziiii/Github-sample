import { useState } from "react";
import Styles from "../styles/search.module.scss";
export default function Home() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState();
  const[notFound,setNotFound]=useState(false)
  const InputHandler = (e) => {
    setUsername(e.target.value);
  };
  const startSearch = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`).then((res)=>{
     return  res
    }).catch((err)=>{return err})
     const foundUser = await res.json()
     res.status===404 ?setNotFound(true):setNotFound(false)
    res.status===404 ? "" :window.location = `/profile/${foundUser.login}`
    setUsername("")
  };
  return (
    <div className=" text-center">
      <div className={Styles.searchbarHolder}>
        <label>Search Github Username :</label>{" "}
        <input className="mx-2" onChange={InputHandler} value={username} />
        <button onClick={startSearch} className="btn btn-success">
          Search
        </button>
        <h3 className="text-danger mt-5" >{notFound ?"User Not Found" :""}</h3>
      </div>
    </div>
  );
}
