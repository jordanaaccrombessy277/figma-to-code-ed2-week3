import { trade_down_red,trade_up_green } from "../assets"

export const TrendingNegative = ({theme,title,subtitle,image,percent,number,dollars,isPositif}) =>{
    return (
        <div className={`border ${theme === "light" ? 'border-x-tokena-light-gray' : 'border-tokena-gray-opacity-20'} rounded-xl p-3 flex flex-col gap-2.5`}>
            <div className={`flex items-center justify-between`}>
                    <div className={`flex flex-row gap-1`}>
                        <img src={image} className='w-8 h-8' alt="" />
                        <div className={`flex flex-col gap-0.5`}>
                            <p className="font-[mono-sans-bold] text-xs text-tokena-dark-gray">{title}</p>
                            <p className="font-[mono-sans-bold] text-[10px] text-tokena-dark-gray-opacity-60 uppercase">{subtitle}</p>
                        </div>
                    </div>
                    <p className={`items-center justify-center ${isPositif ? 'bg-tokena-green-opacity-15 text-tokena-green':'bg-tokena-red-opacity-15 text-tokena-red'} px-1.5 py-1 font-[mono-sans-semibold] rounded-2xl text-[10px] flex flex-row gap-0.5`}>
                        <span className="leading-none">{percent}</span>
                        <img src={isPositif ? trade_up_green : trade_down_red} className='w-3 h-3' alt="" />
                    </p>          
            </div>
            <div className={`flex flex-col gap-0.5`}>
                <p className="font-[mono-sans-bold] text-xs text-tokena-dark-gray">{number}</p>
                <p className="font-[mono-sans-medium] text-[10px] text-tokena-dark-gray">{dollars}</p>
            </div>
        </div>
    )
}


export const Crypto = ({theme,index, symbol,name_crypto,image,current_price,market_cap,price_change_percentage_24h,total_volume, handleOpenModalCrypto}) =>{
    
    return (
        <tr onClick={handleOpenModalCrypto} className={`border-b cursor-pointer ${theme === 'light' ? 'border-tokena-gray' : 'border-tokena-grayopacity15'}`}>
            <td className={`text-sm px-6 w-14 py-3 text-center`}>{index+1}</td>
            <td className={`text-sm px-6 w-3/12 py-3`}>
                <div className="flex flex-row gap-2.5">
                        <img src={image} className={`w-6 h-6 object-cover`} alt={`icon`} />
                        <p className="">{name_crypto}-<span className={`uppercase`}>{symbol}</span></p>
                </div>
            </td>
            <td className={`text-sm px-6 w-2/12 py-3`}>${current_price.toLocaleString('en-US')}</td>
            <td className={`text-sm px-6 w-20 py-3`}>
                <div className={`flex items-center justify-center ${price_change_percentage_24h >= 0 ? 'bg-tokena-green-opacity-15 text-tokena-green':'bg-tokena-red-opacity-15 text-tokena-red'} px-1.5 py-1 font-[mono-sans-semibold] rounded-2xl text-[10px] flex-row gap-0.5`}>
                   <p className={`leading-none`}>{Number(price_change_percentage_24h.toFixed(1))}%</p>
                </div>
            </td>
            <td className={`text-sm px-6 w-2/12 py-3`}>${total_volume.toLocaleString('en-US')}</td>
            <td className={`text-sm px-6 w-2/12 py-3`}>${market_cap.toLocaleString('en-US')}</td>
            <td className={`text-sm px-6 w-2/12 py-3`}>
                ---
            </td>
        </tr>
    )
}

export const Article = ({theme,coinMarketCap,heart,heart_gray,comment,comment_gray}) =>{
    return (
        <div className={`border p-2.5 flex flex-col gap-2.5 rounded-xl ${theme === 'light' ? 'border-tokena-light-gray':'border-tokena-grayopacity15 bg-tokena-dark-blue-2'}`}>
                  <div className={`flex flex-row gap-2`}>
                      <img src={coinMarketCap} className='w-8 h-8 object-cover' alt="" />
                      <p className={`flex flex-col`}>
                         <span className={`font-[Mono-sans-semibold] text-xs`}>CoinMarketCap</span>
                         <span className={`font-[Mono-sans] ${theme === 'light' ? 'text-tokena-dark-gray' : 'text-tokena-light-gray'}  text-xs`}>News - 7 hours ago</span>
                      </p>
                  </div>
                  <div className={`h-44 rounded-xl ${theme === 'light' ? 'bg-tokena-light-gray' : 'bg-tokena-black-nuance-opacity-70'}`}></div>
                  <div className={`flex flex-col gap-2`}>
                     <div className={`flex flex-col gap-1.5`}>
                        <p className={`font-[Mono-sans-semibold] text-xs ${theme === 'dark' && 'text-tokena-gray'}`}>
                            Ethereum’s Merge Coming and the Stakes Couldn’t Be Higher
                        </p>
                        <p className={`font-[Mono-sans-medium] text-xs ${theme === 'light' ? 'text-tokena-dark-gray' : 'text-tokena-white'}`}>
                            The most important upgrade in blockchain history is slated for August. And the outcome of Ethe....
                        </p>
                     </div>
                     <div className={`flex flex-row gap-2.5`}>
                        <p className={`flex flex-row gap-1`}>
                           <img src={theme === 'light' ? heart : heart_gray} className='w-4.5 h-4.5' alt="" />
                           <span className={`font-[Mono-sans-medium] text-sm ${theme === 'dark' && 'text-tokena-gray'}`}>5</span>
                        </p>
                        <p className={`flex flex-row gap-1`}>
                           <img src={theme === 'light' ? comment : comment_gray} className='w-4.5 h-4.5' alt="" />
                           <span className={`font-[Mono-sans-medium] text-sm ${theme === 'dark' && 'text-tokena-gray'}`}>5</span>
                        </p>
                     </div>
                  </div>
              </div>
    )
}
