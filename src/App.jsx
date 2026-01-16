import React, { useEffect, useState } from "react";

/* ===============================================
   ICON COMPONENTS (No external library needed)
   =============================================== */
const Menu = () => <div className="text-2xl">☰</div>;
const X = () => <div className="text-2xl">✕</div>;
const ArrowUp = () => <div className="text-xl">↑</div>;
const ChevronRight = () => <div className="inline-block">→</div>;
const ChevronDown = () => <div className="inline-block">↓</div>;
const MapPin = () => <span>📍</span>;
const Phone = () => <span>📞</span>;
const Mail = () => <span>📧</span>;
const Heart = () => <span className="text-5xl">❤️</span>;
const Users = () => <span>👥</span>;
const Eye = () => <span className="text-3xl">👁️</span>;
const Target = () => <span className="text-3xl">🎯</span>;
const Award = () => <span className="text-3xl">🏆</span>;

const SocialIcon = ({ type }) => {
  const icons = {
    facebook: "f",
    twitter: "𝕏",
    linkedin: "in",
    instagram: "📷",
    youtube: "▶️",
  };
  return <span className="text-lg font-bold">{icons[type] || "•"}</span>;
};

/* ===============================================
   DATA - ADD YOUR OWN PHOTOS HERE
   =============================================== */

// HERO SLIDES - Replace with your organization photos
// Upload your photos to Imgur and copy the direct image links
const heroSlides = [
  {
    image: "https://i.imgur.com/YOUR_HERO_IMAGE_1.jpg", // Replace with your hero image 1
    title: "Empowering Women, Transforming Communities",
    subtitle: "Building resilient futures through education, livelihood, and sustainable development across Nepal",
  },
  {
    image: "https://i.imgur.com/YOUR_HERO_IMAGE_2.jpg", // Replace with your hero image 2
    title: "From Relief to Resilience",
    subtitle: "Community-driven solutions for WASH, health, climate action, and dignified living",
  },
  {
    image: "https://i.imgur.com/YOUR_HERO_IMAGE_3.jpg", // Replace with your hero image 3
    title: "Women-Led. Community-Centered.",
    subtitle: "Rights-based approaches promoting equity, inclusion, and lasting change",
  },
];

const focusAreas = [
  {
    icon: "⚖️",
    title: "Good Governance",
    desc: "Transparency, accountability, participatory decision-making",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: "💼",
    title: "Resilient Livelihood",
    desc: "Sustainable income generation and economic empowerment",
    color: "from-orange-600 to-red-600",
  },
  {
    icon: "📚",
    title: "Resilient Education",
    desc: "Quality, inclusive, accessible education for all",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: "💧",
    title: "WASH",
    desc: "Clean water, sanitation, and hygiene promotion",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: "🏠",
    title: "Shelter",
    desc: "Safe, resilient housing and infrastructure",
    color: "from-orange-600 to-orange-700",
  },
  {
    icon: "🏥",
    title: "Health Systems",
    desc: "Community health strengthening and well-being",
    color: "from-red-500 to-orange-600",
  },
  {
    icon: "🌍",
    title: "Climate & DRR",
    desc: "Climate resilience and disaster risk reduction",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "📈",
    title: "Capacity Development",
    desc: "Skills building and knowledge transfer",
    color: "from-amber-500 to-orange-600",
  },
];

// PROJECT IMAGES - Replace with your actual project photos
const projects = [
  {
    title: "Environment & COVID-19 Awareness Campaign",
    location: "Dhanusha District",
    period: "2020-2021",
    beneficiaries: "5,000+ households",
    status: "Completed",
    image: "https://i.imgur.com/YOUR_PROJECT_IMAGE_1.jpg", // Replace with your project photo 1
  },
  {
    title: "WASH Awareness & Social Mobilization",
    location: "Janakpur Sub-Metropolitan City",
    period: "2021-2022",
    beneficiaries: "3,000+ households",
    status: "Completed",
    image: "https://i.imgur.com/YOUR_PROJECT_IMAGE_2.jpg", // Replace with your project photo 2
  },
  {
    title: "Women Entrepreneurship Support Program",
    location: "Lalitpur & Dhanusha",
    period: "2022-2024",
    beneficiaries: "150+ women entrepreneurs",
    status: "Ongoing",
    image: "https://i.imgur.com/YOUR_PROJECT_IMAGE_3.jpg", // Replace with your project photo 3
  },
];

const team = [
  {
    name: "Rohan Pablab",
    role: "Executive Director",
    email: "rohanpablab@gmail.com",
    bio: "Leading ANANT Nepal with vision for inclusive, women-led development",
  },
  {
    name: "Sita Sharma",
    role: "Chairperson",
    bio: "Women's rights activist with 20+ years of grassroots experience",
  },
  {
    name: "Ram Thapa",
    role: "Treasurer",
    bio: "Financial management expert ensuring transparent governance",
  },
];

const testimonials = [
  {
    name: "Sita Kumari",
    role: "Beneficiary, Dhanusha",
    text: "ANANT Nepal helped me start my tailoring business. Now I support my family independently.",
    avatar: "👩",
  },
  {
    name: "Ram Bahadur",
    role: "Community Leader",
    text: "The WASH program transformed our village. Clean water improved health for everyone.",
    avatar: "👨",
  },
];

/* ===============================================
   MAIN COMPONENT
   =============================================== */
export default function AnantNepal() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const timer = setInterval(
      () => setSlide((s) => (s + 1) % heroSlides.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400);
      const sections = ["home", "about", "focus", "projects", "team", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
      />
      <Hero slide={slide} setSlide={setSlide} />
      <ImpactStats />
      <MissionVisionGoals />
      <FocusAreas />
      <Projects />
      <Team />
      <Testimonials />
      <CallToAction />
      <Footer />
      {showTop && <ScrollTop />}
    </div>
  );
}

/* ===============================================
   NAVBAR - Replace logo URL with your own
   =============================================== */
const Navbar = ({ menuOpen, setMenuOpen, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  
  // Your peacock feather logo
  const logoUrl = "https://i.imgur.com/WHBKmLQ.png";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <img 
              src={logoUrl} 
              alt="ANANT Nepal Logo" 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent">
              ANANT Nepal
            </h1>
            <p className="text-xs text-orange-600 -mt-1 font-semibold">
              Building Resilient Communities
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-medium">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "focus", label: "What We Do" },
            { id: "projects", label: "Projects" },
            { id: "team", label: "Team" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`hover:text-orange-600 transition-colors ${
                activeSection === item.id ? "text-orange-600 font-semibold" : "text-gray-700"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#donate"
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2.5 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Donate Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-orange-600 hover:text-orange-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "focus", label: "What We Do" },
            { id: "projects", label: "Projects" },
            { id: "team", label: "Team" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block px-6 py-4 border-b hover:bg-orange-50 transition text-gray-700 hover:text-orange-600"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#donate"
            className="block px-6 py-4 bg-orange-600 text-white font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Donate Now
          </a>
        </div>
      )}
    </nav>
  );
};

/* ===============================================
   HERO SECTION
   =============================================== */
const Hero = ({ slide, setSlide }) => (
  <section id="home" className="h-screen relative mt-20 lg:mt-0">
    <div
      className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${heroSlides[slide].image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
    </div>

    <div className="relative z-10 h-full flex items-center">
      <div className="max-w-7xl mx-auto px-6 text-white">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            {heroSlides[slide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-orange-100">
            {heroSlides[slide].subtitle}
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#donate"
              className="bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              Donate Now <ChevronRight />
            </a>
            <a
              href="#about"
              className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { value: "10K+", label: "Lives Impacted" },
              { value: "15+", label: "Active Projects" },
              { value: "8", label: "Focus Areas" },
              { value: "100%", label: "Women-Led" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-bold mb-1 text-orange-300">
                  {stat.value}
                </p>
                <p className="text-sm text-orange-100 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
      {heroSlides.map((_, i) => (
        <button
          key={i}
          onClick={() => setSlide(i)}
          className={`h-3 rounded-full transition-all duration-300 ${
            i === slide ? "bg-orange-500 w-8" : "bg-white/50 hover:bg-orange-300 w-3"
          }`}
        />
      ))}
    </div>
  </section>
);

/* ===============================================
   IMPACT STATS
   =============================================== */
const ImpactStats = () => (
  <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-orange-700">Our Impact Across Nepal</h2>
        <p className="text-xl text-orange-600">
          Measurable change in communities we serve
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { icon: "🗺️", number: "6+", label: "Districts Served" },
          { icon: "👩‍💼", number: "500+", label: "Women Entrepreneurs" },
          { icon: "📊", number: "120+", label: "Community Trainings" },
          { icon: "🤝", number: "20+", label: "Local Partners" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-orange-100"
          >
            <div className="text-5xl mb-4">{stat.icon}</div>
            <p className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
              {stat.number}
            </p>
            <p className="text-orange-700 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ===============================================
   MISSION, VISION, GOALS - WITH SEE MORE/LESS
   =============================================== */
const MissionVisionGoals = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardName) => {
    setExpandedCard(expandedCard === cardName ? null : cardName);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-xl text-orange-600 max-w-3xl mx-auto">
            A women-led NGO committed to building resilient, equitable, and
            self-reliant communities across Nepal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Vision Card */}
          <div className="group bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-200">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-orange-800">Our Vision</h3>
            <div className={`overflow-hidden transition-all duration-300 ${expandedCard === 'vision' ? 'max-h-96' : 'max-h-24'}`}>
              <p className="text-orange-700 leading-relaxed">
                A just and resilient society where all people, especially women,
                marginalized groups, and vulnerable communities, live with dignity,
                equity, and self-reliance.
              </p>
            </div>
            <button
              onClick={() => toggleCard('vision')}
              className="mt-4 text-orange-600 font-semibold hover:text-orange-700 flex items-center gap-2"
            >
              {expandedCard === 'vision' ? 'See Less' : 'See More'}
              {expandedCard === 'vision' ? <ChevronDown /> : <ChevronRight />}
            </button>
          </div>

          {/* Mission Card */}
          <div className="group bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-200">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-orange-800">Our Mission</h3>
            <div className={`overflow-hidden transition-all duration-300 ${expandedCard === 'mission' ? 'max-h-96' : 'max-h-24'}`}>
              <p className="text-orange-700 leading-relaxed">
                To empower communities through participatory, rights-based, and
                gender-responsive approaches promoting good governance, sustainable
                livelihoods, education, health, and climate resilience.
              </p>
            </div>
            <button
              onClick={() => toggleCard('mission')}
              className="mt-4 text-orange-600 font-semibold hover:text-orange-700 flex items-center gap-2"
            >
              {expandedCard === 'mission' ? 'See Less' : 'See More'}
              {expandedCard === 'mission' ? <ChevronDown /> : <ChevronRight />}
            </button>
          </div>

          {/* Goal Card */}
          <div className="group bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-200">
            <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Award />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-orange-800">Our Goal</h3>
            <div className={`overflow-hidden transition-all duration-300 ${expandedCard === 'goal' ? 'max-h-96' : 'max-h-24'}`}>
              <p className="text-orange-700 leading-relaxed">
                To establish ANANT Nepal as a leading organization promoting
                inclusive development, social justice, and resilience through
                community-centered interventions and strategic partnerships.
              </p>
            </div>
            <button
              onClick={() => toggleCard('goal')}
              className="mt-4 text-orange-600 font-semibold hover:text-orange-700 flex items-center gap-2"
            >
              {expandedCard === 'goal' ? 'See Less' : 'See More'}
              {expandedCard === 'goal' ? <ChevronDown /> : <ChevronRight />}
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-10 border-2 border-orange-200">
          <h3 className="text-3xl font-bold text-center mb-10 text-orange-700">
            Our Core Approaches
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "⚖️",
                title: "Rights-Based Approach",
                desc: "Respect, protect, and fulfill human rights",
              },
              {
                icon: "🌈",
                title: "GESI Mainstreaming",
                desc: "Gender equality and social inclusion",
              },
              {
                icon: "🤝",
                title: "Partnership",
                desc: "Collaboration with communities and stakeholders",
              },
              {
                icon: "✨",
                title: "Do-No-Harm",
                desc: "Ensuring positive, sustainable impact",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border-2 border-orange-100"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="font-bold mb-2 text-orange-700">{value.title}</h4>
                <p className="text-sm text-orange-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===============================================
   FOCUS AREAS
   =============================================== */
const FocusAreas = () => (
  <section id="focus" className="py-20 bg-gradient-to-b from-orange-50 to-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-700">What We Do</h2>
        <p className="text-xl text-orange-600 max-w-3xl mx-auto">
          Comprehensive programs addressing root causes and building long-term
          resilience
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {focusAreas.map((area) => (
          <div
            key={area.title}
            className="group relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border-2 border-orange-100"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />
            <div className="relative">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors text-orange-700">
                {area.title}
              </h3>
              <p className="text-orange-600 text-sm">{area.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ===============================================
   PROJECTS
   =============================================== */
const Projects = () => (
  <section
    id="projects"
    className="py-20 bg-gradient-to-b from-white to-orange-50"
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-700">
          Featured Projects
        </h2>
        <p className="text-xl text-orange-600">
          Creating lasting impact through community partnerships
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-orange-100"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4">
                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                    project.status === "Ongoing"
                      ? "bg-orange-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors text-orange-700">
                {project.title}
              </h3>
              <div className="space-y-2 text-sm text-orange-600 mb-4">
                <p className="flex items-center gap-2">
                  <MapPin /> {project.location}
                </p>
                <p className="flex items-center gap-2">📅 {project.period}</p>
                <p className="flex items-center gap-2">
                  <Users /> {project.beneficiaries}
                </p>
              </div>
              <button className="flex items-center text-orange-600 font-semibold hover:text-orange-700 group">
                Learn More <ChevronRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ===============================================
   TEAM
   =============================================== */
const Team = () => (
  <section id="team" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-700">
          Our Leadership Team
        </h2>
        <p className="text-xl text-orange-600">
          Dedicated professionals driving positive change
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {team.map((member) => (
          <div
            key={member.name}
            className="group bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-orange-200"
          >
            <div className="h-48 bg-gradient-to-br from-orange-400 via-red-500 to-orange-500 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                👤
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-1 text-orange-800">{member.name}</h3>
              <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
              <p className="text-orange-700 text-sm mb-3">{member.bio}</p>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700"
                >
                  <Mail /> {member.email}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
        <h3 className="text-2xl font-bold mb-6 text-center text-orange-700">
          Governance & Registration
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-orange-800">Registration Details</h4>
            <ul className="space-y-2 text-orange-600">
              <li>📋 DAO Reg. No: 2752077078</li>
              <li>📅 Registration Date: 2077-12-23 (BS)</li>
              <li>🏛️ SWC: 52530</li>
              <li>💼 PAN: 615840369</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-orange-800">Office Locations</h4>
            <ul className="space-y-2 text-orange-600">
              <li>🏢 Head Office: Janakpur Dham-4, Dhanusha</li>
              <li>📍 Branch: Mahalakshmi Municipality-1, Lalitpur</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ===============================================
   TESTIMONIALS
   =============================================== */
const Testimonials = () => (
  <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-700">
          Stories from the Field
        </h2>
        <p className="text-xl text-orange-600">
          Hear directly from the communities we serve
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((person) => (
          <div
            key={person.name}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-orange-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-3xl mr-4">
                {person.avatar}
              </div>
              <div>
                <h4 className="font-bold text-lg text-orange-800">{person.name}</h4>
                <p className="text-orange-500 text-sm">{person.role}</p>
              </div>
            </div>
            <p className="text-orange-700 italic leading-relaxed">
              "{person.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ===============================================
   CALL TO ACTION
   =============================================== */
const CallToAction = () => (
  <section
    id="donate"
    className="py-24 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white relative overflow-hidden"
  >
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 rounded-full filter blur-3xl" />
    </div>
    <div className="relative max-w-7xl mx-auto px-6 text-center">
      <div className="mb-6 flex justify-center">
        <Heart />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Join Us in Making a Difference
      </h2>
      <p className="text-xl mb-10 max-w-3xl mx-auto">
        Your support enables women-led, community-driven change across Nepal.
        Every contribution helps build resilient futures.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          Donate Now
        </button>
        <button className="border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all duration-300">
          Become a Volunteer
        </button>
      </div>
    </div>
  </section>
);

/* ===============================================
   FOOTER
   =============================================== */
const Footer = () => (
  <footer id="contact" className="bg-gray-900 text-gray-300">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-center gap-4 mb-12">
        {["facebook", "twitter", "linkedin", "instagram", "youtube"].map(
          (social) => (
            <a
              key={social}
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 transform hover:scale-110 transition-all duration-300"
            >
              <SocialIcon type={social} />
            </a>
          )
        )}
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">ANANT Nepal</h3>
          <p className="text-sm leading-relaxed">
            A women-led NGO building resilient, equitable communities through
            participatory development and rights-based approaches.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-orange-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#focus" className="hover:text-orange-400 transition">
                What We Do
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-orange-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-orange-400 transition">
                Our Team
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin />
              <span>Janakpur Dham-4, Dhanusha, Madhesh Province, Nepal</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone />
              <span>041-426162 | 9844325192</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail />
              <span>anantnepal01@gmail.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Registration</h4>
          <ul className="space-y-2 text-sm">
            <li>DAO: 2752077078</li>
            <li>SWC: 52530</li>
            <li>PAN: 615840369</li>
            <li className="pt-2">
              <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                100% Women-Led
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-sm">
        <p>&copy; 2026 ANANT Nepal. All rights reserved.</p>
        <p className="mt-2 text-gray-500">
          Designed with ❤️ for resilient communities
        </p>
      </div>
    </div>
  </footer>
);

/* ===============================================
   SCROLL TO TOP BUTTON
   =============================================== */
const ScrollTop = () => (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-40"
  >
    <ArrowUp />
  </button>
)

