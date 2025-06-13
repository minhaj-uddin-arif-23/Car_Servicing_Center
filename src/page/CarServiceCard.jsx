import { Link, NavLink } from "react-router-dom";

export default function CarServiceCard({ data }) {
  const { _id, title, image, desc, price, date } = data || {};

  return (
    <div className="card w-72 rounded-2xl bg-gradient-to-br from-white via-blue-0 to-green-0 shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
      <figure>
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover rounded-t-2xl"
        />
      </figure>
      <div className="card-body px-4 py-3">
        <h2 className="text-xl font-semibold text-sky-700 mb-1">{title}</h2>
        <p className="text-sm text-gray-700 mb-2 line-clamp-3">{desc}</p>
        <p className="text-base font-medium text-gray-800">
          Price: <span className="text-green-600">${price}</span>
        </p>
        {date && (
          <p className="text-xs text-gray-500 mt-1">
            Date: {new Date(date).toLocaleDateString()}
          </p>
        )}
        <div className="flex justify-end mt-4">
          <Link
            to={`/details/${_id}`}
            className="px-4 py-2 text-sm btn font-medium text-white bg-gradient-to-r from-sky-500 to-sky-600 rounded-lg hover:from-sky-600 hover:to-sky-700 transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
