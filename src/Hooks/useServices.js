import { useEffect, useState } from "react";

const useServices = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((response) => response.json())
      .then((data) => setInventory(data));
  }, []);
  return [inventory, setInventory];
};
export default useServices;
