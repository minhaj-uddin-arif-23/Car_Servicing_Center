import { Link, useNavigate } from "react-router-dom";

export default function CarServiceDetailsPage({ service }) {
  const { _id, title, image, desc, price, date } = service || {};
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/payment", {
      state: { price: service.price, serviceName: service.name },
    });
  };
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2">
        <div className="rounded-lg overflow-hidden border border-gray-200 mb-6">
          <img src={image} alt={title} className="w-full h-72 object-cover" />
        </div>

        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{desc}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-100 border-l-4 border-orange-500 p-4 rounded shadow">
            <h4 className="font-semibold"></h4>
            <p className="text-gray-700 font-semibold text-lg ">
              Price ${price}
            </p>
            <button onClick={handleCheckout} className="btn btn-warning mt-4">
              Proceed to Checkout
            </button>
          </div>
          <div className="bg-gray-100 border-l-4 border-green-500 p-4 rounded shadow">
            <h4 className="font-semibold">Date</h4>
            <p className="text-gray-700">{formattedDate}</p>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Services List */}
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          {[
            "Full Car Repair",
            "Engine Repair",
            "Automatic Services",
            "Engine Oil Change",
            "Battery Charge",
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border-b py-2 text-sm hover:text-orange-600 cursor-pointer"
            >
              <span>{item}</span>
              <span className="text-orange-500">&rarr;</span>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <div className="bg-blue-600/90 border-2 border-gray-600 text-white p-4 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">Download</h3>
          <div className="space-y-2">
            <button className="w-full border-2 border-gray-600 bg-white text-black px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition">
              📄 Our Brochure
            </button>
            <button className="w-full bg-white text-black px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition">
              📁 Company Details
            </button>
          </div>
        </div>

        {/* Promo Section */}
        <div className="bg-blue-600/90 text-white p-4 rounded-xl shadow text-center">
          <h3 className="text-xl font-bold">Car Doctor</h3>
          <p className="mt-2 mb-4">Need Help? We Are Here To Help You</p>
          <div className="bg-white text-black p-3 rounded mb-2 font-semibold">
            Car Doctor Special
            <br />
            <span className="text-red-500">Save up to 60% off</span>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold">
            Get A Quote
          </button>
        </div>
      </div>
    </div>
  );
}
