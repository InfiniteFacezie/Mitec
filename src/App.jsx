import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0c1a] font-sans text-slate-300 overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-32 px-4 animate-nebula bg-gradient-to-br from-[#0a0c1a] via-[#161b3d] to-[#0a0c1a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full border border-blue-400/20 bg-blue-400/5 text-blue-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-10">
            Microelectronics Technologies & Equipment
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] text-white">
            Beyond the <br/>
            <span className="bg-gradient-to-r from-blue-100 to-blue-500 bg-clip-text text-transparent italic">Atmosphere.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-14 font-light leading-relaxed">
            Dal 2000, un network d'eccellenza a supporto delle tecnologie elettroniche per i settori <span className="text-white font-bold">Space, Defense & Bio-Medical.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#tecnologie" className="bg-white text-[#0a0c1a] px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all shadow-2xl">
              Explore Tech
            </a>
            <a href="#qualita" className="border border-white/10 backdrop-blur-md px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
              ISO 9001 Cert
            </a>
          </div>
        </div>
      </section>

      {/* STATS SECTION (Dal documento: Heritage & Network) */}
      <section className="relative z-10 -mt-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#11142b]/80 backdrop-blur-2xl p-10 rounded-[2rem] border border-white/5 shadow-2xl text-center">
          <div>
            <div className="text-3xl font-black text-white">2000</div>
            <div className="text-[10px] uppercase tracking-widest text-blue-400 mt-2">Established</div>
          </div>
          <div className="border-l border-white/5">
            <div className="text-3xl font-black text-white">ESA</div>
            <div className="text-[10px] uppercase tracking-widest text-blue-400 mt-2">Program Partner</div>
          </div>
          <div className="border-l border-white/5">
            <div className="text-3xl font-black text-white">CNR</div>
            <div className="text-[10px] uppercase tracking-widest text-blue-400 mt-2">Heritage</div>
          </div>
          <div className="border-l border-white/5">
            <div className="text-3xl font-black text-white">4</div>
            <div className="text-[10px] uppercase tracking-widest text-blue-400 mt-2">Companies Network</div>
          </div>
        </div>
      </section>

      {/* AREE DI COMPETENZA (Struttura esatta MATERIALE PER SITO.doc) */}
      <section id="tecnologie" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Microwave Section */}
            <div className="group relative bg-gradient-to-b from-white/5 to-transparent p-12 rounded-[3rem] border border-white/10 hover:border-blue-500/50 transition-all">
              <h3 className="text-3xl font-black text-white mb-6">Microwave Technologies</h3>
              <ul className="space-y-4 text-sm text-slate-400 leading-relaxed">
                <li><strong className="text-blue-400">Modules Design:</strong> RF Modules per Telecomunicazioni, Radar, ECM e applicazioni Spaziali.</li>
                <li><strong className="text-blue-400">Multiphysic Simulation:</strong> Analisi Termica, Elettromagnetica e Termomeccanica.</li>
                <li><strong className="text-blue-400">Advanced Materials:</strong> Diamond Heat Spreaders per dissipazione MMIC e substrati Mixed Multilayer PCB.</li>
                <li><strong className="text-blue-400">Millimeter Waves:</strong> Custom design per guide d'onda millimetriche.</li>
              </ul>
            </div>

            {/* Vacuum Section */}
            <div className="group relative bg-gradient-to-b from-white/5 to-transparent p-12 rounded-[3rem] border border-white/10 hover:border-blue-500/50 transition-all">
              <h3 className="text-3xl font-black text-white mb-6">Vacuum Technologies</h3>
              <ul className="space-y-4 text-sm text-slate-400 leading-relaxed">
                <li><strong className="text-blue-400">PVD Processes:</strong> Deposizione in vuoto tramite Sputtering, Evaporazione e PECVD.</li>
                <li><strong className="text-blue-400">Equipments:</strong> Realizzazione sistemi custom PVD e Reactive Ion Etching.</li>
                <li><strong className="text-blue-400">Space Simulators:</strong> Gestione tecnologica di simulatori d'ambiente spaziale.</li>
                <li><strong className="text-blue-400">Plasma Matrix:</strong> Sistemi per pulizia superficiale nano-scale e sterilizzazione medicale.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCUREMENT SECTION (Lista materiali doc) */}
      <section className="py-24 bg-[#05060f]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-white text-3xl font-black mb-16 italic">Specialized Procurement</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Chromium Photolithographic Masks",
              "Aluminum Nitride (AlN) Substrates",
              "Aluminum Oxide (Al2O3) Substrates",
              "Barium Titanate / Quartz",
              "MW Thin Film Circuits",
              "Diamond Heat Spreaders",
              "Mixed Multilayer PCB",
              "Vacuum Brazing Services"
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-600 transition-all group">
                <p className="text-xs font-bold text-white group-hover:text-white uppercase tracking-widest">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY (ISO 9001) */}
      <section id="qualita" className="py-32 bg-white text-[#0a0c1a] rounded-[5rem] relative z-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-blue-700 font-bold uppercase tracking-widest text-[10px] mb-6">Certifications</h2>
            <h3 className="text-5xl font-black mb-8 italic tracking-tighter">ISO 9001:2015 Standards.</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Certificato da <strong>DNV</strong> per il trading e la produzione di componenti microelettronici (IAF: 19).
            </p>
            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-600">
              <span className="font-mono text-blue-900 font-bold">CERT-18142-2006-AQ-ROM-SINCERT</span>
            </div>
          </div>
          <div className="w-64 h-64 rounded-full bg-[#0a0c1a] flex flex-col items-center justify-center p-8 text-center text-white border-[10px] border-blue-600/10">
            <span className="text-2xl font-black text-blue-500 italic">ISO 9001</span>
          </div>
        </div>
      </section>

      {/* MAILING LIST (Dalla HOME_PAGE.doc) */}
      <section className="py-32 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6 uppercase">Apply to Mailing List</h2>
          <p className="mb-12 text-blue-100 opacity-80 uppercase tracking-widest text-xs">Stay in touch for our recent informations and news</p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="NAME" className="bg-white/10 border border-white/20 p-4 rounded-xl outline-none placeholder:text-blue-200" />
            <input type="text" placeholder="COMPANY" className="bg-white/10 border border-white/20 p-4 rounded-xl outline-none placeholder:text-blue-200" />
            <input type="email" placeholder="E-MAIL ADDRESS" className="md:col-span-2 bg-white/10 border border-white/20 p-4 rounded-xl outline-none placeholder:text-blue-200" />
            <button className="md:col-span-2 bg-white text-blue-600 p-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#0a0c1a] hover:text-white transition-all">Submit Request</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App