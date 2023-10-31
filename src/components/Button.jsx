import React from 'react'

function Button({
  variant ="primary" ,
  type , 
  text = "", 
  isDisabled = false
}) {
  
  const baseStyles = "w-full font-bold font-inter rounded-full py-2 px-6 flex justify-center items-center backdrop-blur-xl shadow-3xl"
  const variantStyles = {
    primary : "bg-twitter-blue hover:bg-twitter-blue-hover p-5", 
    secondary: "bg-neutral-50 hover:bg-neutral-200" , 
    outline: "text-twitter-blue border border-twitter-blue border-opacity-24"
  }
  const typeStyles = ""
  const sizeStyles = ""

  const disabledStyle = isDisabled ? "opacity-50 cursor-not-allowed" : "";

  const classes = `${baseStyles} ${typeStyles[type]} ${variantStyles[variant]} ${sizeStyles}  `

  return (
    <button className={classes}>
            {text}
    </button>
  )
  
}

export default Button