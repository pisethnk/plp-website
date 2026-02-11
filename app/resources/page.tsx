import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources - MoEYS Cambodia Primary Education',
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gov-blue text-white py-12 min-h-[380px] flex items-center relative overflow-hidden border-b-4 border-gov-gold">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="absolute top-10 right-20 w-64 h-64 bg-elementary-sky/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-elementary-green/20 rounded-full blur-[80px]" />
        <div className="container mx-auto px-4 relative z-10 w-full text-center">
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Primary <span className="text-gov-gold">Learning Portal</span>
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Fun and educational digital resources tailored specifically for Primary Education students and teachers across Cambodia.
          </p>
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Search primary textbooks, fun lessons, activities..."
                className="flex-grow bg-white/10 text-white placeholder-slate-400 rounded-xl px-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gov-gold"
              />
              <select className="bg-white/10 text-white rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-widest focus:outline-none appearance-none cursor-pointer">
                <option>Grade Level</option>
                <option>Kindergarten</option>
                <option>Grade 1</option>
                <option>Grade 2</option>
                <option>Grade 3</option>
                <option>Grade 4</option>
                <option>Grade 5</option>
                <option>Grade 6</option>
              </select>
              <select className="bg-white/10 text-white rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-widest focus:outline-none appearance-none cursor-pointer">
                <option>Subject</option>
                <option>Mathematics</option>
                <option>Khmer Literature</option>
                <option>Science</option>
                <option>Social Studies</option>
                <option>Arts</option>
              </select>
              <button className="bg-gov-gold text-gov-blue px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Primary Digital Library */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <span className="w-2 h-10 bg-elementary-sky rounded-full" />
                  <h3 className="text-3xl font-black text-gov-blue uppercase tracking-tight">Primary Digital Library</h3>
                </div>
                <a className="text-gov-blue text-xs font-black uppercase tracking-widest hover:underline flex items-center gap-1" href="#">
                  View All <span className="material-icons text-sm">arrow_forward</span>
                </a>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { badge: 'Fun Learning', badgeColor: 'bg-elementary-green text-gov-blue', badge2: 'Multimedia', title: 'Phonics for Kindergarten', meta: 'Early Literacy', metaIcon: 'face', metaRight: 'Interactive', action: 'Start Activity', actionIcon: 'play_circle' },
                  { badge: 'Core Textbook', badgeColor: 'bg-gov-gold text-white', badge2: 'PDF', title: 'Grade 3 Mathematics', meta: 'Numeracy', metaIcon: 'calculate', metaRight: '8.5 MB', action: 'Download PDF', actionIcon: 'download' },
                  { badge: 'New Edition', badgeColor: 'bg-elementary-sky text-white', badge2: null, title: 'Grade 1 World Around Us', meta: 'Discovery', metaIcon: 'park', metaRight: 'Teacher Guide', action: 'Read Guide', actionIcon: 'menu_book' },
                ].map((c) => (
                  <div key={c.title} className="bg-white border border-slate-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                    <div className="relative h-64 bg-gradient-to-br from-gov-blue/15 to-gov-blue/5 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-gov-blue/15 group-hover:scale-105 transition-transform duration-500">
                        <span className="material-icons text-[80px]">auto_stories</span>
                      </div>
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className={`${c.badgeColor} text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider`}>{c.badge}</span>
                        {c.badge2 && <span className="bg-gov-blue/90 text-white text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider">{c.badge2}</span>}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-slate-800 text-lg leading-snug mb-3">{c.title}</h4>
                      <div className="flex items-center justify-between text-[11px] text-slate-500 font-bold mb-4">
                        <span className="flex items-center gap-1"><span className="material-icons text-xs">{c.metaIcon}</span> {c.meta}</span>
                        <span>{c.metaRight}</span>
                      </div>
                      <button className="w-full bg-slate-100 hover:bg-gov-blue hover:text-white rounded-xl py-3 font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all">
                        <span className="material-icons text-sm">{c.actionIcon}</span> {c.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Primary Assessment Archive */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-2 h-10 bg-gov-gold rounded-full" />
                <h3 className="text-3xl font-black text-gov-blue uppercase tracking-tight">Primary Assessment Archive</h3>
              </div>
              <div className="flex flex-wrap gap-3 mb-8">
                <select className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-600 focus:outline-none focus:border-gov-gold appearance-none cursor-pointer">
                  <option>Filter Subject</option>
                  <option>Mathematics</option>
                  <option>Science</option>
                  <option>Khmer Literature</option>
                </select>
                <button className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-600 hover:border-gov-gold transition-colors">
                  Year
                </button>
              </div>
              <div className="bg-elementary-sky/5 rounded-[2.5rem] p-8 border border-elementary-sky/20">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { badge: 'Final Year Exam', badgeColor: 'bg-elementary-sky text-gov-blue', title: 'Grade 6 National Exam', year: 'Academic Year 2023', icon: 'child_care', links: [{ label: 'Paper', icon: 'description', color: 'text-gov-blue' }, { label: 'Answer Guide', icon: 'emoji_events', color: 'text-emerald-600' }] },
                    { badge: 'Mid-Primary', badgeColor: 'bg-elementary-green text-gov-blue', title: 'Grade 3 Assessment', year: 'Academic Year 2023', icon: 'auto_stories', links: [{ label: 'Workbook', icon: 'description', color: 'text-gov-blue' }, { label: 'Solutions', icon: 'star', color: 'text-emerald-600' }] },
                    { badge: 'Early Years', badgeColor: 'bg-red-500 text-white', title: 'Kindergarten Review', year: 'Session 2022', icon: 'palette', links: [{ label: 'Activity Kit', icon: 'description', color: 'text-gov-blue' }, { label: 'Teaching Tips', icon: 'tips_and_updates', color: 'text-orange-600' }] },
                  ].map((e) => (
                    <div key={e.title} className="bg-white border border-blue-100 rounded-3xl p-6 transition-all duration-300 hover:border-gov-blue hover:shadow-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className={`inline-block ${e.badgeColor} text-[10px] font-black px-2 py-1 rounded mb-2 uppercase tracking-wider`}>{e.badge}</span>
                          <h4 className="text-lg font-black text-slate-800">{e.title}</h4>
                          <p className="text-gov-gold font-bold text-sm">{e.year}</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-gov-blue">
                          <span className="material-symbols-outlined text-3xl">{e.icon}</span>
                        </div>
                      </div>
                      <div className="space-y-2 mt-6">
                        {e.links.map((l) => (
                          <a key={l.label} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 transition-colors group" href="#">
                            <div className="flex items-center gap-3">
                              <span className={`material-symbols-outlined ${l.color} text-xl`}>{l.icon}</span>
                              <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">{l.label}</span>
                            </div>
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-gov-blue transition-colors">download</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Primary Education Curriculum */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-2 h-10 bg-elementary-green rounded-full" />
                <h3 className="text-3xl font-black text-gov-blue uppercase tracking-tight">Primary Education Curriculum</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: 'brush', iconColor: 'text-elementary-sky', iconBg: 'bg-elementary-sky/10', title: 'Early Years Framework (Kindergarten)', desc: 'Standards for social, physical, and cognitive development in early primary school.', version: '2024 Version', hoverColor: 'hover:border-elementary-sky' },
                  { icon: 'pest_control_rodent', iconColor: 'text-elementary-green', iconBg: 'bg-elementary-green/10', title: 'Elementary Science Standards', desc: 'Core inquiry benchmarks for primary school Grades 1 through 6.', version: '2023 Version', hoverColor: 'hover:border-elementary-green' },
                ].map((c) => (
                  <div key={c.title} className={`bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between ${c.hoverColor} transition-colors group`}>
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 rounded-2xl ${c.iconBg} flex items-center justify-center ${c.iconColor}`}>
                        <span className="material-icons text-3xl">{c.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 uppercase tracking-tight">{c.title}</h4>
                        <p className="text-xs text-slate-500 font-medium">{c.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="hidden md:block text-[10px] font-black text-slate-400 uppercase bg-slate-50 px-3 py-1 rounded">{c.version}</span>
                      <button className="p-3 rounded-full bg-slate-50 text-gov-blue group-hover:bg-gov-blue group-hover:text-white transition-all">
                        <span className="material-icons">file_download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar — Educator Toolkit */}
          <div className="lg:col-span-4">
            <section className="sticky top-28">
              <div className="bg-white border border-slate-100 rounded-[3rem] shadow-xl overflow-hidden">
                <div className="bg-gov-blue p-8 text-white relative">
                  <div className="absolute top-4 right-4 text-elementary-sky opacity-20">
                    <span className="material-icons text-5xl">smart_toy</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Primary Educator Toolkit</h3>
                  <p className="text-slate-300 text-sm font-medium">Teaching aids for the elementary school classroom.</p>
                </div>
                <div className="p-8 space-y-8">
                  <div>
                    <h4 className="text-[10px] font-black text-gov-gold uppercase tracking-[0.2em] mb-4">Classroom Materials</h4>
                    <div className="space-y-4">
                      {[
                        { icon: 'rocket_launch', color: 'bg-emerald-50 text-emerald-600', title: 'Gamified Lesson Plan', meta: 'Activity Sheet \u2022 Grade 1-3' },
                        { icon: 'celebration', color: 'bg-orange-50 text-orange-600', title: 'Classroom Reward Posters', meta: 'Printable PDF \u2022 High-Res' },
                        { icon: 'animation', color: 'bg-elementary-sky/10 text-elementary-sky', title: 'Storytelling Video Clips', meta: 'MP4 Collection \u2022 Elementary' },
                      ].map((m) => (
                        <a key={m.title} className="flex items-start gap-4 p-4 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group" href="#">
                          <div className={`w-10 h-10 rounded-xl ${m.color} flex items-center justify-center`}>
                            <span className="material-icons">{m.icon}</span>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800 group-hover:text-gov-blue transition-colors">{m.title}</p>
                            <p className="text-xs text-slate-500">{m.meta}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-100">
                    <div className="bg-gov-gold/10 rounded-3xl p-6 border border-gov-gold/20">
                      <h5 className="text-sm font-black text-gov-blue uppercase mb-2 flex items-center gap-2">
                        <span className="material-icons text-lg">auto_fix_high</span> Primary Portal
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">Login to access exclusive Kindergarten and Primary Education teaching resources and training.</p>
                      <button className="w-full bg-gov-blue text-white py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gov-gold transition-all shadow-lg">
                        Teacher Sign In
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
