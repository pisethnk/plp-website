import type { Metadata } from 'next';
import StatsSidebar from '@/components/moeys/StatsSidebar';

export const metadata: Metadata = {
  title: 'School Census Report - MoEYS Statistics',
};

const distributionData = [
  { province: 'Phnom Penh', total: 482, pub: 210, priv: 260, comm: 12 },
  { province: 'Siem Reap', total: 560, pub: 490, priv: 45, comm: 25 },
  { province: 'Battambang', total: 612, pub: 540, priv: 42, comm: 30 },
  { province: 'Kampong Cham', total: 525, pub: 495, priv: 18, comm: 12 },
  { province: 'Kandal', total: 490, pub: 415, priv: 65, comm: 10 },
  { province: 'Tboung Khmum', total: 380, pub: 360, priv: 10, comm: 10 },
];

const donutCharts = [
  { label: 'Electricity Access', value: 85, color: 'text-vibrant-amber', offset: 50.89 },
  { label: 'Clean Water', value: 72, color: 'text-vibrant-teal', offset: 95.00 },
  { label: 'Internet Access', value: 40, color: 'text-gov-blue', offset: 203.57 },
];

export default function CensusPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gov-blue text-white py-12 min-h-[380px] flex items-center relative overflow-hidden border-b-4 border-gov-gold">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-4 relative z-10 w-full">
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <li><a className="hover:text-gov-gold" href="#">Statistics</a></li>
              <li>
                <div className="flex items-center">
                  <span className="material-icons text-xs mx-1">chevron_right</span>
                  <a className="hover:text-gov-gold" href="#">Dataset Categories</a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="material-icons text-xs mx-1">chevron_right</span>
                  <span className="text-gov-gold">School Census Report</span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight">Annual School Census Report 2023-2024</h2>
              <p className="text-slate-300 text-sm">Comprehensive nationwide primary school mapping and distribution data.</p>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
              <span className="text-xs font-bold uppercase tracking-widest text-gov-gold">Status:</span>
              <span className="text-xs font-black uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-vibrant-teal animate-pulse" /> Data Validated
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Total Primary Schools</p>
              <p className="text-3xl font-black">7,240</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] font-black bg-vibrant-teal text-white px-1.5 py-0.5 rounded">+42 New</span>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Urban Schools</p>
              <p className="text-3xl font-black">2,100</p>
              <div className="w-full bg-white/10 h-1 mt-4 rounded-full overflow-hidden">
                <div className="bg-gov-gold h-full w-[29%]" />
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Rural Schools</p>
              <p className="text-3xl font-black">5,140</p>
              <div className="w-full bg-white/10 h-1 mt-4 rounded-full overflow-hidden">
                <div className="bg-vibrant-teal h-full w-[71%]" />
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Floating Schools</p>
              <p className="text-3xl font-black">120</p>
              <div className="flex items-center gap-1 mt-3">
                <span className="material-icons text-sm text-gov-gold">tsunami</span>
                <span className="text-[10px] font-bold text-slate-400">Tonle Sap &amp; Rivers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid lg:grid-cols-12 gap-8">
          <StatsSidebar />
          <div className="lg:col-span-9 space-y-8">
            {/* Map + Distribution Table */}
            <div className="grid xl:grid-cols-2 gap-8">
              {/* School Density Map */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-black text-gov-blue uppercase tracking-tight flex items-center gap-2">
                    <span className="material-icons text-gov-gold">map</span>
                    School Density Mapping
                  </h3>
                  <div className="flex gap-2">
                    <button className="p-1.5 bg-slate-50 rounded-md border border-slate-200 text-slate-600">
                      <span className="material-icons text-sm">zoom_in</span>
                    </button>
                    <button className="p-1.5 bg-slate-50 rounded-md border border-slate-200 text-slate-600">
                      <span className="material-icons text-sm">zoom_out</span>
                    </button>
                  </div>
                </div>
                <div className="flex-grow bg-slate-50 rounded-2xl relative min-h-[400px] border border-slate-100 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[160px] text-gov-blue/20">public</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-64 h-64">
                        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gov-gold rounded-full shadow-lg shadow-gov-gold/50 animate-pulse" />
                        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gov-blue rounded-full shadow-lg shadow-gov-blue/50" />
                        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-gov-gold rounded-full opacity-60" />
                        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gov-blue rounded-full" />
                        <div className="absolute bottom-1/2 left-1/3 w-2 h-2 bg-gov-gold rounded-full" />
                        <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-gov-blue rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-slate-200 shadow-sm text-[10px] font-bold uppercase space-y-2">
                    <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-gov-blue" /> High Density (&gt;50 schools)</div>
                    <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-gov-gold" /> Medium Density (20-50)</div>
                    <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-slate-300" /> Low Density (&lt;20)</div>
                  </div>
                </div>
              </div>

              {/* Distribution Table */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-black text-gov-blue uppercase tracking-tight flex items-center gap-2">
                    <span className="material-icons text-gov-gold">list_alt</span>
                    School Distribution by Province
                  </h3>
                  <button className="text-[10px] font-black uppercase text-gov-blue hover:text-gov-gold transition-colors">View All Provinces</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-slate-100">
                        <th className="py-3 text-left text-[10px] font-black uppercase tracking-widest text-slate-400">Province</th>
                        <th className="py-3 text-right text-[10px] font-black uppercase tracking-widest text-slate-400">Total</th>
                        <th className="py-3 text-right text-[10px] font-black uppercase tracking-widest text-slate-400">Public</th>
                        <th className="py-3 text-right text-[10px] font-black uppercase tracking-widest text-slate-400">Private</th>
                        <th className="py-3 text-right text-[10px] font-black uppercase tracking-widest text-slate-400">Comm.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {distributionData.map((d) => (
                        <tr key={d.province} className="hover:bg-slate-50 transition-colors">
                          <td className="py-3.5 text-xs font-bold text-slate-700">{d.province}</td>
                          <td className="py-3.5 text-xs font-black text-gov-blue text-right">{d.total}</td>
                          <td className="py-3.5 text-xs font-bold text-slate-500 text-right">{d.pub}</td>
                          <td className="py-3.5 text-xs font-bold text-slate-500 text-right">{d.priv}</td>
                          <td className="py-3.5 text-xs font-bold text-slate-500 text-right">{d.comm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Key Infrastructure Access */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
              <h3 className="text-lg font-black text-gov-blue uppercase tracking-tight mb-8 flex items-center gap-2">
                <span className="material-icons text-gov-gold">plumbing</span>
                Key Infrastructure Access
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {donutCharts.map((d) => (
                  <div key={d.label} className="flex flex-col items-center">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
                        <circle className="text-slate-100" cx="64" cy="64" fill="transparent" r="54" stroke="currentColor" strokeWidth="8" />
                        <circle className={d.color} cx="64" cy="64" fill="transparent" r="54" stroke="currentColor" strokeWidth="8" strokeDasharray="339.29" strokeDashoffset={d.offset} />
                      </svg>
                      <div className="absolute flex flex-col items-center">
                        <span className="text-2xl font-black text-gov-blue">{d.value}%</span>
                      </div>
                    </div>
                    <h4 className="mt-4 text-[11px] font-black uppercase tracking-widest text-slate-500">{d.label}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Census Export Tool */}
            <div className="bg-gov-blue p-8 rounded-3xl border border-gov-gold/30 shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gov-gold/20 flex items-center justify-center text-gov-gold shadow-inner">
                    <span className="material-symbols-outlined text-4xl">cloud_download</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white uppercase tracking-tight">Census Export Tool</h4>
                    <p className="text-xs text-slate-300 font-medium">Generate official school census reports and raw data files.</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="flex items-center gap-2 px-8 py-4 bg-white text-gov-blue hover:bg-gov-gold hover:text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95">
                    <span className="material-icons text-base">picture_as_pdf</span> Full Census Report (PDF)
                  </button>
                  <button className="flex items-center gap-2 px-8 py-4 bg-gov-gold text-gov-blue hover:bg-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95">
                    <span className="material-icons text-base">file_download</span> Raw Dataset (Excel)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
