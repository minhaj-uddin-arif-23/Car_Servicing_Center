/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import  { useEffect, useState } from "react";


import { Helmet } from "react-helmet";

import Loading from "./Loading";
import CarServiceCard from "./CarServiceCard";

export default function Service() {

  // * search
  // const [search, setSearch] = useState("");
  //  pagination

  // const [count,setCount] = useState()




  const [loading, setLoading] = useState(true);

  // *api multiple query write system like  ? then & sign

  const [service, setService] = useState([]);
  useEffect(() => {
    fetchAllService();
  }, []);
  const fetchAllService = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_KEY_LOCALHOST
        }/show-all-car-service`
      );
      setTimeout(() => {
        setService(data);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.log("No data fetchin service ", error);
      setLoading(false)
    }
  };



  return (
   <div className="">
     <>
      <div className="">
        <Helmet>
          <title>Car service</title>
        </Helmet>
        <h1 className="text-3xl font-semibold text-lime-700 my-4">
         All Car Services in Deals
        </h1>{" "}
      </div>
   

      {/*  fetch the data */}
    <div className="max-w-7xl mx-auto">
    {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 ml-9 md:ml-0 lg:ml-0 my-5  ">
          {service?.map((data) => (
            <CarServiceCard key={data._id} data={data} />
          ))}
        </div>
      )}
    </div>

      {/* pagination implementation */}
 
    </>
   </div>
  );
}