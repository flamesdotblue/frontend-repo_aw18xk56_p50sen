import React, { useState } from 'react';
import { Menu, X, Search, Bell, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Discover', href: '#features' },
    { label: 'Resources', href: '#resources' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-violet-500 shadow-sm" />
            <span className="text-lg font-semibold tracking-tight">Scholarly</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>
            <button
              className="relative inline-flex items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-medium text-white">3</span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-violet-500 px-3 py-2 text-sm font-medium text-white shadow">
              <User className="h-4 w-4" />
              Sign in
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-2 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2">
                <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm">
                  <Search className="h-4 w-4" /> Search
                </button>
                <button className="inline-flex items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 p-2">
                  <Bell className="h-5 w-5" />
                </button>
              </div>
              <button className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-violet-500 px-3 py-2 text-sm font-medium text-white shadow">
                <User className="h-4 w-4" /> Sign in
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
