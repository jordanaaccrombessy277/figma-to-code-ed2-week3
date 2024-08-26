import React, { useState } from 'react'
import { arrow_up_blue,arrow_down_blue,chevron_right_gray,search_gray,chevron_down_dark_gray,chevron_down_white,ellipse,ellipse_light_gray,
   chevron_left_dark_gray,chevron_right_light_gray, chevron_right,chevron_up_down,chevron_up_down_gray

} from '../assets'
import { useTheme } from '../context/ThemeContext'
import { TrendingNegative,Crypto } from '../components/dashboardpage.components';
import ModalCrypto from '../components/ModalCrypto'
import { trending,cryptos } from '../constants';

function DashboardPage() {
  
  const {theme} = useTheme();
  const [openCategories, setOpenCategories] = useState(false)
  const [openModalCrypto, setOpenModalCrypto] = useState(false)
  const [modalCrypto, setModalCrypto] = useState({})

  const handleOpenCategories = () =>{
   setOpenCategories(!openCategories)
  }

  const handleOpenModalCrypto = (element) =>{
   setOpenModalCrypto(!openModalCrypto)
  }

  return (
    <div className={`px-6 py-5`}>
       <div className={`flex lg:flex-row flex-col gap-5.5 h-auto`}>
          <div className={`lg:w-1/4 w-full flex flex-col gap-2 border ${theme === "light" ? 'border-x-tokena-light-gray' : 'border-tokena-gray-opacity-20'} rounded-xl p-3`}>
              <div className={`flex flex-col gap-1.5`}>
                 <p className={`font-[mono-sans-semibold] text-lg`}>Balance</p>
                 <div className={`flex flex-row gap-1.5`}>
                   <p className={`font-[mono-sans-bold] w-1/2 text-lg`}>$63,755,200</p>
                   <p className={`w-1/2 flex flex-row gap-1.5 items-center`}>
                     <span className={`bg-tokena-green-opacity-15 px-1.5 py-1 font-[mono-sans-semibold] rounded-2xl text-[10px] text-tokena-green`}>+2.3%</span>
                     <span className={`${theme === "light" ? 'text-tokena-dark-gray' : 'text-tokena-white'} font-[mono-sans-medium] text-xs`}>vs last month</span>
                   </p>
                 </div>
              </div>
              <div className={`flex flex-row gap-1.5`}>
                 <div className={`w-1/2`}>
                    <a href="/" className={`font-[mono-sans-medium] text-sm bg-tokena-blue-opacity-6 px-5 py-2.5 text-tokena-blue rounded-xl flex flex-row gap-1.5 justify-center`}> <img src={arrow_up_blue} alt="" /> <span>Deposit</span></a>
                 </div>
                 <div className={`w-1/2`}>
                    <a href="/" className={`font-[mono-sans-medium] text-sm bg-tokena-blue-opacity-6 px-5 py-2.5 text-tokena-blue rounded-xl flex flex-row gap-1.5 justify-center`}> <img src={arrow_down_blue} alt="" /> <span>Withdraw</span></a>
                 </div>
              </div>
          </div>
          <div className={`lg:w-3/4 w-full`}>
             <div className={`flex justify-between pb-3`}>
                  <p className={`font-[mono-sans-semibold] text-base`}>Trending</p>
                  <a href="/" className={`font-[mono-sans-medium] text-[10px] text-tokena-dark-gray flex flex-row gap-0.5 justify-center`}><span>View more</span> <img src={chevron_right_gray} className='w-3.5 h-3.5' alt="" /></a>
             </div>
             <div className={`grid grid-cols-2 lg:grid-cols-4 gap-1.5`}>
                 {
                  trending.map((element,index)=>(
                    <TrendingNegative key={index} theme={theme} title={element.title}
                    subtitle={element.subtitle} image={element.image} 
                    percent={element.percent} isPositif={element.isPositif}
                    number={element.number} dollars={element.dollars}
                    />
                  ))
                 }
             </div>
          </div>
       </div>
       <div className={`flex flex-wrap gap-4 md:justify-between h-auto pt-9 pb-8`}>
                   <form className={`flex w-full md:w-5/12 lg:w-1/4 px-5 py-2.5 flex-row items-center gap-1.5 rounded-xl border ${theme === 'light' ? 'border-tokena-gray' :'border-tokena-dark-gray'}`}>
                       <input type="image" className='w-4.5 h-4.5' src={search_gray} alt="search icon" />
                       <input type="text" placeholder='Search crypto...' className={`outline-none bg-transparent w-full`} name="" id="" />
                   </form>
                   <div className={`w-full md:w-4/12 lg:w-1/5 relative`}>
                     <form onClick={()=>handleOpenCategories()} className={`flex px-5 py-2.5 cursor-pointer justify-between items-center  rounded-xl border ${theme === 'light' ? 'border-tokena-gray' :'border-tokena-dark-gray'}`}>
                        <p className={`font-[mono-sans-medium] text-sm ${theme === 'light' ? 'text-tokena-dark-gray' : 'text-tokena-white'}`}>Categories</p>
                        <img src={theme === 'light' ? chevron_down_dark_gray : chevron_down_white} className={`w-4.5 h-4.5 duration-100 ${openCategories ? 'rotate-180' : ''}`} alt="" />
                     </form>
                     <ul className={`absolute w-full z-20 duration-100 ${openCategories ? 'visible translate-y-1' : 'invisible translate-y-0'} w-full p-1.5 rounded-xl mt-1 border ${theme === "light" ? 'border-x-tokena-light-gray bg-tokena-white' : 'border-tokena-gray-opacity-20 bg-tokena-dark-blue-1'}`}>
                        <li><a href="/" className={`text-sm w-full ${theme === 'dark' && 'text-tokena-light-gray'} inline-block px-5 py-2.5`}>Aeve Tokens</a></li>
                        <li><a href="/" className={`text-sm w-full ${theme === 'dark' && 'text-tokena-light-gray'} inline-block px-5 py-2.5`}>Account Abstraction</a></li>
                        <li><a href="/" className={`text-sm w-full ${theme === 'dark' && 'text-tokena-light-gray'} inline-block px-5 py-2.5`}>Adidas Ecosystem</a></li>
                        <li><a href="/" className={`text-sm w-full ${theme === 'dark' && 'text-tokena-light-gray'} inline-block px-5 py-2.5`}>Adventure Games</a></li>   
                     </ul>
                   </div>
       </div>
       <div className={`border rounded-xl ${theme === 'light' ? 'border-tokena-gray' : 'border-tokena-dark-gray'} overflow-hidden`}>
            <div className={`p-4 flex flex-row items-center justify-between `}>
                  <p className={`font-[mono-sans-semibold] text-base`}>Market</p>
                  <div className={`border cursor-pointer ${theme === 'light' ? 'border-tokena-gray' : 'border-tokena-dark-gray'} rounded-xl px-2.5 py-2`}><img onClick={null} src={theme === 'light' ? ellipse : ellipse_light_gray} className="w-4.5 h-4.5" alt="" /></div>
            </div>
            <div className={`overflow-x-auto`}>
                  <table className={`border-collapse w-full`}>
                     <thead>
                        <tr className={` ${theme === 'light' ? 'bg-tokena-light-gray' : 'bg-tokena-light-gray-opacity10'}`}>
                           <th className={`text-sm w-14 font-[mono-sans] px-6 py-3`}>#</th>
                           <th className={`text-sm text-left w-2/12 font-[mono-sans] px-6 py-3`}>Coins</th>
                           <th className={`text-sm text-left w-2/12 font-[mono-sans] px-6 py-3`}>Price</th>
                           <th className={`text-sm text-left w-20 font-[mono-sans] px-6 py-3`}>24h</th>
                           <th className={`text-sm text-left w-2/12 font-[mono-sans] px-6 py-3`}>24h volume</th>
                           <th className={`text-sm text-left w-2/12 font-[mono-sans] px-6 py-3`}>Market Cap</th>
                           <th className={`text-sm text-left w-2/12 font-[mono-sans] px-6 py-3`}>Last 7 days</th>
                        </tr>
                     </thead>
                     <tbody>
                         {cryptos.map((element,index)=>(
                            <Crypto key={index} theme={theme} price={element.price} percent={element.percent} percent_volume={element.percent_volume} coins={element.coins}
                            market={element.market} last={element.last} handleOpenModalCrypto={()=>handleOpenModalCrypto(element)} />
                         ))}
                     </tbody>
                  </table>   
            </div>
       </div>
       {openModalCrypto && <ModalCrypto theme={theme} handleOpenModalCrypto={handleOpenModalCrypto} openModalCrypto={openModalCrypto} />} 
       <div className={`p-4 flex flex-col md:justify-between md:flex-row gap-3`}>
          <ul className={`flex flex-wrap gap-1.5`}>
             <li className={``}>
               <a href="/" className={`px-3 py-2.5 border text-tokena-blue font-[Mono-sans-medium] text-sm rounded-xl inline-block h-10 ${theme === 'light' ? 'border-tokena-white' : 'border-tokena-dark-gray'}`}>
                  <img src={theme === 'light' ? chevron_left_dark_gray : chevron_left_dark_gray} className={`w-5 h-5`} alt="" />
               </a>
             </li>
             <li className={``}><a href="/" className={`px-5 py-2.5 font-[Mono-sans-medium] text-sm rounded-xl inline-block h-10 bg-tokena-blue text-tokena-white`}>1</a></li>
             <li className={``}><a href="/" className={`px-5 py-2.5 border text-tokena-blue font-[Mono-sans-medium] text-sm rounded-xl inline-block h-10 ${theme === 'light' ? 'border-tokena-white' : 'border-tokena-dark-gray'}`}>2</a></li>
             <li className={``}><a href="/" className={`px-5 py-2.5 border text-tokena-blue font-[Mono-sans-medium] text-sm rounded-xl inline-block h-10 ${theme === 'light' ? 'border-tokena-white' : 'border-tokena-dark-gray'}`}>3</a></li>
             <li className={``}><a href="/" className={`px-4 py-2.5 border text-tokena-blue font-[Mono-sans-medium] text-sm rounded-xl inline-block h-10 ${theme === 'light' ? 'border-tokena-white' : 'border-tokena-dark-gray'}`}>...</a></li>
             <li className={``}><a href="/" className={`px-3 py-2.5 border text-tokena-blue font-[Mono-sans-medium] text-sm rounded-xl inline-block h-10 ${theme === 'light' ? 'border-tokena-white' : 'border-tokena-dark-gray'}`}>151</a></li>
             <li className={``}>
               <a href="/" className={`px-3 py-2.5 border text-tokena-blue font-[Mono-sans-medium] text-sm rounded-xl inline-block h-10 ${theme === 'light' ? 'border-tokena-white' : 'border-tokena-dark-gray'}`}>
                  <img src={theme === 'light' ? chevron_right : chevron_right_light_gray} className={`w-5 h-5`} alt="" />
               </a>
            </li>
          </ul>
          <div className={`flex flex-row items-center gap-3 justify-between`}>
             <p className={`font-[mono-sans-medium] text-xs ${theme === 'light' ? '' : 'text-tokena-light-gray'}`}>Showing 1 to 50 of 15027 results</p>
             <div className={`border ${theme === 'light' ? 'border-tokena-gray' : 'border-tokena-dark-gray'} rounded-xl`}>
               <p className={`font-[mono-sans-medium] px-5 py-2.5 flex flex-row gap-0.5 text-xs ${theme === 'light' ? 'text-tokena-dark-gray' : 'text-tokena-white'} `}> <span>Rows</span> <img src={theme === 'light' ? chevron_up_down : chevron_up_down_gray} alt="" /></p>
            </div>
          </div>
       </div>
    </div>
  )
}

export default DashboardPage
