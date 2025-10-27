import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Rocket, Search, Bell } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `text-sm ${isActive ? 'text-white' : 'text-white/80 hover:text-white'} transition`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur bg-gradient-to-b from-black/40 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white" onClick={() => setOpen(false)}>
            <Rocket className="h-6 w-6 text-indigo-400" />
            <span className="font-semibold">EduVerse</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/resources" className={navClass}>
              Resources
            </NavLink>
            <NavLink to="/community" className={navClass}>
              Community
            </NavLink>
            <NavLink to="/auth" className={navClass}>
              Join
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-3 py-2 rounded-md bg-white/10 border border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button className="p-2 rounded-md hover:bg-white/10 transition" aria-label="Notifications">
              <Bell className="h-5 w-5 text-white/80" />
            </button>
            <NavLink to="/auth" className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition">
              Sign in
            </NavLink>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-white/10 transition" aria-label="Toggle menu">
            {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <NavLink onClick={() => setOpen(false)} to="/resources" className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/10">Resources</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/community" className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/10">Community</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/auth" className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/10">Join</NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
