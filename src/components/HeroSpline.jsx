import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function HeroSpline() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6nH4Y3m2k6Eo3G1z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black"></div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Learn together. Build together. Grow together.
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/80">
          An educational social platform for notes, discussions, and real-time collaboration.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a href="#join" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-500 transition">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#resources" className="inline-flex items-center rounded-md bg-white/10 px-5 py-3 text-white font-medium hover:bg-white/20 transition">
            Explore Resources
          </a>
        </div>
      </div>
    </section>
  );
}
