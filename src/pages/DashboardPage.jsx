import React from 'react'
import { arrow_up_blue,arrow_down_blue,chevron_right_gray} from '../assets'
import { useTheme } from '../context/ThemeContext'
import { TrendingNegative } from '../components/dashboardpage.components';
import { trending } from '../constants';

function DashboardPage() {
  
  const {theme} = useTheme();

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
                  trending.map((element)=>(
                    <TrendingNegative theme={theme} title={element.title}
                    subtitle={element.subtitle} image={element.image} 
                    percent={element.percent} isPositif={element.isPositif}
                    number={element.number} dollars={element.dollars}
                    />
                  ))
                 }
             </div>
          </div>
       </div>
    </div>
  )
}

export default DashboardPage
