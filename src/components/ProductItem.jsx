import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useShopContext } from "../contexts/ShopContextProvider";

function ProductItem({ id, image, name, price }) {
  const { currency } = useShopContext();
  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <header className="overflow-hidden border rounded-lg p-4 shadow-sm  h-[300px]">
        <img
          src={image[0]}
          alt=""
          className="w-full h-48 object-cover mb-2 rounded hover:scale-110 transition ease-in-out duration-500 "
        />
        <p className="pt-3 pb-1 text-sm ">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </header>
    </Link>
  );
}

ProductItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number,
};

export default ProductItem;