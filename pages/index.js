import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
  const [username,setUsername]=useState("")
  const [user,setUser]=useState()
  const InputHandler = (e) => {
   setUsername(e.target.value)
  };
  const startSearch = async ()=>{
const res = await fetch(`https://api.github.com/users/${username}`)
const foundUserser= await  res.json()
setUser(foundUserser)
  }
  return (
    <div>
      <label>Search Github Username :</label> <input onChange={InputHandler} />
      
      <button onClick={startSearch} >Go</button>
{
  user && <>
  <h3>{user.login}</h3>
  </>
}
    </div>
  );
}
