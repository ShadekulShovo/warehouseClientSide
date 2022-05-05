import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myitems, setMyitems] = useState([]);

  useEffect(() => {
    const getMyitems = async () => {
      const email = user?.email;

      const url = `http://localhost:5000/service?email=${email}`;
      const { data } = await axios.get(url);
      setMyitems(data);
    };
    getMyitems();
  }, [user]);
  return (
    <div>
      <h1> your items : {myitems.length}</h1>
    </div>
  );
};

export default MyItems;
