import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Inventory from "./Components/Inventory/Inventory";
import InventoryUpdate from "./Components/Inventory/InventoryUpdate";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/Pages/About";
import AddItems from "./Components/Pages/AddItems/AddItems";
import UpdateItems from "./Components/Pages/AddItems/UpdateItems";
import Blog from "./Components/Pages/Blog";
import Home from "./Components/Pages/Home";
import ManageInventory from "./Components/Pages/ManageInventory";
import MyItems from "./Components/Pages/MyItems";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/about" element={<About />} />
        <Route path="/additems" element={<AddItems />} />

        {/* <Route path="/manageInventory" element={<ManageInventory />} /> */}

        <Route
          path="/inventory/:serviceId"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        />

        <Route
          path="/manageInventory"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        />

        <Route path="/updateItems/:serviceId" element={<UpdateItems />} />
        <Route path="/myitems" element={<MyItems />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
