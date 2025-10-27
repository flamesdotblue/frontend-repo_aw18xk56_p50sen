export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-600">© {year} EduSphere. Learn together.</p>
          <div className="text-sm text-slate-500">Made for students and lifelong learners.</div>
        </div>
      </div>
    </footer>
  );
}
