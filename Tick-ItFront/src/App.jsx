// import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Context from './Context'
import './App.css'

function App() {


  return (
    <div className='app'>
      <Context.Provider>
        <Header />
        <Main />
        <Footer />
      </Context.Provider>
    </div>
  )
}

export default App
