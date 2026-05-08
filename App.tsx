import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Code,
  Share2, 
  Mail, 
  MoveRight,
  Maximize2,
  Calendar,
  Clock,
  ArrowUpRight,
  Search
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-brand-bg text-white font-sans overflow-x-hidden selection:bg-brand-accent selection:text-black">
      {/* Infrastructure Layer */}
      <div className="fixed inset-0 bg-grid opacity-5 pointer-events-none z-0" />
      
      {/* Header Layout */}
      <header className="fixed top-0 left-0 w-full z-[100] border-b border-brand-line bg-brand-bg/90 backdrop-blur-xl px-6 md:px-12 py-5 flex justify-between items-center transition-all">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-black tracking-tighter flex items-center gap-3"
        >
          <span className="text-brand-accent italic font-black">MAHESH ARUN ALADI</span>
          <span className="hidden lg:block text-[9px] font-mono text-gray-600 tracking-[0.3em] bg-white/5 px-3 py-1 rounded-full border border-white/5">PROFESSIONAL ARCHIVE v2.0</span>
        </motion.div>
        
        <nav className="hidden md:flex gap-10 text-[11px] font-mono font-bold tracking-[0.2em] uppercase items-center">
          {['Home', 'About Me', 'My Project', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              whileHover={{ x: 3 }}
              className="hover:text-brand-accent transition-colors duration-300"
            >
              {item}
            </motion.a>
          ))}
          <div className="h-4 w-px bg-brand-line mx-2" />
          <div className="flex items-center gap-4">
            <Search size={16} className="text-gray-500 cursor-pointer hover:text-white transition-colors" />
            <button className="bg-white text-black px-4 py-2 text-[10px] font-black rounded-sm hover:bg-brand-accent transition-colors">SUBSCRIBE</button>
          </div>
        </nav>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-brand-accent h-10 w-10 flex items-center justify-center border border-brand-line rounded-lg"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>


      {/* Main Content Area: 3-Column Grid */}
      <main className="relative pt-[84px]">
        {/* Hero Section / Professional Featured Area */}
        <section id="home" className="relative flex flex-col lg:flex-row border-b border-brand-line min-h-[85vh]">
          {/* Main Visual: Samurai Mask */}
          <div className="flex-1 relative bg-black flex items-center justify-center p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-brand-line group">
            <div className="scan-line pointer-events-none opacity-10" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl aspect-[3/4] lg:aspect-square"
            >
              <img 
                src="https://images.unsplash.com/photo-1599725427382-835adc0b6862?auto=format&fit=crop&q=80&w=1000" 
                alt="Samurai Demon Mask"
                className="w-full h-full object-contain filter group-hover:brightness-125 transition-all duration-1000 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Overlays */}
            <div className="absolute top-10 left-10 text-[10px] font-mono text-brand-accent tracking-[0.5em] italic uppercase">ARCHIVE_ENTITY // MAHESH_A_ALADI</div>
            <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2 text-right">
              <div className="text-3xl md:text-5xl font-display font-black text-white italic tracking-tighter uppercase leading-none">
                MAHESH ARUN <br />
                <span className="text-brand-accent text-outline">ALADI</span>
              </div>
              <div className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.4em] mt-2">SAMURAI_INTELLIGENCE_SYSTEM</div>
            </div>
          </div>

          {/* Featured Content / Intro */}
          <aside className="w-full lg:w-[480px] p-8 lg:p-16 flex flex-col justify-center bg-zinc-950">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 text-brand-accent text-xs font-mono font-bold mb-8 tracking-widest italic uppercase">
                <div className="w-8 h-px bg-brand-accent" /> THE PROFESSIONAL ARCHIVE
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-black leading-[0.85] mb-10 tracking-tighter uppercase italic">
                MAHESH <br />
                ARUN <br />
                <span className="text-brand-accent text-outline pr-4">ALADI.</span>
              </h1>
              <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-12 font-medium border-l border-brand-line pl-6">
                ARCHITECTING IMMORTAL DIGITAL INTERFACES & DEMONIC VISUAL ECOSYSTEMS. WELCOME TO THE REPOSITORY.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="bg-white text-black px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-brand-accent transition-all flex items-center justify-center gap-4 group">
                  EXPLORE WORKS <MoveRight className="group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="border border-white/20 text-white px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                  CV_2026.PDF
                </button>
              </div>
            </motion.div>

            {/* Meta Stats */}
            <div className="mt-20 pt-10 border-t border-brand-line grid grid-cols-2 gap-8">
              <div>
                <div className="text-[10px] font-mono text-gray-600 mb-1 uppercase tracking-widest">Active State</div>
                <div className="text-lg font-bold italic">PRO_MODE_ACTIVE</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-gray-600 mb-1 uppercase tracking-widest">Last Update</div>
                <div className="text-lg font-bold italic">08_MAY_2026</div>
              </div>
            </div>
          </aside>
        </section>

        {/* Blog / Portfolio Grid Section */}
        <section id="my-project" className="bg-brand-bg py-32 px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
            <div>
              <div className="text-xs font-mono text-brand-accent mb-4 tracking-[0.4em] italic uppercase">// Portfolio Archive</div>
              <h2 className="text-6xl lg:text-9xl font-display font-black leading-none uppercase tracking-tighter">LATEST <br /> <span className="text-outline">ARTIFACTS.</span></h2>
            </div>
            <p className="max-w-md text-gray-500 font-medium italic border-l border-brand-line pl-8">
              A curated selection of high-performance digital entities, interface architectural studies, and demonic visual experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-brand-line">
            {[
              { id: "01", title: "THE PSYCHOLOGY OF DARK INTERFACES", category: "Theoretical Post", date: "FEB 2026" },
              { id: "02", title: "OPTIMIZING 3D WORKFLOWS FOR WEB", category: "Technical Guide", date: "MAR 2026" },
              { id: "03", title: "THE RISE OF DIGITAL DEMONISM", category: "Cultural Analysis", date: "APR 2026" },
              { id: "04", title: "INTERFACE ARCHITECTURE STUDY", category: "Case Study", date: "APR 2026" },
              { id: "05", title: "MAINTAINING SYMMETRY IN CHAOS", category: "Design Principles", date: "MAY 2026" },
              { id: "06", title: "FUTURE REPOSITORY PROTOCOLS", category: "System Log", date: "MAY 2026" },
            ].map((work) => (
              <motion.div 
                key={work.id}
                whileHover={{ backgroundColor: "rgba(255, 42, 0, 0.05)" }}
                className="bg-brand-bg p-12 lg:p-16 flex flex-col transition-colors group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-20 text-xs font-mono text-gray-500">
                  <span>REPOSITORY_{work.id}</span>
                  <ArrowUpRight size={18} className="group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="text-4xl font-display font-black mb-4 uppercase italic group-hover:text-brand-accent transition-colors">{work.title}</h3>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 italic">{work.category}</span>
                  <span className="text-[9px] font-mono text-gray-600">{work.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Me / Blog Content Area */}
        <section id="about-me" className="bg-zinc-950 py-32 border-y border-brand-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="text-xs font-mono text-brand-accent mb-6 tracking-[0.4em] uppercase italic">// The Creator</div>
                <h2 className="text-5xl font-display font-black mb-12 italic uppercase leading-none">MAHESH <br /> ARUN <br /> ALADI.</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                    <Maximize2 size={14} /> Global Digital Nomad
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                    <Clock size={14} /> 24/7 Operations
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                    <Calendar size={14} /> Established 2020
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="space-y-24">
                <div>
                  <h3 className="text-xs font-mono text-gray-600 mb-8 uppercase tracking-[0.3em]">-- Personal Manifesto --</h3>
                  <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed font-medium italic underline decoration-brand-line underline-offset-8">
                    "My mission is to bridge the gap between human intuition and demonic digital precision. Every pixel should scream, every interface should haunt, every design should dominate. In the archive of MAHESH, we do not settle for ordinary."
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="p-10 border border-brand-line bg-brand-bg rounded-2xl">
                    <h4 className="text-xl font-bold mb-6 text-brand-accent">Philosophy</h4>
                    <p className="text-gray-500 leading-relaxed font-mono text-xs">I believe in the 'Demon Method'—a rigorous process of deconstruction and aesthetic intensity. We break the rules to build something truly immortal.</p>
                  </div>
                  <div className="p-10 border border-brand-line bg-brand-bg rounded-2xl">
                    <h4 className="text-xl font-bold mb-6 text-brand-accent">Excellence</h4>
                    <p className="text-gray-500 leading-relaxed font-mono text-xs">High-performance is not just a metric; it's a visual language. We optimize every interaction for maximum psychological impact.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Strip */}
        <section id="contact" className="py-40 px-6 text-center bg-black overflow-hidden relative">
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-7xl lg:text-[140px] font-display font-black leading-none italic uppercase mb-12 tracking-tighter">
              READY TO <br /> <span className="text-outline">SUMMON?</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-20 font-medium lowercase">JOIN THE ARCHIVE SYSTEM AND Let's create something the world won't forget.</p>
            <button className="bg-brand-accent text-black font-black px-16 py-8 uppercase text-sm tracking-[0.4em] hover:bg-white transition-all transform hover:scale-105">
              INITIATE CONTACT_
            </button>
          </motion.div>
        </section>
      </main>

      {/* Footer Strip */}
      <footer className="h-[80px] border-t border-brand-line bg-brand-bg relative z-50 flex items-center px-6 md:px-12 justify-between text-[10px] font-mono text-gray-600 tracking-widest uppercase italic">
        <div className="flex items-center gap-6">
          <div className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
          <span>MAHESH ARUN ALADI // ARCHIVE &copy; 2026 - SECURED</span>
        </div>
        <div className="hidden lg:flex gap-12">
          <a href="#" className="hover:text-white transition-colors">Digital Autopsy</a>
          <a href="#" className="hover:text-white transition-colors">Manifesto</a>
          <a href="#" className="hover:text-white transition-colors">Log_Out</a>
        </div>
        <div className="flex gap-10">
          <Mail size={18} className="hover:text-brand-accent cursor-pointer transition-colors" />
          <Share2 size={18} className="hover:text-brand-accent cursor-pointer transition-colors" />
          <Code size={18} className="hover:text-brand-accent cursor-pointer transition-colors" />
        </div>
      </footer>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[200] bg-brand-bg p-12 flex flex-col justify-center items-start gap-12 bg-grid"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-10 text-brand-accent"
            >
              <X size={32} />
            </button>
            <div className="text-xs font-mono text-brand-accent mb-4 tracking-[0.4em] uppercase italic">// CHANNELS</div>
            {['Home', 'About Me', 'My Project', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-6xl font-display font-black hover:text-brand-accent transition-colors italic uppercase leading-none tracking-tighter"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
