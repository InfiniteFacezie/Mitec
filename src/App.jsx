import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0c1a] font-sans text-slate-300">
      <Navbar />

      {/* 🏠 HOME - Hero Statement & Intro */}
      <section className="relative pt-48 pb-32 px-4 bg-gradient-to-b from-[#11142b] to-[#0a0c1a]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
            A network of specialized companies supporting customers in <span className="text-blue-500">advanced electronic technologies.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            MITECGROUP is a network of specialized companies based in Rome since the year 2000, operating in the field of advanced electronic technologies for Space, Defense and Microwave applications. 
            The Group has developed high–performance RF modules, microwave devices, thin film and ceramic circuits, organic multilayer substrates and advanced vacuum systems for European Space Agency programs and national and international defense applications.
          </p>
        </div>
      </section>

      {/* 🌐 MITECGROUP - The Network & Management */}
      <section id="network" className="py-24 px-4 border-t border-white/5 bg-[#05060f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">The Network</h2>
              <h3 className="text-3xl font-black text-white mb-6">A Coordinated Technological Platform</h3>
              <p className="text-slate-400 mb-6 font-light">
                MITECGROUP is composed of several specialized companies operating as a coordinated technological platform supporting complex electronic programs. The Group combines design, manufacturing, integration and test capabilities under a single technological governance.
              </p>
              <div className="space-y-4">
                {['MITEC S.r.l.', 'TECNOMEC S.r.l.', 'SDS S.r.l.', 'FORESTAL S.r.l.'].map(c => (
                  <div key={c} className="p-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white uppercase tracking-widest text-xs">
                    {c}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-600/5 p-10 rounded-[3rem] border border-blue-500/20">
              <h2 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Management</h2>
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Maurizio D’Antoni</h3>
              <p className="text-blue-400 text-xs font-bold uppercase mb-6 tracking-widest italic">Coordinator of MITECGROUP</p>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 italic">
                Promoter of MITEC s.r.l. and reference technologist for microwave and space technologies since 1975. 
                He has been involved in European Space Agency programs, Italian National Research Council projects and Ministry of Defence funded technologies.
              </p>
              <div className="grid grid-cols-1 gap-3">
                <div className="text-[10px] p-3 bg-white/5 rounded-lg border border-white/5 leading-relaxed">
                  <strong className="text-white block mb-1 uppercase">MITEC S.r.l.</strong> Technology leader and manager of common programs of the group.
                </div>
                <div className="text-[10px] p-3 bg-white/5 rounded-lg border border-white/5 leading-relaxed">
                  <strong className="text-white block mb-1 uppercase">TECNOMEC S.r.l.</strong> Manufacturer of advanced technology printed circuit boards.
                </div>
                <div className="text-[10px] p-3 bg-white/5 rounded-lg border border-white/5 leading-relaxed">
                  <strong className="text-white block mb-1 uppercase">SDS S.r.l.</strong> Electronic design, assembling and test of microwave integrations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⚙️ TECHNOLOGIES - Microwave & Vacuum */}
      <section id="technologies" className="py-24 px-4 bg-[#0a0c1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-16 text-center italic">Technologies</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Microwave */}
            <div className="p-12 rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10">
              <h3 className="text-2xl font-black text-blue-500 mb-6">Microwave Technologies</h3>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed italic">
                MITEC designs and manufactures RF and microwave modules for telecommunications, radar, ECM and space applications. 
                All RF parts, including filters on alumina substrates and organic RF PCBs, are designed and supplied as single components or assembled to customer specifications.
              </p>
              <div className="grid grid-cols-2 gap-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                <div className="p-3 border border-white/5 rounded-lg hover:border-blue-500/50 transition-all">• Telecom systems</div>
                <div className="p-3 border border-white/5 rounded-lg hover:border-blue-500/50 transition-all">• Radar technologies</div>
                <div className="p-3 border border-white/5 rounded-lg hover:border-blue-500/50 transition-all">• ECM</div>
                <div className="p-3 border border-white/5 rounded-lg hover:border-blue-500/50 transition-all">• Space applications</div>
              </div>
            </div>

            {/* Vacuum */}
            <div className="p-12 rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10">
              <h3 className="text-2xl font-black text-blue-500 mb-6">Vacuum Technologies</h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex gap-4 items-start"><span className="text-blue-500 font-black">/</span> Wide experience in PVD deposition processes.</li>
                <li className="flex gap-4 items-start"><span className="text-blue-500 font-black">/</span> Manufacturing of PVD vacuum equipments.</li>
                <li className="flex gap-4 items-start"><span className="text-blue-500 font-black">/</span> Reactive ion etching systems.</li>
                <li className="flex gap-4 items-start"><span className="text-blue-500 font-black">/</span> Space simulators technologies management.</li>
              </ul>
            </div>
          </div>

          {/* Design & Manufacturing details */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="text-white font-bold text-xs uppercase mb-4 tracking-widest">Multiphysics Simulation</h4>
              <p className="text-xs leading-relaxed opacity-60 italic">Thermal control, Electromagnetic simulation, Thermomechanical analysis and Combined stress analysis.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="text-white font-bold text-xs uppercase mb-4 tracking-widest">RF & Electronic Design</h4>
              <p className="text-xs leading-relaxed opacity-60 italic">Microwave & RF design using EDA tools (MW Office, ADS/Momentum, CST Microwave Studio, SPICE).</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="text-white font-bold text-xs uppercase mb-4 tracking-widest">Manufacturing</h4>
              <p className="text-xs leading-relaxed opacity-60 italic">Thin film circuits, Organic mixed multilayers, Microelectronic assemblies and MW packages integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 📦 PRODUCTS - Plasma Matrix */}
      <section id="products" className="py-24 px-4 bg-[#05060f]">
        <div className="max-w-4xl mx-auto bg-blue-600/10 border border-blue-500/30 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 text-center">
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-6 italic">Featured Product</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter italic">PLASMA MATRIX</h3>
            <p className="text-lg text-blue-100/70 mb-12">Customized plasma system for surface cleaning and activation at nano-scale.</p>
            <div className="grid md:grid-cols-2 gap-12 text-left text-sm">
              <div>
                <h4 className="text-white font-bold uppercase mb-4 text-xs tracking-widest">Benefits</h4>
                <ul className="space-y-2 opacity-70">
                  <li>• Ultra-clean surfaces without altering bulk</li>
                  <li>• Contamination reduction up to 6x</li>
                  <li>• Fully controllable process parameters</li>
                  <li>• Suitable for 2D and 3D substrates</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase mb-4 text-xs tracking-widest">Applications</h4>
                <ul className="space-y-2 opacity-70">
                  <li>• Nano-scale cleaning & Activation</li>
                  <li>• Film deposition preparation</li>
                  <li>• Outgassing (removing oxidation)</li>
                  <li>• Medical sterilization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🧪 CAPABILITIES - Materials & Production */}
      <section id="capabilities" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-white mb-10 tracking-tight italic">Materials & Substrates</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Aluminum Oxide", "Aluminum Nitride", "CVD Diamond", 
                  "Chromium photomasks", "High dielectric substrates", "MW thin film circuits"
                ].map(m => (
                  <div key={m} className="p-4 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase text-slate-500">
                    {m}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-white mb-10 tracking-tight italic">RF Machining & Waveguides</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                High precision machining and assembling, galvanic plating and electroforming for space components. 
                Manufacturing of waveguides for space applications over 150 GHz.
              </p>
              <div className="bg-[#0a0c1a] border border-blue-500/20 p-6 rounded-2xl text-[11px] font-bold italic text-blue-400">
                Single piece waveguides produced by electroerosion processes.
              </div>
            </div>
          </div>
          
          <div className="mt-20 p-12 bg-[#11142b] rounded-[3rem] border border-white/5 text-center">
             <h3 className="text-white font-black text-2xl mb-8 uppercase tracking-widest">Production & Test Facilities</h3>
             <div className="flex flex-wrap justify-center gap-12 text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
                <span>Clean Rooms</span>
                <span>Medium Production Lines</span>
                <span>Test & Qualification</span>
             </div>
          </div>
        </div>
      </section>

      {/* 🛡️ QUALITY - ISO 9001 */}
      <section id="quality" className="py-32 px-4 bg-white text-[#0a0c1a]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-blue-700 font-black uppercase tracking-widest text-[10px] mb-4 italic underline decoration-blue-600 underline-offset-8">Quality System</h2>
            <h3 className="text-6xl font-black mb-10 tracking-tighter italic uppercase">ISO 9001:2015</h3>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <p className="text-[10px] font-bold uppercase text-slate-400 mb-2">Official Scope (IAF: 19)</p>
                <p className="text-2xl font-black italic uppercase leading-none">
                  Trading and production of components and assemblies for microelectronic technologies applications
                </p>
              </div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                Certification body: <span className="text-[#0a0c1a]">DNV</span><br/>
                Certificate N: <span className="text-[#0a0c1a]">CERT-18142-2006-AQ-ROM-SINCERT</span><br/>
                Valid: 21 Dec 2024 – 20 Dec 2027
              </div>
            </div>
          </div>
          <div className="w-56 h-56 bg-[#0a0c1a] rounded-full flex items-center justify-center text-white border-[12px] border-blue-600/10">
            <div className="text-center italic">
              <span className="text-4xl font-black block leading-none">DNV</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Certified</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App