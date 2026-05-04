"use client";

import { useState, useEffect, useRef } from "react";

// ── ANIMATION HOOK ────────────────────────────────────────────────────────────
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.12, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ── DATA ──────────────────────────────────────────────────────────────────────
const NAV_ITEMS = ["home", "about", "projects", "skills", "contact"];

const projects = [
  { id: 1, title: "Travel Recommendation System Chatbot", description: "Empowering applications with intelligent recommendation systems — destination recommendations, itinerary planning, and accommodation suggestions powered by ML.", tags: ["Python", "Machine Learning", "Chatbot", "Jupyter Notebook", "Kaggle"], github: "https://github.com/whanggg/Travel-Recommendation-System-Chatbot-Training.git", icon: "🤖", accent: "#14b8a6" },
  { id: 2, title: "Mobile University Enrollment System", description: "A cross-platform mobile application for streamlining the student enrollment process with real-time Firebase sync.", tags: ["Flutter", "Dart", "Swift", "Firebase"], github: "https://github.com/whanggg/Flutter-mobile-application-for-INTI-online-enrollment-system-.git", icon: "🎓", accent: "#0ea5e9" },
  { id: 3, title: "Agriculture E-Commerce Platform", description: "A digital marketplace empowering farmers to market livestock, crops, dairy products and more through a modern web storefront.", tags: ["PHP", "Laravel", "PHPMyAdmin", "XAMPP"], github: "https://github.com/whanggg/Agiculture-solution-E-commerce-platform.git", icon: "🌾", accent: "#10b981" },
  { id: 4, title: "Doctor Appointment Mobile App", description: "A native Android application for scheduling and managing doctor appointments with local Room Database persistence.", tags: ["Kotlin", "Room Database"], github: "https://github.com/whanggg/doctor_appointment_app.git", icon: "🏥", accent: "#f59e0b" },
  { id: 5, title: "FYP Campus Navigation App", description: "Final year project — a mobile app for navigating the university campus using real-time GPS tracking and AR-assisted guidance.", tags: ["Kotlin", "ARCore", "Google Maps API", "REST APIs"], github: "https://github.com/whanggg/FYP-Campus-navigation-mobile-application-with-Real-Time-GPS-tracking-and-AR-guidance-.git", icon: "🗺️", accent: "#8b5cf6" },
];

// ── SKILLS — grouped cards ────────────────────────────────────────────────────
const skillGroups = [
  {
    label: "Languages",
    icon: "💻",
    color: "#14b8a6",
    items: ["Python", "JavaScript", "TypeScript", "Kotlin", "Dart", "PHP", "HTML & CSS", "C++", "Java", "C#"],
  },
  {
    label: "Frameworks & Tools",
    icon: "🛠️",
    color: "#0ea5e9",
    items: ["React", "Next.js", "Flutter", "Laravel", "Tailwind CSS", "Android Studio", ".NET", "VS Code", "Figma", "Git & GitHub", "Vercel"],
  },
  {
    label: "Databases & Infrastructure",
    icon: "🗄️",
    color: "#10b981",
    items: ["MySQL", "PHPMyAdmin", "Microsoft SQL Server", "Firebase", "Room Database", "Kaggle"],
  },
  {
    label: "AI & Data",
    icon: "🤖",
    color: "#8b5cf6",
    items: ["Machine Learning", "Jupyter Notebook", "LLM", "Data Analysis", "ARCore / AR SDK", "Google Maps API", "REST APIs", "Ollama AI"],
  },
];

const heroBadges = [
  { label: "📱 Kotlin", color: "#14b8a6" },
  { label: "🚀 Flutter", color: "#0ea5e9" },
  { label: "⚛️ React", color: "#14b8a6" },
  { label: "🤖 Machine Learning", color: "#10b981" },
];

const timeline = [
  { year: "2024", title: "Final Year Project", desc: "Developed a mobile application to guide new intakes in finding the location through the campus - Integrated GPS and AR technologies", icon: "🏆" },
  { year: "2024", title: "Capstone Project", desc: "Delivered IoT smart dustbin with Arduino — integrates ultrasonic sensors to detect when objects approach the bin.", icon: "🤖" },
  { year: "2022", title: "Intake in INTI International University", desc: "Enrolled in Diploma in Information Technology — built foundation in programming, networking (Cisco Academy) and database management. Completed IBM ICE module.", icon: "🎓" },
];

// ── GLOBAL STYLES ─────────────────────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg-deep:    #0b1120;
    --bg-panel:   #0f1a2e;
    --bg-card:    #111d33;
    --bg-card2:   #162035;
    --border:     rgba(20,184,166,0.18);
    --border-sub: rgba(255,255,255,0.06);
    --teal:       #14b8a6;
    --teal-dim:   #0d9488;
    --teal-glow:  rgba(20,184,166,0.25);
    --sky:        #0ea5e9;
    --text-hi:    #f0f6ff;
    --text-mid:   #94a3b8;
    --text-lo:    #4a5a72;
    --font-head:  'Playfair Display', Georgia, serif;
    --font-body:  'DM Sans', sans-serif;
    scroll-behavior: smooth;
  }

  html { background: var(--bg-deep); }
  body { font-family: var(--font-body); background: var(--bg-deep); color: var(--text-mid); line-height: 1.65; overflow-x: hidden; }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: var(--bg-deep); }
  ::-webkit-scrollbar-thumb { background: var(--teal-dim); border-radius: 3px; }
  ::selection { background: var(--teal-glow); color: var(--text-hi); }

  .grid-bg {
    background-image:
      linear-gradient(rgba(20,184,166,0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(20,184,166,0.035) 1px, transparent 1px);
    background-size: 64px 64px;
  }

  @keyframes fadeUp      { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes slideLeft   { from{opacity:0;transform:translateX(-36px)} to{opacity:1;transform:translateX(0)} }
  @keyframes scaleIn     { from{opacity:0;transform:scale(0.78)} to{opacity:1;transform:scale(1)} }
  @keyframes float       { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes pulseRing   { 0%{box-shadow:0 0 0 0 var(--teal-glow)} 70%{box-shadow:0 0 0 18px transparent} 100%{box-shadow:0 0 0 0 transparent} }
  @keyframes arrowBounce { 0%,100%{transform:translateX(-50%) translateY(0);opacity:.5} 50%{transform:translateX(-50%) translateY(9px);opacity:1} }
  @keyframes shimmer     { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes barFill     { from{width:0%} }
  @keyframes spin        { to{transform:rotate(360deg)} }
  @keyframes popIn       { 0%{opacity:0;transform:scale(.88) translateY(12px)} 100%{opacity:1;transform:scale(1) translateY(0)} }

  .anim-fade-up    { opacity:0; transform:translateY(28px); transition:opacity .65s ease, transform .65s ease; }
  .anim-slide-left { opacity:0; transform:translateX(-36px); transition:opacity .6s ease, transform .6s ease; }
  .anim-scale-in   { opacity:0; transform:scale(0.8); transition:opacity .5s ease, transform .5s ease; }
  .anim-fade-up.visible, .anim-slide-left.visible, .anim-scale-in.visible { opacity:1; transform:none; }

  .nav-link {
    position:relative; color:var(--text-mid); font-size:.875rem; font-weight:500;
    background:none; border:none; cursor:pointer; font-family:var(--font-body);
    text-decoration:none; padding:4px 0; transition:color .2s;
  }
  .nav-link::after { content:''; position:absolute; bottom:-3px; left:0; width:0; height:2px; background:var(--teal); border-radius:1px; transition:width .25s; }
  .nav-link:hover, .nav-link.active { color:var(--teal); }
  .nav-link:hover::after, .nav-link.active::after { width:100%; }

  .btn-teal {
    display:inline-flex; align-items:center; justify-content:center; gap:7px;
    background:var(--teal); color:#0b1120; font-family:var(--font-head); font-weight:700;
    font-size:.875rem; padding:11px 24px; border-radius:8px; border:none; cursor:pointer;
    transition:background .2s, transform .15s, box-shadow .2s;
    box-shadow:0 0 22px var(--teal-glow); text-decoration:none;
  }
  .btn-teal:hover { background:#2dd4bf; transform:translateY(-2px); box-shadow:0 6px 32px rgba(20,184,166,.45); }

  .btn-ghost {
    display:inline-flex; align-items:center; justify-content:center; gap:7px;
    background:transparent; color:var(--text-hi); font-family:var(--font-head); font-weight:600;
    font-size:.875rem; padding:10px 24px; border-radius:8px; cursor:pointer;
    border:1px solid var(--border-sub); transition:border-color .2s, color .2s, transform .15s; text-decoration:none;
  }
  .btn-ghost:hover { border-color:var(--teal); color:var(--teal); transform:translateY(-2px); }

  .card { background:var(--bg-card); border:1px solid var(--border-sub); border-radius:16px; overflow:hidden; transition:border-color .3s, transform .3s, box-shadow .3s; }
  .card:hover { border-color:var(--border); transform:translateY(-5px); box-shadow:0 20px 52px rgba(0,0,0,.38),0 0 0 1px var(--border); }

  .shimmer-text {
    background:linear-gradient(90deg,var(--text-hi) 40%,var(--teal) 50%,var(--text-hi) 60%);
    background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    animation:shimmer 4s linear infinite;
  }
  .glow-line { width:44px; height:3px; border-radius:2px; background:linear-gradient(90deg,var(--teal),transparent); margin-bottom:10px; }
  .label-teal { display:inline-block; font-size:.7rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:var(--teal); margin-bottom:10px; }
  .avatar-ring { animation:pulseRing 2.8s ease-out infinite; }
  .arrow-bounce { position:absolute; bottom:32px; left:50%; animation:arrowBounce 1.7s ease-in-out infinite; color:var(--text-lo); }

  .input-field {
    width:100%; background:var(--bg-card2); border:1px solid var(--border-sub);
    border-radius:10px; padding:13px 16px; font-family:var(--font-body); font-size:.9rem;
    color:var(--text-hi); outline:none; transition:border-color .2s, box-shadow .2s;
  }
  .input-field::placeholder { color:var(--text-lo); }
  .input-field:focus { border-color:var(--teal); box-shadow:0 0 0 3px var(--teal-glow); }

  /* Skill group card */
  .skill-group-card {
    background:var(--bg-card); border:1px solid var(--border-sub); border-radius:18px;
    padding:26px 24px; transition:border-color .3s, box-shadow .3s;
  }
  .skill-group-card:hover { border-color:var(--border); box-shadow:0 8px 32px rgba(0,0,0,.28); }

  /* Channel popup */
  .channel-popup {
    animation: popIn .22s cubic-bezier(.34,1.56,.64,1) forwards;
  }

  @media (max-width:768px) {
    .hero-grid    { grid-template-columns:1fr !important; }
    .hero-right   { display:none !important; }
    .desktop-nav  { display:none !important; }
    .mob-toggle   { display:flex !important; }
    .about-grid   { grid-template-columns:1fr !important; }
    .contact-grid { grid-template-columns:1fr !important; }
    .form-row     { grid-template-columns:1fr !important; }
    .skills-grid  { grid-template-columns:1fr !important; }
  }
  @media (min-width:769px) { .mob-toggle { display:none !important; } }
`;

// ── HELPERS ───────────────────────────────────────────────────────────────────
// @ts-ignore
function SectionLabel({ tag, title, sub }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`anim-slide-left${inView ? " visible" : ""}`} style={{ marginBottom: 56 }}>
      <div className="glow-line" />
      <span className="label-teal">{tag}</span>
      <h2 style={{ fontFamily:"var(--font-head)", fontWeight:800, fontSize:"clamp(1.8rem,4vw,2.6rem)", color:"var(--text-hi)", lineHeight:1.2, marginBottom:10 }}>{title}</h2>
      {sub && <p style={{ color:"var(--text-mid)", maxWidth:500, fontSize:".95rem" }}>{sub}</p>}
    </div>
  );
}

function scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); }

// ── NAV ───────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (const id of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => { setMobileOpen(false); scrollTo(id); };

  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, background:scrolled?"rgba(11,17,32,.94)":"transparent", backdropFilter:scrolled?"blur(16px)":"none", borderBottom:scrolled?"1px solid var(--border-sub)":"1px solid transparent", transition:"background .35s, border-color .35s" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <span onClick={() => go("home")} style={{ fontFamily:"var(--font-head)", fontWeight:800, fontSize:"1.15rem", color:"var(--text-hi)", cursor:"pointer" }}>
          wh<span style={{ color:"var(--teal)" }}>.</span>Dev
        </span>
        <ul className="desktop-nav" style={{ display:"flex", gap:28, listStyle:"none", alignItems:"center" }}>
          {NAV_ITEMS.map(id => (
            <li key={id}><button onClick={() => go(id)} className={`nav-link${active===id?" active":""}`}>{id.charAt(0).toUpperCase()+id.slice(1)}</button></li>
          ))}
        </ul>
        <button onClick={() => setMobileOpen(o=>!o)} className="mob-toggle" style={{ background:"none", border:"none", cursor:"pointer", color:"var(--text-hi)", padding:4, alignItems:"center" }} aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen?<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>:<><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div style={{ background:"var(--bg-panel)", borderTop:"1px solid var(--border-sub)", padding:"12px 24px 16px", display:"flex", flexDirection:"column", gap:2 }}>
          {NAV_ITEMS.map(id => (
            <button key={id} onClick={() => go(id)} style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"var(--font-body)", color:active===id?"var(--teal)":"var(--text-mid)", fontWeight:active===id?600:400, fontSize:".9rem", textAlign:"left", padding:"10px 0", borderBottom:"1px solid var(--border-sub)" }}>
              {id.charAt(0).toUpperCase()+id.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── HOME ──────────────────────────────────────────────────────────────────────
function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t); }, []);
  const a = (d) => ({ opacity:loaded?1:0, transform:loaded?"translateY(0)":"translateY(28px)", transition:`opacity .7s ease ${d}s, transform .7s ease ${d}s` });

  return (
    <section id="home" className="grid-bg" style={{ minHeight:"100vh", display:"flex", alignItems:"center", paddingTop:64, position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"25%", right:"-5%", width:640, height:640, borderRadius:"50%", background:"radial-gradient(circle,rgba(20,184,166,.065) 0%,transparent 68%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"10%", left:"0%", width:340, height:340, borderRadius:"50%", background:"radial-gradient(circle,rgba(14,165,233,.045) 0%,transparent 70%)", pointerEvents:"none" }} />
      <div className="hero-grid" style={{ maxWidth:1100, margin:"0 auto", padding:"80px 24px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center", width:"100%" }}>
        <div>
          <div style={a(0)}><span className="label-teal">👋 Welcome to my portfolio</span></div>
          <h1 style={{ ...a(.1), fontFamily:"var(--font-head)", fontWeight:800, fontSize:"clamp(2.4rem,5vw,3.6rem)", lineHeight:1.15, color:"var(--text-hi)", marginBottom:8 }}>See Wei Hang</h1>
          <h2 style={{ ...a(.18), fontFamily:"var(--font-head)", fontWeight:600, fontSize:"clamp(1.1rem,2.5vw,1.45rem)", marginBottom:22 }} className="shimmer-text">Mobile || Aspiring AI Developer</h2>
          <p style={{ ...a(.26), color:"var(--text-mid)", fontSize:"1rem", lineHeight:1.78, maxWidth:480, marginBottom:28 }}>
            Crafting high-performance mobile apps, scalable web solutions, and intelligent AI-driven applications. Based in Malaysia 🇲🇾
          </p>
          <div style={{ ...a(.34), display:"flex", flexWrap:"wrap", gap:8, marginBottom:36 }}>
            {heroBadges.map(b => <span key={b.label} style={{ display:"inline-flex", alignItems:"center", gap:4, fontSize:".8rem", fontWeight:500, padding:"5px 13px", borderRadius:100, background:"rgba(20,184,166,.08)", color:b.color, border:`1px solid ${b.color}30` }}>{b.label}</span>)}
          </div>
          <div style={{ ...a(.42), display:"flex", flexWrap:"wrap", gap:12, marginBottom:48 }}>
            <button onClick={() => scrollTo("projects")} className="btn-teal">View Projects →</button>
            <button onClick={() => scrollTo("contact")} className="btn-ghost">Contact Me</button>
          </div>
          <div style={{ ...a(.5), display:"flex", gap:40, paddingTop:28, borderTop:"1px solid var(--border-sub)" }}>
            {[["5+","Projects"],["4+","Languages"]].map(([v,l]) => (
              <div key={l}>
                <p style={{ fontFamily:"var(--font-head)", fontWeight:800, fontSize:"1.75rem", color:"var(--teal)", lineHeight:1 }}>{v}</p>
                <p style={{ fontSize:".78rem", color:"var(--text-lo)", marginTop:4 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-right" style={{ ...a(.22), display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", gap:24 }}>
          <div style={{ position:"relative" }}>
            <div className="avatar-ring" style={{ width:200, height:200, borderRadius:"50%", background:"linear-gradient(135deg,var(--teal),var(--sky))", padding:3, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <div style={{ width:"100%", height:"100%", borderRadius:"50%", background:"var(--bg-deep)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"5rem" }}>👨‍💻</div>
            </div>
            <div style={{ position:"absolute", bottom:-14, left:-84, background:"var(--bg-card)", border:"1px solid var(--border)", borderRadius:12, padding:"8px 14px", fontSize:".78rem", fontWeight:600, color:"var(--text-hi)", whiteSpace:"nowrap", animation:"float 3s ease-in-out infinite" }}>✅ Open to work</div>
            <div style={{ position:"absolute", top:-14, right:-84, background:"var(--bg-card)", border:"1px solid var(--border)", borderRadius:12, padding:"8px 14px", fontSize:".78rem", fontWeight:600, color:"var(--text-hi)", whiteSpace:"nowrap", animation:"float 3.6s ease-in-out infinite .5s" }}>🎓 Fresh Graduate</div>
          </div>
          <div style={{ background:"var(--bg-card)", border:"1px solid var(--border-sub)", borderRadius:14, padding:"16px 20px", fontFamily:"monospace", fontSize:".78rem", color:"var(--text-lo)", lineHeight:1.85, minWidth:230 }}>
            <span style={{ color:"var(--teal)" }}>const</span> dev = {"{"}<br />
            &nbsp;&nbsp;<span style={{ color:"#7dd3fc" }}>mobile</span>: <span style={{ color:"#a78bfa" }}>"Kotlin"</span>,<br />
            &nbsp;&nbsp;<span style={{ color:"#7dd3fc" }}>cross</span>: <span style={{ color:"#a78bfa" }}>"Flutter"</span>,<br />
            &nbsp;&nbsp;<span style={{ color:"#7dd3fc" }}>web</span>: <span style={{ color:"#a78bfa" }}>"PHP"</span>,<br />
            &nbsp;&nbsp;<span style={{ color:"#7dd3fc" }}>AI</span>: <span style={{ color:"#a78bfa" }}>"Python"</span><br />
            {"}"}
          </div>
        </div>
      </div>
      <div className="arrow-bounce">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </section>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────────────────────
function About() {
  const [cardRef, cardInView] = useInView();
  const [tlRef, tlInView]     = useInView();
  return (
    <section id="about" style={{ padding:"100px 0", background:"var(--bg-panel)", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"40%", right:"-10%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(14,165,233,.04) 0%,transparent 70%)", pointerEvents:"none" }} />
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px" }}>
        <SectionLabel tag="About Me" title="Who I Am" sub="A little background about my journey, passion, and what drives me to build." />
        <div className="about-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"start" }}>
          <div ref={cardRef} className={`anim-fade-up${cardInView?" visible":""}`}>
            <div style={{ background:"var(--bg-card)", border:"1px solid var(--border-sub)", borderRadius:20, padding:32, marginBottom:20 }}>
              <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:24 }}>
                <div style={{ width:64, height:64, borderRadius:16, background:"linear-gradient(135deg,var(--teal),var(--sky))", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.8rem", flexShrink:0 }}>👨‍💻</div>
                <div>
                  <p style={{ fontFamily:"var(--font-head)", fontWeight:800, fontSize:"1.1rem", color:"var(--text-hi)" }}>See Wei Hang</p>
                  <p style={{ fontSize:".82rem", color:"var(--teal)", marginTop:2 }}>Mobile & Aspiring AI Developer</p>
                </div>
              </div>
              <p style={{ fontSize:".9rem", color:"var(--text-mid)", lineHeight:1.8, marginBottom:16 }}>
                I'm a passionate developer, specialising in building mobile applications and web platforms that solve real-world problems. My expertise spans native Android (Kotlin), cross-platform (Flutter), and modern web (React / Next.js).
              </p>
              <p style={{ fontSize:".9rem", color:"var(--text-mid)", lineHeight:1.8 }}>
                Beyond coding, I enjoy exploring machine learning applications, contributing to open-source projects, and continuously leveling up my skills through hands-on projects.
              </p>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              {[["📍","Kuala Lumpur, Malaysia"],["🎓","BSc Computer Science"],["💼","Open to opportunities"],["🌐","English, Malay & Mandarin"]].map(([icon,text]) => (
                <div key={text} style={{ background:"var(--bg-card)", border:"1px solid var(--border-sub)", borderRadius:12, padding:"12px 14px", display:"flex", alignItems:"center", gap:10 }}>
                  <span style={{ fontSize:"1rem" }}>{icon}</span>
                  <span style={{ fontSize:".8rem", color:"var(--text-mid)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div ref={tlRef}>
            <p style={{ fontFamily:"var(--font-head)", fontWeight:700, fontSize:".78rem", letterSpacing:".1em", textTransform:"uppercase", color:"var(--text-lo)", marginBottom:24 }}>My Journey</p>
            <div style={{ display:"flex", flexDirection:"column" }}>
              {timeline.map((item, i) => (
                <div key={i} className={`anim-fade-up${tlInView?" visible":""}`} style={{ transitionDelay:`${i*0.12}s`, display:"flex", gap:20, paddingBottom:i<timeline.length-1?32:0 }}>
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
                    <div style={{ width:40, height:40, borderRadius:12, background:"rgba(20,184,166,.1)", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.1rem" }}>{item.icon}</div>
                    {i<timeline.length-1 && <div style={{ width:1, flex:1, background:"linear-gradient(to bottom,var(--teal),transparent)", marginTop:8, minHeight:32 }} />}
                  </div>
                  <div style={{ paddingTop:6 }}>
                    <span style={{ fontSize:".72rem", fontWeight:700, color:"var(--teal)", letterSpacing:".06em" }}>{item.year}</span>
                    <p style={{ fontFamily:"var(--font-head)", fontWeight:700, fontSize:".95rem", color:"var(--text-hi)", margin:"4px 0 6px" }}>{item.title}</p>
                    <p style={{ fontSize:".85rem", color:"var(--text-mid)", lineHeight:1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={`anim-fade-up${tlInView?" visible":""}`} style={{ transitionDelay:".4s", marginTop:36, display:"flex", gap:10 }}>
              <button onClick={() => scrollTo("projects")} className="btn-teal" style={{ boxShadow:"none", fontSize:".8rem", padding:"9px 18px" }}>See My Work</button>
              <button onClick={() => scrollTo("contact")} className="btn-ghost" style={{ fontSize:".8rem", padding:"8px 18px" }}>Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── PROJECTS — GitHub button only ─────────────────────────────────────────────
function ProjectCard({ project, delay }) {
  const [ref, inView] = useInView();
  const [hover, setHover] = useState(false);
  return (
    <div ref={ref} className={`card anim-fade-up${inView?" visible":""}`} style={{ transitionDelay:`${delay}s`, display:"flex", flexDirection:"column", height:"100%" }}>
      <div style={{ padding:"24px 24px 18px", borderBottom:"1px solid var(--border-sub)", display:"flex", alignItems:"flex-start", gap:14 }}>
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
          style={{ width:48, height:48, borderRadius:12, background:`${project.accent}18`, border:`1px solid ${project.accent}30`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.35rem", flexShrink:0, transition:"transform .2s", transform:hover?"scale(1.14) rotate(-5deg)":"scale(1)" }}
        >{project.icon}</div>
        <h3 style={{ fontFamily:"var(--font-head)", fontWeight:700, fontSize:".98rem", color:"var(--text-hi)", lineHeight:1.35, paddingTop:4 }}>{project.title}</h3>
      </div>
      <div style={{ padding:"20px 24px 22px", flex:1, display:"flex", flexDirection:"column" }}>
        <p style={{ fontSize:".875rem", color:"var(--text-mid)", lineHeight:1.72, flex:1, marginBottom:16 }}>{project.description}</p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:18 }}>
          {project.tags.filter(Boolean).map(t => <span key={t} style={{ fontSize:".72rem", fontWeight:500, padding:"3px 11px", borderRadius:100, background:"rgba(20,184,166,.08)", color:"var(--teal)", border:"1px solid rgba(20,184,166,.18)" }}>{t}</span>)}
        </div>
        {/* ── Only GitHub button ── */}
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:8, background:"var(--bg-card2)", border:"1px solid var(--border-sub)", color:"var(--text-hi)", fontFamily:"var(--font-head)", fontWeight:600, fontSize:".85rem", padding:"10px 18px", borderRadius:10, textDecoration:"none", transition:"border-color .2s, background .2s, transform .15s" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor="var(--teal)"; e.currentTarget.style.background="#1a2a45"; e.currentTarget.style.transform="translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor=""; e.currentTarget.style.background="var(--bg-card2)"; e.currentTarget.style.transform=""; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          View on GitHub
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ padding:"100px 0", background:"var(--bg-deep)", position:"relative" }}>
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(20,184,166,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(20,184,166,.02) 1px,transparent 1px)", backgroundSize:"64px 64px", pointerEvents:"none" }} />
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px", position:"relative" }}>
        <SectionLabel tag="My Work" title="Featured Projects" sub="Real-world apps built across mobile, web, and AI — source code available on GitHub." />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:20 }}>
          {projects.map((p,i) => <ProjectCard key={p.id} project={p} delay={i*0.07} />)}
        </div>
      </div>
    </section>
  );
}

// ── SKILLS — grouped card layout, no level bars ───────────────────────────────
function SkillGroupCard({ group, delay }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`skill-group-card anim-fade-up${inView?" visible":""}`} style={{ transitionDelay:`${delay}s` }}>
      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
        <div style={{ width:42, height:42, borderRadius:11, background:`${group.color}18`, border:`1px solid ${group.color}30`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem", flexShrink:0 }}>{group.icon}</div>
        <h3 style={{ fontFamily:"var(--font-head)", fontWeight:700, fontSize:"1rem", color:"var(--text-hi)" }}>{group.label}</h3>
      </div>
      {/* Pill list */}
      <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
        {group.items.map(item => (
          <span key={item} style={{ fontSize:".8rem", fontWeight:500, padding:"5px 13px", borderRadius:100, background:`${group.color}10`, color:group.color, border:`1px solid ${group.color}28`, transition:"transform .15s, box-shadow .15s", cursor:"default" }}
            onMouseEnter={e => { e.currentTarget.style.transform="scale(1.06)"; e.currentTarget.style.boxShadow=`0 2px 12px ${group.color}30`; }}
            onMouseLeave={e => { e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}
          >{item}</span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ padding:"100px 0", background:"var(--bg-panel)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px" }}>
        <SectionLabel tag="Skills" title="Tech Stack" sub="Technologies I used to design, build, and ship production-ready software." />
        <div className="skills-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:20 }}>
          {skillGroups.map((g,i) => <SkillGroupCard key={g.label} group={g} delay={i*0.1} />)}
        </div>
      </div>
    </section>
  );
}

// ── CONTACT CHANNEL POPUP ─────────────────────────────────────────────────────
function ChannelPopup({ onClose }) {
  useEffect(() => {
    const fn = e => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(7,12,22,.75)", backdropFilter:"blur(8px)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }} onClick={onClose}>
      <div className="channel-popup" style={{ background:"var(--bg-card)", border:"1px solid var(--border)", borderRadius:20, padding:"32px 28px", maxWidth:320, width:"100%", boxShadow:"0 28px 72px rgba(0,0,0,.55),0 0 0 1px var(--border)" }} onClick={e => e.stopPropagation()}>
        <div style={{ textAlign:"center", marginBottom:24 }}>
          <div style={{ width:52, height:52, borderRadius:14, background:"rgba(20,184,166,.12)", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.5rem", margin:"0 auto 12px" }}>✉️</div>
          <h3 style={{ fontFamily:"var(--font-head)", fontWeight:800, fontSize:"1.2rem", color:"var(--text-hi)", marginBottom:4 }}>Get in Touch</h3>
          <p style={{ fontSize:".82rem", color:"var(--text-mid)" }}>Choose your preferred channel</p>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:12 }}>
          <a 
              href="https://mail.google.com/mail/?view=cm&to=hangwsee85@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="btn-teal"
              style={{ padding:"12px", boxShadow:"none" }}
            >
         📧 Send via Email
          </a>
          <a href="https://wa.me/601158650619" target="_blank" rel="noopener noreferrer" onClick={onClose}
            style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, background:"#16a34a", color:"#fff", fontFamily:"var(--font-head)", fontWeight:700, fontSize:".875rem", padding:"12px", borderRadius:8, textDecoration:"none", transition:"background .2s, transform .15s" }}
            onMouseEnter={e => { e.currentTarget.style.background="#15803d"; e.currentTarget.style.transform="translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background="#16a34a"; e.currentTarget.style.transform=""; }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>
        <button onClick={onClose} className="btn-ghost" style={{ width:"100%", fontSize:".85rem" }}>Cancel</button>
      </div>
    </div>
  );
}

// ── CONTACT ───────────────────────────────────────────────────────────────────
function Contact() {
  const [cardRef, cardInView] = useInView();
  const [showPopup, setShowPopup] = useState(false);

  const contactLinks = [
    { icon:"📧", label:"Email",    value:"hangwsee85@gmail.com",   href:"https://mail.google.com/mail/?view=cm&to=hangwsee85@gmail.com",                        color:"#14b8a6" },
    { icon:"💬", label:"WhatsApp", value:"+60 11-5865 0619",       href:"https://wa.me/601158650619",                          color:"#10b981" },
    { icon:"💼", label:"LinkedIn", value:"wei-hang-see",           href:"https://www.linkedin.com/in/wei-hang-see-599295268/", color:"#0ea5e9" },
    { icon:"🐙", label:"GitHub",   value:"whanggg",                href:"https://github.com/whanggg",                         color:"#8b5cf6" },
  ];

  return (
    <section id="contact" style={{ padding:"100px 0", background:"var(--bg-deep)", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", bottom:"10%", right:"-5%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(20,184,166,.06) 0%,transparent 70%)", pointerEvents:"none" }} />
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px", position:"relative" }}>
        <SectionLabel tag="Contact" title="Let's Build Something" sub="Interested in working together? Reach out by dropping me a message!" />

        <div className="contact-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:40, alignItems:"start" }}>

          {/* ── Left: contact links + hire card ── */}
          <div ref={cardRef} style={{ display:"flex", flexDirection:"column", gap:14 }}>

            {/* Hire me card */}
            <div className={`anim-fade-up${cardInView?" visible":""}`} style={{ background:"linear-gradient(135deg,rgba(20,184,166,.12),rgba(14,165,233,.08))", border:"1px solid var(--border)", borderRadius:20, padding:"28px 26px", marginBottom:4 }}>
              <p style={{ fontFamily:"var(--font-head)", fontWeight:800, fontSize:"1.15rem", color:"var(--text-hi)", marginBottom:8 }}>👋 Hire Me</p>
              <p style={{ fontSize:".87rem", color:"var(--text-mid)", lineHeight:1.75, marginBottom:20 }}>
                I'm open to new opportunities and collaborations. Whether you have a vacancy or just want to say hi, feel free to reach out!
              </p>
              <button onClick={() => setShowPopup(true)} className="btn-teal" style={{ width:"100%", boxShadow:"none" }}>
                💌 Get in Touch 
              </button>
            </div>

            {/* Download buttons */}
            <div className={`anim-fade-up${cardInView?" visible":""}`} style={{ transitionDelay:".1s", background:"var(--bg-card)", border:"1px solid var(--border-sub)", borderRadius:16, padding:"20px 22px" }}>
              <p style={{ fontFamily:"var(--font-head)", fontWeight:700, fontSize:".85rem", color:"var(--text-hi)", marginBottom:14 }}>⚔️ Check out my match history!</p>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                <a href="/SEE_WEI_HANG_resume.pdf" download
                  style={{ display:"flex", alignItems:"center", gap:10, background:"var(--bg-card2)", border:"1px solid var(--border-sub)", borderRadius:10, padding:"12px 16px", textDecoration:"none", transition:"border-color .2s, transform .15s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor="var(--teal)"; e.currentTarget.style.transform="translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor=""; e.currentTarget.style.transform=""; }}
                >
                  <div style={{ width:36, height:36, borderRadius:9, background:"rgba(20,184,166,.12)", border:"1px solid rgba(20,184,166,.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  </div>
                  <div>
                    <p style={{ fontSize:".85rem", fontWeight:600, color:"var(--text-hi)" }}>Download my Resume</p>
                    <p style={{ fontSize:".72rem", color:"var(--text-lo)" }}>PDF</p>
                  </div>
                  <svg style={{ marginLeft:"auto", color:"var(--text-lo)" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </a>
                <a href="/See Wei Hang CV.pdf" download
                  style={{ display:"flex", alignItems:"center", gap:10, background:"var(--bg-card2)", border:"1px solid var(--border-sub)", borderRadius:10, padding:"12px 16px", textDecoration:"none", transition:"border-color .2s, transform .15s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor="var(--sky)"; e.currentTarget.style.transform="translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor=""; e.currentTarget.style.transform=""; }}
                >
                  <div style={{ width:36, height:36, borderRadius:9, background:"rgba(14,165,233,.12)", border:"1px solid rgba(14,165,233,.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  </div>
                  <div>
                    <p style={{ fontSize:".85rem", fontWeight:600, color:"var(--text-hi)" }}>Download my CV</p>
                    <p style={{ fontSize:".72rem", color:"var(--text-lo)" }}>PDF</p>
                  </div>
                  <svg style={{ marginLeft:"auto", color:"var(--text-lo)" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: contact link cards ── */}
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {contactLinks.map((link, i) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                className={`anim-fade-up${cardInView?" visible":""}`}
                style={{ transitionDelay:`${i*0.08}s`, display:"flex", alignItems:"center", gap:14, background:"var(--bg-card)", border:"1px solid var(--border-sub)", borderRadius:14, padding:"18px 20px", textDecoration:"none", transition:"border-color .25s, transform .2s, box-shadow .25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor=link.color+"44"; e.currentTarget.style.transform="translateX(5px)"; e.currentTarget.style.boxShadow=`0 4px 20px ${link.color}18`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor=""; e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}
              >
                <div style={{ width:44, height:44, borderRadius:11, background:link.color+"18", border:`1px solid ${link.color}30`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem", flexShrink:0 }}>{link.icon}</div>
                <div>
                  <p style={{ fontSize:".72rem", color:"var(--text-lo)", marginBottom:2, letterSpacing:".05em", textTransform:"uppercase", fontWeight:600 }}>{link.label}</p>
                  <p style={{ fontSize:".9rem", fontWeight:500, color:"var(--text-hi)" }}>{link.value}</p>
                </div>
                <svg style={{ marginLeft:"auto", color:"var(--text-lo)" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Channel popup */}
      {showPopup && <ChannelPopup onClose={() => setShowPopup(false)} />}
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background:"var(--bg-panel)", borderTop:"1px solid var(--border-sub)", padding:"48px 0 28px" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))", gap:40, marginBottom:36 }}>
          <div>
            <p style={{ fontFamily:"var(--font-head)", fontWeight:800, fontSize:"1.15rem", color:"var(--text-hi)", marginBottom:8 }}>wh<span style={{ color:"var(--teal)" }}>.</span>Dev</p>
            <p style={{ fontSize:".82rem", color:"var(--text-lo)", lineHeight:1.65 }}>Mobile & Aspiring AI Developer.</p>
          </div>
          <div>
            <p style={{ fontFamily:"var(--font-head)", fontWeight:700, fontSize:".78rem", color:"var(--text-hi)", letterSpacing:".06em", textTransform:"uppercase", marginBottom:12 }}>Navigate</p>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:8 }}>
              {NAV_ITEMS.map(id => (
                <li key={id}><button onClick={() => scrollTo(id)} style={{ background:"none", border:"none", cursor:"pointer", color:"var(--text-lo)", fontSize:".85rem", padding:0, transition:"color .2s", fontFamily:"var(--font-body)" }}
                  onMouseEnter={e => e.currentTarget.style.color="var(--teal)"}
                  onMouseLeave={e => e.currentTarget.style.color="var(--text-lo)"}
                >{id.charAt(0).toUpperCase()+id.slice(1)}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontFamily:"var(--font-head)", fontWeight:700, fontSize:".78rem", color:"var(--text-hi)", letterSpacing:".06em", textTransform:"uppercase", marginBottom:12 }}>Connect</p>
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {[["GitHub","https://github.com/whanggg"],["LinkedIn","https://www.linkedin.com/in/wei-hang-see-599295268/"],["Credly","https://www.credly.com/users/see-wei-hang"]].map(([lbl,href]) => (
                <a key={lbl} href={href} target="_blank" rel="noopener noreferrer" style={{ fontSize:".85rem", color:"var(--text-lo)", textDecoration:"none", transition:"color .2s" }}
                  onMouseEnter={e => e.currentTarget.style.color="var(--teal)"}
                  onMouseLeave={e => e.currentTarget.style.color="var(--text-lo)"}
                >{lbl}</a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop:"1px solid var(--border-sub)", paddingTop:22, display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:10 }}>
          <p style={{ fontSize:".8rem", color:"var(--text-lo)" }}>© {new Date().getFullYear()} See Wei Hang. Built with Next.js & Tailwind CSS.</p>
          <button onClick={() => scrollTo("home")} style={{ background:"none", border:"none", cursor:"pointer", fontSize:".8rem", color:"var(--teal)", fontFamily:"var(--font-head)", fontWeight:600, transition:"opacity .2s" }}
            onMouseEnter={e => e.currentTarget.style.opacity=".6"}
            onMouseLeave={e => e.currentTarget.style.opacity="1"}
          >Back to top ↑</button>
        </div>
      </div>
    </footer>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <style>{globalStyles}</style>
      <main>
        <Nav />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}