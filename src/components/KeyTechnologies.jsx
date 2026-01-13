function KeyTechnologies() {
  const technologies = [
    {
      category: "Substrates",
      title: "Ceramic Substrates",
      imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200",
      imageAlt: "Alumina ceramic substrate with thin-film microwave circuits",
      specs: {
        "Materials": "Al₂O₃, AlN, CVD Diamond",
        "Frequency": "DC-110 GHz",
        "Applications": "Thin-film circuits, MMIC",
        "Standards": "MIL-STD, Space-grade"
      },
      description: "High-performance ceramic substrates for microwave applications. Thin-film technology on alumina, aluminum nitride, and CVD diamond for maximum thermal conductivity and RF performance.",
      position: "left"
    },
    {
      category: "PCB",
      title: "Multilayer Organic PCB",
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200",
      imageAlt: "Cross-section of multilayer PCB with copper core",
      specs: {
        "Layers": "Up to 32 layers",
        "Materials": "Rogers, Teflon, FR-4",
        "Core": "Copper core thermal mgmt",
        "Tolerance": "±25μm"
      },
      description: "Advanced multilayer PCB manufacturing with mixed dielectric materials. Copper core technology for high-power thermal management in radar and space applications.",
      position: "right"
    },
    {
      category: "RF Components",
      title: "Waveguide Manufacturing",
      imageUrl: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=1200",
      imageAlt: "Precision machined waveguide component",
      specs: {
        "Frequency": "DC-220+ GHz",
        "Tolerance": "±10μm",
        "Method": "Electroerosion",
        "Finish": "Electroforming, Gold plating"
      },
      description: "Single-piece waveguide fabrication using advanced electroerosion processes. Precision machining and electroforming for space-born components operating above 150 GHz.",
      position: "left"
    },
    {
      category: "Surface Treatment",
      title: "Plasma Cleaning Systems",
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
      imageAlt: "Plasma Matrix surface cleaning system",
      specs: {
        "RF Power": "13.56 MHz (100-300W)",
        "Contamination": "6x reduction vs wet",
        "Chamber": "2.6L to 40L",
        "Process": "Nano-scale cleaning"
      },
      description: "PLASMA MATRIX systems for advanced surface preparation. Ultra-clean surfaces without affecting bulk properties. Essential for space component assembly and medical device sterilization.",
      position: "right"
    }
  ]

  return (
    <section id="technologies" className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]">
            02 / Key Technologies
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight text-white">
            Proprietary Manufacturing<br/>
            <span className="text-cyan-500">Capabilities</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Decades of experience in advanced microelectronics for the most demanding applications: 
            <span className="text-white font-bold"> Space, Defense, and Radioastronomy</span>.
          </p>
        </div>

        {/* Technology Showcase Blocks */}
        <div className="space-y-32">
          {technologies.map((tech, i) => (
            <div 
              key={i}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                tech.position === 'right' ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image Side */}
              <div className={`relative group ${tech.position === 'right' ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  <img 
                    src={tech.imageUrl}
                    alt={tech.imageAlt}
                    className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Image Overlay Label */}
                  <div className="absolute bottom-6 left-6 px-4 py-2 bg-cyan-500 text-black rounded-lg">
                    <p className="text-xs font-black uppercase tracking-wider">{tech.category}</p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -z-10 top-8 -right-8 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors"></div>
              </div>

              {/* Content Side */}
              <div className={`space-y-8 ${tech.position === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                
                {/* Title */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight text-white mb-4">
                    {tech.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(tech.specs).map(([key, value], idx) => (
                    <div key={idx} className="space-y-2">
                      <p className="text-[9px] font-mono text-cyan-500 uppercase tracking-widest">
                        {key}
                      </p>
                      <p className="text-sm text-white font-bold">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Standards / Compliance */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-[9px] text-slate-600 uppercase tracking-widest mb-2">
                    Standards & Compliance
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["ESA ECSS", "MIL-STD-883", "IPC-A-610", "AS9100"].map((std, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 rounded"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div>
                  <a 
                    href={`#${tech.title.toLowerCase().replace(/ /g, '-')}`}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black text-[10px] font-black uppercase tracking-[0.3em] transition-all rounded-sm"
                  >
                    Technical Datasheet
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-20">
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-gradient-to-br from-cyan-950/20 to-transparent border border-cyan-500/30 rounded-2xl">
            <p className="text-sm text-slate-400">
              Need custom technology development?
            </p>
            <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all rounded-sm">
              Discuss Your Requirements
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KeyTechnologies