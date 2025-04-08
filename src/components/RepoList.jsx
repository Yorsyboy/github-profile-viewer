import { HeartIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function RepoList({ repos }) {
  const [sortBy, setSortBy] = useState("stars");
  const [limit, setLimit] = useState(5);

  if (!repos || repos.length === 0) return null;

  // Sort repositories based on selected option
  const sortedRepos = [...repos].sort((a, b) => {
    if (sortBy === "stars") {
      return b.stargazers_count - a.stargazers_count;
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "recent") {
      return new Date(b.updated_at) - new Date(a.updated_at);
    }
    return 0;
  });

  // Limit displayed repositories
  const displayedRepos = sortedRepos.slice(0, limit);

  // Language color
  const languageColors = {
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-600",
    Python: "bg-blue-400",
    Java: "bg-red-600",
    Ruby: "bg-red-400",
    PHP: "bg-purple-500",
    Go: "bg-cyan-500",
    Rust: "bg-orange-500",
    CSS: "bg-blue-300",
    HTML: "bg-orange-400",
    C: "bg-gray-500",
    Shell: "bg-green-400",
    Swift: "bg-orange-300",
    Kotlin: "bg-purple-600",
    default: "bg-gray-400",
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">
          Repositories
        </h2>

        <div className="flex flex-wrap gap-3">
          <div className="flex items-center">
            <label
              htmlFor="sort"
              className="mr-2 text-sm text-gray-600 dark:text-gray-300"
            >
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700"
            >
              <option value="stars">Stars</option>
              <option value="name">Name</option>
              <option value="recent">Most Recent</option>
            </select>
          </div>

          <div className="flex items-center">
            <label
              htmlFor="limit"
              className="mr-2 text-sm text-gray-600 dark:text-gray-300"
            >
              Show:
            </label>
            <select
              id="limit"
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {displayedRepos.map((repo) => (
          <div
            key={repo.id}
            className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-700 dark:text-gray-200 hover:underline truncate block"
                  title={repo.name}
                >
                  {repo.name}
                </a>
                {repo.description && (
                  <p className="text-gray-600 dark:text-gray-400 my-1 line-clamp-2">
                    {repo.description}
                  </p>
                )}
              </div>
              <div className="flex-shrink-0 flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                <HeartIcon className="w-4 h-4 text-red-500" />
                <span className="text-gray-700 dark:text-gray-200">
                  {repo.stargazers_count}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
              {repo.language && (
                <div className="flex items-center">
                  <span
                    className={`w-3 h-3 rounded-full mr-1 ${
                      languageColors[repo.language] || languageColors.default
                    }`}
                  ></span>
                  {repo.language}
                </div>
              )}

              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                {repo.forks_count}
              </div>

              {repo.updated_at && (
                <div
                  className="flex items-center"
                  title={`Last updated: ${new Date(
                    repo.updated_at
                  ).toLocaleDateString()}`}
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {new Date(repo.updated_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
