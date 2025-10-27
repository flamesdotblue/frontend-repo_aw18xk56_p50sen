import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSpline />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
