'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/home' },
  { label: 'Statistics', href: '/statistics/survey' },
  { label: 'Resources', href: '/resources' },
  { label: 'Events', href: '/events' },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/home') return pathname === '/home';
    if (href.startsWith('/statistics')) return pathname.startsWith('/statistics');
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/home" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gov-blue/5 rounded-full flex items-center justify-center p-1">
            <div className="w-full h-full rounded-full bg-gov-blue/10 flex items-center justify-center">
              <span className="material-icons text-gov-blue text-xl">school</span>
            </div>
          </div>
          <div>
            <h1 className="text-gov-blue font-bold text-base leading-tight uppercase tracking-tight">
              Ministry of Education, Youth and Sport
            </h1>
            <p className="text-gov-gold text-[10px] font-bold tracking-widest uppercase">
              Primary Education Department
            </p>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-bold text-sm transition-colors ${
                isActive(item.href)
                  ? 'text-gov-blue border-b-2 border-gov-gold pb-0.5'
                  : 'text-slate-600 hover:text-gov-gold'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
