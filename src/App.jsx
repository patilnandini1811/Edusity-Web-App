import './App.css'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Program from './components/program/Program'
import Testimonials from './components/Testimonials/Testimonials'
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
     <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      </div>
      </div>
      
  )

}

export default App
