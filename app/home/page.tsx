import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - MoEYS Cambodia Primary Education',
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gov-blue text-white py-12 min-h-[380px] flex items-center relative overflow-hidden border-b-4 border-gov-gold">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-[60%]">
              <p className="text-gov-gold text-[10px] font-black uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                <span className="material-icons text-sm">verified</span>
                Official Government Data Portal
              </p>
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight leading-tight mb-3">
                The Kingdom&apos;s <span className="text-gov-gold">Unified Statistics</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl mb-5">
                Real-time access to Cambodia&apos;s comprehensive education dataset — from pre-primary through Grade 6 — powering policy decisions for over 3 million students.
              </p>
              <div className="flex flex-wrap gap-3 mb-5">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-center">
                  <p className="text-xl font-black">3.2M+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">Students</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-center">
                  <p className="text-xl font-black">94,500</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">Teachers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-center">
                  <p className="text-xl font-black">13,842</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">Schools</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="bg-gov-gold text-gov-blue px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-lg">
                  Explore Data
                </button>
                <button className="border-2 border-white/30 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                  View Reports
                </button>
              </div>
            </div>
            <div className="lg:w-[40%]">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-black uppercase tracking-widest">National Avg. Score</h3>
                  <span className="text-gov-gold text-xs font-black">2024</span>
                </div>
                <div className="relative w-36 h-36 mx-auto mb-3">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
                    <circle cx="64" cy="64" r="54" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                    <circle cx="64" cy="64" r="54" fill="transparent" stroke="#D4AF37" strokeWidth="12" strokeDasharray="339.29" strokeDashoffset="67.86" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black">80%</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Efficiency</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-base font-black text-vibrant-teal">92%</p>
                    <p className="text-[10px] text-slate-400 font-bold">Literacy</p>
                  </div>
                  <div>
                    <p className="text-base font-black text-vibrant-amber">85%</p>
                    <p className="text-[10px] text-slate-400 font-bold">Numeracy</p>
                  </div>
                  <div>
                    <p className="text-base font-black text-vibrant-red">78%</p>
                    <p className="text-[10px] text-slate-400 font-bold">Science</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-[40%]">
            <div className="relative">
              <div className="w-full aspect-[3/4] max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-gov-blue to-gov-blue/80 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                  <span className="material-icons text-[120px]">person</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gov-gold text-gov-blue px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg">
                Director General
              </div>
            </div>
          </div>
          <div className="lg:w-[60%]">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-8 bg-gov-gold rounded-full" />
              <h3 className="text-2xl font-black text-gov-blue uppercase tracking-tight">Director&apos;s Vision</h3>
            </div>
            <blockquote className="text-lg text-slate-600 leading-relaxed mb-8 border-l-4 border-gov-gold pl-6 italic">
              &ldquo;Every child in Cambodia deserves access to quality education. Through data-driven policy making, we are building a future where no student is left behind.&rdquo;
            </blockquote>
            <p className="text-sm text-slate-500 mb-2 font-bold">Dr. Kann Puthy</p>
            <p className="text-xs text-gov-gold font-bold uppercase tracking-widest mb-8">Director, Primary Education Department</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'menu_book', title: 'Literacy First', desc: 'Achieving universal literacy for all primary students by 2030' },
                { icon: 'devices', title: 'Digital Future', desc: 'Integrating technology into every classroom nationwide' },
                { icon: 'domain', title: 'Infrastructure', desc: 'Building modern, safe, and accessible school facilities' },
              ].map((p) => (
                <div key={p.title} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gov-blue/5 rounded-xl flex items-center justify-center text-gov-blue mb-4">
                    <span className="material-icons text-2xl">{p.icon}</span>
                  </div>
                  <h4 className="font-black text-sm text-gov-blue uppercase tracking-tight mb-2">{p.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-gov-blue flex items-center gap-3">
              <span className="w-1.5 h-8 bg-vibrant-amber rounded-full" />
              News &amp; Announcements
            </h3>
            <a className="text-gov-blue text-xs font-black uppercase tracking-widest hover:underline" href="#">All News</a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { badge: 'Policy Update', badgeColor: 'bg-gov-gold text-white', date: 'October 28, 2024', title: '2025 National Curriculum Framework Released for Public Comment', desc: 'The Ministry invites stakeholders to review and provide feedback on the proposed curriculum changes for primary education.' },
              { badge: 'Achievement', badgeColor: 'bg-vibrant-teal text-white', date: 'October 22, 2024', title: 'Cambodia Achieves 95% Primary Enrollment Rate Milestone', desc: 'A significant achievement in the national education development plan, reflecting years of targeted investment.' },
              { badge: 'School Health', badgeColor: 'bg-vibrant-amber text-white', date: 'October 18, 2024', title: 'National Nutrition Program Expansion to Remote Rural Areas', desc: 'Dr. Kann Puthy reviews implementation of nutrition programs to support cognitive development for primary students.' },
            ].map((n) => (
              <div key={n.title} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative h-48 bg-gradient-to-br from-gov-blue/20 to-gov-blue/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gov-blue/20">
                    <span className="material-icons text-[80px]">article</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`${n.badgeColor} text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest`}>{n.badge}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">{n.date}</p>
                  <h4 className="text-lg font-bold text-slate-800 leading-tight mb-3 group-hover:text-gov-blue transition-colors">{n.title}</h4>
                  <p className="text-sm text-slate-500 line-clamp-2">{n.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directorate Engagements & Events */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-gov-blue flex items-center gap-3">
              <span className="w-1.5 h-8 bg-gov-blue rounded-full" />
              Directorate Engagements &amp; Events
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { location: 'Kandal Province', title: 'Official Inspection: School Infrastructure and Pedagogy', desc: 'Dr. Kann Puthy, Director of Primary Education Department, conducts a comprehensive field visit to inspect school facilities in Kandal.' },
              { location: 'Phnom Penh (HQ)', title: 'High-Level Policy Dialogue: 2024 Primary Education Roadmap', desc: 'Dr. Kann Puthy leads strategic discussions with development partners to refine policy implementation frameworks for KG-G6 education.' },
            ].map((e) => (
              <div key={e.title} className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row group">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden bg-gradient-to-br from-gov-blue/30 to-gov-blue/10">
                  <div className="w-full h-full flex items-center justify-center text-gov-blue/20">
                    <span className="material-icons text-[80px]">photo_camera</span>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4 text-gov-gold">
                    <span className="material-icons text-sm">location_on</span>
                    <span className="text-[11px] font-black uppercase tracking-widest">{e.location}</span>
                  </div>
                  <h4 className="text-xl font-extrabold text-gov-blue mb-4 leading-tight">{e.title}</h4>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-3">{e.desc}</p>
                  <a className="inline-flex items-center gap-2 text-gov-blue font-black text-xs uppercase tracking-[0.2em] group/link" href="#">
                    Read More
                    <span className="material-icons text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Highlights */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-black text-gov-blue flex items-center gap-3">
            <span className="w-1.5 h-8 bg-gov-gold rounded-full" />
            Video Highlights
          </h3>
          <a className="text-gov-blue text-xs font-black uppercase tracking-widest hover:underline" href="#">Watch All Videos</a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { date: 'October 25, 2024', title: 'Primary School Visit Highlights', desc: "Dr. Kann Puthy's recent field assessments in rural school clusters.", duration: '04:25' },
            { date: 'October 20, 2024', title: 'National Education Reform 2024', desc: 'A strategic roadmap for the transformation of primary education.', duration: '12:10' },
            { date: 'October 15, 2024', title: 'Teacher Training Workshop: Pedagogy', desc: 'New pedagogical techniques for enhanced classroom engagement.', duration: '08:45' },
          ].map((v) => (
            <div key={v.title} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50 group-hover:bg-gov-gold group-hover:border-gov-gold transition-all shadow-lg">
                    <span className="material-icons text-white text-3xl ml-1">play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {v.duration}
                </div>
              </div>
              <div className="p-5">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">{v.date}</p>
                <h4 className="text-base font-bold text-slate-800 leading-tight mb-2 group-hover:text-gov-blue transition-colors">{v.title}</h4>
                <p className="text-[11px] text-slate-500 font-medium">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Data Trends + Regional Map */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <section className="lg:w-[65%] space-y-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h3 className="text-2xl font-black text-gov-blue flex items-center gap-3">
                <span className="w-1.5 h-8 bg-vibrant-teal rounded-full" />
                Featured Data Trends
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Phnom Penh', color: 'border-vibrant-teal', dot: 'bg-vibrant-teal' },
                { name: 'Siem Reap', color: 'border-vibrant-amber', dot: 'bg-vibrant-amber' },
                { name: 'Battambang', color: 'border-vibrant-red', dot: 'bg-vibrant-red' },
              ].map((p) => (
                <div key={p.name} className={`flex items-center gap-2 bg-white border-2 ${p.color} px-4 py-2.5 rounded-xl shadow-sm`}>
                  <span className={`w-2.5 h-2.5 rounded-full ${p.dot}`} />
                  <span className="text-sm font-black">{p.name}</span>
                  <button className="text-slate-400 hover:text-gov-blue"><span className="material-icons text-sm">cancel</span></button>
                </div>
              ))}
              <button className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-xl border-2 border-dashed border-slate-300 hover:border-gov-gold group transition-all">
                <span className="material-icons text-sm text-slate-400 group-hover:text-gov-gold">add_circle</span>
                <span className="text-sm font-bold text-slate-400 group-hover:text-gov-gold">Add Province</span>
              </button>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                <div>
                  <h4 className="text-xl font-black text-gov-blue">Enrollment Growth Analysis</h4>
                  <p className="text-sm text-slate-500 font-medium">Comparative provincial performance (2018 — 2024)</p>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <span className="flex items-center gap-2 text-[10px] font-black text-vibrant-teal uppercase tracking-widest"><span className="w-3 h-3 rounded-full bg-vibrant-teal" /> PP</span>
                  <span className="flex items-center gap-2 text-[10px] font-black text-vibrant-amber uppercase tracking-widest"><span className="w-3 h-3 rounded-full bg-vibrant-amber" /> SR</span>
                  <span className="flex items-center gap-2 text-[10px] font-black text-vibrant-red uppercase tracking-widest"><span className="w-3 h-3 rounded-full bg-vibrant-red" /> BB</span>
                </div>
              </div>
              <div className="relative h-72 w-full">
                <div className="absolute inset-0 flex items-end justify-between px-4">
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[0,1,2,3].map((i) => <div key={i} className="w-full border-t border-slate-50 h-0" />)}
                  </div>
                  {/* Area chart placeholders */}
                  <div className="absolute inset-0 bg-gradient-to-t from-vibrant-teal/10 to-transparent rounded-b-xl" />
                  {['2018','2020','2022','2024'].map((y) => (
                    <div key={y} className="flex-1 flex flex-col items-center relative z-20">
                      <span className={`text-[10px] font-bold mt-auto pt-2 ${y === '2024' ? 'font-black text-gov-blue' : 'text-slate-400'}`}>{y}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Efficiency Metrics */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h3 className="text-2xl font-black text-gov-blue flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-vibrant-red rounded-full" />
                  Efficiency Metrics By Province
                </h3>
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button className="px-4 py-2 text-[10px] font-black uppercase tracking-tight bg-white text-gov-blue rounded-lg shadow-sm">Enrollment</button>
                  <button className="px-4 py-2 text-[10px] font-black uppercase tracking-tight text-slate-500 hover:text-gov-blue transition-colors">Infrastructure</button>
                  <button className="px-4 py-2 text-[10px] font-black uppercase tracking-tight text-slate-500 hover:text-gov-blue transition-colors">Quality</button>
                </div>
              </div>
              <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl">
                <div className="grid grid-cols-12 px-8 py-5 bg-gov-blue text-white text-[10px] font-black uppercase tracking-[0.15em]">
                  <div className="col-span-1">Rank</div>
                  <div className="col-span-4">Province</div>
                  <div className="col-span-3">Growth Metric</div>
                  <div className="col-span-4 text-center">Efficiency Trend</div>
                </div>
                <div className="divide-y divide-slate-100">
                  {[
                    { rank: '01', name: 'Phnom Penh', icon: 'location_city', growth: '+4.6%', color: 'bg-vibrant-teal', highlight: true },
                    { rank: '02', name: 'Siem Reap', icon: 'temple_hindu', growth: '+3.8%', color: 'bg-vibrant-amber', highlight: false },
                    { rank: '03', name: 'Battambang', icon: 'waves', growth: '+3.2%', color: 'bg-vibrant-red', highlight: false },
                  ].map((r) => (
                    <div key={r.rank} className={`grid grid-cols-12 px-8 py-6 items-center ${r.highlight ? 'bg-vibrant-teal/5' : ''}`}>
                      <div className="col-span-1">
                        <span className={`w-8 h-8 rounded-lg ${r.highlight ? 'bg-vibrant-teal text-white' : 'bg-slate-100'} flex items-center justify-center font-black text-sm`}>{r.rank}</span>
                      </div>
                      <div className="col-span-4 flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full ${r.highlight ? 'bg-gov-blue text-white' : 'bg-slate-100 text-slate-500'} flex items-center justify-center`}>
                          <span className="material-symbols-outlined text-xl">{r.icon}</span>
                        </div>
                        <span className="font-black text-slate-800">{r.name}</span>
                      </div>
                      <div className={`col-span-3 font-black text-xl ${r.highlight ? 'text-gov-blue' : 'text-slate-400'}`}>{r.growth}</div>
                      <div className="col-span-4 flex justify-center">
                        <div className={`w-32 h-8 ${r.color}/20 rounded`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Sidebar - Regional Performance Map */}
          <aside className="lg:w-[35%] space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 sticky top-28">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-black text-gov-blue uppercase tracking-tight leading-tight">Regional Performance Map</h3>
                  <p className="text-[10px] font-bold text-gov-gold uppercase tracking-[0.2em] mt-1">Detailed Geographic View</p>
                </div>
              </div>
              <div className="flex flex-col gap-6 mb-8">
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col items-center justify-center relative">
                  <svg className="w-full h-auto drop-shadow-lg" viewBox="0 0 450 350" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-gov-blue/20 stroke-white stroke-1 hover:fill-gov-blue/40 transition-colors cursor-pointer" d="M225,25 L285,30 L310,70 L260,95 L220,80 Z" />
                    <path className="fill-gov-blue/20 stroke-white stroke-1 hover:fill-gov-blue/40 transition-colors cursor-pointer" d="M310,35 L360,45 L380,105 L310,120 L310,70 Z" />
                    <path className="fill-gov-blue/20 stroke-white stroke-1 hover:fill-gov-blue/40 transition-colors cursor-pointer" d="M360,45 L430,60 L440,125 L380,135 L380,105 Z" />
                    <path className="fill-gov-blue/20 stroke-white stroke-1 hover:fill-gov-blue/40 transition-colors cursor-pointer" d="M125,45 L225,25 L220,80 L160,85 Z" />
                    <path className="fill-gov-blue/20 stroke-white stroke-1 hover:fill-gov-blue/40 transition-colors cursor-pointer" d="M65,75 L125,45 L160,85 L140,115 L60,110 Z" />
                    <path className="fill-vibrant-amber/60 stroke-white stroke-1 hover:fill-vibrant-amber/80 transition-colors cursor-pointer" d="M160,85 L220,80 L260,95 L245,150 L195,160 L140,115 Z" />
                    <path className="fill-vibrant-red/60 stroke-white stroke-1 hover:fill-vibrant-red/80 transition-colors cursor-pointer" d="M60,110 L140,115 L195,160 L160,215 L100,205 L50,150 Z" />
                    <path className="fill-gov-blue/20 stroke-white stroke-1 hover:fill-gov-blue/40 transition-colors cursor-pointer" d="M100,205 L160,215 L210,245 L180,290 L80,265 Z" />
                    <path className="fill-gov-blue/20 stroke-white stroke-1 hover:fill-gov-blue/40 transition-colors cursor-pointer" d="M260,95 L310,120 L320,175 L280,210 L220,195 L245,150 Z" />
                    <path className="fill-gov-blue/20 stroke-white stroke-1 hover:fill-gov-blue/40 transition-colors cursor-pointer" d="M310,120 L380,135 L395,210 L345,230 L320,175 Z" />
                    <path className="fill-vibrant-teal/60 stroke-white stroke-1 hover:fill-vibrant-teal/80 transition-colors cursor-pointer" d="M255,268 L285,268 L285,285 L255,285 Z" />
                    <path className="fill-gov-blue/20 stroke-white stroke-1 hover:fill-gov-blue/40 transition-colors cursor-pointer" d="M80,265 L180,290 L160,340 L90,335 L60,300 Z" />
                    <path className="fill-gov-blue/20 stroke-white stroke-1 hover:fill-gov-blue/40 transition-colors cursor-pointer" d="M240,285 L295,275 L315,310 L260,330 L250,315 Z" />
                    <text className="fill-white pointer-events-none uppercase font-black" fontSize="10" x="260" y="278">PP</text>
                    <text className="fill-white pointer-events-none uppercase font-black" fontSize="10" x="180" y="125">SR</text>
                    <text className="fill-white pointer-events-none uppercase font-black" fontSize="10" x="110" y="160">BB</text>
                  </svg>
                </div>
              </div>
              <div className="bg-gov-blue text-white p-6 rounded-2xl relative overflow-hidden group cursor-pointer shadow-lg">
                <div className="relative z-10">
                  <h4 className="text-sm font-black mb-2 flex items-center gap-2">
                    <span className="material-icons text-gov-gold text-lg">auto_awesome</span>
                    Insight Generator
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
                    Click any province on the map to instantly append its data to the comparative growth charts and leaderboards.
                  </p>
                </div>
                <div className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-white/10 transition-colors">
                  <span className="material-icons text-[100px]">insights</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
