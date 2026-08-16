import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Menu, X, ShieldCheck, Sparkles, Handshake, Hammer, PaintRoller, Droplets, Wrench, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";

const HERO_IMG = "https://media.base44.com/images/public/6a81f25ae0efb5d361323161/f418ce8ff_generated_aed04b33.png";
const BATH_IMG = "https://media.base44.com/images/public/6a81f25ae0efb5d361323161/810f0b6d4_generated_6357af9b.png";
const INTERIOR_IMG = "https://media.base44.com/images/public/6a81f25ae0efb5d361323161/d0ae2cf46_generated_e99a159a.png";
const DRYWALL_IMG = "https://media.base44.com/images/public/6a81f25ae0efb5d361323161/55ab7083f_generated_2b575fba.png";
const WATER_IMG = "https://media.base44.com/images/public/6a81f25ae0efb5d361323161/d8ff660da_generated_928346e3.png";
const PORTRAIT_IMG = "https://media.base44.com/images/public/6a81f25ae0efb5d361323161/0ddb9e678_generated_8335beca.png";

const PHONE = "347-355-4664";
const EMAIL = "info@rocaurbanconstruction.com";

const services = [
  {
    icon: Wrench,
    title: "Bathroom & Kitchen Remodeling",
    desc: "Complete transformations that turn outdated spaces into modern, functional, beautiful rooms — from cabinetry and stone to fixtures and finishes.",
    img: BATH_IMG,
  },
  {
    icon: Sparkles,
    title: "Interior Finishing",
    desc: "Detailed craftsmanship for floors, trim, molding, and every surface in between — the refined details that define a finished space.",
    img: INTERIOR_IMG,
  },
  {
    icon: PaintRoller,
    title: "Drywall & Painting",
    desc: "Seamless drywall installation, precision taping, and flawless paint work that delivers clean, lasting walls and ceilings.",
    img: DRYWALL_IMG,
  },
  {
    icon: Droplets,
    title: "Water Damage Repair & Restoration",
    desc: "Rapid response and full restoration after leaks and flooding. We coordinate licensed professionals and rebuild your space to better than new.",
    img: WATER_IMG,
  },
];

const values = [
  { icon: Handshake, title: "Committed To Customer Satisfaction", desc: "Every project is built around clear communication and your complete satisfaction." },
  { icon: Hammer, title: "Detail-Oriented Finishes", desc: "We sweat the details others overlook — the mark of true remodeling craft." },
  { icon: ShieldCheck, title: "Reliable & Trusted", desc: "Licensed and insured. We coordinate the right professionals and stand behind our work." },
];

const stats = [
  { value: "100%", label: "Customer Focus" },
  { value: "Licensed", label: "& Insured" },
  { value: "NYC", label: "& Surrounding Areas" },
  { value: "Free", label: "Estimates" },
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-md overflow-hidden shadow-lg shadow-[#2e74c0]/30">
            <img src="https://media.base44.com/images/public/6a81f25ae0efb5d361323161/ca66a865c_Screenshot2026-08-16165558.png" alt="ROCA rock logo" className="w-full h-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className="text-white font-bold tracking-wide text-sm sm:text-base">ROCA URBAN</div>
            <div className="text-[#a0a0a0] text-[10px] sm:text-xs tracking-[0.2em] uppercase">Construction LLC</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors uppercase tracking-wider font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            className="bg-[#2e74c0] hover:bg-[#2a6bb0] text-white font-semibold rounded-md px-5 shadow-lg shadow-[#2e74c0]/20"
          >
            <a href={`tel:${PHONE.replace(/-/g, "")}`}>
              <Phone className="w-4 h-4 mr-2" /> {PHONE}
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10 mt-3">
          <div className="px-5 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white uppercase tracking-wider text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center bg-[#2e74c0] text-white font-semibold rounded-md px-5 py-3"
            >
              <Phone className="w-4 h-4 mr-2" /> {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt="Modern remodeled kitchen by ROCA Urban Construction"
          className="w-full h-full object-cover"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 text-[#2e74c0] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-6 border border-[#2e74c0]/40 rounded-full px-4 py-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Building • Remodeling • Improving Spaces
          </div>
          <h1 className="text-white font-bold leading-[0.95] text-5xl sm:text-7xl lg:text-8xl tracking-tight">
            Quality Work.
            <br />
            <span className="text-[#2e74c0]">Solid Results.</span>
            <br />
            Built To Last.
          </h1>
          <p className="text-white/70 text-lg sm:text-xl mt-8 max-w-xl leading-relaxed">
            NYC's trusted remodeling specialists. We coordinate licensed professionals
            and restore your space with detail-oriented finishes — kitchens, baths,
            interiors, and full water-damage restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button
              asChild
              size="lg"
              className="bg-[#2e74c0] hover:bg-[#2a6bb0] text-white font-bold rounded-md px-8 py-6 text-base shadow-xl shadow-[#2e74c0]/30"
            >
              <a href="#contact">
                Call Today — Free Estimates <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/5 border-white/20 text-white hover:bg-white/10 rounded-md px-8 py-6 text-base backdrop-blur-sm"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-[#2e74c0] font-bold text-2xl sm:text-3xl">{s.value}</div>
              <div className="text-white/50 text-xs sm:text-sm uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-[#0a0a0a] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="text-[#2e74c0] text-sm font-semibold tracking-[0.3em] uppercase mb-4">What We Do</div>
          <h2 className="text-white font-bold text-4xl sm:text-5xl tracking-tight leading-tight">
            Full-service remodeling, done right.
          </h2>
          <p className="text-white/60 text-lg mt-5">
            From single-room renovations to complete restorations, ROCA handles every
            phase with the same commitment to craft and communication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 hover:border-[#2e74c0]/40 transition-colors"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-[#2e74c0] flex items-center justify-center shadow-lg">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-white/55 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="bg-black py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #2e74c0 0, transparent 50%)" }} />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[#2e74c0] text-sm font-semibold tracking-[0.3em] uppercase mb-4">Why Choose ROCA</div>
            <h2 className="text-white font-bold text-4xl sm:text-5xl tracking-tight leading-tight mb-6">
              Reliable. Trusted.
              <br />
              <span className="text-white/40">Detail-obsessed.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Edwin Yac and the ROCA team bring a remodeling specialist's eye to every job.
              We coordinate licensed professionals, communicate clearly, and deliver finishes
              that hold up — backed by insurance and a commitment to your satisfaction.
            </p>
            <div className="space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-[#2e74c0]/15 border border-[#2e74c0]/30 flex items-center justify-center">
                    <v.icon className="w-6 h-6 text-[#2e74c0]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">{v.title}</h4>
                    <p className="text-white/55">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://media.base44.com/images/public/6a81f25ae0efb5d361323161/987e072f3_generated_image.png"
                alt="Professional remodeling tools"
                className="w-full h-[520px] object-cover"
                fittingType="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8">
                <div className="text-white font-bold text-2xl">Remodeling Specialists</div>
                <div className="text-white/60">Licensed & Insured</div>
              </div>
            </div>
            <div className="absolute -top-5 -left-5 bg-[#2e74c0] rounded-xl px-6 py-4 shadow-xl shadow-[#2e74c0]/30 hidden sm:block">
              <div className="flex items-center gap-1 text-white">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white" />
                ))}
              </div>
              <div className="text-white/90 text-xs mt-1 font-medium">Trusted by NYC clients</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [BATH_IMG, INTERIOR_IMG, DRYWALL_IMG, WATER_IMG];
  const labels = ["Bathroom Remodel", "Interior Finishing", "Drywall & Painting", "Water Damage Restoration"];
  return (
    <section id="gallery" className="bg-[#0a0a0a] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <div className="text-[#2e74c0] text-sm font-semibold tracking-[0.3em] uppercase mb-4">The Work</div>
          <h2 className="text-white font-bold text-4xl sm:text-5xl tracking-tight">Recent projects</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {imgs.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-[3/4]"
            >
              <Image src={img} alt={labels[i]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" fittingType="fill" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <div className="text-white font-semibold text-sm">{labels[i]}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 50% 0%, #2e74c0 0, transparent 60%)" }} />
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[#2e74c0] text-sm font-semibold tracking-[0.3em] uppercase mb-5">Call Today!</div>
          <h2 className="text-white font-bold text-4xl sm:text-6xl tracking-tight leading-tight">
            Free estimates.
            <br />
            <span className="text-[#2e74c0]">Let's build your space.</span>
          </h2>
          <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto">
            Serving NYC & surrounding areas. We coordinate licensed professionals and
            restore your space — reach out and we'll get your project moving.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="group bg-[#111] border border-white/10 hover:border-[#2e74c0]/50 rounded-2xl p-6 transition-colors text-left"
            >
              <Phone className="w-7 h-7 text-[#2e74c0] mb-3" />
              <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Call</div>
              <div className="text-white font-semibold">{PHONE}</div>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="group bg-[#111] border border-white/10 hover:border-[#2e74c0]/50 rounded-2xl p-6 transition-colors text-left"
            >
              <Mail className="w-7 h-7 text-[#2e74c0] mb-3" />
              <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Email</div>
              <div className="text-white font-semibold break-all">{EMAIL}</div>
            </a>
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 text-left">
              <MapPin className="w-7 h-7 text-[#2e74c0] mb-3" />
              <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Service Area</div>
              <div className="text-white font-semibold">NYC & Surrounding Areas</div>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-[#2e74c0] hover:bg-[#2a6bb0] text-white font-bold rounded-md px-10 py-6 text-base shadow-xl shadow-[#2e74c0]/30 mt-10"
          >
            <a href={`tel:${PHONE.replace(/-/g, "")}`}>
              <Phone className="w-5 h-5 mr-2" /> Call {PHONE}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md overflow-hidden">
              <img src="https://media.base44.com/images/public/6a81f25ae0efb5d361323161/ca66a865c_Screenshot2026-08-16165558.png" alt="ROCA rock logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-white font-bold tracking-wide text-sm">ROCA URBAN CONSTRUCTION LLC</div>
              <div className="text-[#a0a0a0] text-xs tracking-[0.15em] uppercase">Quality Work • Solid Results • Built To Last</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <a href={`tel:${PHONE.replace(/-/g, "")}`} className="text-white/60 hover:text-white flex items-center gap-2">
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="text-white/60 hover:text-white flex items-center gap-2">
              <Mail className="w-4 h-4" /> {EMAIL}
            </a>
          </div>
        </div>
        <div className="text-white/30 text-xs mt-8 text-center md:text-left">
          © {new Date().getFullYear()} ROCA Urban Construction LLC. Licensed & Insured. Serving NYC & Surrounding Areas.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <NavBar />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}