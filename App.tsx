import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Heart, 
  Award, 
  Zap, 
  FileText, 
  ArrowRight, 
  Menu, 
  X,
  Globe,
  Stethoscope,
  ChevronRight,
  Lock,
  TrendingUp,
  Briefcase,
  Layers,
  Mic,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  Music,
  ExternalLink,
  Scale,
  CheckCircle,
  BookOpen,
  Mail,
  Loader2
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'philosophy' | 'expertise' | 'arokia-health' | 'contact' | 'privacy' | 'terms';

// --- Shared Components ---

const Navbar: React.FC<{ currentPage: Page, setPage: (p: Page) => void }> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (p: Page) => {
    setPage(p);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Philosophy', page: 'philosophy' },
    { label: 'Expertise', page: 'expertise' },
    { label: 'Arokia Health', page: 'arokia-health' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => handleNav('home')} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-navy flex items-center justify-center text-brand-gold font-serif text-xl font-bold group-hover:bg-brand-teal transition-colors">A</div>
          <span className="font-serif text-xl tracking-wider font-bold text-brand-navy">DR. AROKIA</span>
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-medium text-xs tracking-widest uppercase">
          {navLinks.map((link) => (
            <button 
              key={link.page}
              onClick={() => handleNav(link.page)} 
              className={`hover:text-brand-gold transition-colors ${currentPage === link.page ? 'text-brand-gold border-b border-brand-gold' : 'text-brand-navy'}`}
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => handleNav('contact')} className="bg-brand-navy text-white px-6 py-2 hover:bg-brand-teal transition-all text-xs tracking-[0.2em]">Book Now</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-6 flex flex-col gap-4 animate-fadeIn shadow-xl h-screen">
          <button onClick={() => handleNav('home')} className="text-left text-lg font-medium border-b border-gray-100 pb-2">Home</button>
          {navLinks.map((link) => (
            <button 
              key={link.page}
              onClick={() => handleNav(link.page)} 
              className="text-left text-lg font-medium border-b border-gray-100 pb-2"
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => handleNav('contact')} className="bg-brand-navy text-white py-4 w-full font-bold mt-4 uppercase tracking-widest">Connect</button>
        </div>
      )}
    </nav>
  );
};

const SectionHeading: React.FC<{ title: string; subtitle?: string; light?: boolean; center?: boolean }> = ({ title, subtitle, light, center }) => (
  <div className={`mb-12 ${center ? 'text-center flex flex-col items-center' : ''}`}>
    <div className={`h-1 w-20 bg-brand-gold mb-6 ${light ? 'bg-brand-amber' : ''}`}></div>
    <h2 className={`text-3xl md:text-5xl font-serif font-bold mb-4 ${light ? 'text-white' : 'text-brand-navy'}`}>{title}</h2>
    {subtitle && <p className={`text-lg max-w-2xl ${light ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>}
  </div>
);

// --- Page Components ---

const HomePage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => (
  <>
    {/* Hero Section */}
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-navy/5 -z-10 hidden lg:block"></div>
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Redefining Mental Healthcare</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-navy leading-[1.1] mb-8">
            The Future of Mental Health is <span className="text-brand-teal italic">Patient-Led.</span>
          </h1>
          <p className="text-2xl text-brand-teal font-medium mb-8 leading-relaxed">
            Transforming the Helpless into User Experts.
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
            Dr. Arokia Antonysamy is an award-winning psychiatrist and visionary CEO with two decades of clinical expertise. She is leading a movement to shift the power in mental healthcare from the doctor to the patient, ensuring dignity, actionable knowledge, and personalized paths to wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => { setPage('arokia-health'); window.scrollTo(0,0); }} className="bg-brand-navy text-white px-8 py-4 font-bold flex items-center justify-center gap-2 hover:bg-brand-teal transition-all group shadow-xl">
              Explore Arokia Health <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => { setPage('expertise'); window.scrollTo(0,0); }} className="border border-brand-navy text-brand-navy px-8 py-4 font-bold flex items-center justify-center gap-2 hover:bg-brand-navy/5 transition-all">
              The Clinical Journey
            </button>
          </div>
          
          <div className="mt-16 flex items-center gap-8 border-t border-gray-200 pt-8 opacity-70">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-brand-navy">20+</span>
              <span className="text-xs uppercase tracking-widest font-bold">Years Experience</span>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-brand-navy">NHS</span>
              <span className="text-xs uppercase tracking-widest font-bold">Leadership Legacy</span>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-brand-navy">Award</span>
              <span className="text-xs uppercase tracking-widest font-bold">Winning Innovation</span>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-brand-bone shadow-2xl overflow-hidden relative group border-8 border-white">
             <img 
               src="https://mindkonnect.org/wp-content/uploads/2025/10/download-2-1.png" 
               alt="Dr. Arokia Antonysamy" 
               className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-gold -z-10 opacity-30"></div>
          <div className="absolute top-1/2 -right-12 w-24 h-48 border-r-4 border-brand-navy/20 -z-10"></div>
          <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-brand-gold"></div>
        </div>
      </div>
    </section>

    {/* Philosophy Preview */}
    <section id="philosophy" className="py-24 bg-brand-bone">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Foundational Values</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6">Empowerment Over Dependence</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every project, assessment, and piece of guidance flows from a foundational philosophy established over 20 years of clinical practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <ValueCard icon={<Users size={40} strokeWidth={1.5} />} title="Empowerment" description="The patient is the expert of their own life. Our goal is to equip them with knowledge." />
          <ValueCard icon={<ShieldCheck size={40} strokeWidth={1.5} />} title="Dignity" description="Mental illness is a biological imbalance, not a moral failure." />
          <ValueCard icon={<Heart size={40} strokeWidth={1.5} />} title="Holistic Strength" description="We leverage all assets, including personal beliefs and faith." />
        </div>

        <div className="bg-brand-navy p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <SectionHeading 
                title="Vision" 
                subtitle="Empowering people with mental illness to understand their care, own their voice, and shape every clinical conversation." 
                light 
              />
            </div>
            <div className="lg:border-l lg:border-gray-700 lg:pl-16">
              <SectionHeading 
                title="Mission" 
                subtitle="To transform global access to mental healthcare by delivering clinically validated, regulated, and intelligent digital assessments that connect people to the right care, at the right time, in the right way." 
                light 
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Expertise Teaser */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <SectionHeading title="Clinical Authority" subtitle="Two decades of proven leadership and intellectual property." center />
        <button onClick={() => { setPage('expertise'); window.scrollTo(0,0); }} className="text-brand-gold font-bold flex items-center gap-2 mx-auto hover:translate-x-2 transition-transform uppercase tracking-widest text-sm">
          View Clinical Portfolio <ArrowRight size={18} />
        </button>
      </div>
    </section>
  </>
);

const PhilosophyPage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => (
  <div className="pt-24 animate-fadeIn">
    {/* Headline Block */}
    <section className="bg-brand-bone py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand-navy mb-8 opacity-10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">
          The Patient is the Expert
        </h1>
        <div className="max-w-4xl mx-auto">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-8 block">Guiding Principles</span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-brand-navy mb-8 leading-tight">
            Redefining Mental Healthcare through <span className="text-brand-teal italic">Dignity and Actionable Knowledge.</span>
          </h2>
          <div className="h-1 w-24 bg-brand-gold mx-auto mb-10"></div>
          <p className="text-2xl text-gray-600 italic">"The journey from helplessness to User Expert begins here."</p>
        </div>
      </div>
    </section>

    {/* Pillar 1: Empowerment */}
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-square bg-brand-navy/5 relative overflow-hidden shadow-xl">
             <div className="absolute inset-0 flex items-center justify-center">
                <Users size={180} className="text-brand-sage opacity-20" />
             </div>
          </div>
          <div className="absolute -top-4 -left-4 bg-brand-teal text-white px-6 py-4 font-bold shadow-lg">Pillar 01</div>
        </div>
        <div>
          <h3 className="text-4xl font-serif font-bold text-brand-navy mb-6">Empowerment: The User Expert</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            The core belief: no one is "helpless." We believe the patient is the CEO of their own recovery. Our clinical focus shifts from traditional, passive symptom management to active, informed decision-making. 
          </p>
          <div className="p-6 bg-brand-bone border-l-4 border-brand-teal">
            <h4 className="font-bold text-brand-teal uppercase tracking-widest text-xs mb-2">Key Concept</h4>
            <p className="font-serif italic text-xl">Transforming the helpless into the <span className="text-brand-teal font-bold underline">User Expert.</span></p>
          </div>
        </div>
      </div>
    </section>

    {/* Pillar 2: Dignity */}
    <section className="py-24 bg-brand-navy text-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h3 className="text-4xl font-serif font-bold mb-8">Dignity & Humanity</h3>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mb-8"></div>
          <blockquote className="text-3xl md:text-4xl font-serif italic mb-8 leading-snug text-brand-amber">
            "Mental illness is a biological imbalance, not a moral failure. It demands the same institutional respect as any physical ailment."
          </blockquote>
          <p className="text-gray-400 leading-relaxed">
            Our approach is built on eliminating stigma. Dr. Arokia's long-term commitment to reducing violence in inpatient units serves as living evidence of this commitment to human dignity in the face of crisis.
          </p>
        </div>
      </div>
    </section>

    {/* Pillar 3: Holistic Strength */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h3 className="text-4xl font-serif font-bold text-brand-navy mb-12">Holistic Strength</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-brand-bone rounded-full flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all mb-4">
              <Users size={32} />
            </div>
            <span className="font-bold uppercase tracking-widest text-xs text-brand-navy/60">Community</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-brand-bone rounded-full flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all mb-4">
              <Heart size={32} />
            </div>
            <span className="font-bold uppercase tracking-widest text-xs text-brand-navy/60">Faith</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-brand-bone rounded-full flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all mb-4">
              <Zap size={32} />
            </div>
            <span className="font-bold uppercase tracking-widest text-xs text-brand-navy/60">Values</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-brand-bone rounded-full flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all mb-4">
              <ShieldCheck size={32} />
            </div>
            <span className="font-bold uppercase tracking-widest text-xs text-brand-navy/60">Resilience</span>
          </div>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">
          We leverage a patient's existing psychological assets—including personal faith, values, and community connections—as essential components of the treatment plan. This is where clinical practice meets the individual's full life context.
        </p>
      </div>
    </section>

    {/* Transition to Arokia Health */}
    <section className="py-24 bg-brand-bone">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-white p-12 lg:p-20 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-32 h-1 bg-brand-gold"></div>
          <h3 className="text-4xl font-serif font-bold text-brand-navy mb-6">Scaling the Soul</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Arokia Health is the digital extension of this philosophy. It is not a diagnosis tool; it is an **Empowerment tool**, designed to give the User Expert the clinical data they need.
          </p>
          <button 
            onClick={() => { setPage('arokia-health'); window.scrollTo(0,0); }}
            className="bg-brand-navy text-white px-12 py-5 font-bold hover:bg-brand-teal transition-all flex items-center gap-2 mx-auto uppercase tracking-[0.2em]"
          >
            Explore the Platform <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  </div>
);

const ExpertisePage: React.FC = () => {
  const [showAllPublications, setShowAllPublications] = useState(false);

  const publications = [
    {
      authors: "Francesco Caltagirone, Erica F. De Lange, Arokia Antonysamy & Gianluca Settura",
      date: "30 Jun 2025",
      title: "Reflective practice for staff in psychiatric inpatient settings",
      journal: "Reflective Practice",
      doi: "10.1080/14623943.2025.2521100",
      url: "https://doi.org/10.1080/14623943.2025.2521100"
    },
    {
      authors: "Antonysamy A, Govindaraju A, Selvakodi H, Samiyappan S.",
      date: "2025",
      title: "Societal Attitudes Towards Transgender Individuals: A Multicentric Survey Across Urban, Rural and Cosmopolitan Cities in India",
      journal: "BJPsych Open",
      volume: "11(S1):S20-S21",
      doi: "10.1192/bjo.2025.10194",
      url: "https://doi.org/10.1192/bjo.2025.10194"
    },
    {
      authors: "Antonysamy A S",
      date: "2013",
      title: "How can we reduce violence and aggression in psychiatric inpatient units?",
      journal: "BMJ Quality Improvement Reports",
      number: "u201366.w834",
      url: "https://bmjopenquality.bmj.com/content/2/1/u201366.w834"
    },
    {
      authors: "A S Antonysamy",
      date: "2012",
      title: "‘The Handshake project: How can GPs and Psychiatrists work together?’",
      journal: "Update, Manchester Business School Quarterly journal",
      pages: "6-7",
      url: "https://research.mbs.ac.uk/hsi/Portals/0/docs/HSI-Update-summer-2012.pdf"
    },
    {
      authors: "AS Antonysamy, A Wieck, A Wittkowski",
      date: "2009",
      title: "‘Service satisfaction on discharge from a psychiatric mother and baby unit: a representative patient survey’",
      journal: "Archives of Women’s Mental Health",
      volume: "Vol 12, No:5, 359-362",
      url: "https://link.springer.com/article/10.1007/s00737-009-0086-4"
    },
    {
      authors: "K Neelam, AS Antonysamy, V Duddu, IB Chaudhry, N Husain",
      date: "2009",
      title: "‘British senior psychiatry trainees’ ethno-cultural personal values: a survey’",
      journal: "Academic Psychiatry",
      volume: "Vol 32; 423-42",
      url: "https://link.springer.com/article/10.1176/appi.ap.32.6.423"
    }
  ];

  return (
    <div className="pt-24 animate-fadeIn">
      {/* Headline Block */}
      <section className="bg-brand-navy py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-white opacity-5 pointer-events-none">
          <div className="w-full h-full border-l border-white/20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Two Decades of Authority</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Clinical IP and <br/>
              <span className="text-brand-amber italic">Evidence-Based Innovation.</span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Our intellectual property is the clinical foundation that de-risks the future of AI-driven care.
            </p>
          </div>
        </div>
      </section>

      {/* Proprietary Clinical Frameworks */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading title="Proprietary Clinical Frameworks" subtitle="The unique training data and logic powering Arokia Health." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-12 border-2 border-brand-bone bg-brand-bone/20 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-brand-gold opacity-10 group-hover:scale-110 transition-transform">
                <Zap size={100} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-brand-navy mb-4">The PARA Risk Tool</h3>
              <span className="text-xs uppercase font-bold tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full mb-6 inline-block">Psychiatric Adult Risk Assessment</span>
              <p className="text-gray-600 leading-relaxed mb-6">
                The UK's first national model for addressing social media-related risk. Unlike traditional tools that only screen for deficits, PARA emphasizes patient strengths as a key differentiator in resilience.
              </p>
              <div className="h-1 w-20 bg-brand-gold"></div>
            </div>
            <div className="p-12 border-2 border-brand-bone bg-brand-bone/20 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-brand-gold opacity-10 group-hover:scale-110 transition-transform">
                <Award size={100} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-brand-navy mb-4">The MaZon Framework</h3>
              <span className="text-xs uppercase font-bold tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full mb-6 inline-block">Award-Winning Digital Tool</span>
              <p className="text-gray-600 leading-relaxed mb-6">
                Recipient of national innovation awards, MaZon bridges the gap between hospital and community settings, enabling clinicians and patients to monitor progress in real-time.
              </p>
              <div className="h-1 w-20 bg-brand-gold"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Professional Leadership */}
      <section className="py-24 bg-brand-bone">
        <div className="container mx-auto px-6">
          <SectionHeading title="Professional Leadership" subtitle="Institutional influence at the highest levels of healthcare." />
          <div className="space-y-8">
            <LeadershipRow institution="NHS Executive Leadership" title="Regional Medical Director & Deputy MD" role="Leading massive service transformations across the UK's healthcare landscape." />
            <LeadershipRow institution="Policy Influence" title="House of Commons" role="Contributor to national initiatives launched to set new standards for patient empowerment." />
            <LeadershipRow institution="Academic Authority" title="Warwick Business School" role="Executive MBA, specializing in the intersection of healthcare and business strategy." />
          </div>
        </div>
      </section>

      {/* Selected Publications & Media */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading title="Research & Media Impact" subtitle="Values-driven clinical logic shared with the world." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PublicationCard title="AI Ethics & Suicide Prevention" takeaway="Advocating for clinically-led, regulated AI that hears the 'echoes of suicide' with precision." icon={<Mic />} />
            <PublicationCard title="Violence Reduction" takeaway="Featured on BBC: Reducing aggression in inpatient units through dignifying patient care models." icon={<Globe />} />
            <PublicationCard title="Integrated Care" takeaway="National presentations on bridging the physical and mental health divide for holistic wellness." icon={<Layers />} />
          </div>
          <div className="mt-16 text-center">
            <button 
              onClick={() => setShowAllPublications(!showAllPublications)}
              className="text-brand-navy font-bold flex items-center gap-2 mx-auto hover:text-brand-gold transition-colors underline decoration-brand-gold decoration-2 underline-offset-4"
            >
              {showAllPublications ? 'Hide Publication List' : 'View Full Publication List'} <FileText size={18} />
            </button>
          </div>

          {showAllPublications && (
            <div className="mt-16 animate-fadeIn bg-brand-bone/30 border border-brand-bone p-8 md:p-12">
              <h3 className="text-2xl font-serif font-bold text-brand-navy mb-8 border-b border-brand-gold/30 pb-4">Academic & Clinical Publications</h3>
              <div className="space-y-10">
                {publications.map((pub, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 text-brand-gold font-serif text-xl font-bold opacity-30 mt-1">{String(index + 1).padStart(2, '0')}</div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">
                        {pub.title}
                      </h4>
                      <p className="text-gray-600 mb-2 leading-relaxed italic">
                        {pub.authors} ({pub.date})
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-teal">
                        <span className="flex items-center gap-1">
                          <BookOpen size={14} className="text-brand-gold" /> {pub.journal} {pub.volume || ''} {pub.number || ''}
                        </span>
                        {pub.doi && (
                          <span className="text-gray-400">DOI: {pub.doi}</span>
                        )}
                        {pub.url && (
                          <a 
                            href={pub.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-1 hover:text-brand-navy transition-colors bg-brand-gold/10 px-2 py-1"
                          >
                            <ExternalLink size={14} /> Full Article
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Question',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 animate-fadeIn">
      <section className="py-24 bg-brand-bone relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Let's Connect</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-navy mb-8">Ready to Transform the Standard of Care?</h1>
            <p className="text-xl text-gray-600 mb-12">Segmented paths for investment, partnership, and visionary collaboration.</p>
            
            <div className="space-y-6">
              <ContactBlock 
                title="Investment" 
                audience="Audience: Institutional Investors, Venture Capital"
                cta="Request Investor Deck" 
                variant="gold"
                desc="Join us as we scale the most clinically compliant and de-risked AI solution in mental healthcare."
                onClick={() => window.location.href = "mailto:sundarianand@hotmail.com?subject=Investment Inquiry"}
              />
              <ContactBlock 
                title="Strategic Partnership" 
                audience="Audience: Healthcare Systems, Academic Institutions"
                cta="Discuss Partnership" 
                variant="navy"
                desc="Collaborate on research, IP licensing, and implementing our frameworks within your system."
                onClick={() => window.location.href = "mailto:sundarianand@hotmail.com?subject=Partnership Proposal"}
              />
              <ContactBlock 
                title="Speaking & Media" 
                audience="Audience: Event Organizers, Media, Podcasts"
                cta="Book Dr. Arokia" 
                variant="teal"
                desc="Featured on BBC and TEDx. Expert commentary on AI Ethics, Empowerment, and System Transformation."
                onClick={() => window.location.href = "mailto:sundarianand@hotmail.com?subject=Speaking Engagement"}
              />
            </div>
          </div>
          
          <div className="relative sticky top-32">
            <div className="bg-white p-8 md:p-12 shadow-2xl border border-gray-100 flex flex-col min-h-[500px]">
              <h4 className="text-3xl font-serif font-bold text-brand-navy mb-8">General Inquiry</h4>
              
              {!isSubmitted ? (
                <form className="space-y-5 flex-grow" onSubmit={handleEmailSubmit}>
                  {error && (
                    <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm animate-fadeIn">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input 
                      type="text" 
                      name="name"
                      disabled={isSubmitting}
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name" 
                      className="w-full p-4 bg-brand-bone/30 border border-gray-100 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all disabled:opacity-50" 
                    />
                    <input 
                      type="email" 
                      name="email"
                      disabled={isSubmitting}
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email" 
                      className="w-full p-4 bg-brand-bone/30 border border-gray-100 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all disabled:opacity-50" 
                    />
                  </div>
                  <div className="relative">
                    <select 
                      name="subject"
                      disabled={isSubmitting}
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-brand-bone/30 border border-gray-100 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none appearance-none transition-all disabled:opacity-50"
                    >
                      <option value="General Question">General Question</option>
                      <option value="Investment Inquiry">Investment Inquiry</option>
                      <option value="Partnership Proposal">Partnership Proposal</option>
                      <option value="Speaking Engagement">Speaking Engagement</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronRight size={18} className="rotate-90" />
                    </div>
                  </div>
                  <textarea 
                    name="message"
                    disabled={isSubmitting}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message" 
                    rows={4} 
                    className="w-full p-4 bg-brand-bone/30 border border-gray-100 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none resize-none transition-all disabled:opacity-50"
                  ></textarea>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-navy text-white py-5 font-bold hover:bg-brand-teal transition-all uppercase tracking-[0.2em] text-sm shadow-lg active:scale-[0.98] disabled:bg-gray-400 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        Processing...
                      </>
                    ) : (
                      'Send Secure Message'
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center animate-fadeIn flex flex-col items-center justify-center flex-grow py-10">
                  <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} className="text-brand-teal" />
                  </div>
                  <h5 className="text-2xl font-serif font-bold text-brand-navy mb-4">Message Transmitted</h5>
                  <p className="text-gray-500 mb-8 max-w-sm mx-auto leading-relaxed text-sm">
                    Thank you. Your inquiry has been received and securely routed to our team. Dr. Arokia or a clinical lead will contact you shortly regarding your request.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'General Question', message: '' });
                    }}
                    className="text-brand-teal font-bold uppercase tracking-widest text-[10px] hover:text-brand-navy transition-colors flex items-center gap-2 group"
                  >
                    New Inquiry <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PrivacyPolicyPage: React.FC = () => (
  <div className="pt-24 animate-fadeIn">
    <section className="bg-brand-navy py-20 text-white">
      <div className="container mx-auto px-6">
        <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Legal & Compliance</span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold">Privacy Policy</h1>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl prose prose-navy">
        <p className="text-lg text-gray-600 mb-8 italic">Last Updated: October 2025</p>
        
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 flex items-center gap-2"><Lock className="text-brand-gold" /> 1. Introduction</h2>
            <p className="text-gray-600">Dr. Arokia Antonysamy ("we", "our", "us") is committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. This policy is compliant with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 flex items-center gap-2"><Users className="text-brand-gold" /> 2. Data We Collect</h2>
            <p className="text-gray-600">We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
              <li><strong>Contact Information:</strong> Name, email address, and phone number provided via our contact forms.</li>
              <li><strong>Clinical Data:</strong> Information provided during mental health assessments or clinical interactions.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and usage data via cookies (only for site optimization).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 flex items-center gap-2"><CheckCircle className="text-brand-gold" /> 3. How We Use Your Data</h2>
            <p className="text-gray-600">We use information held about you in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
              <li>To provide you with clinical information or assessments as requested.</li>
              <li>To improve our services and platform (Arokia Health).</li>
              <li>To carry out our obligations arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our service.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 flex items-center gap-2"><ShieldCheck className="text-brand-gold" /> 4. Data Security & Storage</h2>
            <p className="text-gray-600">All information you provide to us is stored on our secure servers within the UK/EEA. We use strict procedures and security features to prevent unauthorized access. We do not sell or monetize your personal health data to third parties.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 flex items-center gap-2"><Scale className="text-brand-gold" /> 5. Your Rights</h2>
            <p className="text-gray-600">Under the UK GDPR, you have the right to access information held about you, the right to rectification, the right to erasure ("right to be forgotten"), and the right to restrict processing. You can exercise these rights at any time by contacting us.</p>
          </div>

          <div className="bg-brand-bone p-8 border-l-4 border-brand-gold">
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">6. Contact Information</h2>
            <p className="text-gray-600">Questions, comments, and requests regarding this privacy policy are welcomed and should be addressed to:</p>
            <p className="font-bold text-brand-navy mt-4">Email: <a href="mailto:sundarianand@hotmail.com" className="text-brand-teal hover:underline">sundarianand@hotmail.com</a></p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const TermsOfServicePage: React.FC = () => (
  <div className="pt-24 animate-fadeIn">
    <section className="bg-brand-teal py-20 text-white">
      <div className="container mx-auto px-6">
        <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Agreement & Use</span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold">Terms of Service</h1>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl prose prose-navy">
        <p className="text-lg text-gray-600 mb-8 italic">Effective Date: October 2025</p>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">By accessing or using the services provided by Dr. Arokia Antonysamy and Arokia Health, you agree to be bound by these Terms of Service and all applicable laws and regulations in the United Kingdom.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-6">We provide clinically validated mental health assessments, educational materials, and professional consultancy services. These services are intended to empower individuals and healthcare systems.</p>
            
            <div className="bg-brand-bone/50 border-l-4 border-brand-teal p-6 mt-6">
              <h3 className="text-xl font-serif font-bold text-brand-navy mb-4">2.1 Educational Use & Emergency Disclaimer</h3>
              <div className="space-y-4 text-gray-600 text-sm">
                <div>
                  <h4 className="font-bold text-brand-navy uppercase tracking-widest text-[10px] mb-1">Educational Use Only</h4>
                  <p>The content available on this website is provided for educational and informational purposes only. It is designed to support understanding of mental health topics in general terms and to help users identify appropriate next steps or sources of support.</p>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy uppercase tracking-widest text-[10px] mb-1">No Medical Advice</h4>
                  <p>This website does not provide medical diagnosis, clinical assessment, personalised treatment advice, medication guidance, or emergency support, and it should not be relied upon as a substitute for consultation with a qualified healthcare professional. Any information provided here is non-personalised, general in nature, and intended to complement — not replace — professional judgement or clinical care.</p>
                </div>
                <div className="bg-white p-3 border border-brand-teal/20 rounded shadow-sm">
                  <h4 className="font-bold text-brand-teal uppercase tracking-widest text-[10px] mb-1">Emergency Situations</h4>
                  <p className="font-medium">If you are experiencing a mental health crisis or feel at risk of harm to yourself or others, you should seek immediate human assistance by contacting emergency services (999 in the UK), NHS 111, or your local crisis team.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">3. Intellectual Property</h2>
            <p className="text-gray-600">All content on this site, including but not limited to the PARA Risk Tool, the MaZon Framework, and Arokia Health proprietary logic, is the exclusive intellectual property of Dr. Arokia Antonysamy. Unauthorized use or reproduction is strictly prohibited.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-600">To the extent permitted by UK law, Dr. Arokia Antonysamy shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the services.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">5. Governing Law</h2>
            <p className="text-gray-600">These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the English courts.</p>
          </div>

          <div className="bg-brand-bone p-8 border-l-4 border-brand-teal">
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">6. Contact Us</h2>
            <p className="text-gray-600">For any questions regarding these Terms, please contact:</p>
            <p className="font-bold text-brand-navy mt-4">Email: <a href="mailto:sundarianand@hotmail.com" className="text-brand-teal hover:underline">sundarianand@hotmail.com</a></p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// --- Small UI Elements ---

const ContactBlock: React.FC<{ title: string; audience: string; cta: string; variant: 'gold' | 'navy' | 'teal'; desc: string; onClick?: () => void }> = ({ title, audience, cta, variant, desc, onClick }) => {
  const bg = variant === 'gold' ? 'bg-brand-gold' : variant === 'navy' ? 'bg-brand-navy' : 'bg-brand-teal';
  return (
    <div className="p-8 border-2 border-brand-bone bg-white hover:border-brand-gold transition-all group">
      <h3 className="text-xl font-serif font-bold text-brand-navy mb-1">{title}</h3>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{audience}</p>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">{desc}</p>
      <button 
        onClick={onClick}
        className={`${bg} text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2`}
      >
        {cta} <ChevronRight size={14} />
      </button>
    </div>
  );
};

const PublicationCard: React.FC<{ title: string; takeaway: string; icon: React.ReactNode }> = ({ title, takeaway, icon }) => (
  <div className="p-10 border-2 border-brand-bone hover:shadow-xl transition-all">
    <div className="text-brand-gold mb-6">{icon}</div>
    <h4 className="text-xl font-serif font-bold text-brand-navy mb-4">{title}</h4>
    <p className="text-sm text-gray-500 leading-relaxed">{takeaway}</p>
  </div>
);

const LeadershipRow: React.FC<{ institution: string; title: string; role: string }> = ({ institution, title, role }) => (
  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 p-8 border-b border-gray-200 group hover:bg-white transition-all">
    <div className="w-48">
      <span className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em]">{institution}</span>
    </div>
    <div className="flex-1">
      <h4 className="text-xl font-serif font-bold text-brand-navy mb-1">{title}</h4>
      <p className="text-gray-500 text-sm">{role}</p>
    </div>
    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowRight size={20} className="text-brand-gold" />
    </div>
  </div>
);

const ArokiaHealthPage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => (
  <div className="pt-24 animate-fadeIn">
    {/* Headline Block */}
    <section className="bg-brand-navy py-20 lg:py-32 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal opacity-20 skew-x-12 translate-x-1/4"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Institutional Scaling</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Arokia Health: Clinical Rigor <br/>
            <span className="text-brand-amber italic">Meets Global Ambition.</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            A compliant solution for a global mental health crisis. Scaling two decades of clinical expertise into a de-risked platform for users and investors.
          </p>
          <div className="h-1 w-32 bg-brand-gold"></div>
        </div>
      </div>
    </section>

    {/* Compliance & Safety */}
    <section className="py-24 bg-brand-bone">
      <div className="container mx-auto px-6">
        <SectionHeading 
          center
          title="Compliance & Safety" 
          subtitle="Addressing investor concerns and user trust with institutional rigor."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ComplianceCard icon={<Stethoscope className="text-brand-teal" />} title="Clinically-Led AI" description="Our guidance is supervised by clinical experts, ensuring a 'patient-first' algorithm." />
          <ComplianceCard icon={<Lock className="text-brand-gold" />} title="Regulatory Rigor" description="Built on UK GDPR compliance and ISO 27001 standards." />
          <ComplianceCard icon={<ShieldCheck className="text-brand-navy" />} title="Data Commitment" description="Zero-monetization policy for personal health data. Trust is our primary asset." />
        </div>
      </div>
    </section>

    {/* Growth & Trajectory */}
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <SectionHeading title="Growth & Trajectory" subtitle="The roadmap to global institutional leadership." />
            <div className="space-y-6">
              <TimelineItem year="Current" title="Base Platform" desc="Core assessment tool ready with Pune technical team." />
              <TimelineItem year="2026" title="Warwick Program" desc="Elite coaching and mentoring through Warwick Business School." />
              <TimelineItem year="Global" title="HKSTP Growth" desc="Attracting APAC expansion through the Hong Kong Science Technology Park." />
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="p-1 w-full aspect-video bg-brand-navy relative shadow-2xl flex flex-col items-center justify-center p-12 text-center">
               <TrendingUp size={80} className="text-brand-gold mb-6 opacity-50" />
               <h4 className="text-white text-3xl font-serif font-bold mb-4">Scalability Analysis</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Dual CTA */}
    <section className="py-24 border-t border-brand-bone">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-brand-navy p-12 text-white flex flex-col justify-between relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><Briefcase size={120} /></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold mb-6">Invest in the Future</h3>
              <button onClick={() => setPage('contact')} className="bg-brand-gold text-brand-navy px-10 py-4 font-bold flex items-center gap-2 hover:bg-white transition-all uppercase tracking-widest text-sm">Investor Relations <ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="bg-brand-teal p-12 text-white flex flex-col justify-between relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><Users size={120} /></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold mb-6">Begin Your Journey</h3>
              <a 
                href="https://mindkonnect.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-brand-bone text-brand-teal px-10 py-4 font-bold inline-flex items-center gap-2 hover:bg-brand-gold hover:text-brand-navy transition-all uppercase tracking-widest text-sm w-fit"
              >
                Explore Platform <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 border border-gray-100 hover:border-brand-gold transition-all duration-500 shadow-sm group">
    <div className="text-brand-teal mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-xl font-serif font-bold text-brand-navy mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const ComplianceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-10 border border-gray-200 text-center flex flex-col items-center hover:shadow-xl transition-shadow">
    <div className="mb-6 p-4 bg-brand-bone rounded-full">{icon}</div>
    <h3 className="text-xl font-serif font-bold text-brand-navy mb-4">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const TimelineItem: React.FC<{ year: string; title: string; desc: string }> = ({ year, title, desc }) => (
  <div className="flex gap-6 group">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-brand-navy text-brand-gold font-bold flex items-center justify-center text-xs uppercase group-hover:bg-brand-gold group-hover:text-white transition-colors">
        {year}
      </div>
      <div className="w-px flex-1 bg-gray-200 my-2"></div>
    </div>
    <div className="pb-8">
      <h5 className="text-brand-navy font-bold mb-1">{title}</h5>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  </div>
);

// --- Main App Wrapper ---

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handlePageChange = (p: Page) => {
    setCurrentPage(p);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-brand-gold selection:text-white overflow-x-hidden">
      <Navbar currentPage={currentPage} setPage={handlePageChange} />

      <main className="transition-all duration-500">
        {currentPage === 'home' && <HomePage setPage={handlePageChange} />}
        {currentPage === 'philosophy' && <PhilosophyPage setPage={handlePageChange} />}
        {currentPage === 'expertise' && <ExpertisePage />}
        {currentPage === 'arokia-health' && <ArokiaHealthPage setPage={handlePageChange} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'privacy' && <PrivacyPolicyPage />}
        {currentPage === 'terms' && <TermsOfServicePage />}
      </main>

      {/* Footer */}
      <footer className="py-20 bg-brand-bone border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-brand-navy flex items-center justify-center text-brand-gold font-serif text-2xl font-bold">A</div>
                <span className="font-serif text-2xl tracking-wider font-bold text-brand-navy">DR. AROKIA</span>
              </div>
              <p className="text-gray-500 max-w-sm mb-8">
                Empowering patients to become user experts through two decades of clinical authority and visionary mental healthcare innovation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-brand-navy uppercase tracking-widest text-sm mb-6">Explore</h4>
              <ul className="space-y-4 text-gray-500">
                <li><button onClick={() => handlePageChange('home')} className="hover:text-brand-gold transition-colors">Home</button></li>
                <li><button onClick={() => handlePageChange('philosophy')} className="hover:text-brand-gold transition-colors">Philosophy</button></li>
                <li><button onClick={() => handlePageChange('expertise')} className="hover:text-brand-gold transition-colors">Expertise</button></li>
                <li><button onClick={() => handlePageChange('arokia-health')} className="hover:text-brand-gold transition-colors">Arokia Health</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-brand-navy uppercase tracking-widest text-sm mb-6">Legal</h4>
              <ul className="space-y-4 text-gray-500">
                <li><button onClick={() => handlePageChange('privacy')} className="hover:text-brand-gold transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => handlePageChange('terms')} className="hover:text-brand-gold transition-colors">Terms of Service</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <p className="text-gray-400 text-sm">© 2026 Dr. Arokia Antonysamy. All clinical rights reserved.</p>
              <span className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></span>
              <a 
                href="https://hrdigitalmedia.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 text-sm hover:text-brand-gold transition-colors flex items-center gap-1"
              >
                Developed by HR Digital Media <ExternalLink size={12} />
              </a>
            </div>
            <div className="flex gap-6 items-center">
              <a href="https://www.linkedin.com/in/arokia-antonysamy-b6701127/" target="_blank" rel="noopener noreferrer" className="text-brand-navy hover:text-brand-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/dr.arokia/" target="_blank" rel="noopener noreferrer" className="text-brand-navy hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578422442231" target="_blank" rel="noopener noreferrer" className="text-brand-navy hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/@drarokia" target="_blank" rel="noopener noreferrer" className="text-brand-navy hover:text-brand-gold transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://www.tiktok.com/@dr.arokia" target="_blank" rel="noopener noreferrer" className="text-brand-navy hover:text-brand-gold transition-colors" aria-label="TikTok">
                <Music size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;