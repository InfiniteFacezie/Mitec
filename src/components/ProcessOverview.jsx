function ProcessOverview() {
  const processSteps = [
    {
      number: "01",
      title: "Design Consultation",
      duration: "1-2 weeks",
      description: "Initial technical consultation to understand requirements. RF design, substrate selection, and thermal analysis.",
      deliverables: ["Requirements Document", "Feasibility Study", "Cost Estimate"]
    },
    {
      number: "02",
      title: "Prototyping",
      duration: "2-4 weeks",
      description: "Rapid prototyping of RF circuits on ceramic or organic substrates. Electromagnetic simulation and optimization.",
      deliverables: ["Prototype PCB/Substrate", "Simulation Reports", "Initial Test Data"]
    },
    {
      number: "03",
      title: "Testing & Characterization",
      duration: "1-2 weeks",
      description: "Complete RF characterization using VNA. Thermal testing and power handling verification in our labs.",
      deliverables: ["S-Parameter Data", "Thermal Test Results", "Performance Report"]
    },
    {
      number: "04",
      title: "Qualification",
      duration: "4-8 weeks",
      description: "Environmental testing for space/aerospace applications. Thermal vacuum, vibration, and radiation testing as required.",
      deliverables: ["Qualification Test Report", "ESA ECSS Compliance", "Flight Acceptance"]
    },
    {
      number: "05",
      title: "Production",
      duration: "Variable",
      description: "Serial production with full traceability. AS9100 quality management throughout manufacturing and assembly.",
      deliverables: ["Production Units", "Quality Documentation", "COC/C of C"]
    }
  ]

  return (
    <section id="process" className="py-32 px-6 bg-gradient-to-b from-[#0F0F0F] to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]">
            05 / Our Process
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight text-white">
            From Concept to<br/>
            <span className="text-cyan-500">Space-Qualified Component</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Proven development process refined over 50 years of aerospace and defense programs. 
            <span className="text-white font-bold"> Fast, reliable, traceable</span>.
          </p>
        </div>

        {/* Timeline - Desktop Horizontal */}
        <div className="hidden lg:block relative">
          
          {/* Timeline Line */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-cyan-500/50 to-cyan-500"></div>

          {/* Steps */}
          <div className="grid grid-cols-5 gap-8 relative">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                
                {/* Step Number Circle */}
                <div className="flex justify-center mb-8">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative w-16 h-16 bg-[#0A0A0A] border-4 border-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-xl font-black text-cyan-400">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all group">
                  
                  {/* Title & Duration */}
                  <div className="space-y-2 mb-4">
                    <h3 className="text-lg font-black uppercase text-white group-hover:text-cyan-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">
                      {step.duration}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <p className="text-[9px] text-slate-600 uppercase tracking-widest">Deliverables</p>
                    <ul className="space-y-1">
                      {step.deliverables.map((item, idx) => (
                        <li key={idx} className="text-[10px] text-slate-400 flex items-start gap-1">
                          <span className="text-cyan-500 mt-0.5">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile Vertical */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, i) => (
            <div key={i} className="relative pl-16">
              
              {/* Vertical Line */}
              {i < processSteps.length - 1 && (
                <div className="absolute left-7 top-16 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-cyan-500/20"></div>
              )}

              {/* Step Number Circle */}
              <div className="absolute left-0 top-0">
                <div className="w-14 h-14 bg-[#0A0A0A] border-4 border-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-lg font-black text-cyan-400">{step.number}</span>
                </div>
              </div>

              {/* Content Card */}
              <div className="bg-[#121212] border border-white/10 rounded-2xl p-6">
                <div className="space-y-2 mb-4">
                  <h3 className="text-xl font-black uppercase text-white">
                    {step.title}
                  </h3>
                  <p className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">
                    {step.duration}
                  </p>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  <p className="text-[9px] text-slate-600 uppercase tracking-widest">Deliverables</p>
                  <ul className="space-y-1">
                    {step.deliverables.map((item, idx) => (
                      <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-cyan-500">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Boxes */}
        <div className="grid md:grid-cols-2 gap-8 pt-12">
          
          {/* Fast Track Option */}
          <div className="bg-gradient-to-br from-cyan-950/20 to-transparent border border-cyan-500/30 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-black uppercase text-white">Fast-Track Development</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Need rapid prototyping? We can compress the design-to-prototype cycle to <span className="text-white font-bold">2 weeks</span> for critical programs.
            </p>
            <button className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 border-b border-cyan-500 pb-1 hover:text-white transition-colors">
              Request Fast-Track
            </button>
          </div>

          {/* Quality Assurance */}
          <div className="bg-gradient-to-br from-purple-950/20 to-transparent border border-purple-500/30 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-black uppercase text-white">Quality at Every Step</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              AS9100 and ISO 9001:2015 certified processes ensure <span className="text-white font-bold">full traceability</span> from raw materials to final acceptance.
            </p>
            <button className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400 border-b border-purple-500 pb-1 hover:text-white transition-colors">
              View Quality System
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-12">
          <p className="text-sm text-slate-400 mb-6">
            Ready to start your development project?
          </p>
          <button className="px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all rounded-sm shadow-[0_20px_40px_rgba(8,145,178,0.2)]">
            Schedule Technical Consultation
          </button>
          <p className="text-xs text-slate-600 mt-4 italic">
            Free initial consultation • No commitment required
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProcessOverview