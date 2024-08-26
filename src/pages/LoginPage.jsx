import React from 'react'
import {logo} from '../assets'
import {InputPassword,InputEmail} from '../components/auth.components.jsx'

function LoginPage() {
  return (
    <div className={`w-full h-screen p-6 md:p-0 fixed flex flex-row mx-auto justify-center items-center top-0 left-0 bg-tokena-dark-gray-opacity-60`}>
    <div className={`w-full md:w-1/3 rounded-2xl h-auto p-6 md:p-8 bg-tokena-white`}>
      <div className={`bg-tokena-blue-opacity7percent px-4 w-full h-16 rounded-xl flex items-center flex-row gap-3`}>
              <div className={`bg-tokena-blue-opacity22percent w-9 h-9 rounded-xl flex justify-center items-center`}>
                 <img src={logo} className={`w-6 h-6`} alt="logo tokena" /> 
              </div>
              <div className={``}>
                  <p className={`font-[mono-sans-bold] text-xs text-tokena-dark-2`}>Tokena</p>
                  <p className={`font-[mono-sans-medium] text-[10px] text-tokena-blue`}>Finance app</p>
              </div>
       </div>
       <p className={`font-[Mono-sans-bold] text-2xl py-5`}>
         Connexion
       </p>

       <form className={`grid grid-cols-1 gap-2`}>
           <InputEmail title={`Email`} placeholder={`Entrer votre email`} />
           <InputPassword title={`Mot de passe`} placeholder={`Entrer votre mot de passe`} />
           <input type="submit" value="Connexion" className='bg-tokena-blue text-tokena-white rounded-3xl font-[Mono-sans-semibold] text-sm px-5 py-3' />
       </form>
    </div>
</div>
  )
}

export default LoginPage
