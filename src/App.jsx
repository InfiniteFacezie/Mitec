import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1C1E] font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* --- 01. HERO SECTION: Authority & Mission --- */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 z-0 hidden lg:block" />
        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4">
              <span className="w-12 h-px bg-blue-600"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Global Space & Defense Partner</span>
            </div>
            <h1 className="text-8xl md:text-[10rem] font-black leading-[0.8] tracking-tighter text-slate-900 italic">
              &mu;tec <br />
              <span className="text-blue-600 not-italic">MITEC</span>
            </h1>
            <div className="border-l-4 border-slate-900 pl-8 py-2">
              <h2 className="text-xl font-bold uppercase tracking-widest text-slate-800 mb-2">
                A NETWORK OF SPECIALIZED COMPANIES TO SUPPORT CUSTOMERS IN ELECTRONIC TECHNOLOGIES
              </h2>
              <p className="font-mono text-xs text-slate-400 uppercase tracking-widest">Microwave Integrated TEChnologies</p>
            </div>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed italic">
              Based in Rome since 2000, MITECGROUP leverages extensive experience in <span className="text-slate-900 font-semibold">Space Technology</span> with the <span className="text-slate-900">CNR</span> and the <span className="text-slate-900">ESA</span>.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-blue-700 transition-all">
                Inquiry Engineering
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000" 
              alt="Microchip Technology" 
              className="w-full aspect-square object-cover grayscale border border-slate-200 shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 hidden md:block">
              <p className="text-4xl font-black italic tracking-tighter">25+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 02. ABOUT: The Leadership Context --- */}
      <section id="about" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12">
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">01 / Identity</h2>
            <p className="text-3xl font-bold italic leading-tight text-slate-900">
              "L'esperienza nell'attività di Trasferimento Tecnologico è un punto di forza per nuovi programmi futuri nello scenario internazionale."
            </p>
            <div className="aspect-video overflow-hidden border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Lab Environment"
              />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-slate-50 p-12 border border-slate-100">
              <h3 className="font-mono text-[10px] text-slate-400 mb-2 uppercase tracking-widest">Coordinator</h3>
              <p className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Maurizio D'Antoni</p>
              <ul className="space-y-6 text-slate-600">
                <li className="flex gap-4 border-b border-slate-200 pb-4">
                  <span className="font-bold text-blue-600 font-mono italic">1975</span>
                  <span className="text-sm">Involved in Space Technologies since 1975 (CNR)</span>
                </li>
                <li className="flex gap-4 border-b border-slate-200 pb-4">
                  <span className="font-bold text-blue-600 font-mono italic">ESA</span>
                  <span className="text-sm">Reference technologist for European Space Agency programs</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-blue-600 font-mono italic">ELT</span>
                  <span className="text-sm uppercase font-bold text-xs tracking-tight">Responsible for Microelectronic Technologies in Elettronica s.p.a.</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 mt-12">
              {["MITEC S.R.L.", "TECNOMEC S.R.L.", "SDS S.R.L.", "FORESTAL S.R.L."].map(p => (
                <div key={p} className="p-6 bg-white text-[10px] font-black uppercase tracking-widest text-center text-slate-400">{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 03. MICROWAVE: Precision Engineering --- */}
      <section id="microwave" className="py-32 bg-[#0F1115] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] mb-24 text-center">02 / Microwave Technologies</h2>
          <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { 
                label: "Modules Design", 
                title: "Custom RF Solutions", 
                desc: "Custom RF Modules for Radar, ECM, and Space applications. Integrated PCB/Package solutions with copper core thermal management.",
                img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800"
              },
              { 
                label: "Multiphysic Simulation", 
                title: "EDA Validation", 
                desc: "EDA SW: MW Office, ADS/Momentum, CST MW Studio, SPICE. Thermal control and thermomechanical stress analysis.",
                img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800"
              },
              { 
                label: "Manufacturing", 
                title: "> 150 GHz Operations", 
                desc: "Thin Film on Ceramic, Organic Mixed Multilayers, and Waveguide manufacturing over 150 GHz.",
                img: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=800"
              }
            ].map((tech, i) => (
              <div key={i} className="bg-[#0F1115] p-12 hover:bg-white/[0.03] transition-all group">
                <img src={tech.img} alt={tech.title} className="w-full aspect-video object-cover grayscale mb-10 opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 border border-white/10" />
                <span className="font-mono text-[10px] text-blue-500 block mb-6 uppercase tracking-widest">[{tech.label}]</span>
                <h4 className="text-2xl font-bold mb-6 italic uppercase">{tech.title}</h4>
                <p className="text-sm text-slate-400 leading-loose italic">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 04. PROCUREMENT: Material Science Grid --- */}
      <section id="procurement" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline border-b-2 border-slate-900 pb-12 mb-1">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter text-slate-900">Procurement</h2>
            <span className="font-mono text-[10px] text-slate-400 mt-4 uppercase tracking-[0.4em]">Advanced Materials Supply Chain</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {[
              "Chromium Photolithographic Masks", "AlN / Al2O3 Ceramic Substrates", "High Dielectric Constant Substrates", "Synthetic Diamond Heat Spreaders", 
              "Mixed Multilayer PCB", "Waveguide Custom Design", "Know-How Transfer", "MMIC Components"
            ].map(item => (
              <div key={item} className="p-10 bg-white text-[10px] font-bold uppercase tracking-widest text-center flex items-center justify-center hover:text-blue-600 transition-colors h-40">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 05. VACUUM & PRODUCTS: The Tech Hub --- */}
      <section id="vacuum" className="py-32 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-stretch">
            <div className="space-y-12">
              <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">03 / Vacuum Technologies</h2>
              <p className="text-3xl font-bold italic text-slate-900 leading-tight">
                Decades of experience in deposition under vacuum by sputtering, evaporation and PECVD.
              </p>
              <div className="grid gap-px bg-slate-200 border border-slate-200">
                {["PVD Vacuum Equipments", "Space Simulators Technologies", "Vacuum Brazing Ovens"].map(t => (
                  <div key={t} className="p-8 bg-white flex justify-between items-center group cursor-default">
                    <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-blue-600 transition-colors">{t}</span>
                    <div className="w-12 h-px bg-slate-200 group-hover:bg-blue-600 transition-all"></div>
                  </div>
                ))}
              </div>
              <img src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1000" alt="Space Sim" className="w-full grayscale border border-slate-200" />
            </div>
            <div className="bg-slate-900 text-white p-16 flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 text-white/5 font-black text-9xl italic select-none pointer-events-none">PLASMA</div>
               <div className="relative z-10">
                <h3 className="text-5xl font-black mb-8 italic italic tracking-tighter uppercase">Plasma Matrix</h3>
                <p className="text-sm font-medium mb-12 opacity-60 italic leading-relaxed max-w-md">
                  "Surface Cleaning System: Reducing contamination up to six fold compared to traditional wet cleaning methods."
                </p>
                <div className="space-y-6 mb-16 font-mono text-[10px] border-l border-white/20 pl-8">
                  <div className="flex flex-col">
                    <span className="text-blue-500 mb-1">UNITS</span>
                    <span className="uppercase font-bold tracking-widest text-lg">Standard / "S" Model</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-blue-500 mb-1">GENERATOR</span>
                    <span className="uppercase font-bold tracking-widest text-lg">13.56 MHz (100W-300W)</span>
                  </div>
                </div>
               </div>
               <button className="w-full py-6 border-2 border-white/20 text-[10px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-slate-900 transition-all relative z-10">
                 Request Technical Datasheet
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 06. QUALITY: Formal Verification --- */}
      <section id="quality" className="py-40 px-6 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/3">
            <div className="p-16 border-4 border-slate-900 inline-block text-center relative group">
              <span className="text-8xl font-black italic tracking-tighter text-slate-900">DNV</span>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 text-[8px] font-black uppercase tracking-widest">Certified</div>
            </div>
          </div>
          <div className="lg:w-2/3 space-y-8">
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">Quality & Certification</h2>
            <h3 className="text-4xl font-bold italic text-slate-900 leading-tight uppercase tracking-tighter">
              "Trading and production of components and assemblies for microelectronic technologies applications"
            </h3>
            <div className="grid sm:grid-cols-2 gap-12 pt-8 border-t border-slate-100 font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em]">
              <div>
                <p className="text-slate-900 font-bold mb-2">ISO 9001:2015</p>
                <p>Cert: CERT-18142-2006-AQ-ROM-SINCERT</p>
              </div>
              <div>
                <p className="text-slate-900 font-bold mb-2">Validity & Scope</p>
                <p>IAF: 19 | Thru Dec 20, 2027</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 07. CONTACT: Engineering Inquiry --- */}
      <section id="contact" className="py-32 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <h2 className="text-6xl font-black italic uppercase tracking-tighter text-slate-900 leading-none">Connect <br/> with Mitec</h2>
            <p className="text-slate-500 max-w-sm italic">Access our specialized network for aerospace and microelectronic programs.</p>
            <div className="space-y-8">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest">Headquarters</span>
                <span className="text-lg font-bold uppercase tracking-tighter">Roma, Italy</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest">Direct Line</span>
                <span className="text-lg font-bold uppercase tracking-tighter">info@mitec-group.it</span>
              </div>
            </div>
          </div>
          <form className="bg-white p-12 border border-slate-200 shadow-xl space-y-10">
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-blue-600 outline-none uppercase font-bold text-sm transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-blue-600 outline-none uppercase font-bold text-sm transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Inquiry Details</label>
              <textarea rows="4" className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-blue-600 outline-none uppercase font-bold text-sm transition-all"></textarea>
            </div>
            <button className="w-full py-6 bg-slate-900 text-white font-black uppercase text-[10px] tracking-[0.5em] hover:bg-blue-600 transition-all">Submit Technical Request</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App