import { useEffect, useState } from "react";

import ProductItem from "../components/ProductItem";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import { useShopContext } from "../contexts/ShopContextProvider";

function Collections() {
  const { products, showSearch, search } = useShopContext();

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortBy, setSortBy] = useState("relevant");

  // Function to add category to category filter list after click
  function handleCategoryClick(event) {
    if (categories.includes(event.target.value)) {
      setCategories(
        categories.filter((category) => category !== event.target.value)
      );
    } else {
      setCategories([...categories, event.target.value]);
    }
  }

  // Function to add sub-category to sub-category filter list after click
  function handleSubCategoryClick(event) {
    if (subCategories.includes(event.target.value)) {
      setSubCategories(
        subCategories.filter(
          (subCategory) => subCategory !== event.target.value
        )
      );
    } else {
      setSubCategories([...subCategories, event.target.value]);
    }
  }

  useEffect(
    function () {
      switch (sortBy) {
        case "low-high":
          setFilterProducts(
            filterProducts
              .slice()
              .sort((first, second) => first.price - second.price)
          );
          break;
        case "high-low":
          setFilterProducts(
            filterProducts
              .slice()
              .sort((first, second) => second.price - first.price)
          );
          break;

        case "relevant":
          applyFilter();
          break;
      }
    },
    [sortBy]
  );

  function applyFilter() {
    let newFilterProducts = products.slice();

    if (showSearch && search.length > 0) {
      newFilterProducts = newFilterProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (categories.length > 0) {
      newFilterProducts = newFilterProducts.filter((product) =>
        categories.includes(product.category)
      );
    }
    if (subCategories.length > 0) {
      newFilterProducts = newFilterProducts.filter((product) =>
        subCategories.includes(product.subCategory)
      );
    }
    setFilterProducts(newFilterProducts);
  }
  // Apply filter
  useEffect(
    function () {
      applyFilter();
    },
    [categories, subCategories, search, showSearch]
  );

  return (
    <section className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        {/* Filter Options */}
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-3 uppercase"
          role="button"
          onClick={() => setShowFilter(!showFilter)}
        >
          Filters
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="Dropdown"
          />
        </p>
        {/* Category Filters */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 sm:block ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium uppercase">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={(event) => handleCategoryClick(event)}
                value={"Men"}
              />{" "}
              MEN
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={(event) => handleCategoryClick(event)}
                value={"Women"}
              />{" "}
              WOMEN
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={(event) => handleCategoryClick(event)}
                value={"Kids"}
              />{" "}
              KIDS
            </p>
          </div>
        </div>
        {/* Sub Category Filters */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 sm:block ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium uppercase">Types</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={(event) => handleSubCategoryClick(event)}
                value="Topwear"
              />{" "}
              TOPWEAR
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={(event) => handleSubCategoryClick(event)}
                value="Bottomwear"
              />
              BOTTOMWEAR
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={(event) => handleSubCategoryClick(event)}
                value="Winterwear"
              />
              WINTERWEAR
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="relevant">Sort by:Relevant</option>
            <option value={"low-high"}>Sort by:Low to High</option>
            <option value={"high-low"}>Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.length === 0 && (
            <img
              src={assets.no_products_found}
              className="col-span-full row-span-full"
            />
          )}
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;
