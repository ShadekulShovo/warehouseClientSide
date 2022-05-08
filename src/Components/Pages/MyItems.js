import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyItemsCards from "./MyItemsCards";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myitems, setMyitems] = useState([]);

  useEffect(() => {
    const getMyitems = async () => {
      const email = user?.email;

      const url = `https://intense-fjord-15672.herokuapp.com/service?email=${email}`;
      const { data } = await axios.get(url);
      setMyitems(data);
    };
    getMyitems();
  }, [user]);

  return (
    <div>
      <h5 className="text-center my-3">
        {myitems.length} Items you have added
      </h5>

      <section>
        <h4 className="text-center my-3">Your Items</h4>

        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 d-flex justify-content-center my-3">
            {myitems.map((myitem) => (
              <MyItemsCards key={myitem._id} myitem={myitem}></MyItemsCards>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyItems;
