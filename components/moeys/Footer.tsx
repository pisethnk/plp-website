export default function Footer() {
  return (
    <footer className="bg-gov-blue text-white pt-20 pb-10 border-t-4 border-gov-gold">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                <span className="material-icons text-gov-gold text-3xl">school</span>
              </div>
              <div>
                <h6 className="font-black text-xl uppercase leading-tight tracking-tight">MoEYS Cambodia</h6>
                <p className="text-xs text-gov-gold font-bold uppercase tracking-widest">Ministry of Education, Youth and Sport</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              The unified statistics portal provides comprehensive data access for policymakers, educators, and the public to ensure data-driven educational excellence across the Kingdom.
            </p>
          </div>
          <div>
            <h6 className="font-bold text-sm uppercase mb-8 tracking-[0.2em] text-gov-gold flex items-center gap-2">
              <span className="w-2 h-2 bg-gov-gold rounded-full" /> Quick Links
            </h6>
            <ul className="space-y-4 text-sm text-slate-400 font-bold">
              <li><a className="hover:text-gov-gold transition-colors" href="#">Statistics Dashboard</a></li>
              <li><a className="hover:text-gov-gold transition-colors" href="#">Annual Performance Report</a></li>
              <li><a className="hover:text-gov-gold transition-colors" href="#">Open Data Catalog</a></li>
              <li><a className="hover:text-gov-gold transition-colors" href="#">Provincial Profiles</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-sm uppercase mb-8 tracking-[0.2em] text-gov-gold flex items-center gap-2">
              <span className="w-2 h-2 bg-gov-gold rounded-full" /> Contact Us
            </h6>
            <ul className="space-y-4 text-sm text-slate-400 font-bold">
              <li className="flex items-start gap-3">
                <span className="material-icons text-gov-gold text-sm">location_on</span>
                <span>#80, Norodom Blvd, Phnom Penh, Cambodia</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-gov-gold text-sm">mail</span>
                <span>info@moeys.gov.kh</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-gov-gold text-sm">phone</span>
                <span>(+855) 23 219 285</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <p>&copy; 2024 Ministry of Education, Youth and Sport. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
