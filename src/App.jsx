import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import Resources from './components/Resources';
import Community from './components/Community';
import Auth from './components/Auth';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <HeroSpline />
      <Resources />
      <Community />
      <section className="py-20 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Join the learning community</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Create your profile, follow topics, share resources, and collaborate in real time.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/auth" className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-500 transition">Sign up free</a>
            <a href="/resources" className="inline-flex items-center rounded-md bg-white/10 px-6 py-3 text-white font-medium hover:bg-white/20 transition">Explore first</a>
          </div>
          <p className="mt-6 text-xs text-white/50">By joining, you agree to our community guidelines.</p>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="resources" element={<Resources />} />
          <Route path="community" element={<Community />} />
          <Route path="auth" element={<Auth />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
