import { Book } from 'lucide-react';

const sample = [
  { id: 1, title: 'Linear Algebra Cheatsheet', tag: 'Math', author: 'Alice Nguyen' },
  { id: 2, title: 'Intro to React Notes', tag: 'Web', author: 'Diego Ramos' },
  { id: 3, title: 'Biology Flashcards', tag: 'Science', author: 'Priya Shah' },
  { id: 4, title: 'Data Structures Guide', tag: 'CS', author: 'Chen Li' },
];

export default function Resources() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Featured resources</h2>
            <p className="mt-1 text-sm text-slate-600">Curated study materials from the community</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
            <Book size={16} /> Upload resource
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sample.map((r) => (
            <article key={r.id} className="group rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">{r.tag}</span>
                <Book size={18} className="text-slate-400" />
              </div>
              <h3 className="mt-3 line-clamp-2 font-semibold text-slate-900 group-hover:text-indigo-600">
                {r.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500">by {r.author}</p>
              <div className="mt-4 flex gap-2">
                <button className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Preview
                </button>
                <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700">
                  Save
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
