import './App.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Program from './components/program/Program'
import Title from './components/Title/Title'

function App() {
 

  return (
    
      <div>
      <Navbar />
      <Hero/>
      <div className='container'>
      <Title subTitle='Our Programs' title='What we offer'/>
     <Program/>
     <About/>
      
      </div>
      </div>
      
  )

}

export default App
