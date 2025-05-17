import img1 from '../../src/assets/images/auto-1.jpg'
import img2 from '../../src/assets/images/auto-2.jpg'
import img3 from '../../src/assets/images/auto-3.jpg'
const services = [
  {
    title: 'ENGINE DIAGNOSTICS',
    image: img1
  },
  {
    title: 'LUBE, OIL AND FILTERS',
    image:img2
  },
  {
    title: 'BELTS AND HOSES',
    image: img3
  },
];

export default function AutoRpairService() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">AUTO REPAIR SERVICES</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
        <p className="text-gray-600 mb-2">
          We offer a full range of garage services to vehicle owners located in Tucson area.
        </p>
        <p className="text-gray-600 mb-10">
          Our professionals know how to handle a wide range of car services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-100">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="flex items-center justify-between px-4 py-4">
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                <span className="text-blue-600 text-xl">&gt;</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition">
            VIEW ALL SERVICES
          </button>
        </div>
      </div>
    </section>
  );
}
