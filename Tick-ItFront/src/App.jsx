import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Context from './Context'
import './App.css'

function App() {
  const [cartInfo, setCartInfo] = useState('')

  return (
    <>
      <Context.Provider>
        <Header />
        <Main />
        <Footer />
      </Context.Provider>
    </>
  )
}

export default App
