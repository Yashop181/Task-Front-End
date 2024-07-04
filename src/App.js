import { useState ,useEffect } from "react"
import { Routes,Route,Navigate } from "react-router-dom"
import Home from "./Home"
import Layout from "./Layout"
import AddProduct from "./AddProduct"
import Search from "./Search"
import ProductList from "./ProductList"
import Login from "./Login"
const App = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  useEffect(()=>{
    //this i=will check if user is already logged in  
    const loggedIn = localStorage.getItem('isLoggedIn');
    if(loggedIn){
      setIsLoggedIn(true)
    }
  },[]);

  const handleLogin = ()=>
  {
    // Save the login status in localStorage and update the state
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  }
  const handleLogout = ()=>{
    // Remove the login status from localStorage and update the state
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    alert("successfully logout!!")
  }

  return (
    <>
      <Routes>
          <Route path="/" element={<Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}>

          {/* Redirects to "/home" if logged in, otherwise to "/login" */}
          <Route index element={isLoggedIn ? <Navigate to="/home"/> : <Navigate to="/login" /> }  /> 

          {/* Renders the Login component only if not logged in */}
          {!isLoggedIn && <Route path="/login" element={<Login handleLogin={handleLogin} setIsLoggedIn={setIsLoggedIn}/> } />}
          
          {/* Renders the Home component if logged in, otherwise redirects to "/login" */}
          <Route path="/home" element={isLoggedIn ? <Home handleLogout={handleLogout} /> : <Navigate to="/login" /> } />
          
          {/* Renders the AddProduct component if logged in, otherwise redirects to "/login" */}
          <Route path="/add" element={isLoggedIn ? <AddProduct/> : <Navigate to="/login" /> } />
          <Route path="/search" element={<Search/>} />
              
          {/* Renders the ProductList component, passing isLoggedIn prop for conditional rendering */}
          <Route path="/list" element={<ProductList isLoggedIn={isLoggedIn}/> } />

          </Route>
      </Routes>
    </>
  )
}

export default App
