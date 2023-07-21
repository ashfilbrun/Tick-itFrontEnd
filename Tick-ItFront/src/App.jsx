// import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Context from './Context'
import './App.css'

function App() {

  return (
    <div className='app'>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}
export default App
