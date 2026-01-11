const Footer = () => {
  return (
    <footer className="bg-[#05060f] pt-20 pb-10 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Colonna 1: Brand & Descrizione breve */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white text-2xl font-black tracking-tighter mb-6 uppercase italic">μtec MITEC</h4>
            <p className="text-xs leading-loose text-slate-500 max-w-sm uppercase tracking-widest">
              Microelectronics technologies and equipment. <br/>
              Thin film-Thick film hybrid circuits. <br/>
              Vacuum processes.
            </p>
          </div>

          {/* Colonna 2: Quick Links (Struttura B) */}
          <div className="text-[10px] font-bold uppercase tracking-[0.2em]">
            <h5 className="text-blue-500 mb-6">Sitemap</h5>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/microwave-technologies" className="hover:text-white transition-colors">Microwave</a></li>
              <li><a href="/procurement" className="hover:text-white transition-colors">Procurement</a></li>
              <li><a href="/quality" className="hover:text-white transition-colors">Quality</a></li>
            </ul>
          </div>

          {/* Colonna 3: Sedi e Contatti (Contenuti A) */}
          <div className="text-[10px] font-bold uppercase tracking-[0.2em]">
            <h5 className="text-blue-500 mb-6">Contact Details</h5>
            <div className="space-y-4 text-slate-400">
              <p><span className="text-white block">Sede Operativa:</span> Strada Vicinale dei Colli, 1 <br/> 00040 Rocca di Papa (RM)</p>
              <p><span className="text-white block">Sede Legale:</span> Viale Liegi, 42 - 00198 Roma</p>
              <p className="text-blue-400">info@mitecgroup.it</p>
            </div>
          </div>
        </div>

        {/* Barra Certificazione e Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded">
              ISO 9001:2015 Certified | DNV | IAF: 19
            </span>
          </div>
          <div className="text-[9px] uppercase tracking-[0.4em] text-slate-600">
            © 2026 MITEC S.r.l. | P.IVA 06681910961
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;