import {close,close_white,bitchoin,star_blue} from '../assets'
function ModalCrypto ({theme,handleOpenModalCrypto,openModalCrypto}){
    return(
        <div className={`w-full ${openModalCrypto ? 'visible' : 'invisible'} h-screen p-6 md:p-0 fixed flex flex-row mx-auto justify-center items-center top-0 left-0 bg-tokena-dark-gray-opacity-60`}>
           <div className={`w-full md:w-1/3 rounded-2xl h-auto ${theme === 'light' ? 'bg-tokena-white' : 'bg-tokena-dark-blue-1'} p-5`}>
                 <div className={`flex justify-between items-center pb-6`}>
                   <p className={`font-[Mono-sans-bold] text-base`}>Bitchoin</p>
                   <p className={`p-2.5 rounded-xl ${theme === 'light' ? 'bg-tokena-white-opacity50' : 'bg-tokena-dark-blue-2'}`}>
                      <img onClick={handleOpenModalCrypto} src={theme === 'light' ? close : close_white} className="w-5 h-5 cursor-pointer" alt="" />
                   </p>
                 </div>
                 <div className={`h-44 pb-6`}>
                      Charts
                 </div>
                 <div className={`flex justify-between items-center pb-6`}>
                   <div className="flex flex-row gap-2.5 items-center">
                        <img src={bitchoin} className={`w-8 h-8 object-cover`} alt={`icon`} />
                        <span className="font-[Mono-sans-semibold] text-sm">{`Bitchoin (BTC/USD)`}</span>
                   </div>
                   <p className={`font-[Mono-sans-semibold] text-sm`}>
                      $59,478
                   </p>
                 </div>
                 <div className={`flex justify-between items-center`}>
                   <p className={`font-[Mono-sans-medium] text-sm`}>
                      Crypto Market Rank
                   </p>
                   <p className={`font-[Mono-sans-semibold] px-2 py-2 rounded-xl text-xs ${theme === 'light' ? 'bg-tokena-light-gray' : 'bg-tokena-grayopacity15'}`}>
                      Rank #1
                   </p>
                 </div>
                 <div className={`flex justify-between items-center py-1`}>
                   <p className={`font-[Mono-sans-medium] text-sm`}>
                      Market Cap
                   </p>
                   <p className={`font-[Mono-sans-medium] text-sm`}>
                      $1,344,345,5644
                   </p>
                 </div>
                 <div className={`flex justify-between items-center py-1`}>
                   <p className={`font-[Mono-sans-medium] text-sm`}>
                      Circulating Supply
                   </p>
                   <p className={`font-[Mono-sans-medium] text-sm`}>
                      19443455644
                   </p>
                 </div>
                 <div className={`flex justify-between items-center py-1`}>
                   <p className={`font-[Mono-sans-medium] text-sm`}>
                      24 Hour High
                   </p>
                   <p className={`font-[Mono-sans-medium] text-sm`}>
                      $61,344
                   </p>
                 </div>
                 <div className={`flex justify-between items-center pt-1 pb-6`}>
                   <p className={`font-[Mono-sans-medium] text-sm`}>
                      24 Hour Low
                   </p>
                   <p className={`font-[Mono-sans-medium] text-sm`}>
                      $58,989
                   </p>
                 </div>
                 <p className={`font-[Mono-sans-medium] text-sm pt-1 pb-6`}>
                      Description
                 </p>
                 <p className={`font-[Mono-sans] ${theme === 'light' ? 'text-tokena-dark-gray' : 'text-tokena-gray'} text-xs pt-2 pb-6`}>
                      lorem
                 </p>
                 <div className={`font-[Mono-sans-medium] px-5 py-2.5 flex flex-row gap-1.5 justify-center w-full bg-tokena-blue-opacity-6 rounded-xl ${theme === 'light' ? '' : 'border-tokena-'} text-sm`}>
                    <img src={star_blue} className={`w-4.5 h-4.5 object-cover`} alt={`icon`} />
                    <p className={`font-[Mono-sans-medium] text-sm text-tokena-blue`}>
                      Add to favorites
                    </p>
                 </div>

           </div>
        </div>
    )
}

export default ModalCrypto;