import type { Metadata } from 'next';
import StatsSidebar from '@/components/moeys/StatsSidebar';

export const metadata: Metadata = {
  title: 'Annual School Survey - MoEYS Statistics',
};

const surveyMetrics = [
  { label: 'Average Class Size', value: '32.4', icon: 'groups', change: '+1.2 vs 2022', changeColor: 'text-vibrant-amber' },
  { label: 'Teacher-Student Ratio', value: '1:28', icon: 'supervisor_account', change: 'Improved', changeColor: 'text-vibrant-teal' },
  { label: 'Textbook Availability', value: '87%', icon: 'menu_book', change: '+5% YoY', changeColor: 'text-vibrant-teal' },
  { label: 'School Meal Program', value: '64%', icon: 'restaurant', change: '4,630 Schools', changeColor: 'text-gov-gold' },
];

const challenges = [
  { label: 'Infrastructure Gaps', value: 72 },
  { label: 'Teacher Shortage', value: 65 },
  { label: 'Learning Materials', value: 58 },
  { label: 'Digital Access', value: 42 },
  { label: 'Transportation', value: 38 },
];

const provinceComparison = [
  { metric: 'Enrollment Rate', prov1: 96, prov2: 92 },
  { metric: 'Completion Rate', prov1: 88, prov2: 82 },
  { metric: 'Literacy Score', prov1: 85, prov2: 78 },
  { metric: 'Infrastructure Index', prov1: 79, prov2: 71 },
];

export default function SurveyPage() {
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
                  <span className="text-gov-gold">Annual School Survey</span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight">Annual School Survey Analysis 2023-2024</h2>
              <p className="text-slate-300 text-sm">Comprehensive primary school survey data with key performance indicators.</p>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
              <span className="text-xs font-bold uppercase tracking-widest text-gov-gold">Status:</span>
              <span className="text-xs font-black uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-vibrant-teal animate-pulse" /> Published
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Schools Surveyed</p>
              <p className="text-3xl font-black">7,240</p>
              <span className="text-[10px] font-black bg-vibrant-teal text-white px-1.5 py-0.5 rounded mt-2 inline-block">98.5% Response</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Response Rate</p>
              <p className="text-3xl font-black">98.5%</p>
              <div className="w-full bg-white/10 h-1 mt-4 rounded-full overflow-hidden">
                <div className="bg-gov-gold h-full" style={{ width: '98.5%' }} />
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Data Collection Period</p>
              <p className="text-3xl font-black">Q3-Q4</p>
              <p className="text-[10px] font-bold text-slate-400 mt-2">July — December 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid lg:grid-cols-12 gap-8">
          <StatsSidebar />
          <div className="lg:col-span-9 space-y-8">
            {/* Survey Metric Cards */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {surveyMetrics.map((m) => (
                <div key={m.label} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gov-blue/5 rounded-xl flex items-center justify-center text-gov-blue">
                      <span className="material-icons text-2xl">{m.icon}</span>
                    </div>
                    <span className={`text-[10px] font-black ${m.changeColor}`}>{m.change}</span>
                  </div>
                  <p className="text-2xl font-black text-gov-blue">{m.value}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Challenges Bar Chart */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
              <h3 className="text-lg font-black text-gov-blue uppercase tracking-tight mb-6 flex items-center gap-2">
                <span className="material-icons text-gov-gold">bar_chart</span>
                Top Reported Challenges
              </h3>
              <div className="space-y-5">
                {challenges.map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-40 text-xs font-bold text-slate-600 text-right">{c.label}</div>
                    <div className="flex-grow bg-slate-100 h-8 rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gov-blue to-gov-blue/70 rounded-lg flex items-center justify-end pr-3 transition-all"
                        style={{ width: `${c.value}%` }}
                      >
                        <span className="text-[10px] font-black text-white">{c.value}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Participation Map Placeholder */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
              <h3 className="text-lg font-black text-gov-blue uppercase tracking-tight mb-6 flex items-center gap-2">
                <span className="material-icons text-gov-gold">map</span>
                Survey Participation by Province
              </h3>
              <div className="w-full aspect-[16/9] bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center">
                <div className="text-center">
                  <span className="material-symbols-outlined text-[120px] text-gov-blue/10">public</span>
                  <p className="text-xs text-slate-400 font-bold mt-2">Interactive Map — Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Provincial Comparison */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
              <h3 className="text-lg font-black text-gov-blue uppercase tracking-tight mb-6 flex items-center gap-2">
                <span className="material-icons text-gov-gold">compare_arrows</span>
                Provincial Comparison Tool
              </h3>
              <div className="flex flex-wrap gap-4 mb-8">
                <select className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-600 focus:outline-none focus:border-gov-gold">
                  <option>Phnom Penh</option>
                  <option>Siem Reap</option>
                  <option>Battambang</option>
                </select>
                <span className="text-slate-300 flex items-center font-bold">vs</span>
                <select className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-600 focus:outline-none focus:border-gov-gold">
                  <option>Siem Reap</option>
                  <option>Phnom Penh</option>
                  <option>Battambang</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {provinceComparison.map((pc) => (
                  <div key={pc.metric} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{pc.metric}</p>
                    <div className="flex gap-3 items-end h-32">
                      <div className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-gov-blue rounded-t-lg" style={{ height: `${pc.prov1}%` }} />
                        <span className="text-[10px] font-black text-gov-blue mt-2">{pc.prov1}%</span>
                        <span className="text-[9px] font-bold text-slate-400 mt-0.5">PP</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-gov-gold rounded-t-lg" style={{ height: `${pc.prov2}%` }} />
                        <span className="text-[10px] font-black text-gov-gold mt-2">{pc.prov2}%</span>
                        <span className="text-[9px] font-bold text-slate-400 mt-0.5">SR</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-gov-blue p-8 rounded-3xl border border-gov-gold/30 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gov-gold/20 flex items-center justify-center text-gov-gold shadow-inner">
                    <span className="material-symbols-outlined text-4xl">cloud_download</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white uppercase tracking-tight">Download Survey Data</h4>
                    <p className="text-xs text-slate-300 font-medium">Export the full survey results and analysis report.</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="flex items-center gap-2 px-8 py-4 bg-white text-gov-blue hover:bg-gov-gold hover:text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg">
                    <span className="material-icons text-base">picture_as_pdf</span> Full Report (PDF)
                  </button>
                  <button className="flex items-center gap-2 px-8 py-4 bg-gov-gold text-gov-blue hover:bg-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg">
                    <span className="material-icons text-base">file_download</span> Raw Data (CSV)
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
