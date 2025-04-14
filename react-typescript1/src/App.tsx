
import './App.css'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Homepage from './pages/Homepage/Homepage'

function App() {

  return (
    <>
      <div className='App'>
        <Header/>
        <Homepage/>
        <Footer/>
      </div>
    </>
  )
}

export default App
