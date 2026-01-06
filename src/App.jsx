import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

/* ---------------- HERO SLIDES ---------------- */
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    title: "Empowering Communities Across Nepal",
    subtitle:
      "Women-led initiatives building resilience, dignity, and sustainable futures",
  },
  {
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    title: "From Relief to Resilience",
    subtitle:
      "Education, livelihoods, WASH, and climate action for long-term impact",
  },
  {
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    title: "Local Leadership. Lasting Change.",
    subtitle: "Community-driven solutions rooted in equity and inclusion",
  },
];

/* ---------------- MAIN COMPONENT ---------------- */
export default function AnantNepal() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const timer = setInterval(
      () => setSlide((s) => (s + 1) % heroSlides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero slide={slide} />
      <Impact />
      <FocusAreas />
      <Projects />
      <Testimonials />
      <CallToAction />
      <Footer />
      {showTop && <ScrollTop />}
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */
const Navbar = ({ menuOpen, setMenuOpen }) => (
  <nav className="fixed top-0 w-full bg-white z-50 shadow">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green-600">ANANT Nepal</h1>

      <div className="hidden md:flex space-x-8 font-medium">
        <a href="#about">About</a>
        <a href="#focus">What We Do</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a
          href="#donate"
          className="bg-green-600 text-white px-5 py-2 rounded-full"
        >
          Donate
        </a>
      </div>

      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>
    </div>

    {menuOpen && (
      <div className="md:hidden bg-white border-t">
        {["About", "What We Do", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="block px-6 py-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    )}
  </nav>
);

/* ---------------- HERO ---------------- */
const Hero = ({ slide }) => (
  <section className="h-screen relative">
    <div
      className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${heroSlides[slide].image})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
    </div>

    <div className="relative z-10 h-full flex items-center">
      <div className="max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-5xl md:text-7xl font-bold max-w-3xl">
          {heroSlides[slide].title}
        </h1>
        <p className="mt-6 text-xl max-w-2xl">{heroSlides[slide].subtitle}</p>

        <div className="mt-10 flex gap-4">
          <button className="bg-green-600 px-8 py-4 rounded-full font-semibold">
            Donate Now
          </button>
          <button className="border px-8 py-4 rounded-full">Our Work</button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            ["10K+", "Lives Impacted"],
            ["15+", "Projects"],
            ["8", "Focus Areas"],
            ["100%", "Women-Led"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="text-4xl font-bold">{v}</p>
              <p className="text-sm text-gray-300 uppercase">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- IMPACT ---------------- */
const Impact = () => (
  <section id="about" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Impact</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {[
          ["6", "Districts Served"],
          ["500+", "Women Entrepreneurs"],
          ["120+", "Community Trainings"],
          ["20+", "Local Partners"],
        ].map(([n, l]) => (
          <div key={l} className="bg-white p-8 rounded-xl shadow">
            <p className="text-5xl font-bold text-green-600">{n}</p>
            <p className="mt-2">{l}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- FOCUS AREAS ---------------- */
const FocusAreas = () => (
  <section id="focus" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {[
          "Education",
          "Livelihoods",
          "WASH",
          "Health",
          "Climate & DRR",
          "Shelter",
          "Governance",
          "Capacity Building",
        ].map((item) => (
          <div
            key={item}
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
          >
            <h3 className="font-semibold text-lg">{item}</h3>
            <p className="mt-2 text-sm text-gray-600">
              Community-centered programs for sustainable development.
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- PROJECTS ---------------- */
const Projects = () => (
  <section id="projects" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          "WASH Awareness Campaign",
          "Women Entrepreneurship Program",
          "COVID-19 Community Response",
        ].map((p) => (
          <div key={p} className="bg-white rounded-xl shadow overflow-hidden">
            <div className="h-48 bg-green-500" />
            <div className="p-6">
              <h3 className="font-semibold text-lg">{p}</h3>
              <p className="text-sm mt-2 text-gray-600">
                Empowering communities through localized action and
                partnerships.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- TESTIMONIALS ---------------- */
const Testimonials = () => (
  <section className="py-24">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-12">Stories from the Field</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          "ANANT Nepal helped me start my business and support my family.",
          "Clean water changed health outcomes in our village.",
        ].map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow">
            <p className="italic">“{t}”</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- CTA ---------------- */
const CallToAction = () => (
  <section
    id="donate"
    className="py-24 bg-gradient-to-r from-green-600 to-blue-600 text-white text-center"
  >
    <h2 className="text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
    <p className="max-w-2xl mx-auto mb-8">
      Your support enables women-led, community-driven change across Nepal.
    </p>
    <button className="bg-white text-green-600 px-10 py-4 rounded-full font-semibold">
      Donate Now
    </button>
  </section>
);

/* ---------------- FOOTER ---------------- */
const Footer = () => (
  <footer id="contact" className="bg-gray-900 text-gray-300 py-16">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-white font-bold mb-4">ANANT Nepal</h3>
        <p>Women-led NGO building resilient communities.</p>
      </div>
      <div>
        <h4 className="text-white mb-4">Contact</h4>
        <p className="flex items-center gap-2">
          <MapPin size={16} /> Janakpur, Nepal
        </p>
        <p className="flex items-center gap-2">
          <Phone size={16} /> 041-426162
        </p>
        <p className="flex items-center gap-2">
          <Mail size={16} /> anantnepal01@gmail.com
        </p>
      </div>
      <div>
        <h4 className="text-white mb-4">Follow Us</h4>
        <div className="flex gap-4">
          <Facebook />
          <Twitter />
          <Linkedin />
          <Instagram />
        </div>
      </div>
      <div>
        <h4 className="text-white mb-4">Registration</h4>
        <p>DAO: 2752077078</p>
        <p>SWC: 52530</p>
        <p>PAN: 615840369</p>
      </div>
    </div>

    <p className="text-center text-sm mt-12">
      © 2024 ANANT Nepal. All rights reserved.
    </p>
  </footer>
);

/* ---------------- SCROLL TOP ---------------- */
const ScrollTop = () => (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow"
  >
    <ArrowUp />
  </button>
);


