import { useLocation } from 'react-router-dom'
import { brainwave } from '../assets'
import {navigation} from '../Constants'
import Button from './Button';
import Manusvg from '../assets/svg/MenuSvg'
import { HamburgerMenue } from './design/Header' 
import { useState } from 'react';
import { enablePageScroll, disablePageScroll } from 'scroll-lock';
const Header = () => {

    const pathName = useLocation();

    const [openNavigation, setOpenNavigation] = useState(false)

    const toggleMenu = () =>{
      if(openNavigation){
        setOpenNavigation(false)
        enablePageScroll()
      }else{
        setOpenNavigation(true)
        disablePageScroll()
      }
    }

    const handleClick = () =>{
      if(!openNavigation) return

      enablePageScroll()
      setOpenNavigation(false)
    }

  return (
    <div className={`fixed z-50 top-0 left-0 w-full border-b border-n-6 lg:backdrop-blur-sm lg:bg-n-8/90 ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
            <a className='block w-[12rem] xl:mr-8' href="#hero">
                <img src={brainwave} alt="brainwave" width={200} height={40}/>
            </a>
            <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] bottom-0 left-0 right-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                  {navigation.map((item) =>(
                  <a className={`block relative font-code text-2xl text-n-1 uppercase transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 lg:mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathName.hash ? 'lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-12`} key={item.id} href={item.url} onClick={handleClick}>{item.title}</a>
                  ))}
                  <HamburgerMenue/>
                </div>
            </nav>
            <a className='button hidden text-n-1/50  transition-colors hover:text-n-1 mr-8 lg:block' href="#signup">New Account</a>

            <Button className="hidden lg:block">
                Sign In
            </Button>

           <Button className='ml-auto lg:hidden' px="px-3" onClick={toggleMenu}>
            <Manusvg openNavigation={openNavigation}/>
           </Button>

        </div>
    </div>
  )
}

export default Header