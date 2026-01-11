import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#0a0c1a]/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-black tracking-tighter text-white">MITEC</span>
          <span className="text-[10px] text-blue-400 font-bold tracking-[0.3em] uppercase leading-none">Group</span>
        </div>

        {/* Menu conforme ai documenti Word */}
        <div className="hidden lg:flex items-center space-x-6 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-100/70">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#microwave" className="hover:text-white transition-colors">Microwave Technologies</a>
          <a href="#vacuum" className="hover:text-white transition-colors">Vacuum Technologies</a>
          <a href="#procurement" className="hover:text-white transition-colors">Procurement</a>
          <a href="#network" className="hover:text-white transition-colors">General (Network)</a>
          <a href="#mailing-list" className="hover:text-white transition-colors">Mailing List</a>
          <a href="#contacts" className="bg-blue-600 text-white px-5 py-2 rounded-sm hover:bg-blue-500 transition-all">Contacts</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;