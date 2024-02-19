import UserContextProvider from "./context/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"
import './App.css'
import { ThemeProvider } from "./context/Theme"
import { useState } from "react"
function App() {
  const [themeMode,setThemeMode] = useState('light');

  
  return (
    // <UserContextProvider>
    //   <h1>React with chai</h1>
    //   <Login />
    //   <Profile />
    // </UserContextProvider>
    <>
      <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    {/* theme button */}
            </div>

            <div className="w-full max-w-sm mx-auto">
                    {/* card */}
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
