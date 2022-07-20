import Layout from '../components/Layout'
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import "../styles/detail.scss"
import { createContext, useEffect, useState } from 'react'
export const ThemeContext = createContext()
function MyApp({ Component, pageProps }) {
  
  const [darkTheme,setDarkTheme]=useState(false)
  useEffect(()=>{
    if(darkTheme){
      document.body.classList.add("darkTheme")
    }else{
      document.body.classList.remove("darkTheme")
    }

  },[darkTheme])
  return (
   <ThemeContext.Provider value={{darkTheme,setDarkTheme}} >
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </ThemeContext.Provider>
  
  )
}

export default MyApp
