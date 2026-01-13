function CoreCapabilities() {
  const capabilities = [
    {
      title: "Microwave Design",
      icon: "📐",
      specs: [
        "DC-220 GHz Coverage",
        "Multiphysics Simulation",
        "T/R Modules Design"
      ],
      description: "Advanced RF/Microwave circuit design with electromagnetic and thermo-mechanical simulation. Expertise in phased array radar modules and space-qualified components.",
      tools: "ADS, CST, HFSS, Momentum"
    },
    {
      title: "Manufacturing",
      icon: "⚙️",
      specs: [
        "32-Layer PCB",
        "Ceramic Substrates",
        "Waveguide Fabrication"
      ],
      description: "In-house manufacturing of thin-film circuits on ceramic substrates (Al₂O₃, AlN, Diamond) and multilayer organic PCBs with copper core thermal management.",
      tools: "Electroerosion, Thin-film, LTCC"
    },
    {
      title: "Testing & Qualification",
      icon: "🔬",
      specs: [
        "ISO 7 Cleanroom",
        "VNA up to 220 GHz",
        "Thermal Vacuum"
      ],
      description: "Complete testing facilities including thermal-vacuum chambers, vibration testing, and RF characterization. Space qualification per ESA ECSS standards.",
      tools: "VNA, Thermal Chamber, Vibration"
    },
    {
      title: "Assembly & Integration",
      icon: "🔧",
      specs: [
        "Micro-Bonding",
        "Hermetic Sealing",
        "Die Attach"
      ],
      description: "Precision assembly in ISO 7 cleanroom. Wire bonding, die attach, and hermetic packaging for space and defense applications.",
      tools: "Wire Bonder, Reflow, Plasma"
    }
  ]

  return (
    <section id="capabilities" className="py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-l-4 border-cyan-500 pl-8">
          <div>
            <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em] mb-4">
              01 / Core Capabilities
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-white">
              Integrated Solutions<br/>
              <span className="text-cyan-500">Across the RF Lifecycle</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
            End-to-end expertise from concept design through space qualification. 
            <span className="text-cyan-400 font-bold"> 50+ years</span> serving aerospace and defense.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <div 
              key={i} 
              className="group relative bg-[#121212] border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(8,145,178,0.15)] overflow-hidden"
            >
              {/* Background Number */}
              <div className="absolute top-4 right-4 text-8xl font-black text-white/5 group-hover:text-cyan-500/10 transition-colors">
                0{i+1}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {cap.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {cap.title}
              </h3>

              {/* Specs Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cap.specs.map((spec, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 border border-white/10 text-[9px] font-bold text-slate-400 uppercase tracking-widest rounded group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                {cap.description}
              </p>

              {/* Tools */}
              <div className="pt-4 border-t border-white/5">
                <p className="text-[9px] text-slate-600 uppercase tracking-widest mb-1">Tools</p>
                <p className="text-xs text-slate-400 font-mono">{cap.tools}</p>
              </div>

              {/* Learn More Link */}
              <a 
                href={`#${cap.title.toLowerCase().split(' ')[0]}`}
                className="inline-flex items-center gap-2 mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-white group-hover:text-cyan-400 transition-colors"
              >
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-12">
          <p className="text-sm text-slate-500 mb-4">
            Need a custom solution? Our engineering team can help.
          </p>
          <button className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black text-[10px] font-black uppercase tracking-[0.3em] transition-all rounded-sm">
            Request Technical Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default CoreCapabilities