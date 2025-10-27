import { Link, NavLink } from 'react-router-dom';
import { Rocket, Search, Bell } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white">
              <Rocket size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight">EduSphere</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? 'text-indigo-600' : 'text-slate-700 hover:text-slate-900'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? 'text-indigo-600' : 'text-slate-700 hover:text-slate-900'}`
              }
            >
              Resources
            </NavLink>
            <NavLink
              to="/community"
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? 'text-indigo-600' : 'text-slate-700 hover:text-slate-900'}`
              }
            >
              Community
            </NavLink>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <Search size={16} />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="w-56 rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-indigo-500"
              />
            </div>
            <button className="rounded-md p-2 text-slate-600 hover:bg-slate-100">
              <Bell size={18} />
            </button>
            <Link
              to="/auth"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Join
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Link
              to="/auth"
              className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white"
            >
              Join
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
