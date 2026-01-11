import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* 📄 PAGINA 1: HOME PAGE - Hero Section */}
      <section className="relative pt-48 pb-32 px-4 bg-gradient-to-b from-[#11142b] to-[#0a0c1a]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.5em] mb-10 block">Microwave Integrated TEChnologies</h2>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            A NETWORK OF SPECIALIZED COMPANIES <br/>
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent italic">TO SUPPORT CUSTOMERS IN ELECTRONIC TECHNOLOGIES</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
            MITECGROUP is a network of companies based in Roma since the year 2000. Our large experience in Space Technology with the Italian National Research Council has allowed us to be involved in several European Space Agency programs[cite: 314, 315].
          </p>
          <div className="flex justify-center gap-6">
            <a href="#contact" className="bg-white text-[#0a0c1a] px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all">Contact Us</a>
            <a href="#technologies" className="border border-white/10 px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all">Discover Tech</a>
          </div>
        </div>
      </section>

      {/* 📄 PAGINA 2: ABOUT US - Chi Siamo & Network */}
      <section id="about" className="py-24 px-4 bg-[#05060f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <h2 className="text-3xl font-black text-white mb-8 italic">Coordinator - Maurizio D'Antoni</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 italic">
                Promoter of MITEC s.r.l. and reference technologist for microwave and space technologies since 1975. Involved in ESA programs, National Research Council projects, and Ministry of Defence technologies [cite: 344-349].
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                  <h4 className="text-blue-500 font-bold uppercase text-[10px] mb-2 tracking-widest">Partner Network</h4>
                  <ul className="space-y-4 text-xs">
                    <li><strong>MITEC S.R.L.</strong> - Technologies Leader & Management [cite: 352, 353]</li>
                    <li><strong>TECNOMEC S.R.L.</strong> - Manufacturer of Advanced PCB [cite: 354, 355]</li>
                    <li><strong>SDS S.R.L.</strong> - Electronic Design, Assembling & Test [cite: 356, 357]</li>
                    <li><strong>FORESTAL S.R.L.</strong> - Specialized manufacturing processes [cite: 358, 359]</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-blue-600/10 rounded-full blur-[100px] absolute -z-10 w-full h-full"></div>
              <div className="p-10 border border-white/10 rounded-[3rem] backdrop-blur-xl bg-[#0a0c1a]/50">
                <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest">Main Experience</h3>
                <ul className="space-y-4 text-xs text-slate-400">
                  <li>• R&D in Advanced Technologies for Military & Space [cite: 361]</li>
                  <li>• T/R Modules for Phased Array Radar Applications [cite: 362]</li>
                  <li>• Development of Passive Antenna for Space Application [cite: 363]</li>
                  <li>• Programs with Universities Research Groups [cite: 364]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📄 PAGINA 3 & 4: MICROWAVE & PROCUREMENT */}
      <section id="microwave" className="py-24 px-4 bg-[#0a0c1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-white italic mb-4 uppercase tracking-tighter">Microwave Technologies</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Comprehensive solutions from initial design through simulation, manufacturing, and testing[cite: 368].</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:border-blue-500 transition-all">
              <h3 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Modules Design</h3>
              <p className="text-xs text-slate-500 mb-6 italic">Custom RF Modules for Telecom, Radar, ECM, and Space applications [cite: 372-377].</p>
              <div className="p-4 bg-black/50 rounded-xl text-[10px] text-blue-400 font-bold uppercase tracking-widest">Wide Band RF Modules Development</div>
            </div>
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:border-blue-500 transition-all">
              <h3 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Simulation</h3>
              <p className="text-xs text-slate-500 mb-6 italic">Thermal control, Electromagnetic, and Thermomechanical stress analysis [cite: 391-394].</p>
              <div className="flex gap-2 flex-wrap">
                {['MW Office', 'ADS', 'CST MW', 'SPICE'].map(s => (
                  <span key={s} className="px-3 py-1 bg-white/5 text-[9px] font-bold text-slate-500 rounded-full">{s}</span>
                ))}
              </div>
            </div>
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:border-blue-500 transition-all">
              <h3 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Manufacturing</h3>
              <p className="text-xs text-slate-500 mb-6 italic">Thin Film on Ceramic, Mixed Multilayers, and Waveguide over 150 GHz [cite: 408-412, 420].</p>
              <div className="p-4 bg-blue-600/10 rounded-xl text-[10px] text-blue-300 font-bold uppercase tracking-widest">Clean Rooms for MW Assembly</div>
            </div>
          </div>

          {/* PROCUREMENT DETAIL */}
          <div id="procurement" className="pt-24 border-t border-white/5">
            <h3 className="text-2xl font-black text-white mb-12 italic uppercase tracking-widest">Microwave Procurement</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Chromium Photolithographic Masks",
                "AlN / Al2O3 Ceramic Substrates",
                "High Dielectric Constant Substrates",
                "Synthetic Diamond Heat Spreaders",
                "Mixed Multilayer PCB (Copper Core)",
                "Waveguide Custom Design",
                "MW Thin Film Circuits",
                "Know-How Transfer Services"
              ].map((p, i) => (
                <div key={i} className="p-6 border border-white/5 bg-white/5 rounded-2xl hover:bg-blue-600 group transition-all">
                  <p className="text-[10px] font-black uppercase text-white tracking-widest">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 📄 PAGINA 5 & 6: VACUUM & PLASMA MATRIX */}
      <section id="vacuum" className="py-24 px-4 bg-[#05060f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 mb-32">
            <div>
              <h2 className="text-4xl font-black text-white mb-10 tracking-tight italic">Vacuum Technologies</h2>
              <div className="space-y-6 text-sm text-slate-400">
                <p>Wide experience in PVD deposition (Sputtering, Evaporation, PECVD) and Reactive Ion Etching equipments[cite: 452, 457, 458].</p>
                <div className="p-6 border-l-4 border-blue-600 bg-white/5">
                   <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Space Simulators</h4>
                   <p className="text-xs italic opacity-60">Thermal-vacuum testing and environmental simulation for space qualification [cite: 464-467].</p>
                </div>
              </div>
            </div>
            <div id="plasma-matrix" className="bg-blue-600 p-12 md:p-20 rounded-[5rem] text-white animate-float relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
               <h3 className="text-4xl font-black mb-8 tracking-tighter italic">PLASMA MATRIX</h3>
               <p className="text-lg mb-10 leading-relaxed font-medium">Customized plasma system for nano-scale surface cleaning and activation[cite: 470, 471].</p>
               <div className="grid grid-cols-2 gap-8 text-[11px] font-bold uppercase tracking-widest opacity-80 border-t border-white/20 pt-8">
                  <div>
                    <span className="block mb-2 text-blue-100">Contamination Reduction</span>
                    <span className="text-3xl font-black">Up to 6x</span>
                  </div>
                  <div>
                    <span className="block mb-2 text-blue-100">Applications</span>
                    <span className="text-3xl font-black italic underline decoration-blue-300">Bio-Medical</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📄 PAGINA 7: QUALITY & CERTIFICATIONS */}
      <section id="quality" className="py-32 px-4 bg-white text-[#0a0c1a]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-6xl font-black mb-10 italic uppercase tracking-tighter">ISO 9001:2015</h2>
              <div className="border-l-[12px] border-blue-600 pl-10 py-4">
                 <p className="text-[10px] font-bold text-slate-400 uppercase mb-4 tracking-widest">Official Scope (IAF: 19)</p>
                 <p className="text-3xl font-black leading-none mb-10 italic">"Trading and production of components and assemblies for microelectronic technologies applications" [cite: 497]</p>
                 <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                   Certificate N: CERT-18142-2006-AQ-ROM-SINCERT [cite: 495]<br/>
                   Valid: 21 Dec 2024 – 20 Dec 2027 [cite: 495]<br/>
                   Body: DNV Business Assurance Italy S.r.l. [cite: 495]
                 </div>
              </div>
            </div>
            <div className="w-64 h-64 bg-[#0a0c1a] text-white rounded-full flex flex-col items-center justify-center p-10 border-[15px] border-blue-600/20">
               <span className="text-4xl font-black italic italic leading-none mb-2">DNV</span>
               <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* 📄 PAGINA 8: CONTACT US */}
      <section id="contact" className="py-32 bg-[#0a0c1a] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-black text-white italic mb-4 uppercase">Contact Us</h2>
             <p className="text-slate-500 text-xs uppercase tracking-[0.4em]">Please fill the form to receive our recent information and news [cite: 526]</p>
          </div>
          <div className="grid md:grid-cols-2 gap-20">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase">Name (required)</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none text-white focus:border-blue-600 transition-all" required />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase">Company</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none text-white focus:border-blue-600 transition-all" />
              </div>
              <div className="sm:col-span-2 space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase">Email Address (required)</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none text-white focus:border-blue-600 transition-all" required />
              </div>
              <div className="sm:col-span-2 space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase">Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none text-white h-32 focus:border-blue-600 transition-all"></textarea>
              </div>
              <button className="sm:col-span-2 bg-blue-600 p-5 rounded-xl text-white font-black uppercase tracking-[0.5em] hover:bg-white hover:text-blue-600 transition-all text-xs">Submit Application</button>
            </form>
            <div className="space-y-12">
               <div>
                  <h4 className="text-blue-500 font-bold uppercase text-[10px] mb-6 tracking-widest">Headquarters</h4>
                  <p className="text-sm text-white font-bold mb-4 uppercase tracking-tighter">Registered: Viale Liegi, 42 – 00198 Roma [cite: 508]</p>
                  <p className="text-sm text-slate-400 font-medium italic">Operational: Via Vicinale dei Colli, 1 – 00040 Rocca di Papa (RM) [cite: 508]</p>
               </div>
               <div className="grid grid-cols-2 gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
                  <div>
                    <span className="block mb-2 text-blue-500 italic">Phone</span>
                    +39 06 41234399 [cite: 510]
                  </div>
                  <div>
                    <span className="block mb-2 text-blue-500 italic">Mobile</span>
                    +39 339 5620331 [cite: 510]
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App