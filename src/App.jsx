import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO: POSIZIONAMENTO AEROSPACE */}
      <section className="relative pt-48 pb-32 px-4 bg-gradient-to-b from-[#11142b] to-[#0a0c1a] border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-10">
            Coordinator of MITECGROUP • Since 2000
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-none">
            Advanced <br/><span className="text-blue-500 italic">Microelectronics.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Supporto tecnico e produzione per programmi <span className="text-white font-bold">ESA (European Space Agency)</span> e <span className="text-white font-bold">M.O.D.</span> 
            Specializzati in Microwave Telecommunication Systems e Vacuum Processes.
          </p>
        </div>
      </section>

      {/* 1. MICROWAVE TECHNOLOGIES (Dettagliato) */}
      <section id="microwave" className="py-24 px-4 bg-[#0a0c1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-16 tracking-tight flex items-center gap-4">
            <span className="text-blue-600 italic">01.</span> MICROWAVE TECHNOLOGIES
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-blue-400 font-bold uppercase text-xs tracking-widest">Modules Design</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Design custom di moduli RF per Telecomunicazioni, tecnologie Radar (ECM) e applicazioni spaziali. Expertise su frequenze millimetriche oltre i 150 GHz.</p>
            </div>
            <div className="space-y-6">
              <h3 className="text-blue-400 font-bold uppercase text-xs tracking-widest">Multiphysic Simulation</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Controllo termico di dispositivi elettronici, simulazioni elettromagnetiche e termomeccaniche avanzate (CST, ADS/Momentum, MW Office).</p>
            </div>
            <div className="space-y-6">
              <h3 className="text-blue-400 font-bold uppercase text-xs tracking-widest">Manufacturing</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Clean rooms per assemblaggio microelettronico e test. Realizzazione di circuiti ibridi Thin Film e Thick Film su substrati ceramici.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROCUREMENT & MATERIALS (Specifico) */}
      <section id="procurement" className="py-24 px-4 bg-[#05060f] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-12 tracking-tight">MICROWAVE PROCUREMENT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Chromium Masks", d: "Maschere fotolitografiche ad alta precisione" },
              { t: "CVD Diamond", d: "Heat spreaders in diamante sintetico per MMIC" },
              { t: "Ceramic Substrates", d: "Aluminum Nitride (AlN) e Aluminum Oxide (Al2O3)" },
              { t: "Mixed Multilayer", d: "PCB RF-Digitali con core in rame integrato" },
              { t: "Quartz Substrates", d: "Substrati a costante dielettrica controllata" },
              { t: "MW Thin Film", d: "Circuiti custom in tecnologia Thin Film" },
              { t: "Vacuum Brazing", d: "Saldatura in atmosfera controllata e vuoto" },
              { t: "RF Machining", d: "Lavorazioni meccaniche complesse ad alta precisione" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 hover:border-blue-500 transition-all">
                <h4 className="text-white font-bold text-xs uppercase mb-2">{item.t}</h4>
                <p className="text-[11px] text-slate-500">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VACUUM TECHNOLOGIES & PLASMA MATRIX */}
      <section id="vacuum" className="py-24 px-4 bg-[#0a0c1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-white mb-10 tracking-tight flex items-center gap-4">
                <span className="text-blue-600 italic">02.</span> VACUUM TECHNOLOGIES
              </h2>
              <div className="space-y-8">
                <div className="border-l-2 border-blue-900 pl-6">
                  <h4 className="text-white font-bold text-sm mb-2 uppercase">PVD Processes</h4>
                  <p className="text-sm text-slate-500 italic">Sputtering, Evaporazione e processi PECVD.</p>
                </div>
                <div className="border-l-2 border-blue-900 pl-6">
                  <h4 className="text-white font-bold text-sm mb-2 uppercase">Space Simulators</h4>
                  <p className="text-sm text-slate-500 italic">Gestione tecnologica di sistemi per simulazione ambiente spaziale.</p>
                </div>
                <div className="border-l-2 border-blue-900 pl-6">
                  <h4 className="text-white font-bold text-sm mb-2 uppercase">Custom Equipment</h4>
                  <p className="text-sm text-slate-500 italic">Progettazione sistemi PVD e Reactive Ion Etching.</p>
                </div>
              </div>
            </div>

            {/* PLASMA MATRIX PRODUCT SHEET */}
            <div className="bg-blue-600/5 border border-blue-500/20 p-10 rounded-2xl relative">
              <span className="absolute -top-3 left-10 bg-blue-600 text-white text-[9px] font-black px-4 py-1 rounded-full uppercase tracking-widest">Proprietary Product</span>
              <h3 className="text-2xl font-black text-white mb-6">PLASMA MATRIX</h3>
              <p className="text-sm text-slate-400 mb-8 italic">Sistema personalizzato per la pulizia e l'attivazione superficiale a scala nanometrica.</p>
              <div className="grid grid-cols-1 gap-4 text-xs">
                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <span className="text-blue-500 font-bold block mb-1">Applicazioni Bio-Medicali</span>
                  Sterilizzazione di strumentazione medica e rimozione ossidazioni.
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <span className="text-blue-500 font-bold block mb-1">Vantaggi</span>
                  Superfici ultra-pulite senza alterare le proprietà del materiale (bulk).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MITECGROUP NETWORK (Da documento MITECGROUP.pdf) */}
      <section id="network" className="py-24 px-4 bg-[#05060f] border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">General Presentation</h2>
          <h3 className="text-4xl font-black text-white mb-16 tracking-tighter">THE MITECGROUP NETWORK</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: "MITEC S.r.l.", r: "Technologies Leader & Coordinator" },
              { n: "TECNOMEC S.r.l.", r: "Advanced Machining & PCB" },
              { n: "SDS S.r.l.", r: "Control Boards & RF Test" },
              { n: "FORESTAL S.r.l.", r: "Galvanic & Surface Treatments" }
            ].map((p, i) => (
              <div key={i} className="p-10 border border-white/5 bg-[#0a0c1a] hover:border-blue-500 transition-all group">
                <div className="text-lg font-black text-white mb-2 group-hover:text-blue-500">{p.n}</div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-relaxed">{p.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ISO CERTIFICATION (Scope Ufficiale IAF: 19) */}
      <section id="qualita" className="py-32 px-4 bg-white text-[#0a0c1a]">
        <div className="max-w-5xl mx-auto border-l-[12px] border-blue-600 pl-12 md:pl-20 py-10">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6">Quality Management System</h2>
          <h3 className="text-5xl font-black mb-10 tracking-tighter italic uppercase">ISO 9001:2015</h3>
          <div className="space-y-8">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">Official Scope (IAF: 19)</p>
              <p className="text-2xl font-bold leading-tight max-w-2xl">
                "Trading and production of components and assemblies for microelectronic technologies applications"
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
              <p>Certificato da: DNV Business Assurance</p>
              <p>Certificato N: CERT-18142-2006-AQ-ROM-SINCERT</p>
              <p>Validità: 21 Dic 2024 – 20 Dic 2027</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MAILING LIST (Form conforme MATERIALE PER SITO.doc) */}
      <section id="mailing-list" className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase italic">Apply to Mailing List</h2>
            <p className="text-xs uppercase tracking-[0.3em] opacity-80">Please fill the form to receive our recent information and news</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input type="text" placeholder="NAME" className="bg-white/10 border-b-2 border-white/20 p-4 outline-none placeholder:text-white/40 focus:border-white transition-all font-bold" />
            <input type="text" placeholder="COMPANY / ADDRESS" className="bg-white/10 border-b-2 border-white/20 p-4 outline-none placeholder:text-white/40 focus:border-white transition-all font-bold" />
            <input type="text" placeholder="FUNCTION" className="bg-white/10 border-b-2 border-white/20 p-4 outline-none placeholder:text-white/40 focus:border-white transition-all font-bold" />
            <input type="email" placeholder="E-MAIL ADDRESS" className="bg-white/10 border-b-2 border-white/20 p-4 outline-none placeholder:text-white/40 focus:border-white transition-all font-bold" />
            <button className="md:col-span-2 bg-[#0a0c1a] text-white p-6 font-black uppercase tracking-[0.5em] hover:bg-white hover:text-blue-600 transition-all text-xs">Submit Application</button>
          </form>
        </div>
      </section>

      {/* FOOTER: DATI LEGALI SEDE OPERATIVA */}
      <footer id="contacts" className="bg-[#05060f] text-slate-500 py-20 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div>
            <h4 className="text-white font-black text-xl mb-6">MITEC S.r.l.</h4>
            <p className="text-xs leading-loose">
              Microelectronics technologies and equipment<br/>
              Thin film-Thick film hybrid circuits<br/>
              Vacuum processes
            </p>
          </div>
          <div className="text-xs leading-loose">
            <h5 className="text-blue-500 font-bold uppercase tracking-widest mb-6 text-[10px]">Headquarters</h5>
            <p className="mb-4"><strong>Legale:</strong> Via Appia Nuova, 59 - 00183 Roma</p>
            <p><strong>Operativa:</strong> Str. Vicinale dei Colli, 1 - 00040 Rocca di Papa (RM)</p>
          </div>
          <div className="text-xs">
            <h5 className="text-blue-500 font-bold uppercase tracking-widest mb-6 text-[10px]">Contacts</h5>
            <p className="mb-2">info@mitecgroup.it</p>
            <p className="mb-2">sales@mitecgroup.it</p>
            <p className="font-bold text-white mt-4 uppercase">P.IVA 06681910961</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App