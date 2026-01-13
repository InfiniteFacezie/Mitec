import { useState } from 'react'

function TargetMarkets() {
  const [activeMarket, setActiveMarket] = useState('space')

  const markets = {
    space: {
      title: "Space & ESA Programs",
      icon: "🛰️",
      tagline: "50+ Years Heritage with European Space Agency",
      description: "Reference technologist for equipment development in several ESA programs since 1975. Expertise in passive antennas, T/R modules for phased arrays, and space-qualified RF components.",
      applications: [
        "Passive Antenna Development",
        "T/R Modules for Phased Arrays",
        "Q-Band Converters for Radiotelescopes",
        "High-Frequency Filters (>150 GHz)",
        "Space Simulator Technologies"
      ],
      standards: [
        "ESA ECSS-Q-ST-70",
        "Outgassing Testing",
        "Thermal Vacuum Qualification",
        "Vibration & Shock Testing"
      ],
      keyProjects: [
        "Q-Converter Module for Radioastronomy Telescope",
        "Passive Antenna for Space Application (Current)",
        "Various ESA-funded R&D Programs"
      ]
    },
    defense: {
      title: "Defense & Military",
      icon: "🛡️",
      tagline: "Secure Supply Chain for Mission-Critical Systems",
      description: "Advanced technologies for military radar, ECM systems, and secure communications. AS9100 certified manufacturing with full traceability and supply chain security.",
      applications: [
        "T/R Modules for Phased Array Radar",
        "ECM Wide-Band RF Modules",
        "High-Power Thermal Management",
        "Hermetic Packaging Solutions",
        "Custom Microwave Assemblies"
      ],
      standards: [
        "AS9100 Aerospace Quality",
        "MIL-STD-883 (Microelectronics)",
        "IPC-A-610 (Assemblies)",
        "ITAR Compliance Available"
      ],
      keyProjects: [
        "T/R Modules for National Defense Programs",
        "ECM Wide-Band RF Systems",
        "Radar Component Manufacturing"
      ]
    },
    telecom: {
      title: "Telecommunications",
      icon: "📡",
      tagline: "High-Frequency Solutions for Next-Gen Networks",
      description: "Custom RF modules and filters for microwave telecommunications. Expertise in 5G/6G frequencies and satellite ground stations.",
      applications: [
        "5G/6G Microwave Components",
        "Satellite Ground Station Equipment",
        "High-Frequency Filters & Diplexers",
        "Low-Loss Transmission Lines",
        "Custom RF Module Design"
      ],
      standards: [
        "ITU Radio Regulations",
        "ETSI Standards",
        "FCC Compliance",
        "ISO 9001:2015"
      ],
      keyProjects: [
        "Custom RF Modules for Telecom Infrastructure",
        "High-Frequency Filter Development",
        "Satellite Communication Components"
      ]
    },
    research: {
      title: "Research & Universities",
      icon: "🔬",
      tagline: "Technology Transfer & Collaborative R&D",
      description: "Active partnerships with university research groups and national laboratories. Know-how transfer programs and joint development of innovative technologies.",
      applications: [
        "Custom Prototype Development",
        "Research Equipment Manufacturing",
        "Technology Transfer Programs",
        "Educational Training in MW Tech",
        "Joint R&D Projects"
      ],
      standards: [
        "Academic Collaboration Protocols",
        "Open Innovation Programs",
        "Technical Training & Workshops",
        "Publication Support"
      ],
      keyProjects: [
        "CNR Partnership (Italian National Research Council)",
        "University R&D Collaborations",
        "EU-Funded Research Programs"
      ]
    }
  }

  const marketKeys = Object.keys(markets)

  return (
    <section id="markets" className="py-32 px-6 bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]">
            03 / Target Markets
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight text-white">
            Trusted Partner Across<br/>
            <span className="text-cyan-500">Critical Applications</span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          {marketKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveMarket(key)}
              className={`px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] transition-all rounded-lg border-2 ${
                activeMarket === key
                  ? 'bg-cyan-600 border-cyan-600 text-white shadow-[0_0_30px_rgba(8,145,178,0.3)]'
                  : 'bg-transparent border-white/10 text-slate-400 hover:border-white/30 hover:text-white'
              }`}
            >
              {markets[key].icon} {markets[key].title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-[#121212] border border-white/10 rounded-3xl overflow-hidden">
          <div className="p-8 md:p-16 space-y-12">
            
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-6xl">{markets[activeMarket].icon}</span>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight text-white">
                    {markets[activeMarket].title}
                  </h3>
                  <p className="text-cyan-400 text-sm font-bold uppercase tracking-wider mt-2">
                    {markets[activeMarket].tagline}
                  </p>
                </div>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
                {markets[activeMarket].description}
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Applications */}
              <div className="space-y-6">
                <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em] mb-4">
                  Key Applications
                </h4>
                <ul className="space-y-3">
                  {markets[activeMarket].applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-cyan-500 mt-1">▹</span>
                      <span className="text-sm text-slate-300">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Standards */}
              <div className="space-y-6">
                <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em] mb-4">
                  Standards & Compliance
                </h4>
                <div className="flex flex-wrap gap-3">
                  {markets[activeMarket].standards.map((std, i) => (
                    <span 
                      key={i}
                      className="px-3 py-2 bg-white/5 border border-white/10 text-xs font-mono text-slate-300 rounded-lg"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div className="pt-8 border-t border-white/5">
              <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em] mb-6">
                Reference Projects
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                {markets[activeMarket].keyProjects.map((project, i) => (
                  <div 
                    key={i}
                    className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/30 transition-colors"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed">{project}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all rounded-sm">
                View {markets[activeMarket].title} Capabilities
              </button>
              <button className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all rounded-sm">
                Download Technical Brief
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TargetMarkets