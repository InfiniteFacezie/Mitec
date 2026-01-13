import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E4E4E7] font-sans selection:bg-cyan-500/30">
      <Navbar />

      {/* --- 01. HERO SECTION (60/40 Split) --- */}
      <section id="home" className="relative pt-32 pb-20 px-6 lg:px-12 border-b border-white/5 overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 relative z-10">
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-cyan-950/30 border border-cyan-500/30 rounded-full">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em]">Aerospace-Grade Precision</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter text-white uppercase italic">
              &mu;tec <span className="text-cyan-500 not-italic">MITEC</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-tight font-medium">
              Precision PCB Design & Manufacturing for Aerospace. <br/>
              <span className="text-white italic">Multi-layer boards up to 32 layers, ±25&mu;m tolerance.</span>
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all rounded-sm shadow-[0_0_20px_rgba(8,145,178,0.3)]">
                Request PCB Quote
              </button>
              <button className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all rounded-sm">
                View Capabilities
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            {/* Visual: Technical PCB Detail (Placeholder da Unsplash specifico) */}
            <div className="relative overflow-hidden border border-white/10 rounded-xl bg-slate-900 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=1200" 
                alt="Technical PCB Trace Detail" 
                className="w-full aspect-[4/5] object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            </div>
            {/* Data Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-[#18181B] border border-white/10 p-6 rounded-lg backdrop-blur-xl">
              <p className="text-3xl font-black text-white italic tracking-tighter">99.8%</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-cyan-500">Quality Pass Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 02. TRUST BAR (Key Stats) --- */}
      <section className="py-12 px-6 bg-[#0F0F0F] border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          {[
            { label: "Experience", val: "25+ Years" },
            { label: "Completed Projects", val: "500+" },
            { label: "Compliance", val: "ISO 9001:2015" },
            { label: "Standard", val: "AS9100 Certified" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start">
              <span className="font-mono text-[10px] text-cyan-500 uppercase tracking-widest mb-1">{stat.label}</span>
              <span className="text-xl font-bold text-white uppercase tracking-tighter">{stat.val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- 03. CORE CAPABILITIES (The Grid) --- */}
      <section id="technologies" className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-l-2 border-cyan-500 pl-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">Core <br/>Capabilities</h2>
            <p className="text-slate-500 max-w-sm text-sm italic">High-reliability engineering for Mission-Critical environments.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { title: "Microwave Technologies", tags: ["150 GHz", "Thin Film"], desc: "Custom RF Modules for Radar, ECM, and Space applications. Integrated PCB solutions with copper core thermal management." },
              { title: "Procurement", tags: ["CVD Diamond", "AlN"], desc: "Specialized supply chain for Ceramic Substrates, MMIC Components, and High Dielectric Constant materials." },
              { title: "Vacuum Technologies", tags: ["PVD", "PECVD"], desc: "Decades of experience in deposition under vacuum and space simulator technologies for environmental testing." }
            ].map((card, i) => (
              <div key={i} className="bg-[#121212] p-12 hover:bg-cyan-950/10 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 font-mono text-white/5 text-6xl font-black">0{i+1}</div>
                <div className="flex gap-2 mb-6">
                  {card.tags.map(tag => <span key={tag} className="px-2 py-0.5 border border-white/10 text-[8px] font-bold text-slate-400 uppercase tracking-widest">{tag}</span>)}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 uppercase italic group-hover:text-cyan-400 transition-colors">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-loose mb-8 italic">{card.desc}</p>
                <a href={`#${card.title.toLowerCase().split(' ')[0]}`} className="text-[10px] font-black uppercase tracking-[0.3em] text-white border-b border-cyan-500 pb-1 hover:border-white transition-all">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 04. DIFFERENTIATORS: Why MiTec? --- */}
      <section id="about" className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             <img 
               src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
               alt="Lab Environment" 
               className="w-full grayscale border border-white/10 rounded-2xl opacity-40 group-hover:opacity-100 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-cyan-900/10 mix-blend-color"></div>
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <h2 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]">02 / Differentation</h2>
            <h3 className="text-4xl font-bold italic text-white uppercase leading-tight">Expertise in Technology Transfer for International Space Programs.</h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="text-cyan-500 font-mono font-black italic">01</span>
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-sm text-cyan-500">Aerospace-Grade Precision</h4>
                  <p className="text-sm text-slate-500 leading-relaxed italic">Involved in Space Technologies since 1975 with CNR and ESA as reference technologists.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-cyan-500 font-mono font-black italic">02</span>
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-sm text-cyan-500">Rapid Prototyping</h4>
                  <p className="text-sm text-slate-500 leading-relaxed italic">Direct manufacturing lines for thin film circuits on ceramic and mixed organic multilayer boards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 05. PRODUCT FOCUS: Plasma Matrix --- */}
      <section id="vacuum" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#18181B] rounded-[2rem] border border-white/10 overflow-hidden grid lg:grid-cols-12">
            <div className="lg:col-span-7 p-12 md:p-20 space-y-10">
              <span className="px-4 py-1 bg-white text-black text-[9px] font-black uppercase tracking-widest">Featured System</span>
              <h3 className="text-6xl font-black italic uppercase tracking-tighter text-white">Plasma Matrix</h3>
              <p className="text-lg text-slate-400 leading-relaxed italic border-l-2 border-cyan-500 pl-8">
                "Advanced Surface Cleaning System: Reducing contamination up to six fold compared to traditional wet cleaning methods."
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-10 font-mono text-[11px]">
                <div className="flex flex-col gap-2">
                  <span className="text-slate-500 uppercase tracking-widest">RF Generator</span>
                  <span className="text-white font-bold text-lg">13.56 MHz (100W-300W)</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-slate-500 uppercase tracking-widest">Configuration</span>
                  <span className="text-white font-bold text-lg uppercase italic">Standard / "S" Model</span>
                </div>
              </div>
              <button className="px-10 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-cyan-500 hover:text-white transition-all">
                Download Technical Data
              </button>
            </div>
            <div className="lg:col-span-5 bg-gradient-to-br from-[#121212] to-[#27272A] flex items-center justify-center p-12">
              {/* Visual abstraction of Plasma Matrix (Placeholder) */}
              <div className="w-full aspect-square border-2 border-cyan-500/20 rounded-full flex items-center justify-center relative group">
                <div className="absolute inset-8 border border-cyan-500/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-16 border-2 border-cyan-500/50 rounded-full group-hover:scale-110 transition-transform"></div>
                <span className="text-cyan-500 text-6xl font-black italic group-hover:scale-125 transition-transform duration-500">PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 06. QUALITY & COMPLIANCE (The Trust Hub) --- */}
      <section id="quality" className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/3 flex flex-col items-center">
            <div className="w-48 h-48 border-[12px] border-slate-900 flex flex-col items-center justify-center italic">
              <span className="text-6xl font-black tracking-tighter">DNV</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Certified</span>
            </div>
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.5em] mb-6">Quality & Compliance</h2>
            <h3 className="text-4xl font-bold italic leading-tight uppercase tracking-tighter mb-10">
              "Trading and production of components and assemblies for microelectronic technologies applications"
            </h3>
            <div className="grid sm:grid-cols-2 gap-8 font-mono text-[10px] uppercase tracking-widest opacity-70">
              <div className="border-l-2 border-slate-900 pl-4">ISO 9001:2015 <br/> Cert: CERT-18142-2006-AQ-ROM-SINCERT</div>
              <div className="border-l-2 border-slate-900 pl-4">IAF Sector: 19 <br/> Validity Thru: 20 Dec 2027</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 07. FINAL CTA --- */}
      <section id="contact" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white">Ready to start <br/> your project?</h2>
          <p className="text-slate-500 italic max-w-xl mx-auto">Get a technical consultation with our engineering team in Rome. <br/> <span className="text-cyan-500 font-bold uppercase tracking-widest text-[10px]">Free technical quote in 24h.</span></p>
          <div className="flex flex-col items-center gap-6">
            <button className="px-12 py-6 bg-cyan-600 text-white text-[11px] font-black uppercase tracking-[0.5em] hover:bg-cyan-500 transition-all shadow-[0_20px_40px_rgba(8,145,178,0.2)]">
              Schedule Consultation
            </button>
            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.3em]">Direct Engineering Line: info@mitec-group.it</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App