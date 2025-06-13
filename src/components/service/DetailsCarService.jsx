/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CarServiceDetailsPage from "./CarServiceDetailsPage";

export default function DetailsCarService() {
  const data = useLoaderData();
  const [service, setService] = useState(data);
  console.log("service", service);

  return (
    <div>
      <div>
      </div>
      <div>
        {service ? (
          <CarServiceDetailsPage key={service._id} service={service} />
        ) : (
          "Not Found"
        )}
      </div>
    </div>
  );
}
