import AuthContextProvider from "./Contexts/AuthContext";
import ThemeContextProvider from "./Contexts/ThemeContext";
import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ToggleTheme";


function App() {
  
 
  return (
   
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
      <Navbar/>
      <Booklist/>
      <ToggleTheme/>
      </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
