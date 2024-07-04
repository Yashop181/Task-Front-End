
import { Link, Outlet } from "react-router-dom";


const Layout = ({ isLoggedIn, handleLogout }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            {/* if user is authenticate then only display these links */}
            {isLoggedIn ? (
              <>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/add">Add</Link></li>
                {/* <li><Link to="/search">Search</Link></li> */}
                <li><Link to="/list">List</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>

            ) : (
              //or else this link
              <li><Link to="/login">Login</Link></li>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Created App</footer>
    </div>
  );
};

export default Layout;
