import './index.css'
import ButtonGredient from './assets/svg/ButtonGradient'
import Button from './Components/Button'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Benifits from './Components/Benifits'
import Collaboration from './Components/Collaboration'
import Service from './Components/Service'
import Pricing from './Components/Pricing'
import Roadmap from './Components/Roadmap'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
     <Header/>
    <Hero/>
    <Benifits/>
    <Collaboration/>
    <Service/>
    <Pricing/>
    <Roadmap/>
    <Footer/>
    </div>
    <ButtonGredient/>
    </>
  )
}

export default App
