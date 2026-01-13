function FinalCTA() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* Main CTA Text */}
        <div className="text-center space-y-8">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">
            Ready to start<br/>
            <span className="text-cyan-500">your project?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Get a technical consultation with our engineering team in Rome.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <span className="text-cyan-500">✓</span>
              <span>Free Technical Quote in 24h</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <span className="text-cyan-500">✓</span>
              <span>50+ Years Aerospace Experience</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <span className="text-cyan-500">✓</span>
              <span>ESA Partner Since 1975</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-6">
          <button className="px-12 py-6 bg-cyan-600 hover:bg-cyan-500 text-white text-[11px] font-black uppercase tracking-[0.3em] transition-all rounded-sm shadow-[0_20px_60px_rgba(8,145,178,0.3)] hover:shadow-[0_20px_80px_rgba(8,145,178,0.5)] hover:scale-105">
            Schedule Technical Consultation
          </button>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 border border-white/20 hover:bg-white/5 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all rounded-sm">
              Download Capabilities Brochure
            </button>
            <button className="px-8 py-3 border border-white/20 hover:bg-white/5 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all rounded-sm">
              View Technical Datasheets
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-white/5">
          
          {/* Email */}
          <div className="text-center space-y-2">
            <p className="text-[9px] font-black text-cyan-500 uppercase tracking-[0.5em]">
              Email
            </p>
            <a 
              href="mailto:info@mitecgroup.it"
              className="block font-mono text-sm text-white hover:text-cyan-400 transition-colors"
            >
              info@mitecgroup.it
            </a>
            <a 
              href="mailto:sales@mitecgroup.it"
              className="block font-mono text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              sales@mitecgroup.it
            </a>
          </div>

          {/* Phone */}
          <div className="text-center space-y-2">
            <p className="text-[9px] font-black text-cyan-500 uppercase tracking-[0.5em]">
              Phone
            </p>
            <a 
              href="tel:+390641234399"
              className="block font-mono text-sm text-white hover:text-cyan-400 transition-colors"
            >
              +39 06 41234399
            </a>
            <a 
              href="tel:+393395620331"
              className="block font-mono text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              +39 339 5620331
            </a>
          </div>

          {/* Location */}
          <div className="text-center space-y-2">
            <p className="text-[9px] font-black text-cyan-500 uppercase tracking-[0.5em]">
              Location
            </p>
            <p className="text-sm text-white">
              Viale Liegi, 42<br/>
              00198 Roma, Italy
            </p>
            <p className="text-xs text-slate-500 italic pt-2">
              Operational Site:<br/>
              Str. Vicinale dei Colli, 1<br/>
              00040 Rocca di Papa (RM)
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-br from-cyan-950/20 to-transparent border border-cyan-500/30 rounded-2xl p-8 text-center space-y-4">
          <h3 className="text-xl font-black uppercase text-white">
            Looking for Immediate Support?
          </h3>
          <p className="text-sm text-slate-400">
            Our technical team is available Monday-Friday, 9:00-18:00 CET for urgent inquiries and ongoing project support.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="tel:+390641234399"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-sm"
            >
              <span>📞</span>
              <span>Call Now</span>
            </a>
            <a 
              href="mailto:info@mitecgroup.it"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-sm"
            >
              <span>✉️</span>
              <span>Email Us</span>
            </a>
          </div>
        </div>

        {/* Trust Reminder */}
        <div className="text-center pt-8 space-y-4">
          <p className="text-xs text-slate-600 italic">
            Trusted by European Space Agency • Italian National Research Council • Defense Programs
          </p>
          <div className="flex flex-wrap justify-center gap-6 opacity-40">
            <div className="px-4 py-2 border border-white/10 rounded-lg">
              <span className="text-xs font-mono text-slate-500">AS9100</span>
            </div>
            <div className="px-4 py-2 border border-white/10 rounded-lg">
              <span className="text-xs font-mono text-slate-500">ISO 9001</span>
            </div>
            <div className="px-4 py-2 border border-white/10 rounded-lg">
              <span className="text-xs font-mono text-slate-500">ESA ECSS</span>
            </div>
            <div className="px-4 py-2 border border-white/10 rounded-lg">
              <span className="text-xs font-mono text-slate-500">IPC-A-610</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA