import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0c1a] font-sans text-slate-300">
      <Navbar />

      {/* HOME PAGE - HERO SECTION [cite: 304-316] */}
      <section className="relative pt-48 pb-32 px-4 bg-gradient-to-b from-[#11142b] to-[#0a0c1a]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            μtec MITEC [cite: 308]
          </h1>
          <h2 className="text-blue-400 text-sm md:text-xl font-bold uppercase tracking-[0.2em] mb-4">
            A NETWORK OF SPECIALIZED COMPANIES TO SUPPORT CUSTOMERS IN ELECTRONIC TECHNOLOGIES [cite: 310]
          </h2>
          <p className="text-blue-500 font-bold italic mb-10 tracking-widest uppercase text-xs">
            Microwave Integrated TEChnologies [cite: 312]
          </p>
          
          <div className="max-w-4xl mx-auto text-slate-400 leading-relaxed space-y-6 text-sm md:text-base">
            <p>
              MITECGROUP is a network of companies based in Roma since the year 2000. 
              The large experience in the field of Space Technology with the Italian National Research Council 
              has allowed us to be involved in several European Space Agency programs. [cite: 314, 315]
            </p>
            <p>
              In the field of Microelectronics applied to Microwave Telecommunication Systems, we have developed 
              new devices based on thin film technology and ceramic substrates as well as new organic 
              multilayer circuits boards. [cite: 316]
            </p>
          </div>
          
          {/* CTA [cite: 335] */}
          <div className="mt-12 flex justify-center gap-6">
            <a href="#about" className="bg-white text-[#0a0c1a] px-8 py-3 rounded-full font-bold text-xs uppercase hover:bg-blue-500 hover:text-white transition-all">
              Discover more
            </a>
            <a href="#contact" className="border border-white/20 px-8 py-3 rounded-full font-bold text-xs uppercase hover:bg-white/10 transition-all">
              Contact us
            </a>
          </div>
        </div>
      </section>

      {/* 3 SERVICE CARDS (HOME) [cite: 317-330] */}
      <section className="py-24 px-4 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          { title: "Microwave Technologies", link: "#microwave", items: ["Modules Design", "Multiphysic Simulation", "Manufacturing"] },
          { title: "Procurement", link: "#procurement", items: ["Ceramic Substrates", "Thin Film Circuits", "Diamond Heat Spreaders"] },
          { title: "Vacuum Technologies", link: "#vacuum", items: ["PVD Equipment", "Space Simulators", "Plasma Cleaning Systems"] }
        ].map((card, i) => (
          <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:border-blue-500/50 transition-all group">
            <h3 className="text-white font-black text-xl mb-6 italic">{card.title}</h3>
            <ul className="text-xs space-y-3 text-slate-500 mb-8 uppercase tracking-widest font-bold">
              {card.items.map((item, idx) => <li key={idx}>• {item}</li>)}
            </ul>
            <a href={card.link} className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.2em] group-hover:underline">Explore →</a>
          </div>
        ))}
      </section>

      {/* MICROWAVE TECHNOLOGIES - PILLAR SECTIONS [cite: 365-412] */}
      <section id="microwave" className="py-32 px-4 bg-[#05060f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 italic tracking-tighter">Microwave Technologies [cite: 365]</h2>
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-blue-500 font-bold uppercase text-xs mb-6 tracking-widest">Custom Design of RF Modules [cite: 372]</h3>
              <p className="text-sm leading-relaxed mb-8 italic text-slate-400">
                All RF parts as Filters on alumina substrates and organic RF PCB are normally designed 
                and supplied as single components or assembled to customer specifications. [cite: 373]
              </p>
              <div className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase text-slate-500">
                <div className="p-3 border border-white/5 rounded-lg italic tracking-widest">• Radar Technologies [cite: 375]</div>
                <div className="p-3 border border-white/5 rounded-lg italic tracking-widest">• ECM Countermeasures [cite: 376]</div>
              </div>
            </div>
            {/* MULTIPHYSIC SIMULATION [cite: 388-399] */}
            <div className="p-10 bg-white/5 rounded-[3rem] border border-blue-500/20">
              <h3 className="text-white font-bold text-xl mb-6 italic">Multiphysic Simulation [cite: 388]</h3>
              <ul className="text-xs space-y-4 text-slate-400 mb-10 italic">
                <li>• Thermal Control of Electronic Devices [cite: 391]</li>
                <li>• Electromagnetic Simulation [cite: 392]</li>
                <li>• Thermomechanical Simulation [cite: 393]</li>
              </ul>
              <div className="flex gap-4 border-t border-white/10 pt-6 text-[10px] font-black text-blue-500">
                <span>MW OFFICE</span> <span>ADS/MOMENTUM</span> <span>CST MW STUDIO</span> [cite: 396-398]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLASMA MATRIX PRODUCT SPOTLIGHT [cite: 468-489] */}
      <section id="plasma-matrix" className="py-32 px-4">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter">PLASMA MATRIX [cite: 471]</h2>
            <p className="text-lg md:text-2xl font-medium mb-10 opacity-90 leading-relaxed italic">
              Customized plasma system for surface cleaning and activation. [cite: 470]
            </p>
            <div className="grid md:grid-cols-2 gap-12 text-sm border-t border-white/20 pt-10">
              <div>
                <h4 className="font-black uppercase tracking-widest mb-4">Key Benefits [cite: 472]</h4>
                <ul className="space-y-2 opacity-80 italic">
                  <li>• Contamination reduction up to six fold [cite: 474]</li>
                  <li>• Suitable for 2D or 3D substrates [cite: 476]</li>
                  <li>• Fully controllable process parameters [cite: 475]</li>
                </ul>
              </div>
              <div>
                <h4 className="font-black uppercase tracking-widest mb-4">Applications [cite: 477]</h4>
                <ul className="space-y-2 opacity-80 italic">
                  <li>• Nano-scale cleaning [cite: 478]</li>
                  <li>• Surface activation [cite: 479]</li>
                  <li>• Medical sterilization [cite: 483]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY & CERTIFICATIONS [cite: 490-503] */}
      <section id="quality" className="py-32 px-4 bg-white text-[#0a0c1a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-6xl font-black mb-10 italic tracking-tighter uppercase">ISO 9001:2015 [cite: 492]</h2>
            <div className="border-l-[12px] border-blue-600 pl-10 py-4">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-4 tracking-widest">Official Scope (IAF: 19) </p>
              <p className="text-3xl font-black italic uppercase leading-none mb-10">
                Trading and production of components and assemblies for microelectronic technologies applications 
              </p>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                Certificate N: CERT-18142-2006-AQ-ROM-SINCERT [cite: 495]<br/>
                Validity: 21 Dec 2024 – 20 Dec 2027 [cite: 495]
              </div>
              <button className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold uppercase text-[10px] hover:bg-[#0a0c1a] transition-all shadow-xl shadow-blue-200">
                Download DNV Certificate (PDF) [cite: 503]
              </button>
            </div>
          </div>
          <div className="w-56 h-56 bg-[#0a0c1a] text-white rounded-full flex flex-col items-center justify-center p-10 border-[15px] border-blue-600/10">
            <span className="text-4xl font-black italic leading-none mb-2">DNV</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-50">Certified [cite: 547]</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App