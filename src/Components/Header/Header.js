import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Customlink from "../Link/Customelink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand text-light" href="#">
            Electronics Mania
          </a>

          <div className="" id="navbarNavAltMarkup">
            <div className="navbar-nav all-nav ">
              <Customlink to="/" className="text-light">
                Home
              </Customlink>
              <Customlink to="/inventory" className="text-light">
                Inventory
              </Customlink>

              <Customlink to="/blog" className="text-light">
                Blogs
              </Customlink>
              <Customlink to="/about" className="text-light">
                About
              </Customlink>
              <Customlink to="/manageInventory" className="text-light">
                Manage Inventory
              </Customlink>
              <Customlink to="/myitems" className="text-light">
                My Items
              </Customlink>

              {user ? (
                <button onClick={handleSignOut} className="btn btn-warning bt">
                  Sign out
                </button>
              ) : (
                <Customlink to="/login">Login</Customlink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
