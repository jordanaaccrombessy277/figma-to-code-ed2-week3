import { trade_down_red,trade_up_green,bitchoin } from "../assets"

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
                    <p className={`${isPositif ? 'bg-tokena-green-opacity-15 text-tokena-green':'bg-tokena-red-opacity-15 text-tokena-red'} px-1.5 py-1 font-[mono-sans-semibold] rounded-2xl text-[10px] flex flex-row gap-0.5`}>
                        <span>{percent}</span>
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

export const percent = ({isPositif}) => {
    return (
        <p className={`${isPositif ? 'bg-tokena-green-opacity-15 text-tokena-green':'bg-tokena-red-opacity-15 text-tokena-red'} px-1.5 py-1 font-[mono-sans-semibold] rounded-2xl text-[10px] flex flex-row gap-0.5`}>
                        <span>{percent}</span>
                        <img src={isPositif ? trade_up_green : trade_down_red} className='w-3 h-3' alt="" />
        </p>
    )
}

export const Crypto = ({theme,price,percent,percent_volume,coins,market,last,handleOpenModalCrypto}) =>{
    return (
        <tr onClick={handleOpenModalCrypto} className={`border-b cursor-pointer h-14 ${theme === 'light' ? 'border-tokena-gray' : 'border-tokena-grayopacity15'}`}>
            <td className={`text-sm px-6 w-14 py-3 text-center`}>1</td>
            <td className={`text-sm px-6 w-2/12 py-3`}>
            <div className="flex flex-row gap-2.5">
                    <img src={bitchoin} className={`w-6 h-6 object-cover`} alt={`icon`} />
                    <span className="">{coins}</span>
            </div>
            </td>
            <td className={`text-sm px-6 w-2/12 py-3`}>{price}</td>
            <td className={`text-sm px-6 w-20 py-3 flex flex-row justify-center items-center`}>
                <p className={`${'bg-tokena-red-opacity-15 mt-1.5 text-tokena-red'} px-2 py-1 font-[mono-sans-semibold] rounded-2xl text-xs flex items-center`}>
                    {percent}
                </p>
            </td>
            <td className={`text-sm px-6 w-2/12 py-3`}>{percent_volume}</td>
            <td className={`text-sm px-6 w-2/12 py-3`}>{market}</td>
            <td className={`text-sm px-6 w-2/12 py-3`}>{last}</td>
        </tr>
    )
}

