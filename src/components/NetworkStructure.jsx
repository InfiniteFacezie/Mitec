function NetworkStructure() {
  const companies = [
    {
      name: "MITEC s.r.l.",
      role: "Technology Leadership",
      color: "cyan",
      description: "Technology leader and management of common programs. ESA program coordination and R&D activities.",
      capabilities: [
        "Microwave/RF Design",
        "ESA Program Management",
        "Technology Transfer",
        "Multiphysics Simulation",
        "Know-How Development"
      ]
    },
    {
      name: "TECNOMEC s.r.l.",
      role: "Advanced PCB Manufacturing",
      color: "blue",
      description: "Manufacturer of advanced technology printed circuit boards. Multilayer organic and ceramic substrates.",
      capabilities: [
        "Multilayer PCB (up to 32L)",
        "Mixed Material Boards",
        "Copper Core Technology",
        "Teflon/Rogers Substrates",
        "Prototype & Production"
      ]
    },
    {
      name: "SDS s.r.l.",
      role: "Assembly & Testing",
      color: "purple",
      description: "Electronic design, assembly and test of microwave integrations. ISO 7 cleanroom operations.",
      capabilities: [
        "Microwave Assembly",
        "RF Testing (VNA)",
        "Wire Bonding",
        "Hermetic Sealing",
        "Environmental Testing"
      ]
    },
    {
      name: "FORESTAL s.r.l.",
      role: "Precision Machining",
      color: "emerald",
      description: "High-precision machining and assembly of complex mechanical items. Waveguide manufacturing.",
      capabilities: [
        "Waveguide Fabrication",
        "Electroerosion Machining",
        "Galvanic Plating",
        "Electroforming",
        "Precision Assembly"
      ]
    }
  ]

  const colorClasses = {
    cyan: {
      border: 'border-cyan-500',
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-400',
      hover: 'hover:border-cyan-400'
    },
    blue: {
      border: 'border-blue-500',
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      hover: 'hover:border-blue-400'
    },
    purple: {
      border: 'border-purple-500',
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      hover: 'hover:border-purple-400'
    },
    emerald: {
      border: 'border-emerald-500',
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-400',
      hover: 'hover:border-emerald-400'
    }
  }

  return (
    <section id="network" className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]">
            04 / MITECGROUP Network
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight text-white">
            Integrated Expertise,<br/>
            <span className="text-cyan-500">End-to-End Solutions</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            A network of specialized companies working seamlessly together to deliver complete RF component solutions from design through production and testing.
          </p>
        </div>

        {/* Organizational Diagram */}
        <div className="relative">
          
          {/* Central Hub - MITECGROUP */}
          <div className="flex justify-center mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-2xl group-hover:bg-cyan-500/30 transition-all"></div>
              <div className="relative bg-gradient-to-br from-cyan-950/50 to-[#121212] border-2 border-cyan-500 rounded-2xl p-8 text-center">
                <p className="text-[9px] font-black text-cyan-500 uppercase tracking-[0.5em] mb-2">
                  Network Coordinator
                </p>
                <h3 className="text-3xl font-black uppercase italic tracking-tight text-white">
                  MITECGROUP
                </h3>
                <p className="text-xs text-slate-400 mt-2 italic">
                  Roma, Italy • Since 2000
                </p>
              </div>
            </div>
          </div>

          {/* Connection Lines Visual */}
          <div className="absolute top-32 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>

          {/* 4 Companies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companies.map((company, i) => {
              const colors = colorClasses[company.color]
              return (
                <div 
                  key={i}
                  className={`relative group bg-[#121212] border-2 ${colors.border} ${colors.hover} rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_40px_rgba(8,145,178,0.15)]`}
                >
                  {/* Company Name & Role */}
                  <div className="space-y-2 mb-6">
                    <h3 className="text-xl font-black uppercase tracking-tight text-white">
                      {company.name}
                    </h3>
                    <p className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>
                      {company.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {company.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-3">
                    <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">
                      Core Capabilities
                    </p>
                    <ul className="space-y-2">
                      {company.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className={`${colors.text} mt-0.5`}>▹</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative Badge */}
                  <div className={`absolute top-4 right-4 w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center ${colors.text} text-xs font-black`}>
                    {i + 1}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-br from-cyan-950/20 to-transparent border border-cyan-500/30 rounded-3xl p-12 text-center space-y-8">
          <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white">
            Why Choose the MITECGROUP Network?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <p className="text-4xl font-black text-cyan-400">01</p>
              <p className="text-sm text-white font-bold uppercase tracking-wider">Single Point of Contact</p>
              <p className="text-xs text-slate-400">One partner managing your entire supply chain from design to delivery.</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-4xl font-black text-cyan-400">02</p>
              <p className="text-sm text-white font-bold uppercase tracking-wider">Integrated Quality</p>
              <p className="text-xs text-slate-400">Consistent AS9100/ISO standards across all companies in the network.</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-4xl font-black text-cyan-400">03</p>
              <p className="text-sm text-white font-bold uppercase tracking-wider">Cost & Time Efficiency</p>
              <p className="text-xs text-slate-400">Reduced lead times and optimized costs through vertical integration.</p>
            </div>
          </div>

          <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all rounded-sm mt-8">
            Learn About Our Network
          </button>
        </div>
      </div>
    </section>
  )
}

export default NetworkStructure