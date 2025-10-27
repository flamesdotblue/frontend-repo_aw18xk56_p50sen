import { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';

export default function Auth() {
  const [mode, setMode] = useState('signin');

  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-black to-slate-950 py-16">
      <div className="mx-auto max-w-md px-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setMode('signin')}
              className={`w-full rounded-md px-4 py-2 text-sm font-medium transition ${mode === 'signin' ? 'bg-indigo-600 text-white' : 'bg-white/10 text-white/80 hover:bg-white/20'}`}
            >
              Sign in
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`w-full rounded-md px-4 py-2 text-sm font-medium transition ${mode === 'signup' ? 'bg-indigo-600 text-white' : 'bg-white/10 text-white/80 hover:bg-white/20'}`}
            >
              Create account
            </button>
          </div>

          <form className="mt-6 space-y-4">
            {mode === 'signup' && (
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-md border border-white/10 bg-white/10 px-10 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            )}
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-white/10 bg-white/10 px-10 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-md border border-white/10 bg-white/10 px-10 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button type="button" className="w-full rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-500 transition">
              {mode === 'signin' ? 'Sign in' : 'Create account'}
            </button>
            <p className="text-center text-xs text-white/60">
              By continuing you agree to our Terms and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
