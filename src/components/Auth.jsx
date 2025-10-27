import { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function Auth() {
  const [mode, setMode] = useState('signin');

  return (
    <section className="py-16">
      <div className="mx-auto max-w-md px-4 sm:px-6">
        <div className="mb-6 flex items-center justify-center gap-2">
          <button
            onClick={() => setMode('signin')}
            className={`rounded-md px-3 py-1.5 text-sm font-semibold ${
              mode === 'signin' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            Sign in
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`rounded-md px-3 py-1.5 text-sm font-semibold ${
              mode === 'signup' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            Create account
          </button>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            {mode === 'signin' ? 'Welcome back' : 'Join EduSphere'}
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            {mode === 'signin' ? 'Access your account to continue learning.' : 'Start sharing and discovering resources.'}
          </p>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            {mode === 'signup' && (
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Full name</label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <User size={16} />
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Ada Lovelace"
                    className="w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <Mail size={16} />
                </span>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <Lock size={16} />
                </span>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              {mode === 'signin' ? 'Sign in' : 'Create account'} <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
