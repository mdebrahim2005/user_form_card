
import usersData from "../../../data/data.json";
export default function Users() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          Our Users {usersData.length}
        </h2>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Meet the community members and partners.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {usersData && usersData.map((user, index) => (
          <div
            key={user.id || index}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-lg">
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">
                    {user.name || "Anonymous User"}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {user.role || user.designation || "Member"}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                {user.email && (
                  <p className="flex items-center gap-2">
                    <span className="text-zinc-400">Email:</span>
                    <span>{user.email}</span>
                  </p>
                )}
                {user.phone && (
                  <p className="flex items-center gap-2">
                    <span className="text-zinc-400">Phone:</span>
                    <span>{user.phone}</span>
                  </p>
                )}
               
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium rounded-lg bg-sky-500 hover:bg-sky-600 text-white transition-colors"
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}