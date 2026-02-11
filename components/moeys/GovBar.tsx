'use client';

import { useState } from 'react';
import LoginModal from './LoginModal';

export default function GovBar() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="bg-gov-blue text-white py-1.5 border-b-2 border-gov-gold relative z-[60]">
      <div className="container mx-auto px-4 flex justify-between items-center text-[11px] font-medium">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 hover:text-gov-gold transition-colors">
              <span className="inline-block w-4 h-3 rounded-sm bg-red-600" />
              <span>&#x1797;&#x17B6;&#x179F;&#x17B6;&#x1781;&#x17D2;&#x1798;&#x17C2;&#x179A;</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-gov-gold transition-colors">
              <span className="inline-block w-4 h-3 rounded-sm bg-blue-800" />
              <span className="border-b-2 border-gov-gold">English</span>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-white/10 text-white p-1.5 rounded-lg hover:bg-gov-gold transition-all">
            <span className="material-icons text-lg">search</span>
          </button>
          <button
            onClick={() => setLoginOpen(true)}
            className="flex items-center gap-1.5 bg-gov-gold text-gov-blue px-3 py-1.5 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all"
          >
            <span className="material-icons text-sm">login</span>
            Login
          </button>
        </div>
      </div>
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}
