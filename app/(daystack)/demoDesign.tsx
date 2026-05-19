export default function TodoDashboardDemo() {
  const tasks = [
    {
      title: "Finish UI design",
      status: "In Progress",
      priority: "High",
    },
    {
      title: "Write API integration",
      status: "Pending",
      priority: "Medium",
    },
    {
      title: "Clean project structure",
      status: "Completed",
      priority: "Low",
    },
  ];

  return (
    <div
      className="min-h-screen flex bg-[#F5F4ED] text-[#101011]"
      style={{
        fontFamily: "Poppins, Bangla992, sans-serif",
      }}
    >
      {/* Sidebar */}
      <aside className="w-72 border-r border-black/10 bg-[#F5F4ED] p-6 flex flex-col">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            DayStack
          </h1>
          <p className="text-sm opacity-60 mt-1">
            Minimal task management
          </p>
        </div>

        <nav className="space-y-2">
          <button className="w-full rounded-2xl bg-[#101011] text-[#F5F4ED] px-4 py-3 text-left transition hover:opacity-90">
            Dashboard
          </button>

          <button className="w-full rounded-2xl px-4 py-3 text-left hover:bg-black/5 transition">
            Today
          </button>

          <button className="w-full rounded-2xl px-4 py-3 text-left hover:bg-black/5 transition">
            Upcoming
          </button>

          <button className="w-full rounded-2xl px-4 py-3 text-left hover:bg-black/5 transition">
            Completed
          </button>

          <button className="w-full rounded-2xl px-4 py-3 text-left hover:bg-black/5 transition">
            Settings
          </button>
        </nav>

        <div className="mt-auto pt-8">
          <div className="rounded-3xl bg-[#101011] p-5 text-[#F5F4ED]">
            <h2 className="font-medium text-lg">Focus Mode</h2>
            <p className="text-sm opacity-80 mt-2">
              Remove distractions and complete your priorities.
            </p>

            <button className="mt-5 w-full rounded-2xl bg-[#F5F4ED] text-[#101011] py-3 font-medium hover:opacity-90 transition">
              Start Session
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight">
              My Tasks
            </h2>
            <p className="opacity-60 mt-1">
              Stay organized and focused.
            </p>
          </div>

          <button className="rounded-2xl bg-[#101011] text-[#F5F4ED] px-6 py-3 hover:opacity-90 transition">
            + Add Task
          </button>
        </div>

        {/* Search + Input */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 rounded-3xl border border-black/10 bg-white/40 backdrop-blur p-5">
            <label className="block text-sm mb-2 opacity-70">
              Search Tasks
            </label>

            <input
              type="text"
              placeholder="Search your tasks..."
              className="w-full rounded-2xl border border-black/10 bg-[#F5F4ED] px-4 py-3 outline-none focus:border-black transition"
            />
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/40 p-5">
            <label className="block text-sm mb-2 opacity-70">
              Quick Add
            </label>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="New task..."
                className="flex-1 rounded-2xl border border-black/10 bg-[#F5F4ED] px-4 py-3 outline-none focus:border-black transition"
              />

              <button className="rounded-2xl bg-[#101011] text-[#F5F4ED] px-5 hover:opacity-90 transition">
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-3xl border border-black/10 bg-white/50 p-6">
            <p className="text-sm opacity-60">Total Tasks</p>
            <h3 className="text-4xl font-semibold mt-3">24</h3>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/50 p-6">
            <p className="text-sm opacity-60">Completed</p>
            <h3 className="text-4xl font-semibold mt-3">16</h3>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/50 p-6">
            <p className="text-sm opacity-60">Pending</p>
            <h3 className="text-4xl font-semibold mt-3">8</h3>
          </div>
        </div>

        {/* Task List */}
        <section className="rounded-3xl border border-black/10 bg-white/50 overflow-hidden">
          <div className="border-b border-black/10 px-6 py-5">
            <h3 className="text-xl font-semibold">Today’s Tasks</h3>
          </div>

          <div className="divide-y divide-black/10">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-6 py-5 hover:bg-black/[0.03] transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full border-2 border-[#101011]" />

                  <div>
                    <h4 className="font-medium">{task.title}</h4>

                    <p className="text-sm opacity-60 mt-1">
                      {task.status} • {task.priority} Priority
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="rounded-xl border border-black/10 px-4 py-2 hover:bg-black/5 transition">
                    Edit
                  </button>

                  <button className="rounded-xl bg-[#101011] text-[#F5F4ED] px-4 py-2 hover:opacity-90 transition">
                    Done
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}