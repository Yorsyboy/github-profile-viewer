export default function ProfileCard({ profile }) {
  if (!profile) return null;

  return (
    <div className="bg-white dark:bg-gray-600 rounded-xl shadow-md overflow-hidden p-6 mb-8">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Avatar Section */}
        <div className="flex-shrink-0">
          <img
            src={profile.avatar_url}
            alt={`${profile.login}'s avatar`}
            className="w-24 h-24 rounded-full border-2 border-github-accent"
          />
        </div>

        {/* Profile Info Section */}
        <div className="flex-1 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                {profile.name || profile.login}
              </h1>
              <p className="text-gray-600">@{profile.login}</p>
            </div>
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-github-dark text-white dark:text-gray-400 rounded-lg transition"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
              View Profile
            </a>
          </div>

          {/* Bio Section */}
          {profile.bio && (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 dark:text-gray-50 mb-1">
                Bio
              </h3>
              <p className="text-gray-600 dark:text-gray-50">{profile.bio}</p>
            </div>
          )}

          {/* Location and Other Details */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
            {profile.location && (
              <p className="flex items-center text-gray-700 dark:text-gray-50">
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
                {profile.location}
              </p>
            )}

            {profile.blog && (
              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-50"
              >
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
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                Github Link
              </a>
            )}
          </div>

          {/* Stats Section */}
          <div className="flex gap-4 mt-3">
            <div className="text-center">
              <p className="font-bold text-gray-500 dark:text-gray-50">
                {profile.public_repos}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-50">Repos</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-500 dark:text-gray-50">
                {profile.followers}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-50">
                Followers
              </p>
            </div>
            <div className="text-center">
              <p className="font-boldt ext-gray-500 dark:text-gray-50">
                {profile.following}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-50">
                Following
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
