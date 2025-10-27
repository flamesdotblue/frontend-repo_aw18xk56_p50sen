import React from 'react';
import { BookOpen, MessageCircle, Archive, Shield } from 'lucide-react';

const features = [
  {
    title: 'Academic Feed',
    description:
      'Post study notes, short videos, and links. Tag by subject, skill, or course to reach the right audience.',
    icon: BookOpen,
  },
  {
    title: 'Real‑time Chat',
    description:
      'Collaborate instantly with 1:1 and group conversations powered by reliable real‑time tech.',
    icon: MessageCircle,
  },
  {
    title: 'Resource Library',
    description:
      'Upload and organize PDFs, slides, and references with smart validation and search.',
    icon: Archive,
  },
  {
    title: 'Privacy & Moderation',
    description:
      'Granular controls, reporting tools, and secure authentication to keep the community safe.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Built for learning together</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Everything you need to share knowledge, engage with peers, and grow your academic profile.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-violet-500 text-white shadow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
              <div className="pointer-events-none absolute -bottom-10 right-0 h-28 w-28 rounded-full bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-violet-500/10 blur-2xl transition-all duration-500 group-hover:translate-y-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
