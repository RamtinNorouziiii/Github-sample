import Layout from '../components/Layout'
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
   
  <Layout>
  <Component {...pageProps} />
  </Layout>
  
  )
}

export default MyApp
