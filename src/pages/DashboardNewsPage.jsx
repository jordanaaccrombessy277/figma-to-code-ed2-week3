import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { coinMarketCap,heart,heart_gray,comment,comment_gray,arrow_down,
  arrow_down_light_gray
 } from '../assets'
import { Article } from '../components/dashboardpage'

function DashboardNewsPage() {
  
  const {theme} = useTheme()

  return (
    <div className='h-auto'>
       <div className={`p-6`}>
          <p className={`font-[Mono-sans-semibold] text-base`}>Latest cryptos news</p>
          <div className={`pt-8 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}>
              <Article theme={theme} coinMarketCap={coinMarketCap} heart={heart}
              heart_gray={heart_gray} comment={comment} comment_gray={comment_gray} />
               <Article theme={theme} coinMarketCap={coinMarketCap} heart={heart}
              heart_gray={heart_gray} comment={comment} comment_gray={comment_gray} />
               <Article theme={theme} coinMarketCap={coinMarketCap} heart={heart}
              heart_gray={heart_gray} comment={comment} comment_gray={comment_gray} />
               <Article theme={theme} coinMarketCap={coinMarketCap} heart={heart}
              heart_gray={heart_gray} comment={comment} comment_gray={comment_gray} />
               <Article theme={theme} coinMarketCap={coinMarketCap} heart={heart}
              heart_gray={heart_gray} comment={comment} comment_gray={comment_gray} />
              <Article theme={theme} coinMarketCap={coinMarketCap} heart={heart}
              heart_gray={heart_gray} comment={comment} comment_gray={comment_gray} />
              <Article theme={theme} coinMarketCap={coinMarketCap} heart={heart}
              heart_gray={heart_gray} comment={comment} comment_gray={comment_gray} />
              <Article theme={theme} coinMarketCap={coinMarketCap} heart={heart}
              heart_gray={heart_gray} comment={comment} comment_gray={comment_gray} />
          </div>
       </div>
       <p className={`flex justify-center`}>
          <a href="/" className={`flex border gap-1 px-3.5 py-2.5 rounded-3xl ${theme === 'light' ? 'bg-tokena-light-gray border-tokena-gray' : 'bg-tokena-dark-blue-2 border-tokena-gray-opacity-20'}`}>
              <span className={`font-[Mono-sans-medium] text-sm ${theme === 'dark' && 'text-tokena-light-gray'}`}>Load More</span>
              <img src={theme === 'light' ? arrow_down : arrow_down_light_gray} className='w-4.5 h-4.5' alt="" />
          </a>
       </p>
    </div>
  )
}

export default DashboardNewsPage
