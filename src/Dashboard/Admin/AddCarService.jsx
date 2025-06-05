/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../authContext/AuthContext";

export default function AddCarService() {
  const [startDate, setStartDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // const { user } = useContext(AuthContext);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleService = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const desc = e.target.desc.value;
    const price = e.target.price.value;
    // const email = user?.email;

    const CarService = {
      image,
      // user: {
      //   email,
      //   name: user?.displayName,
      //   photo: user?.photoURL,
      // },
      title,
      desc,
      price,
      // email,
      date: startDate,
    };
    console.log(title, image, desc, price);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_KEY_LOCALHOST}/add-car-service`,
        CarService
      );
      toast.success("Car Service added successfully");
      navigate("/service");
    } catch (err) {
      toast.error("Data not added");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-center text-4xl font-bold text-sky-800 mb-4">
        Add Car Service
      </h1>
      <hr className="border-b-2 border-green-800 w-1/2 mx-auto mb-8" />

      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
        <form onSubmit={handleService} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Service Image URL
                </label>
                <input
                  name="image"
                  type="url"
                  required
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Service Title
                </label>
                <input
                  name="title"
                  type="text"
                  required
                  placeholder="Service title"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="desc"
                  placeholder="Write service description..."
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Price
                </label>
                <input
                  name="price"
                  type="number"
                  required
                  placeholder="Enter price"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Select Service Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="input input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-sky-600 rounded-lg hover:from-sky-600 hover:to-sky-700 transition duration-300"
            >
              {loading ? "Loading..." : "Add Service"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
