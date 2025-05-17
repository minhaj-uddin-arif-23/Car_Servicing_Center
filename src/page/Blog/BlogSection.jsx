import car1 from '../../assets/images/car-1.jpg';
import car2 from '../../assets/images/car-2.jpg';
import car3 from '../../assets/images/car-3.jpg';
import car4 from '../../assets/images/car-4.jpg';
import car5 from '../../assets/images/car-5.jpg';

export default function BlogSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6">
      {/* Blog Posts */}
      <div className="w-full lg:w-2/3 space-y-6">
        <BlogCard
          image={car1}
          date="21 Dec 2024"
          author="Oliver"
          title="Why Are Children So Obsessed With Autocare?"
          excerpt="Children are increasingly fascinated by cars and tools, often imitating repair activities. This article explores the reasons behind this growing obsession."
        />
        <BlogCard
          image={car2}
          date="20 Dec 2024"
          author="Harry"
          title="How To Get People To Like Autocare"
          excerpt="Most people overlook car maintenance until it’s too late. Learn how to make autocare approachable and even enjoyable."
        />
        <BlogCard
          image={car3}
          date="18 Dec 2024"
          author="Mia"
          title="Top 5 Mistakes Car Owners Make in Winter"
          excerpt="Winter can be tough on vehicles. This guide covers the most common car care mistakes and how to avoid costly repairs."
        />
        <BlogCard
          image={car4}
          date="15 Dec 2024"
          author="James"
          title="How Regular Oil Changes Save Your Engine"
          excerpt="Skipping oil changes can severely damage your car engine. Here’s why regular maintenance keeps your vehicle healthy and your wallet happy."
        />
        <BlogCard
          image={car5}
          date="10 Dec 2024"
          author="Sophia"
          title="How To Choose the Right Tires for Your Car"
          excerpt="From all-season to performance tires, selecting the right one can improve safety, mileage, and performance. Let’s find your perfect match."
        />
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-1/3 space-y-8">
        <SearchBox />
        <RecentPosts />
        <Categories />
      </aside>
    </div>
  );
}

// Blog Card
function BlogCard({ image, date, author, title, excerpt }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-md transition">
      <img src={image} alt={title} className="w-full h-56 object-cover rounded-t-lg" />
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">
          {date} / <span className="text-blue-600">By {author}</span>
        </p>
        <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-full text-sm transition">
          READ MORE →
        </button>
      </div>
    </div>
  );
}

// Sidebar: Search Box
function SearchBox() {
  return (
    <div>
      <h4 className="text-xl font-semibold border-b-2 border-red-500 mb-4">Search</h4>
      <div className="flex">
        <input
          type="text"
          placeholder="Write your text"
          className="flex-grow p-2 border border-gray-300 rounded-l"
        />
        <button className="bg-red-500 hover:bg-red-600 p-3 text-white rounded-r">
          🔍
        </button>
      </div>
    </div>
  );
}

// Sidebar: Recent Posts
function RecentPosts() {
  const posts = [
    {
      image: car1,
      title: "Why Are Children So Obsessed With Autocare?",
    },
    {
      image: car2,
      title: "How To Get People To Like Autocare",
    },
    {
      image: car3,
      title: "Top 5 Mistakes Car Owners Make in Winter",
    },
    {
      image: car4,
      title: "Regular Oil Changes Save Your Engine",
    },
    {
      image: car5,
      title: "Choose the Right Tires for Your Car",
    },
  ];

  return (
    <div>
      <h4 className="text-xl font-semibold border-b-2 border-red-500 mb-4">Recent Posts</h4>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="flex items-start gap-3">
            <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded" />
            <div className="text-sm">
              <p className="font-semibold text-gray-800">{post.title}</p>
              <p className="text-gray-500 text-xs">By Admin / 💬 28</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Sidebar: Categories
function Categories() {
  const categories = [
    "Engine Repair",
    "Auto Maintenance",
    "Tires & Wheels",
    "Oil & Fluids",
    "Car Detailing",
    "Battery Service",
  ];

  return (
    <div>
      <h4 className="text-xl font-semibold border-b-2 border-red-500 mb-4">Categories List</h4>
      <ul className="space-y-2 text-gray-700">
        {categories.map((cat, i) => (
          <li key={i} className="hover:text-blue-600 cursor-pointer">{cat}</li>
        ))}
      </ul>
    </div>
  );
}
