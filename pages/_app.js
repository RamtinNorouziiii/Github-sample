import Layout from '../components/Layout'
import Nav from '../components/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
