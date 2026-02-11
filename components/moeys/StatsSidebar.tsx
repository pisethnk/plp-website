'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const categories = [
  {
    label: 'Core Enrollment',
    items: [{ name: 'Kindergarten Readiness', href: '#' }],
  },
  {
    label: 'Teacher & Staff',
    items: [{ name: 'Primary Teacher Distribution', href: '/statistics/teachers' }],
  },
  {
    label: 'Learning Outcomes',
    items: [
      { name: 'Grade 1-3 Literacy', href: '#' },
      { name: 'Grade 4-6 Numeracy', href: '#' },
    ],
  },
  {
    label: 'School Census',
    items: [
      { name: 'School Census Report', href: '/statistics/census' },
      { name: 'Annual School Survey', href: '/statistics/survey' },
    ],
  },
  {
    label: 'Support & Infrastructure',
    items: [
      { name: 'School Feeding Program Data', href: '#' },
      { name: 'Primary Infrastructure', href: '#' },
    ],
  },
];

export default function StatsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="lg:col-span-3 flex flex-col h-full overflow-hidden">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full">
        <div className="p-5 border-b border-slate-100">
          <h3 className="text-sm font-black text-gov-blue uppercase tracking-wider flex items-center gap-2">
            <span className="material-icons text-gov-gold text-lg">folder_open</span>
            Dataset Categories
          </h3>
        </div>
        <div className="flex-grow overflow-y-auto p-4 space-y-8">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-2">
                {cat.label}
              </h4>
              <ul className="space-y-1">
                {cat.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-between ${
                          active
                            ? 'bg-gov-blue text-white shadow-md'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {item.name}
                        {active && <span className="material-icons text-sm">chevron_right</span>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
