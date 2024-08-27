import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {DashboardLayout } from './layouts';
import { LoginPage,SignUpPage,DashboardPage,DashboardNewsPage,NotFound } from './pages';
import {ThemeProvider,NavBarProvider} from './context'


function App() {
  return (
    <BrowserRouter>
        <ThemeProvider>
            <NavBarProvider>
                <Routes>   
                  <Route path="/login" element={<LoginPage/>} />
                  <Route path="/sign-up" element={<SignUpPage/>} />    
                  <Route path="/" element={<DashboardLayout />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="news" element={<DashboardNewsPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
            </NavBarProvider>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
