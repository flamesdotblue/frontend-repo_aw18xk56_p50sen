import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, PlayCircle } from 'lucide-react';

export default function HeroSpline() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 sm:py-16 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-1 text-xs text-neutral-700 dark:text-neutral-300">
              <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-violet-500" />
              Learning-first social platform
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Learn together. Share knowledge. Grow faster.
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-prose">
              A modern, mobile-first network for students and educators. Post resources, discuss ideas, and collaborate in real-time — all in one place.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-violet-500 px-4 py-2.5 text-sm font-medium text-white shadow"
              >
                <Rocket className="h-4 w-4" /> Get started
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                <PlayCircle className="h-4 w-4" /> Watch demo
              </a>
            </div>
          </div>

          <div className="relative h-[380px] sm:h-[460px] lg:h-[560px] w-full">
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <Spline
                scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-neutral-950/80" />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute -z-[1] inset-0 bg-[radial-gradient(45rem_45rem_at_80%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(40rem_40rem_at_-10%_20%,rgba(167,139,250,0.25),transparent)]" />
    </section>
  );
}
