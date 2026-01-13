import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1e293b] font-sans selection:bg-blue-100">
      <Navbar />

      {/* --- HERO SECTION: Authority & Mission --- 
          Design: Layout pulito, focus sul prestigio (ESA/CNR).
      */}
      <section id="home" className="relative pt-40 pb-24 px-6 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[1px] w-12 bg-blue-600"></span>
              <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em]">Technology Leader since 2000</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
              &mu;tec <span className="text-blue-600 italic">MITEC</span>
            </h1>

            <div className="grid md:grid-cols-12 gap-12 w-full pt-12 border-t border-slate-100">
              <div className="md:col-span-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight mb-6">
                  A NETWORK OF SPECIALIZED COMPANIES TO SUPPORT CUSTOMERS IN ELECTRONIC TECHNOLOGIES
                </h2>
                <p className="text-blue-600 font-mono text-sm font-bold uppercase tracking-widest mb-8">
                  Microwave Integrated TEChnologies
                </p>
                <div className="max-w-2xl text-slate-500 text-lg leading-relaxed space-y-4">
                  <p>
                    Based in Rome since 2000, <span className="text-slate-900 font-semibold">MITECGROUP</span> leverages extensive experience in Space Technology with the Italian National Research Council (<span className="text-slate-900">CNR</span>) and the European Space Agency (<span className="text-slate-900">ESA</span>).
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 flex md:justify-end items-end">
                <button className="px-10 py-5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-2xl">
                  Contact Engineering
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NAVIGATION GRID: Industrial Pillars --- 
          Design: Griglia tecnica a linee sottili.
      */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 divide-x divide-slate-200 border-x border-slate-200">
          {[
            { id: "microwave", title: "Microwave Technologies", desc: "Design, Simulation & Manufacturing" },
            { id: "procurement", title: "Procurement", desc: "Ceramic Substrates & MMIC Components" },
            { id: "vacuum", title: "Vacuum Technologies", desc: "PVD Systems & Plasma Matrix" }
          ].map((item, idx) => (
            <a key={item.id} href={`#${item.id}`} className="group p-12 hover:bg-slate-50 transition-all">
              <span className="font-mono text-[10px] text-slate-400 mb-4 block">0{idx + 1}.</span>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-2">{item.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* --- ABOUT US: The Blueprint Layout --- 
          Design: Alternanza di spazi vuoti e blocchi di testo istituzionali.
      */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-8 italic">About the Group</h2>
              <p className="text-sm font-bold text-slate-400 leading-relaxed uppercase tracking-wider">
                "L'esperienza nell'attività di Trasferimento Tecnologico è un punto di forza per nuovi programmi futuri nello scenario internazionale."
              </p>
            </div>
            <div className="md:col-span-8 border-l border-slate-200 pl-12">
              <div className="mb-16">
                <h3 className="font-mono text-[10px] text-slate-400 mb-2 uppercase tracking-widest">Coordinator</h3>
                <p className="text-3xl font-bold text-slate-900 mb-6">Maurizio D'Antoni</p>
                <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-4 text-sm text-slate-500 italic">
                  <li>• Involved in Space Technologies since 1975 (CNR)</li>
                  <li>• Reference technologist for ESA programs</li>
                  <li className="sm:col-span-2">• Responsible for Microelectronic Technologies in Elettronica s.p.a.</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["MITEC S.R.L. - Technologies Leader", "TECNOMEC S.R.L. - PCB Manufacturing", "SDS S.R.L. - Microwave Integration", "FORESTAL S.R.L. - Specialized Manufacturing"].map(p => (
                  <div key={p} className="p-4 border border-slate-100 bg-white text-[9px] font-bold uppercase tracking-widest text-slate-400">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MICROWAVE TECHNOLOGIES: High-Precision Grid --- 
          Design: Utilizzo di font Monospaced per i dati tecnici.
      */}
      <section id="microwave" className="py-32 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <span className="text-[30vw] font-black italic select-none">RF</span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em] mb-20">Microwave Technologies</h2>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { label: "Modules Design", title: "Custom RF Modules", desc: "Custom RF Modules for Radar, ECM, and Space applications. Integrated PCB/Package solutions with copper core thermal management." },
              { label: "Multiphysic Simulation", title: "EDA Analysis", desc: "EDA SW: MW Office, ADS/Momentum, CST MW Studio, SPICE. Thermal control and thermomechanical stress analysis." },
              { label: "Manufacturing", title: "Frequency Ops", desc: "Thin Film on Ceramic, Organic Mixed Multilayers, and Waveguide manufacturing over 150 GHz." }
            ].map((tech, i) => (
              <div key={i} className="group">
                <div className="font-mono text-blue-400 text-xs mb-6 tracking-widest">[{tech.label}]</div>
                <h4 className="text-2xl font-bold mb-6 italic">{tech.title}</h4>
                <p className="text-sm leading-loose text-slate-400 italic mb-8">{tech.desc}</p>
                {i === 2 && <span className="px-3 py-1 bg-blue-600 text-[10px] font-black tracking-widest uppercase italic">Specs: &gt; 150 GHz</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCUREMENT: The Material Lab --- */}
      <section id="procurement" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-slate-900 pb-12 mb-12">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter">Microwave Procurement</h2>
            <span className="font-mono text-xs text-slate-400 mt-4 md:mt-0 uppercase tracking-widest">Supply Chain & Materials</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {[
              "Chromium Photolithographic Masks", "AlN / Al2O3 Ceramic Substrates", "High Dielectric Constant Substrates", "Synthetic Diamond Heat Spreaders", 
              "Mixed Multilayer PCB", "Waveguide Custom Design", "Know-How Transfer", "MMIC Components"
            ].map(item => (
              <div key={item} className="p-10 bg-white text-[10px] font-bold uppercase tracking-[0.2em] text-center flex items-center justify-center hover:bg-slate-50 transition-colors aspect-square md:aspect-auto md:h-40 text-slate-500">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VACUUM & PRODUCTS: Technical Hub --- */}
      <section id="vacuum" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-12 italic">Vacuum Technologies</h2>
              <p className="text-xl font-bold text-slate-800 italic leading-relaxed mb-12">
                Wide experience on processes of deposition under vacuum by sputtering, evaporation and PECVD.
              </p>
              <div className="grid gap-6">
                {["PVD Vacuum Equipments", "Space Simulators Technologies", "Vacuum Brazing Ovens"].map(t => (
                  <div key={t} className="flex items-center justify-between p-6 bg-white border border-slate-200 group hover:border-blue-600 transition-all">
                    <span className="text-[10px] font-black uppercase tracking-widest">{t}</span>
                    <span className="w-2 h-2 bg-slate-200 group-hover:bg-blue-600 rounded-full"></span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 p-12 md:p-16 text-white flex flex-col justify-between shadow-2xl">
              <div>
                <h3 className="text-4xl font-black mb-4 italic italic tracking-tighter uppercase">Plasma Matrix</h3>
                <p className="text-sm font-medium mb-12 opacity-60 italic leading-relaxed">
                  "Surface Cleaning System: Reducing contamination up to six fold compared to traditional wet cleaning methods."
                </p>
                <div className="space-y-4 mb-12 font-mono text-[10px]">
                  <div className="flex justify-between border-b border-white/10 pb-2"><span>Model</span><span>Standard Table Top / "S" Model</span></div>
                  <div className="flex justify-between border-b border-white/10 pb-2"><span>Frequency</span><span>13.56 MHz</span></div>
                  <div className="flex justify-between border-b border-white/10 pb-2"><span>Power Range</span><span>100W - 300W</span></div>
                </div>
              </div>
              <button className="w-full py-5 border border-white/20 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-slate-900 transition-all">
                Download Technical Data
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUALITY: Formal Certification --- */}
      <section id="quality" className="py-40 px-6 bg-white border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/3 text-center md:text-left">
            <div className="inline-flex flex-col p-10 border border-slate-200 italic">
               <span className="text-6xl font-black italic tracking-tighter text-slate-900">DNV</span>
               <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-2 text-center">Certified System</span>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-6 italic">Quality & ISO 9001:2015</h2>
            <h3 className="text-3xl font-bold italic text-slate-900 leading-snug mb-8 uppercase tracking-tighter">
              "Trading and production of components and assemblies for microelectronic technologies applications"
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
              <div>Cert No: <span className="text-slate-900">CERT-18142-2006-AQ-ROM-SINCERT</span></div>
              <div>IAF Sector: <span className="text-slate-900">19</span></div>
              <div>Validity: <span className="text-slate-900">21 Dec 2024 – 20 Dec 2027</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACTS: Professional Inquiry --- */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-8">Contact Engineering</h2>
            <p className="text-slate-500 mb-12 max-w-sm italic">
              Access the network for specialized electronic support and aerospace program management.
            </p>
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-2">Office</span>
                <span className="text-sm font-bold uppercase">Roma, Italy</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-2">Email</span>
                <span className="text-sm font-bold uppercase">info@mitec-group.it</span>
              </div>
            </div>
          </div>
          <form className="space-y-8 bg-white p-12 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-2 gap-8">
              <input type="text" placeholder="NAME" className="bg-transparent border-b border-slate-200 py-4 text-[10px] font-bold focus:border-blue-600 outline-none transition-all uppercase" />
              <input type="email" placeholder="EMAIL" className="bg-transparent border-b border-slate-200 py-4 text-[10px] font-bold focus:border-blue-600 outline-none transition-all uppercase" />
            </div>
            <textarea placeholder="PROJECT DETAILS" rows="4" className="w-full bg-transparent border-b border-slate-200 py-4 text-[10px] font-bold focus:border-blue-600 outline-none transition-all uppercase"></textarea>
            <button className="w-full py-5 bg-slate-900 text-white font-black uppercase text-[10px] tracking-[0.4em] hover:bg-blue-600 transition-all">Submit Inquiry</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App