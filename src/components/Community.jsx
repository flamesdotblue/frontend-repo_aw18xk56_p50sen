import { Users, MessageSquare, Hash, Heart } from 'lucide-react';

const discussions = [
  {
    id: 1,
    title: 'Weekly Calculus Problem-Solving Thread',
    tag: 'Mathematics',
    replies: 42,
    likes: 128,
  },
  {
    id: 2,
    title: 'Ask Me Anything: Intro to Python',
    tag: 'Programming',
    replies: 19,
    likes: 77,
  },
  {
    id: 3,
    title: 'Study Group: World War II Primary Sources',
    tag: 'History',
    replies: 24,
    likes: 93,
  },
];

export default function Community() {
  return (
    <section id="community" className="relative w-full py-16 bg-gradient-to-b from-slate-950 to-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <Users className="h-6 w-6 text-indigo-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Community</h2>
        </div>
        <p className="mt-2 text-white/70 max-w-2xl">
          Join topic-based discussions, form study groups, and chat in real time.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4">
          {discussions.map((d) => (
            <a key={d.id} href="#" className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-indigo-300">
                    <Hash className="h-4 w-4" />
                    <span>{d.tag}</span>
                  </div>
                  <h3 className="mt-1 text-white font-semibold">{d.title}</h3>
                </div>
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <div className="inline-flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>{d.replies}</span>
                  </div>
                  <div className="inline-flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>{d.likes}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <h4 className="text-white font-semibold">Live chat preview</h4>
          <p className="mt-1 text-white/70 text-sm">Sign in to join real-time study rooms and direct messages.</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <button className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-500 transition">
              Create Study Room
            </button>
            <button className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-white/10 px-4 py-2 text-white font-medium hover:bg-white/20 transition">
              Browse Rooms
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
