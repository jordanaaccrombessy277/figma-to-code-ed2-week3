import {menu} from '../constants'
import { logo,profile,chevron_down,chevron_down_white,close,close_white } from '../assets'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useNavBar } from '../context/NavBarContext'

function SideBar ({isOpenSideBar,handleOpenSideBar}) {

    const {theme} = useTheme();
    const {focusLink,focusedLink} = useNavBar();

    const handleFocusLink = (link) => {
        focusLink(link)
    }

    return(
        <aside className={`lg:w-1/6 w-64 border-r ${theme === 'light' ? 'bg-tokena-white' : 'bg-tokena-dark-blue-1 border-tokena-grayopacity15'} py-3.5 px-3.5 h-screen duration-1000 ${isOpenSideBar ? 'translate-x-0' : '-translate-x-double-full lg:translate-x-0'} lg:flex flex-col fixed z-20 overflow-hidden`}>
            <img onClick={handleOpenSideBar} src={theme === 'light' ? close : close_white} className="w-5 h-5 border lg:hidden absolute right-0 top-0 cursor-pointer border-tokena-dark-gray rounded-xl" alt="" />
            <div className={`bg-tokena-blue-opacity7percent px-4 w-full h-16 rounded-xl flex items-center flex-row gap-3`}>
                 <div className={`bg-tokena-blue-opacity22percent w-9 h-9 rounded-xl flex justify-center items-center`}>
                    <img src={logo} className={`w-6 h-6`} alt="logo tokena" /> 
                 </div>
                 <div className={``}>
                     <p className={`font-[mono-sans-bold] text-xs text-tokena-dark-2`}>Tokena</p>
                     <p className={`font-[mono-sans-medium] text-[10px] text-tokena-blue`}>Finance app</p>
                 </div>
            </div>
            <div className={`pt-9 pb-5`}>
               <p className={`font-[mono-sans-medium] text-sm text-tokena-dark-gray`}>Menu</p>
            </div>
            <ul className={`flex flex-col gap-0.5`}>
                 {
                    menu.map((navlink, index)=>(
                        <li onClick={()=>handleFocusLink(navlink.title)} key={index} className={`px-2 py-3 ${focusedLink === navlink.title ? 'bg-tokena-blue text-white' : ''} rounded-xl 
                         ${navlink.title === 'Login' ? 'mt-8' : ''}`}>
                            <Link className={``} to={navlink.link}>
                            {navlink.subMenu === false ? (
                                <p className={`flex items-center gap-1.5`}>
                                    {theme === 'light' ? focusedLink === navlink.title ? navlink.icon_white !== '' && <img src={navlink.icon_white} className={`w-4.5 h-4.5`} alt="navlink icon" /> : 
                                    navlink.icon !== '' && <img src={navlink.icon} className={`w-4.5 h-4.5`} alt="navlink icon" /> : 
                                    navlink.icon_white !== '' && <img src={navlink.icon_white} className={`w-4.5 h-4.5`} alt="navlink icon" />}
                                    <span className={`font-[mono-sans-semibold] text-xs`}>{navlink.title}</span>
                                </p>
                            ) : (
                               <div className="flex justify-between">
                                    <p className={`flex items-center gap-1.5 ${navlink.subMenu ? 'justify-between' : ''}`}>
                                            {theme === 'light' ? focusedLink === navlink.title ? navlink.icon_white !== '' && <img src={navlink.icon_white} className={`w-4.5 h-4.5`} alt="navlink icon" /> : 
                                            navlink.icon !== '' && <img src={navlink.icon} className={`w-4.5 h-4.5`} alt="navlink icon" /> : 
                                            navlink.icon_white !== '' && <img src={navlink.icon_white} className={`w-4.5 h-4.5`} alt="navlink icon" />}
                                            <span className={`font-[mono-sans-semibold] text-xs`}>{navlink.title}</span>
                                    </p>
                                    <img src={theme === 'light' && focusedLink !== navlink.title ? chevron_down : chevron_down_white} className={`w-4.5 h-4.5`} alt="subMenu icon" />
                               </div>
                            ) }  
                            </Link>
                        </li> 
                    ))
                 }
            </ul>

            <div className={ `${theme === 'dark' && 'bg-tokena-dark-blue-2'} p-2 rounded-xl flex gap-4 items-center absolute bottom-6`}>
                <img src={profile} className={`w-10 h-10`} alt="profile user" />
                <div className={`flex flex-col`}>
                      <p className={`text-xs font-[mono-sans-medium]`}>John Doe</p>
                      <p className={`text-tokena-dark-gray text-xs font-[mono-sans]`}>johndoe8@gmail.com</p>
                </div>
                <img src={theme === 'light' ? chevron_down : chevron_down_white} alt="" />
            </div>
        </aside>
    )
}

export default SideBar