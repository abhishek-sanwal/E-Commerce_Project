import { useEffect, useState } from "react";

import ProductItem from "./ProductItem";
import Title from "./Title";
import { useShopContext } from "../contexts/ShopContextProvider";

function LatestCollections() {
  const { products } = useShopContext();

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(
    function () {
      setLatestProducts(products.slice(0, 10));
    },
    [products]
  );

  return (
    <section className="my-10">
      <header className="py-8 text-center text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base truncate text-gray-600">
          Discover our newest arrivals that blend style and comfort. Explore the
          latest trends in fashion, curated just for you.
        </p>
      </header>

      {/* Rendering Products */}
      <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((product, idx) => (
          <ProductItem
            key={idx}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          /> // another way to pass props to a component is to use the spread operator (<ProductItem key={idx} {...product} />)
        ))}
      </main>
    </section>
  );
}

export default LatestCollections;
