import { assets } from "../assets/frontend_assets/assets";
import { useShopContext } from "../contexts/ShopContextProvider";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useShopContext();

  return (
    showSearch && (
      <section>
        <div className="bg-gray-50 border-t border-b text-center">
          <div className="w-[450px] inline-flex items-center justify-center px-5 py-2 my-8 border border-gray-400 rounded-full">
            <input
              className="flex-1 outline-none text-sm  bg-inherit "
              type="text"
              value={search}
              placeholder="Search"
              onChange={(event) => setSearch(event.target.value)}
            />

            <img
              role="button"
              src={assets.search_icon}
              className="w-4 "
              alt="Search"
            />
          </div>
          <img
            role="button"
            src={assets.cross_icon}
            alt="Remove"
            className="w-4 h-4 ml-3 inline cursor-pointer"
            onClick={() => setShowSearch(false)}
          />
        </div>
      </section>
    )
  );
}

export default SearchBar;
