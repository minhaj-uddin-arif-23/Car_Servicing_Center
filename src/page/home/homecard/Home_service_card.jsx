import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Loading";
import CarServiceCard from "../../CarServiceCard";
import { NavLink } from "react-router-dom";

export default function Home_service_card() {
  const [loading, setLoading] = useState(true);

  const [service, setService] = useState([]);
  useEffect(() => {
    fetchAllService();
  }, []);
  const fetchAllService = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_KEY_LOCALHOST}/home-car-service`
      );

      setTimeout(() => {
        setService(data);
        setLoading(false);
      }, 500);
      // console.log(data);
    } catch (error) {
      console.log("No data fetchin service ", error);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          OUR SERVICE
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
      </div>

      <div className="max-w-7xl mx-auto ">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ml-9 md:ml-0 lg:ml-0 my-5  ">
            {service?.map((data) => (
              <CarServiceCard key={data._id} data={data} />
            ))}
          </div>
        )}
      </div>
      <div>
        <div className="mt-10 flex justify-center my-5">
          <NavLink
            to={"/service"}
            className="btn btn-primary px-6 py-3 text-white rounded-md"
          >
            View All Service
          </NavLink>
        </div>
      </div>
    </div>
  );
}
