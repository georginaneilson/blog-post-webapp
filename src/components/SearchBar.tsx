import SearchIcon from "../assets/SearchIcon";

/**
 * Search bar component
 *
 * @param searchValue - Search value
 * @param handleSearch - Function to handle search
 */

export const SearchBar = ({
  searchValue,
  handleSearch,
}: {
  searchValue: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="h-[65px] bg-[#ffe1e6] md:bg-white p-4 sticky top-0 z-10 ">
      <h1 className="sr-only">Blog Posts</h1>
      <span className="flex items-center gap-2 bg-white md:bg-[#fff7f9] rounded-xl p-2 md:mx-50 xl:mx-100 focus-within:outline-2 focus-within:outline-pink-700 shadow-sm">
        <label htmlFor="search" className="sr-only">
          Search blog posts
        </label>
        <input
          data-testid="search-test"
          id="search"
          title="Search blog posts"
          type="text"
          placeholder="Search blog posts..."
          value={searchValue}
          onChange={handleSearch}
          className="w-full h-full bg-white md:bg-[#fff7f9] placeholder:font-medium placeholder:!text-gray-400 font-medium outline-none "
        />
        <SearchIcon className="w-4 h-4 fill-gray-400" />
      </span>
    </div>
  );
};

export default SearchBar;
