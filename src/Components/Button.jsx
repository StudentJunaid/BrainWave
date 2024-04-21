import React from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg'

const Button = ({className,href,onClick,children,px,white}) => {

    const classes = `button relative infline-flex justify-center item-center h-11 transiton-colors hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`

    const spenClasses = `relative z-10`

   const renderButton = () =>(
    <button className={classes} onClick={onClick}>
        <span className={spenClasses}>{children}</span>
        {ButtonSvg(white)}
    </button>
   )

   const renderLink = () =>(
    <a href={href}>
        <span className={spenClasses}>{children}</span>
        {ButtonSvg(white)}
    </a>
    
   )
   return href ? renderLink() :
   renderButton()
 }

export default Button