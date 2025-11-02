import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EditorialGrid from './components/EditorialGrid';
import ContributorInvite from './components/ContributorInvite';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/80 selection:text-black">
      <Header />
      <main>
        <Hero />
        <EditorialGrid />
        <ContributorInvite />
      </main>
      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/50">
          <p id="originals">Spectacle — a living narrative where innovation meets editorial precision.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
