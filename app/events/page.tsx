import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events - MoEYS Cambodia',
};

const missionData = [
  { date: 'April 28, 2024', type: 'School Visit', icon: 'school', location: 'Kandal Province', objective: 'Digital Classroom Pilot Implementation Review', status: 'Completed', statusColor: 'bg-green-100 text-green-700' },
  { date: 'May 05, 2024', type: 'Official Meeting', icon: 'stars', location: 'Ministry HQ, Phnom Penh', objective: 'ASEAN Education Delegates Strategic Summit', status: 'In-Progress', statusColor: 'bg-blue-100 text-blue-700' },
  { date: 'May 12, 2024', type: 'Regional Visit', icon: 'travel_explore', location: 'Preah Sihanouk', objective: 'Coastal Vocational Training Infrastructure Inspection', status: 'In-Progress', statusColor: 'bg-blue-100 text-blue-700' },
  { date: 'April 12, 2024', type: 'Official Meeting', icon: 'stars', location: 'Preah Vihear', objective: 'High-Level Border Region Policy Consultation', status: 'Completed', statusColor: 'bg-green-100 text-green-700' },
];

const videoArchive = [
  { date: 'April 15, 2024', title: 'Kandal Provincial Visit Highlights' },
  { date: 'March 22, 2024', title: 'Digital Education Summit 2024' },
  { date: 'Feb 10, 2024', title: 'STEM Lab Inauguration Ceremony' },
  { date: 'Jan 05, 2024', title: 'Border Region Education Review' },
];

const calendarDays = Array.from({ length: 35 }, (_, i) => {
  const day = i - 2; // Start from 29 of previous month
  if (day <= 0) return { num: 28 + day, current: false };
  if (day > 30) return { num: day - 30, current: false };
  return { num: day, current: true };
});

export default function EventsPage() {
  return (
    <>
      {/* Hero — Featured Event */}
      <section className="bg-gov-blue text-white py-12 min-h-[380px] flex items-center relative overflow-hidden border-b-4 border-gov-gold">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-gov-gold text-gov-blue text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Featured Mission</span>
                <span className="bg-white/10 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-vibrant-teal animate-pulse" /> Active
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight leading-tight mb-3">
                Director&apos;s Provincial School Inspection Tour — <span className="text-gov-gold">Kandal 2024</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-5 max-w-lg">
                Dr. Kann Puthy leads a week-long inspection to evaluate school infrastructure, teacher quality, and learning conditions across 15 primary schools in Kandal Province.
              </p>
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center">
                  <p className="text-xl font-black">15</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Schools</p>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center">
                  <p className="text-xl font-black">5</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Days</p>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center">
                  <p className="text-xl font-black">42</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Delegates</p>
                </div>
              </div>
              <button className="bg-gov-gold text-gov-blue px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-lg">
                View Full Report
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-[240px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center">
                <div className="text-center">
                  <span className="material-icons text-[60px] text-white/20">photo_camera</span>
                  <p className="text-sm text-white/40 mt-2">Featured Event Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3">
          {['All Events', 'School Inspections', 'Regional Visits', 'Policy Meetings', 'International Summits'].map((f, i) => (
            <button
              key={f}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                i === 0
                  ? 'bg-gov-blue text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-gov-gold'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Calendar + Activities */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-black text-gov-blue uppercase tracking-tight">April 2024</h3>
              <div className="flex gap-2">
                <button className="p-2 bg-slate-50 rounded-lg hover:bg-gov-blue hover:text-white transition-all">
                  <span className="material-icons text-sm">chevron_left</span>
                </button>
                <button className="p-2 bg-slate-50 rounded-lg hover:bg-gov-blue hover:text-white transition-all">
                  <span className="material-icons text-sm">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => (
                <div key={d} className="text-[10px] font-black uppercase tracking-widest text-slate-400 py-2">{d}</div>
              ))}
              {calendarDays.map((d, i) => {
                const hasEvent = d.current && [5, 12, 15, 22, 28].includes(d.num);
                const isToday = d.current && d.num === 28;
                return (
                  <div
                    key={i}
                    className={`py-3 rounded-lg text-sm font-bold relative cursor-pointer transition-all ${
                      !d.current ? 'text-slate-300' :
                      isToday ? 'bg-gov-blue text-white shadow-md' :
                      hasEvent ? 'bg-gov-gold/10 text-gov-blue hover:bg-gov-gold/20' :
                      'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {d.num}
                    {hasEvent && !isToday && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gov-gold" />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scheduled Events */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
            <h3 className="text-lg font-black text-gov-blue uppercase tracking-tight mb-6 flex items-center gap-2">
              <span className="material-icons text-gov-gold">event</span>
              Scheduled Activities
            </h3>
            <div className="space-y-4">
              {[
                { date: 'April 28', title: 'Kandal Provincial School Inspection', tag: 'Field Visit', tagColor: 'bg-vibrant-teal/10 text-vibrant-teal' },
                { date: 'April 22', title: 'Policy Review: Teacher Training Standards', tag: 'HQ Meeting', tagColor: 'bg-gov-gold/10 text-gov-gold' },
                { date: 'April 15', title: 'STEM Workshop: Siem Reap Cluster', tag: 'Workshop', tagColor: 'bg-vibrant-amber/10 text-vibrant-amber' },
                { date: 'April 12', title: 'Preah Vihear Border Region Visit', tag: 'Field Visit', tagColor: 'bg-vibrant-teal/10 text-vibrant-teal' },
                { date: 'April 05', title: 'Budget Planning: Q2 Infrastructure', tag: 'HQ Meeting', tagColor: 'bg-gov-gold/10 text-gov-gold' },
              ].map((e) => (
                <div key={e.title} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 cursor-pointer group">
                  <div className="bg-gov-blue/5 rounded-xl p-3 text-center min-w-[60px]">
                    <p className="text-[10px] font-black text-gov-gold uppercase">APR</p>
                    <p className="text-xl font-black text-gov-blue">{e.date.split(' ')[1]}</p>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-bold text-slate-800 group-hover:text-gov-blue transition-colors">{e.title}</h4>
                    <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded mt-1 ${e.tagColor}`}>{e.tag}</span>
                  </div>
                  <span className="material-icons text-slate-300 group-hover:text-gov-gold text-sm">chevron_right</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Tracker Map */}
      <section className="container mx-auto px-4 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1.5 h-8 bg-vibrant-teal rounded-full" />
          <h3 className="text-2xl font-black text-gov-blue uppercase tracking-tight">Mission Tracker</h3>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
            <div className="w-full aspect-[16/10] bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center relative">
              <span className="material-symbols-outlined text-[160px] text-gov-blue/10">public</span>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-slate-200 shadow-sm text-[10px] font-bold uppercase space-y-2">
                <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-vibrant-teal" /> Completed</div>
                <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-vibrant-amber" /> In-Progress</div>
                <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-gov-gold" /> Planned</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { province: 'Kandal', date: 'April 28, 2024', status: 'Active Mission' },
              { province: 'Siem Reap', date: 'April 15, 2024', status: 'Completed' },
              { province: 'Preah Vihear', date: 'April 12, 2024', status: 'Completed' },
            ].map((m) => (
              <div key={m.province} className="bg-gradient-to-r from-gov-blue to-gov-blue/90 rounded-2xl p-5 text-white shadow-lg">
                <span className="text-[10px] font-bold text-white/80 mb-1 block">{m.status}</span>
                <p className="text-lg font-black">{m.province}</p>
                <p className="text-[10px] text-gov-gold font-bold">{m.date}</p>
              </div>
            ))}
            <button className="w-full py-4 bg-white border-2 border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-gov-gold transition-colors flex items-center justify-center gap-2">
              <span className="material-icons text-sm">download</span> Export Mission Data
            </button>
          </div>
        </div>
      </section>

      {/* Mission Summary Table */}
      <section className="container mx-auto px-4 pb-16">
        <div className="mb-8">
          <h3 className="text-2xl font-black text-gov-blue flex items-center gap-3 uppercase tracking-tight">
            <span className="w-1.5 h-8 bg-gov-gold rounded-full" />
            Mission Summary Table
          </h3>
        </div>
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Date</th>
                  <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Mission Type</th>
                  <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Location / Province</th>
                  <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Objective</th>
                  <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {missionData.map((m) => (
                  <tr key={m.date + m.location} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4"><span className="text-sm font-bold text-gov-blue">{m.date}</span></td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-gov-blue">
                        <span className="material-icons text-xs">{m.icon}</span> {m.type}
                      </span>
                    </td>
                    <td className="px-6 py-4"><span className="text-sm text-slate-600 font-medium">{m.location}</span></td>
                    <td className="px-6 py-4"><span className="text-sm text-slate-600 line-clamp-1">{m.objective}</span></td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${m.statusColor}`}>{m.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Video Archive */}
      <section className="container mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-black text-gov-blue flex items-center gap-3">
            <span className="w-1.5 h-8 bg-gov-gold rounded-full" />
            Mission Highlights: Video Archive
          </h3>
          <button className="text-xs font-black text-gov-blue uppercase tracking-[0.2em] border-b-2 border-gov-gold pb-1 hover:opacity-70 transition-opacity">
            Watch All Highlights
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoArchive.map((v) => (
            <div key={v.title} className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-gradient-to-br from-slate-700 to-slate-500">
                <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-gov-gold flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                    <span className="material-icons text-white text-4xl ml-1">play_arrow</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-[10px] font-black text-gov-gold uppercase tracking-widest mb-1">{v.date}</p>
                <h4 className="text-sm font-bold text-slate-800 group-hover:text-gov-blue transition-colors line-clamp-1">{v.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Activities Log */}
      <section className="container mx-auto px-4 pb-16 pt-12 border-t border-slate-100">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-3xl font-black text-gov-blue tracking-tight uppercase">Leadership Activities Log</h3>
            <p className="text-slate-500 text-sm font-medium mt-1">Official summaries and photo documentation of past missions and high-level meetings</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 border-2 border-slate-200 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-colors">
            Access Archive <span className="material-icons text-sm">folder_shared</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { month: 'March 2024', title: 'Provincial Leadership Summit', desc: 'Strategic alignment meeting with 25 provincial education directors to standardize curriculum evaluation frameworks.' },
            { month: 'Feb 2024', title: 'STEM Infrastructure Inspection', desc: 'Ministerial oversight visit to verify the operational readiness of 10 new state-of-the-art laboratory facilities in Kampong Cham.' },
            { month: 'Jan 2024', title: 'Policy Consultative Forum', desc: 'High-level dialogue on education reform strategies for remote border areas with international development partners.' },
          ].map((a) => (
            <div key={a.title} className="group flex flex-col">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4 border-2 border-transparent group-hover:border-gov-gold transition-all bg-gradient-to-br from-gov-blue/30 to-gov-blue/10">
                <div className="absolute inset-0 flex items-center justify-center text-gov-blue/20">
                  <span className="material-icons text-[80px]">photo_camera</span>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">{a.month}</div>
              </div>
              <h6 className="font-black text-lg text-slate-800 leading-tight mb-2 group-hover:text-gov-blue transition-colors">{a.title}</h6>
              <p className="text-xs text-slate-500 leading-relaxed font-medium mb-4 flex-grow">{a.desc}</p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                <a className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-gov-blue hover:opacity-70 transition-opacity" href="#">
                  View Press Release <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
