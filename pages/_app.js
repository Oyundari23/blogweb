import "@/styles/globals.css";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"


export default function App({ Component, pageProps }) {
  return (
    <div className="py-[35px] px-[320px]">
      <Header/>
      <Component {...pageProps} />
      <Footer/>     
    </div>
  )
}
