import { useState } from "react";

export default function SearchBar({ onSearch, history = [] }) {
  const [username, setUsername] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
      setShowHistory(false);
    }
  };

  const selectFromHistory = (username) => {
    setUsername(username);
    onSearch(username);
    setShowHistory(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto my-8">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => history.length > 0 && setShowHistory(true)}
              onBlur={() => setTimeout(() => setShowHistory(false), 200)}
              placeholder="Enter GitHub username"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 bg-white dark:bg-gray-800 text-black dark:text-white dark:focus:ring-green-500 transition duration-200"
            />

            {showHistory && history.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
                <ul>
                  {history.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                      onMouseDown={() => selectFromHistory(item)}
                    >
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-900 dark:text-gray-300">{item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-opacity-90 transition"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
