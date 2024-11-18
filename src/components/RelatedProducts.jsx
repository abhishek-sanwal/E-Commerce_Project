import { useEffect, useState } from "react";

import ProductItem from "./ProductItem";
import PropTypes from "prop-types";
import Title from "./Title";
import { useShopContext } from "../contexts/ShopContextProvider";

function RelatedProducts({ category, subCategory }) {
  const [relatedProduct, setRelatedProduct] = useState([]);
  const { products } = useShopContext();
  useEffect(
    function () {
      let newRelatedProduct = products.slice();
      if (products.length > 0) {
        newRelatedProduct = newRelatedProduct.filter(
          (product) => product.category === category
        );
        newRelatedProduct = newRelatedProduct.filter(
          (product) => product.subCategory === subCategory
        );
      }
      // Set only 4 products.
      setRelatedProduct(newRelatedProduct.slice(0, 5));
    },
    [products, category, subCategory]
  );

  return (
    <section>
      <div className="my-24">
        <div className="text-center text-3xl py-2">
          <Title text1={"related"} text2={"products"} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {relatedProduct.map((product, index) => (
            <ProductItem
              key={index}
              id={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;

RelatedProducts.propTypes = {
  category: PropTypes.string,
  subCategory: PropTypes.string,
};
