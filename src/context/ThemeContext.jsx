import {createContext, useState,useEffect,useContext} from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

    useEffect(()=>{
        localStorage.setItem('theme',theme)
    },[theme])

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
         {children}
      </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);



