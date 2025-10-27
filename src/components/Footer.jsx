export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 bg-black">
      <div className="mx-auto max-w-7xl px-6 text-center text-white/60">
        <p>© {new Date().getFullYear()} EduVerse. Learn together.</p>
      </div>
    </footer>
  );
}
