import { Book, FileText, Download } from 'lucide-react';

const sampleResources = [
  {
    id: 1,
    title: 'Calculus I Summary Notes',
    type: 'PDF',
    tag: 'Mathematics',
    icon: FileText,
  },
  {
    id: 2,
    title: 'World History Timeline',
    type: 'PDF',
    tag: 'History',
    icon: FileText,
  },
  {
    id: 3,
    title: 'Intro to Algorithms Cheatsheet',
    type: 'PDF',
    tag: 'Computer Science',
    icon: FileText,
  },
];

export default function Resources() {
  return (
    <section id="resources" className="relative w-full py-16 bg-gradient-to-b from-black to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <Book className="h-6 w-6 text-indigo-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Resource Library</h2>
        </div>
        <p className="mt-2 text-white/70 max-w-2xl">
          Browse community-curated notes, problem sets, and study guides. Upload your own to help others.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleResources.map((res) => (
            <article key={res.id} className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <res.icon className="h-6 w-6 text-indigo-400" />
                  <div>
                    <h3 className="text-white font-semibold">{res.title}</h3>
                    <p className="text-xs text-white/60">{res.type} • {res.tag}</p>
                  </div>
                </div>
                <button className="inline-flex items-center rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20 transition">
                  <Download className="mr-1 h-4 w-4" />
                  Download
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-500 transition">
            Upload Resource
          </button>
          <button className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-white/10 px-4 py-2 text-white font-medium hover:bg-white/20 transition">
            Browse All
          </button>
        </div>
      </div>
    </section>
  );
}
