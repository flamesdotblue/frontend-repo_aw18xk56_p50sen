import { Hash } from 'lucide-react';

const threads = [
  { id: 1, title: 'Best strategies for spaced repetition?', replies: 32 },
  { id: 2, title: 'Share your favorite open datasets', replies: 18 },
  { id: 3, title: 'Looking for study partners in calculus', replies: 9 },
];

export default function Community() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Community</h2>
            <p className="mt-1 text-sm text-slate-600">Discuss topics, ask questions, and meet peers</p>
          </div>
          <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            New post
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3">
            {threads.map(t => (
              <div key={t.id} className="rounded-lg border border-slate-200 bg-white p-4 hover:shadow-sm">
                <div className="flex items-center gap-2 text-slate-500"><Hash size={16} /> Discussion</div>
                <h3 className="mt-1 font-semibold text-slate-900">{t.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{t.replies} replies</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h4 className="font-semibold text-slate-900">Live study room</h4>
            <p className="mt-1 text-sm text-slate-600">Real-time chat is coming soon. Join rooms to collaborate with others.</p>
            <div className="mt-3 rounded-md bg-slate-100 p-3 text-sm text-slate-700">
              • Math Lab — 12 online
              <br />• Web Dev — 8 online
              <br />• Biology 101 — 5 online
            </div>
            <button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
              Preview room
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
