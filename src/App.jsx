import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSpline from './components/HeroSpline.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <HeroSpline />
        <Features />
        {/* CTA Section */}
        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-tr from-blue-600 via-cyan-500 to-violet-500 p-[1px]">
              <div className="rounded-3xl bg-white dark:bg-neutral-950 p-8 sm:p-12 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold">Join the learning community</h3>
                <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
                  Create your profile, follow topics you care about, and start sharing knowledge today.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2.5 text-sm font-semibold">
                    Create account
                  </a>
                  <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-5 py-2.5 text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-900/60">
                    Explore features
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
