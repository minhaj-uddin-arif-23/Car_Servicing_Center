import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Loading";
import CarServiceCard from "../../CarServiceCard";

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
        `${import.meta.env.VITE_API_KEY_LOCALHOST}/show-all-car-service`
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
    </div>
  );
}
