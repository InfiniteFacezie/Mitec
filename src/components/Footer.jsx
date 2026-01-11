const Footer = () => {
  return (
    <footer id="contacts" className="bg-[#05060f] text-slate-500 py-20 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 mb-16">
        {/* Info Aziendali */}
        <div>
          <h4 className="text-white font-black text-xl mb-6 tracking-tighter uppercase italic">μtec MITEC</h4>
          <p className="text-[10px] leading-loose uppercase tracking-[0.2em] opacity-50">
            Microelectronics technologies and equipment [cite: 1] <br/>
            Thin film-Thick film hybrid circuits [cite: 1] <br/>
            Vacuum processes [cite: 1]
          </p>
        </div>

        {/* Link Rapidi (come da Doc B) */}
        <div className="text-[10px] font-bold uppercase tracking-[0.2em]">
          <h5 className="text-blue-500 mb-6 underline underline-offset-8">Links</h5>
          <ul className="grid grid-cols-2 gap-y-3">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#microwave" className="hover:text-white transition-colors">Microwave</a></li>
            <li><a href="#procurement" className="hover:text-white transition-colors">Procurement</a></li>
            <li><a href="#vacuum" className="hover:text-white transition-colors">Vacuum</a></li>
            <li><a href="#quality" className="hover:text-white transition-colors">Quality</a></li>
          </ul>
        </div>

        {/* Contatti Essenziali */}
        <div className="text-[11px] leading-relaxed">
          <h5 className="text-blue-500 font-bold uppercase tracking-widest mb-6 text-[10px] underline underline-offset-8">Contact Info</h5>
          <p className="text-slate-300 mb-2">info@mitecgroup.it [cite: 1, 467]</p>
          <p className="text-slate-300 mb-4">T. +39 06 41234399 [cite: 1, 465]</p>
          <div className="pt-4 border-t border-white/5">
            <p className="text-[10px] font-bold text-white uppercase tracking-widest">
              ISO 9001:2015 Certified | IAF: 19 | DNV [cite: 220, 452]
            </p>
          </div>
        </div>
      </div>
      
      {/* Copyright e Dati Legali */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.5em] opacity-30 text-white">
        <span>© 2026 MITEC S.r.l. - All Rights Reserved [cite: 505]</span>
        <span>P.IVA 06681910961 [cite: 505]</span>
        <span>www.mitecgroup.it [cite: 83, 469]</span>
      </div>
    </footer>
  );
};

export default Footer;