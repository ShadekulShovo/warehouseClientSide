import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateItems = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `https://intense-fjord-15672.herokuapp.com/service${serviceId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <h1> Updated Items </h1>
    </div>
  );
};

export default UpdateItems;
