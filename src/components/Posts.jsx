import React from 'react';
import { ArrowRight, User } from 'lucide-react';

const posts = [
  {
    id: '1',
    title: 'Design Systems for the Real World',
    excerpt: 'Practical strategies to evolve your design system without slowing down product velocity.',
    author: 'Ava Kim',
    date: 'Oct 2025',
    tag: 'Design',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Latency as a Feature: Rethinking Performance',
    excerpt: 'Measure, model, and communicate speed as a core product capability across teams.',
    author: 'Leo Park',
    date: 'Oct 2025',
    tag: 'Engineering',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'AI Product Patterns That Actually Ship',
    excerpt: 'A field guide to shipping AI features that are reliable, delightful, and useful.',
    author: 'Maya Singh',
    date: 'Sep 2025',
    tag: 'AI',
    image:
      'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'The Executive Guide to Technical Strategy',
    excerpt: 'How to align roadmap, architecture, and culture for durable advantage.',
    author: 'Julian Hart',
    date: 'Sep 2025',
    tag: 'Strategy',
    image:
      'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1600&auto=format&fit=crop',
  },
];

function PostCard({ post }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur transition-transform hover:-translate-y-0.5">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-emerald-400 text-black text-xs font-medium px-2 py-1">
          {post.tag}
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-semibold leading-tight">{post.title}</h3>
        <p className="mt-2 text-sm text-white/70 line-clamp-2">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-white/70">
            <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center">
              <User className="h-3.5 w-3.5 text-white/80" />
            </div>
            <span>{post.author}</span>
            <span className="text-white/40">•</span>
            <span>{post.date}</span>
          </div>
          <button className="inline-flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-200">
            Read <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Posts() {
  return (
    <section id="articles" className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_10%_10%,rgba(20,184,166,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Featured Articles</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Technically deep, aesthetically refined. Curated reads to level up your craft across design, engineering, and product.</p>
          </div>
          <a href="#subscribe" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 transition-colors">
            Get weekly insights
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>

        <div id="subscribe" className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Join 12,000+ readers</h3>
              <p className="mt-1 text-white/70">One concise email every week. No noise, only high-signal ideas.</p>
            </div>
            <form className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="you@company.com" className="flex-1 min-w-0 rounded-lg bg-black/40 border border-white/15 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400/50" />
              <button type="submit" className="inline-flex justify-center rounded-lg bg-emerald-400 text-black px-5 py-3 font-medium hover:bg-emerald-300 transition-colors">
                Subscribe Free
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
