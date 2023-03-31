import Navbar from '@/components/Navbar'
import Store from '@/redux/store'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import Footer from './footer'


export default function App({ Component, pageProps }) {
  return <>
    <Provider store={Store}>
      <Toaster />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  </>
}
