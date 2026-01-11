const Footer = () => {
  return (
    <footer className="bg-[#05060f] py-24 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white text-2xl font-black tracking-tighter mb-6 uppercase italic">μtec MITEC</h4>
            <p className="text-xs leading-loose italic opacity-50 lowercase tracking-widest">Microelectronics technologies and equipment. Thin film-Thick film hybrid circuits. Vacuum processes[cite: 5].</p>
          </div>
          <div>
            <h5 className="text-blue-500 mb-6">Navigation</h5>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#microwave" className="hover:text-white transition-colors">Microwave</a></li>
              <li><a href="#quality" className="hover:text-white transition-colors">Quality</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-blue-500 mb-6">Contact</h5>
            <p className="mb-2">info@mitecgroup.it [cite: 512]</p>
            <p>sales@mitecgroup.it [cite: 512]</p>
            <div className="mt-8 p-4 border border-white/5 rounded-lg text-center">
               <span className="text-white">ISO 9001:2015 - DNV Certified [cite: 547]</span>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.5em] opacity-30 text-white">
          <span>© 2026 MITEC S.r.l. - All Rights Reserved [cite: 550]</span>
          <span>P.IVA 06194761000 [cite: 40]</span>
          <span>www.mitecgroup.it [cite: 514]</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;