import '../styles/globals.css'
import Headpage from './Heading'
import Metal from "./MetalMeta"
import './index.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Headpage {...pageProps}/>,
    <Metal />
    </div>
  )
}

export default MyApp
