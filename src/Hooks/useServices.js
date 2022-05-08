import { useEffect, useState } from "react";

const useServices = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch("https://intense-fjord-15672.herokuapp.com/allitems")
      .then((response) => response.json())
      .then((data) => setInventory(data));
  }, []);
  return [inventory, setInventory];
};
export default useServices;
