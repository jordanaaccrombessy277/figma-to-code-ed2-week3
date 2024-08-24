import { add_wallet_white,chevron_up_down_gray,chevron_up_down_dark_gray,moon_gray,sun_gray,menu_gray } from "../assets"
import { useTheme } from '../context/ThemeContext'
function Header ({handleOpenSideBar}) {

    const {theme,toggleTheme} = useTheme();

    const handleTheme = () =>{
        toggleTheme()
    }

    return(
        <header className={`h-15.5 px-6 w-full border-b ${theme === 'light' ? 'border-tokena-light-gray' : 'border-tokena-grayopacity15'} flex justify-between items-center`}>
            <div className={`flex flex-row gap-1.5 md:gap-5 lg:gap-9 items-center`}>
                <div onClick={handleOpenSideBar} className={`border lg:hidden cursor-pointer border-tokena-dark-gray rounded-xl px-2.5 py-2`}><img src={menu_gray} className="w-5 h-5" alt="" /></div>
                <div className={`flex flex-col gap-0.5`}>
                    <h1 className="font-[mono-sans-semibold] text-sm">Dashboard</h1>
                    <p className="font-[mono-sans-medium] text-[10px] md:text-xs text-tokena-dark-gray">Welcome back, John Doe !</p>
                </div>
                <a href='/' className={`px-5 py-2.5 hidden md:flex flex-row items-center gap-1.5 bg-tokena-blue rounded-xl text-tokena-white font-[mono-sans-medium] text-sm`}> <img src={add_wallet_white} className="w-4.5 h-4.5" alt="" /> <span>Connect Wallet</span></a>
            </div>
            <div className={`flex flex-row gap-3 items-center`}>
                <div className={`border ${theme === 'light' ? 'border-tokena-gray' : 'border-tokena-dark-gray'} rounded-xl`}>
                     <p className={`font-[mono-sans-medium] px-5 py-2.5 flex flex-row gap-0.5 text-xs ${theme === 'light' ? 'text-tokena-dark-gray' : 'text-tokena-white'} `}> <span>USD</span> <img src={theme === 'light' ? chevron_up_down_dark_gray : chevron_up_down_gray} alt="" /></p>
                </div>
                <div className={`border cursor-pointer ${theme === 'light' ? 'border-tokena-gray' : 'border-tokena-dark-blue-2'} rounded-xl px-2.5 py-2`}><img onClick={()=>handleTheme()} src={theme === 'light' ? moon_gray : sun_gray} className="w-5 h-5" alt="" /></div>
            </div> 
        </header>
    )
}

export default Header