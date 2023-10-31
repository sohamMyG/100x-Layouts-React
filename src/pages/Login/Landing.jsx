import React from 'react'
import Button from '../../components/Button'
import logo from '../../assets/100x-logo.png'
import Text from '../../components/Login/Text'
 
function Header(){
  return (
    <header className="flex justify-center items-center py-3 px-4 md:w-auto flex-shrink">
      <img className="w-[55px] md:w-auto" src={logo} alt="100x-logo" />
    </header>
  )
}

function Main(){
  return (
    <section className="flex flex-col items-start px-7 gap-10 w-full md:w-[423px] md:flex-shrink-0">
      <div className="flex flex-col gap-3">
        <Text className="md:text-5xl md:font-bold text-31p font-extrabold">Happening now</Text>
        <Text className="md:text-[1.625rem]">Join today</Text>    
      </div>
      <a href="./create-account-step-1.html" className="w-full">
        <Button variant='secondary' text="Create account"/>
        </a>
      <div className="flex justify-center items-center gap-1 self-stretch">
        <div className="h-1px bg-neutral-700 basis-full" />
        <Text className="font-normal">or</Text>
        <div className="h-1px bg-neutral-700 basis-full" />
      </div>
      <div className="flex flex-col items-start gap-5 w-full">
        <Text className="font-normal text-15p md:text-xl">Already have an account?</Text>
        <Button variant='outline' text="Sign in"/>
      </div>
    </section>
  )
}

function Landing() {
  return (
    <div className="flex flex-col h-screen md:flex-row gap-48 md:gap-[6.25rem] md:justify-center md:items-center md:px-10">
    <Header />
    <Main />
  </div>
  )
}

export default Landing