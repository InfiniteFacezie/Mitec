function Certifications() {
  const certifications = [
    {
      name: "AS9100",
      fullName: "AS9100 Aerospace Quality Management",
      icon: "✈️",
      description: "Aerospace quality management system certification for design, manufacturing, and assembly of RF components.",
      issuer: "Accredited Certification Body",
      scope: "Trading and production of components for microelectronic technologies"
    },
    {
      name: "ISO 9001:2015",
      fullName: "ISO 9001:2015 Quality Management",
      icon: "📋",
      description: "International standard for quality management systems. Cert: CERT-18142-2006-AQ-ROM-SINCERT",
      issuer: "DNV • Business Assurance",
      scope: "IAF Sector: 19 • Valid thru: 20 Dec 2027"
    },
    {
      name: "ESA ECSS",
      fullName: "ESA Space Component Standards",
      icon: "🛰️",
      description: "Compliance with European Space Agency standards for space-qualified components and manufacturing processes.",
      issuer: "European Space Agency",
      scope: "ECSS-Q-ST-70 • Space product assurance"
    },
    {
      name: "IPC Standards",
      fullName: "IPC-A-610 Acceptability",
      icon: "🔍",
      description: "Electronic assemblies acceptability standard. Certified personnel for Class 2 and Class 3 (Space/Military) assemblies.",
      issuer: "IPC - Association Connecting Electronics Industries",
      scope: "Class 3 (Space/Military Applications)"
    }
  ]

  const additionalStandards = [
    "MIL-STD-883 (Microelectronics)",
    "ITAR Compliance Available",
    "RoHS / REACH Compliant",
    "Outgassing per ASTM E595",
    "Thermal Cycling per MIL-STD-202",
    "Vibration per MIL-STD-810"
  ]

  return (
    <section id="certifications" className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.5em]">
            06 / Quality & Compliance
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight">
            Certified for the Most<br/>
            <span className="text-cyan-600">Demanding Applications</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Our quality management systems and manufacturing processes meet the stringent requirements of 
            <span className="font-bold text-black"> aerospace, defense, and space programs</span>.
          </p>
        </div>

        {/* Main Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, i) => (
            <div 
              key={i}
              className="bg-slate-50 border-2 border-slate-900 rounded-2xl p-8 hover:shadow-2xl transition-all group"
            >
              
              {/* Icon & Badge */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                  {cert.icon}
                </div>
                <div className="px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider rounded-full">
                  Certified
                </div>
              </div>

              {/* Certification Name */}
              <div className="space-y-2 mb-4">
                <h3 className="text-3xl font-black uppercase italic tracking-tight">
                  {cert.name}
                </h3>
                <p className="text-sm text-cyan-600 font-bold uppercase tracking-wider">
                  {cert.fullName}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Issuer & Scope */}
              <div className="space-y-3 pt-6 border-t-2 border-slate-900">
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    Issued By
                  </p>
                  <p className="text-xs font-bold text-slate-900">
                    {cert.issuer}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    Scope
                  </p>
                  <p className="text-xs text-slate-700">
                    {cert.scope}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DNV Certificate Showcase */}
        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-12">
            
            {/* Left: DNV Logo Area */}
            <div className="lg:col-span-4 bg-gradient-to-br from-slate-800 to-slate-900 p-12 flex flex-col items-center justify-center border-r border-white/10">
              <div className="w-48 h-48 border-8 border-white flex flex-col items-center justify-center mb-6">
                <span className="text-6xl font-black tracking-tighter italic">DNV</span>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 mt-2">Certified</span>
              </div>
              <p className="text-xs text-slate-400 text-center italic">
                Accredited Certification Body
              </p>
            </div>

            {/* Right: Certificate Details */}
            <div className="lg:col-span-8 p-12 space-y-8">
              <div>
                <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em] mb-4">
                  ISO 9001:2015 Certificate
                </p>
                <h3 className="text-3xl font-black italic leading-tight uppercase tracking-tight mb-6">
                  "Trading and production of components and assemblies for microelectronic technologies applications"
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 font-mono text-xs">
                <div className="space-y-2">
                  <p className="text-slate-500 uppercase tracking-widest text-[10px]">Certificate Number</p>
                  <p className="text-white font-bold">CERT-18142-2006-AQ-ROM-SINCERT</p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-500 uppercase tracking-widest text-[10px]">IAF Sector</p>
                  <p className="text-white font-bold">19 - Electrical and Optical Equipment</p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-500 uppercase tracking-widest text-[10px]">Validity</p>
                  <p className="text-white font-bold">Through 20 December 2027</p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-500 uppercase tracking-widest text-[10px]">Scope</p>
                  <p className="text-white font-bold">Design, Manufacturing, Assembly</p>
                </div>
              </div>

              <div className="pt-6">
                <button className="px-6 py-3 bg-white text-black hover:bg-cyan-500 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all rounded-sm">
                  Download Certificate (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Standards */}
        <div className="bg-slate-50 border-2 border-slate-900 rounded-2xl p-12">
          <h3 className="text-2xl font-black uppercase italic tracking-tight mb-8">
            Additional Standards & Compliance
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {additionalStandards.map((std, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 p-4 bg-white border border-slate-900 rounded-lg hover:shadow-lg transition-all group"
              >
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-white text-lg">✓</span>
                </div>
                <p className="text-sm font-bold text-slate-900">
                  {std}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6">
          <p className="text-slate-600">
            Need specific certifications or compliance documentation?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-slate-900 text-white hover:bg-cyan-600 text-[10px] font-black uppercase tracking-[0.3em] transition-all rounded-sm">
              Request Compliance Package
            </button>
            <button className="px-8 py-4 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all rounded-sm">
              View Quality Manual
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications