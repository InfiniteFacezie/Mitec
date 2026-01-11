import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0c1a] text-slate-300">
      <Navbar />

      {/* 1. HOME PAGE - Struttura B / Contenuti A */}
      <section id="home" className="pt-48 pb-20 px-4 bg-glow">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">μtec MITEC</h1>
          <h2 className="text-blue-400 text-lg md:text-xl font-bold uppercase tracking-[0.3em] mb-2">
            A NETWORK OF SPECIALIZED COMPANIES TO SUPPORT CUSTOMERS IN ELECTRONIC TECHNOLOGIES
          </h2>
          <p className="text-blue-500 font-bold italic mb-12 uppercase text-sm tracking-widest">Microwave Integrated TEChnologies</p>
          
          <div className="max-w-3xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed space-y-6 mb-16">
            <p>MITECGROUP is a network of companies based in Roma since the year 2000. The large experience in the field of Space Technology with the Italian National Research Council has allowed us to be involved in several European Space Agency programs.</p>
          </div>

          {/* Le 3 Service Cards richieste dal Documento B */}
          <div className="grid md:grid-cols-3 gap-8">
            <a href="#microwave" className="p-8 glass-panel rounded-3xl hover:border-blue-500 transition-all">
              <h3 className="text-white font-bold mb-4">Microwave Technologies</h3>
              <p className="text-xs opacity-60">Design, Simulation & Manufacturing</p>
            </a>
            <a href="#procurement" className="p-8 glass-panel rounded-3xl hover:border-blue-500 transition-all">
              <h3 className="text-white font-bold mb-4">Procurement</h3>
              <p className="text-xs opacity-60">Ceramic Substrates & MMIC Components</p>
            </a>
            <a href="#vacuum" className="p-8 glass-panel rounded-3xl hover:border-blue-500 transition-all">
              <h3 className="text-white font-bold mb-4">Vacuum Technologies</h3>
              <p className="text-xs opacity-60">PVD Systems & Plasma Matrix</p>
            </a>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US - Storia e Coordinatore (Contenuti A) */}
      <section id="about" className="py-24 px-4 bg-[#05060f]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black text-white mb-8 italic">About MITEC Group</h2>
            <p className="text-sm leading-relaxed mb-6 italic">
              "L'esperienza nell'attività di Trasferimento Tecnologico è un punto di forza per nuovi programmi futuri nello scenario internazionale."
            </p>
            <div className="space-y-4 text-sm">
              <p><strong>Coordinator:</strong> Maurizio D'Antoni (Promoter of MITEC s.r.l.)</p>
              <ul className="list-disc pl-5 space-y-2 opacity-70">
                <li>Involved in Space Technologies since 1975 (CNR)</li>
                <li>Reference technologist for ESA programs</li>
                <li>Responsible for Microelectronic Technologies in Elettronica s.p.a.</li>
              </ul>
            </div>
          </div>
          <div className="glass-panel p-8 rounded-3xl">
            <h3 className="text-blue-500 font-bold uppercase text-xs mb-6 tracking-widest">Partners Network</h3>
            <div className="grid grid-cols-1 gap-4 text-xs font-bold uppercase">
              <div className="p-4 border border-white/5 rounded-xl">MITEC S.R.L. - Technologies Leader</div>
              <div className="p-4 border border-white/5 rounded-xl">TECNOMEC S.R.L. - PCB Manufacturing</div>
              <div className="p-4 border border-white/5 rounded-xl">SDS S.R.L. - Microwave Integration</div>
              <div className="p-4 border border-white/5 rounded-xl">FORESTAL S.R.L. - Specialized Manufacturing</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MICROWAVE TECHNOLOGIES (Core Business - Doc B) */}
      <section id="microwave" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 italic uppercase tracking-tighter">Microwave Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h3 className="text-blue-500 font-bold text-xs uppercase tracking-widest">Modules Design</h3>
              <p className="text-xs italic leading-loose">Custom RF Modules for Radar, ECM, and Space applications. Integrated PCB/Package solutions with copper core thermal management.</p>
            </div>
            <div className="space-y-6">
              <h3 className="text-blue-500 font-bold text-xs uppercase tracking-widest">Multiphysic Simulation</h3>
              <p className="text-xs italic leading-loose">EDA SW: MW Office, ADS/Momentum, CST MW Studio, SPICE. Thermal control and thermomechanical stress analysis.</p>
            </div>
            <div className="space-y-6">
              <h3 className="text-blue-500 font-bold text-xs uppercase tracking-widest">Manufacturing</h3>
              <p className="text-xs italic leading-loose">Thin Film on Ceramic, Organic Mixed Multilayers, and Waveguide manufacturing over 150 GHz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCUREMENT (Contenuti A) */}
      <section id="procurement" className="py-24 px-4 bg-[#05060f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-12 italic tracking-widest">MICROWAVE PROCUREMENT</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-bold uppercase">
            {[
              "Chromium Photolithographic Masks",
              "AlN / Al2O3 Ceramic Substrates",
              "High Dielectric Constant Substrates",
              "Synthetic Diamond Heat Spreaders",
              "Mixed Multilayer PCB",
              "Waveguide Custom Design",
              "Know-How Transfer"
            ].map(item => (
              <div key={item} className="p-6 border border-white/5 rounded-2xl hover:bg-blue-600 transition-colors">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VACUUM & PLASMA MATRIX (Riposizionamento B) */}
      <section id="vacuum" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-white mb-8 italic">Vacuum Technologies</h2>
              <p className="text-sm opacity-70 mb-8 italic">Wide experience on processes of deposition under vacuum by sputtering, evaporation and PECVD.</p>
              <ul className="text-xs space-y-3 font-bold uppercase text-blue-400">
                <li>• PVD Vacuum Equipments</li>
                <li>• Space Simulators Technologies</li>
                <li>• Vacuum Brazing Ovens</li>
              </ul>
            </div>
            <div className="bg-blue-600 p-12 rounded-[3rem] text-white">
              <h3 className="text-3xl font-black mb-6 italic">Plasma Matrix</h3>
              <p className="text-sm font-medium mb-6 italic">"Surface Cleaning System: Reducing contamination up to six fold compared to traditional wet cleaning methods."</p>
              <a href="#contact" className="text-xs font-black uppercase tracking-widest border-b-2 border-white pb-1">View Specifications</a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. QUALITY - DNV COMPLIANCE (OBBLIGATORIO) */}
      <section id="quality" className="py-24 px-4 bg-white text-[#0a0c1a]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8 italic uppercase tracking-tighter">ISO 9001:2015</h2>
          <div className="p-10 border-[10px] border-blue-600/10 rounded-full inline-block mb-10">
            <span className="text-4xl font-black italic">DNV</span>
          </div>
          <div className="text-left max-w-3xl mx-auto border-l-4 border-blue-600 pl-8">
            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Official Certification Scope (IAF: 19)</p>
            <p className="text-2xl font-black italic mb-8">
              "Trading and production of components and assemblies for microelectronic technologies applications"
            </p>
            <div className="text-[11px] font-bold uppercase tracking-widest opacity-60">
              Certificate No: CERT-18142-2006-AQ-ROM-SINCERT <br/>
              Validity: 21 Dec 2024 – 20 Dec 2027
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App