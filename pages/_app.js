import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'
import Footer from './footer'


export default function App({ Component, pageProps }) {
  return <>
    <Toaster />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
