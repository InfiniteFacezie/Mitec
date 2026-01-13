function TrustBar() {
  const credentials = [
    { 
      label: "Heritage", 
      value: "50+ Years",
      sublabel: "Since 1975 CNR"
    },
    { 
      label: "Projects", 
      value: "500+",
      sublabel: "Space & Defense"
    },
    { 
      label: "Quality", 
      value: "99.8%",
      sublabel: "Pass Rate"
    },
    { 
      label: "Precision", 
      value: "±10μm",
      sublabel: "Waveguide Tolerance"
    },
    { 
      label: "Layers", 
      value: "32+",
      sublabel: "Multilayer PCB"
    }
  ]

  return (
    <section className="py-12 px-6 bg-[#0F0F0F] border-b border-white/5 sticky top-0 z-40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Row: Certification Logos */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 pb-8 border-b border-white/5">
          
          {/* ESA Logo Placeholder */}
          <div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-cyan-400 font-black text-lg">ESA</span>
            </div>
            <div>
              <p className="text-[8px] text-slate-500 uppercase tracking-widest">Partner</p>
              <p className="text-xs text-white font-bold">European Space Agency</p>
            </div>
          </div>

          {/* CNR Logo Placeholder */}
          <div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-cyan-400 font-black text-lg">CNR</span>
            </div>
            <div>
              <p className="text-[8px] text-slate-500 uppercase tracking-widest">Heritage</p>
              <p className="text-xs text-white font-bold">Italian Research Council</p>
            </div>
          </div>

          {/* AS9100 Badge */}
          <div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-cyan-400 font-black text-sm">AS</span>
            </div>
            <div>
              <p className="text-[8px] text-slate-500 uppercase tracking-widest">Certified</p>
              <p className="text-xs text-white font-bold">AS9100 Aerospace</p>
            </div>
          </div>

          {/* ISO Badge */}
          <div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-cyan-400 font-black text-sm">ISO</span>
            </div>
            <div>
              <p className="text-[8px] text-slate-500 uppercase tracking-widest">Standard</p>
              <p className="text-xs text-white font-bold">ISO 9001:2015</p>
            </div>
          </div>
        </div>

        {/* Bottom Row: Key Numbers */}
        <div className="flex flex-wrap justify-between gap-8 opacity-80 hover:opacity-100 transition-opacity">
          {credentials.map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start group">
              <span className="font-mono text-[10px] text-cyan-500 uppercase tracking-widest mb-1">
                {stat.label}
              </span>
              <span className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </span>
              <span className="font-mono text-[9px] text-slate-600 uppercase tracking-wider">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar