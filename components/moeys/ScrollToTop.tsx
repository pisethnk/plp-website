'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-gov-blue text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gov-gold transition-all"
      aria-label="Scroll to top"
    >
      <span className="material-icons text-xl">keyboard_arrow_up</span>
    </button>
  );
}
