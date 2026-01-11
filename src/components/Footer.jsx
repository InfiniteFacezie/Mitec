const Footer = () => {
  return (
    <footer id="contacts" className="bg-[#05060f] text-slate-500 py-24 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        <div>
          <h4 className="text-white font-black text-xl mb-6">MITEC S.r.l.</h4>
          <p className="text-xs leading-loose italic uppercase tracking-widest opacity-40">
            Microelectronics technologies and equipment<br/>
            Thin film-Thick film hybrid circuits<br/>
            Vacuum processes
          </p>
        </div>
        <div className="text-[11px] leading-loose">
          <h5 className="text-blue-500 font-bold uppercase tracking-widest mb-6 underline decoration-blue-500/30 underline-offset-8">Locations</h5>
          <p className="mb-4"><strong className="text-slate-300">Registered Office:</strong> Viale Liegi, 42 – 00198 Roma</p>
          <p><strong className="text-slate-300">Operational Site:</strong> Via Vicinale dei Colli, 1 – 00040 Rocca di Papa (RM)</p>
        </div>
        <div className="text-[11px] leading-loose">
          <h5 className="text-blue-500 font-bold uppercase tracking-widest mb-6 underline decoration-blue-500/30 underline-offset-8">Direct Contact</h5>
          <p className="text-slate-300">info@mitecgroup.it</p>
          <p className="text-slate-300">sales@mitecgroup.it</p>
          <div className="mt-4 pt-4 border-t border-white/5">
             <p>Tel: +39 0641234399</p>
             <p>Cell: +39 3395620331</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-[9px] uppercase tracking-[0.5em] opacity-30">
        © 2026 MITEC GROUP - Aerospace & Defense Industrial Cluster
      </div>
    </footer>
  );
};

export default Footer;