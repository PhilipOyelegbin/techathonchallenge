import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Infrastructure from "./components/Infrastructure"
import Service from "./components/Service"

const App = () => {
  return (
    <>
      <Header/>
      <Service/>
      <Infrastructure/>
      <Features/>
      <Footer/>
    </>
  )
}

export default App