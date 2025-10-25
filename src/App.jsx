import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Posts from './components/Posts';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0e12] text-white antialiased">
      <Navbar />
      <Hero />
      <main className="relative z-10">
        <Posts />
      </main>
      <Footer />
    </div>
  );
}
