export default function ProfileCard() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8">
      <div className="flex items-center gap-6">
        <img
          src=""
          alt="Profile Picture"
          className="w-24 h-24 rounded-full border-2 border-github-accent"
        />
        <div>
          <h1 className="text-2xl font-bold">Toyosi Taiwo</h1>
          <p className="text-gray-600 mb-2">@toyosi</p>
          <p className="flex items-center text-gray-700">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </p>
          <div className="flex gap-4 mt-3">
            <div className="text-center">
              <p className="font-bold">repos</p>
              <p className="text-sm text-gray-500">Repos</p>
            </div>
            <div className="text-center">
              <p className="font-bold">followers</p>
              <p className="text-sm text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold">following</p>
              <p className="text-sm text-gray-500">Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
