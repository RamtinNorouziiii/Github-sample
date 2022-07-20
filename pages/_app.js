import Router from "next/router";
import Layout from '../components/Layout'
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/detail.scss"
import '../styles/loading.scss'

import { createContext, useEffect, useState } from 'react'
export const ThemeContext = createContext()
function MyApp({ Component, pageProps }) {
  const [loading,setLoading]=useState(false)
 
  const [darkTheme,setDarkTheme]=useState(false)
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  useEffect(()=>{
    if(darkTheme){
      document.body.classList.add("darkTheme")
    }else{
      document.body.classList.remove("darkTheme")
    }

  },[darkTheme])
  return (
  <>
  {
     loading ?
    <div className="loaderDiv" >
      <div className="dots-bars-2  " ></div>
    </div>
     : <ThemeContext.Provider value={{darkTheme,setDarkTheme}} >
     <Layout>
     <Component {...pageProps} />
     </Layout>
     </ThemeContext.Provider>
  }
  </>
  
  )
}

export default MyApp
