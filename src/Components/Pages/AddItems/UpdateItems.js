import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateItems = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/service${serviceId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <h1> Hi this is a update items </h1>
    </div>
  );
};

export default UpdateItems;
