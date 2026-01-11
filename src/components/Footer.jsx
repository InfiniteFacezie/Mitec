const Footer = () => {
  return (
    <footer id="contatti" className="bg-[#05060f] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-black mb-4">MITEC S.r.l.</h3>
          <p className="text-slate-500 text-sm italic">Microelectronics technologies and equipment</p>
        </div>
        <div>
          <h4 className="text-blue-500 font-bold mb-4 uppercase text-[10px] tracking-widest">Sedi</h4>
          <p className="text-slate-400 text-xs leading-loose">
            Legale: Via Appia Nuova, 59 - 00183 Roma<br/>
            Operativa: Str. Vicinale dei Colli, 1 - 00040 Rocca di Papa (RM)
          </p>
        </div>
        <div>
          <h4 className="text-blue-500 font-bold mb-4 uppercase text-[10px] tracking-widest">Contact</h4>
          <p className="text-slate-400 text-xs">info@mitecgroup.it<br/>P.IVA 06681910961</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;