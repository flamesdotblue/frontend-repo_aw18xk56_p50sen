import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import Resources from './components/Resources';
import Community from './components/Community';
import Auth from './components/Auth';
import Footer from './components/Footer';

function Home() {
  return (
    <main>
      <HeroSpline />
      <Resources />
      <Community />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold text-slate-900">Ready to join the community?</h3>
          <p className="mt-2 text-slate-600">Sign up to save resources, follow topics, and chat in real-time study rooms.</p>
          <a
            href="/auth"
            className="mt-6 inline-block rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Create your account
          </a>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/community" element={<Community />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
}
