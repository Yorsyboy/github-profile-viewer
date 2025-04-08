import { useState } from "react";

export const SearchBar = () => {
  const [username, setUsername] = useState("");
  return (
    <>
      <form className="w-full max-w-md mx-auto my-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={username}
            className="flex-1 px-4 py-2 border
            border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#238636]"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#238636] text-white rounded-lg
            hover:bg-green-500 transition"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};
