import { useState } from 'react'
import Header from './Header'
import MainPage from './MainPage'
import '.././index.css'
import '.././App.css'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />

      <MainPage />

      <Footer />
    </div>
  )
}

export default App