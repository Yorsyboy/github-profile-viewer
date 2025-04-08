import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") return;
    onSearch(username.trim());
    setUsername("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto my-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
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
}
