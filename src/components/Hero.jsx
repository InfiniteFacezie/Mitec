function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 lg:px-12 border-b border-white/5 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT: Content (60%) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Eyebrow - ESA Partner Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyan-950/30 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em]">ESA Partner Since 1975</span>
          </div>
          
          {/* H1 - Microwave Integrated Technologies */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white">
            Microwave Integrated<br/>
            <span className="text-cyan-500 italic">Technologies</span>
          </h1>

          {/* H2 - Space & Defense RF Components */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-tight font-medium">
            Space & Defense RF Components
          </p>

          {/* Specs Bar - Technical Highlights */}
          <div className="flex flex-wrap gap-4 items-center text-[10px] font-mono uppercase tracking-widest text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
              <span>DC-220 GHz</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
              <span>ISO 7 Cleanroom</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
              <span>Space-Qualified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
              <span>50+ Years Heritage</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all rounded-sm shadow-[0_0_30px_rgba(8,145,178,0.3)] hover:shadow-[0_0_40px_rgba(8,145,178,0.5)]">
              Request Technical Specifications
            </button>
            <button className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all rounded-sm">
              View ESA Programs
            </button>
          </div>

          {/* Additional info */}
          <p className="text-xs text-slate-500 italic pt-4">
            Trusted by European Space Agency • Italian National Research Council • Defense Programs
          </p>
        </div>

        {/* RIGHT: Visual (40%) */}
        <div className="lg:col-span-5 relative group">
          <div className="relative overflow-hidden border border-white/10 rounded-2xl bg-slate-900 shadow-2xl">
            {/* Technical Image: PCB/Cleanroom/Waveguide */}
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
              alt="Microwave RF Circuit Board Assembly" 
              className="w-full aspect-[4/5] object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            
            {/* Spec Overlay - Frequency Range */}
            <div className="absolute bottom-6 left-6 bg-[#0A0A0A]/90 border border-cyan-500/50 backdrop-blur-xl p-4 rounded-lg">
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">Frequency Coverage</p>
              <p className="text-2xl font-black text-white tracking-tighter">DC → 220+ GHz</p>
            </div>
          </div>

          {/* Quality Badge - Floating */}
          <div className="absolute -top-4 -right-4 bg-cyan-500 text-black px-6 py-3 rounded-lg rotate-3 shadow-xl">
            <p className="text-xs font-bold uppercase tracking-wider">AS9100 Certified</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero