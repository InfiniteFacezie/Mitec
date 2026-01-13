import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import CoreCapabilities from './components/CoreCapabilities'
import KeyTechnologies from './components/KeyTechnologies'
import TargetMarkets from './components/TargetMarkets'
import NetworkStructure from './components/NetworkStructure'
import ProcessOverview from './components/ProcessOverview'
import Certifications from './components/Certifications'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E4E4E7] font-sans selection:bg-cyan-500/30 antialiased">
      <Navbar />
      
      {/* 01. HERO - ESA Partner Since 1975 */}
      <Hero />
      
      {/* 02. TRUST BAR - Credentials Above the Fold */}
      <TrustBar />
      
      {/* 03. CORE CAPABILITIES - Design | Manufacturing | Testing | Assembly */}
      <CoreCapabilities />
      
      {/* 04. KEY TECHNOLOGIES - Visual Showcase */}
      <KeyTechnologies />
      
      {/* 05. TARGET MARKETS - Space/Defense/Telecom/Research */}
      <TargetMarkets />
      
      {/* 06. MITECGROUP NETWORK - 4 Companies Structure */}
      <NetworkStructure />
      
      {/* 07. PROCESS OVERVIEW - From Concept to Space-Qualified */}
      <ProcessOverview />
      
      {/* 08. CERTIFICATIONS & STANDARDS */}
      <Certifications />
      
      {/* 09. FINAL CTA */}
      <FinalCTA />
      
      <Footer />
    </div>
  )
}

export default App