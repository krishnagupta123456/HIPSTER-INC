import { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className='mb-10 '>
      <div class="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 class="text-4xl font-bold mb-2">
          Explore Our Top Picks for You
        </h1>


        <p className="text-lg">
          Discover the best in men's and women's clothing, jewelry, and electronics. Hand-picked products with reviews, performance, and value you'll love.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="p-12 rounded-2xl shadow-md hover:shadow-2xl-red-200 dark:shadow-red-200 dark:hover:shadow-red-400 bg-white text-black"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 object-contain mx-auto mb-4" />
            <h3 className=" text-base font-semibold mb-2 line-clamp-2">{item.title}</h3>
            <p className="text-sm line-clamp-2 text-gray-600">{item.description}</p>
            <p className="text-sm font-style: italic text-gray-900">Category : {item.category}</p>
            <div className="mt-auto">
              <h2 className="text-base font-medium text-black mb-1">
                ₹ {item.price}
              </h2>
              <p className="text-sm">⭐ {item.rating.rate} ({item.rating.count} reviews)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;