import { createContext,useContext,useState } from "react";

export const NavBarContext = createContext()

export const NavBarProvider = ({children}) =>{
    
    const [focusedLink, setFocusedLink] = useState(null);

    const focusLink = (link) => {
        setFocusedLink(link);
    };
    
    return (
        <NavBarContext.Provider value={{focusedLink, focusLink}}>
            {children}
        </NavBarContext.Provider>
    )
}

export const useNavBar = () => useContext(NavBarContext)