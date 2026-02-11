import type { Metadata } from 'next';
import StatsSidebar from '@/components/moeys/StatsSidebar';

export const metadata: Metadata = {
  title: 'Primary Teacher Distribution - MoEYS Statistics',
};

const provinceData = [
  { name: 'Phnom Penh', teachers: 8200, students: 245000 },
  { name: 'Siem Reap', teachers: 5800, students: 198000 },
  { name: 'Battambang', teachers: 5200, students: 175000 },
  { name: 'Kampong Cham', teachers: 4800, students: 165000 },
  { name: 'Kandal', teachers: 4500, students: 155000 },
  { name: 'Takeo', teachers: 3800, students: 130000 },
];

const maxStudents = 245000;

const recruitmentData = [
  { province: 'Siem Reap', gap: 245, status: 'Critical', statusColor: 'bg-vibrant-red/10 text-vibrant-red', projected: 'Q2 2025' },
  { province: 'Battambang', gap: 198, status: 'High', statusColor: 'bg-vibrant-amber/10 text-vibrant-amber', projected: 'Q3 2025' },
  { province: 'Preah Vihear', gap: 156, status: 'High', statusColor: 'bg-vibrant-amber/10 text-vibrant-amber', projected: 'Q4 2025' },
  { province: 'Kampong Thom', gap: 132, status: 'Moderate', statusColor: 'bg-blue-100 text-blue-700', projected: 'Q1 2026' },
  { province: 'Stung Treng', gap: 98, status: 'Moderate', statusColor: 'bg-blue-100 text-blue-700', projected: 'Q2 2026' },
  { province: 'Ratanakiri', gap: 87, status: 'Low', statusColor: 'bg-vibrant-teal/10 text-vibrant-teal', projected: 'Q3 2026' },
];

export default function TeachersPage() {
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
                  <span className="text-gov-gold">Primary Teacher Distribution</span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight">Primary Teacher Distribution 2023-2024</h2>
              <p className="text-slate-300 text-sm">National teacher allocation analysis and recruitment pipeline data.</p>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
              <span className="text-xs font-bold uppercase tracking-widest text-gov-gold">Status:</span>
              <span className="text-xs font-black uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-vibrant-teal animate-pulse" /> Current
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Net Enrollment Rate</p>
              <p className="text-3xl font-black">98.2%</p>
              <span className="text-[10px] font-black bg-vibrant-teal text-white px-1.5 py-0.5 rounded mt-2 inline-block">+0.8% YoY</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Completion Rate</p>
              <p className="text-3xl font-black">88.4%</p>
              <div className="w-full bg-white/10 h-1 mt-4 rounded-full overflow-hidden">
                <div className="bg-gov-gold h-full" style={{ width: '88.4%' }} />
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Gender Parity Index</p>
              <p className="text-3xl font-black">1.01</p>
              <p className="text-[10px] font-bold text-vibrant-teal mt-2">Target: 1.00 (Achieved)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid lg:grid-cols-12 gap-8">
          <StatsSidebar />
          <div className="lg:col-span-9 space-y-8">
            {/* Teachers vs Students by Province */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-black text-gov-blue uppercase tracking-tight flex items-center gap-2">
                  <span className="material-icons text-gov-gold">groups</span>
                  Teachers vs Students by Province
                </h3>
                <div className="flex gap-4">
                  <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest">
                    <span className="w-3 h-3 rounded bg-gov-blue" /> Teachers
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest">
                    <span className="w-3 h-3 rounded bg-gov-gold" /> Students (÷100)
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                {provinceData.map((p) => (
                  <div key={p.name} className="flex items-center gap-4">
                    <div className="w-32 text-xs font-bold text-slate-600 text-right">{p.name}</div>
                    <div className="flex-grow space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="flex-grow bg-slate-100 h-5 rounded overflow-hidden">
                          <div
                            className="h-full bg-gov-blue rounded flex items-center justify-end pr-2"
                            style={{ width: `${(p.teachers / 8200) * 100}%` }}
                          >
                            <span className="text-[9px] font-black text-white">{(p.teachers / 1000).toFixed(1)}K</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-grow bg-slate-100 h-5 rounded overflow-hidden">
                          <div
                            className="h-full bg-gov-gold rounded flex items-center justify-end pr-2"
                            style={{ width: `${(p.students / maxStudents) * 100}%` }}
                          >
                            <span className="text-[9px] font-black text-gov-blue">{(p.students / 1000).toFixed(0)}K</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-vibrant-red/5 border border-vibrant-red/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-icons text-vibrant-red">warning</span>
                  <h4 className="text-sm font-black text-vibrant-red uppercase">Critical Shortage</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">3 provinces have teacher-student ratios exceeding 1:40, significantly above the national target of 1:28.</p>
              </div>
              <div className="bg-vibrant-amber/5 border border-vibrant-amber/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-icons text-vibrant-amber">info</span>
                  <h4 className="text-sm font-black text-vibrant-amber uppercase">Rural Gap</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">Rural areas average 15% fewer qualified teachers per student compared to urban zones.</p>
              </div>
            </div>

            {/* National Recruitment Summary */}
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { label: 'Open Vacancies', value: '916', icon: 'work', color: 'text-vibrant-red', bg: 'bg-vibrant-red/5' },
                { label: 'In-Progress', value: '342', icon: 'pending_actions', color: 'text-vibrant-amber', bg: 'bg-vibrant-amber/5' },
                { label: 'Completed (YTD)', value: '1,284', icon: 'check_circle', color: 'text-vibrant-teal', bg: 'bg-vibrant-teal/5' },
              ].map((s) => (
                <div key={s.label} className={`${s.bg} rounded-2xl p-6 border border-slate-100`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`material-icons ${s.color} text-2xl`}>{s.icon}</span>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</p>
                  </div>
                  <p className={`text-3xl font-black ${s.color}`}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* Teacher Recruitment Status Table */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="text-lg font-black text-gov-blue uppercase tracking-tight flex items-center gap-2">
                  <span className="material-icons text-gov-gold">table_chart</span>
                  Teacher Recruitment Status
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Province</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Teacher Gap</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Severity</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Projected Fill Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {recruitmentData.map((r) => (
                      <tr key={r.province} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-slate-700">{r.province}</td>
                        <td className="px-6 py-4 text-sm font-black text-gov-blue">{r.gap}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${r.statusColor}`}>{r.status}</span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-slate-500">{r.projected}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Data Export Panel */}
            <div className="bg-gov-blue p-8 rounded-3xl border border-gov-gold/30 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gov-gold/20 flex items-center justify-center text-gov-gold shadow-inner">
                    <span className="material-symbols-outlined text-4xl">cloud_download</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white uppercase tracking-tight">Data Export Panel</h4>
                    <p className="text-xs text-slate-300 font-medium">Download teacher distribution and recruitment data.</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="flex items-center gap-2 px-8 py-4 bg-white text-gov-blue hover:bg-gov-gold hover:text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg">
                    <span className="material-icons text-base">picture_as_pdf</span> Full Report (PDF)
                  </button>
                  <button className="flex items-center gap-2 px-8 py-4 bg-gov-gold text-gov-blue hover:bg-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg">
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
