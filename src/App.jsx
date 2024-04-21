import './index.css'
import ButtonGredient from './assets/svg/ButtonGradient'
import Button from './Components/Button'
import Header from './Components/Header'
import Hero from './Components/Hero'

function App() {

  return (
    <>
    <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
     <Header/>
    <Hero/>
    </div>
    <ButtonGredient/>
    </>
  )
}

export default App
