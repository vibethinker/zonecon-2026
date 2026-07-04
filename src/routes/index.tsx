import { createFileRoute } from "@tanstack/react-router";

const logoAsset = { url: "/the-real-yauvanam-logo-transparent.png" };
const jciPalghatLogo = { url: "/jci-palghat-logo.png" };
const jciZone28Logo = { url: "/jci-india-zone-28.png" };
const leadConnectEvolveLogo = { url: "/jci-india-lead-connect-evolve-2026.png" };
import {
  Calendar,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Globe,
  Users,
  Target,
  Award,
  Wallet,
  Crown,
  Gem,
  Star,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

type SponsorGroup = { title: string; items: string[] };

const titleSponsor: { groups: SponsorGroup[] } = {
  groups: [
    {
      title: "Main Conference Area",
      items: [
        'Event named as "Powered by [Your Brand]" on LED wall backdrop for the whole event',
        "10-minute presentation slot on stage during the Awards Night",
        "Chair branding — your logo on every delegate chair",
        "Exclusive Awards Night branding",
        "Advertisement on the centre LED wall between events",
      ],
    },
    {
      title: "Dining Area",
      items: [
        "Your logo branded on water bottles served in the dining area",
        "8 × 8 ft flex branding in dining areas",
        "Your logo printed on handkerchiefs served in dining",
      ],
    },
    {
      title: "Main Entrance",
      items: [
        "Entrance arch branding — your logo prominently placed at the main entrance",
        "10 × 10 ft flex branding on the National Highway near the venue",
        "10 × 4 × 4 ft side-wall branding along the pathway",
        "Octonorm stall for business promotion in the lobby (16 × 8 × 8 ft)",
      ],
    },
    {
      title: "Print & Digital Media",
      items: [
        "Name printed on every return gift bag",
        "Advertisement on FM Radio",
        "Advertisement across social media",
        "Logo on all print and digital materials",
        "Complimentary 10 VIP passes",
      ],
    },
  ],
};

const tiers = [
  {
    name: "Diamond",
    note: "Signature Partner",
    icon: Gem,
    accent: true,
    items: [
      "Your brand on the LED wall backdrop for the whole event",
      "10-minute presentation slot on stage during the Awards",
      "Exclusive Awards Night branding",
      "Advertisement on the centre LED wall between events",
      "8 × 8 ft flex branding in dining areas",
      "Logo on handkerchiefs served in dining",
      "Entrance arch branding at the main entrance",
      "10 × 10 ft flex branding on the National Highway near the venue",
      "10 × 4 × 4 ft side-wall branding along the pathway",
      "Octonorm stall in the lobby (16 × 8 × 8 ft)",
      "Name on all return gift bags",
      "Advertisement on FM Radio & social media",
      "Logo on all print / digital materials",
      "Complimentary 10 VIP passes",
    ],
  },
  {
    name: "Gold",
    note: "Lead Partner",
    icon: Award,
    items: [
      "Brand displayed on LED side wall & stage",
      "Advertisement on side LED wall between events",
      "5-minute presentation slot on stage during Awards",
      "Exclusive Awards Night branding",
      "8 × 8 ft flex branding in dining areas",
      "Logo on handkerchiefs served in dining",
      "Entrance arch branding at the main entrance",
      "5 × 4 × 4 ft side-wall branding along the pathway",
      "Octonorm stall in the lobby (8 × 8 × 8 ft)",
      "Advertisement on social media",
      "Logo on all print / digital materials",
      "Complimentary 5 VIP passes",
    ],
  },
  {
    name: "Silver",
    note: "Supporting Partner",
    icon: Star,
    items: [
      "Brand displayed on LED side wall & stage",
      "Advertisement on side LED wall between events",
      "8 × 8 ft flex branding in dining areas",
      "Entrance arch branding at the main entrance",
      "2 × 4 × 4 ft side-wall branding along the pathway",
      "Octonorm stall in the lobby (8 × 8 × 8 ft)",
      "Advertisement on social media",
      "Logo on all print / digital materials",
      "Complimentary 5 VIP passes",
    ],
  },
];

const addOns = [
  { name: "Chair Branding Sponsor", text: "Every delegate chair in the hall branded with your logo on the back." },
  { name: "Return Gift Sponsor", text: "Your brand logo featured on the return gifts distributed to all participants." },
  { name: "Centre LED Display", text: "A 30-second video or business banner on the centre LED, scrolling every hour." },
  { name: "Side Wall LED Display", text: "Your business banner or logo on the side-wall LED display, every hour." },
];

const registrationOffers = [
  { count: 50, free: 5, reward: "Co-Host + WiFi/4G Rotation Camera or WiFi 4-Switch Automation Module" },
  { count: 40, free: 4, reward: "4G/WiFi Fixed Camera (Outdoor Bullet) or 2-Switch Automation Module" },
  { count: 30, free: 3, reward: "Gift Hamper worth ₹2,000/-" },
  { count: 25, free: 3, reward: "Leather Office Bag worth ₹1,500/-" },
  { count: 20, free: 2, reward: "Variety Calendar" },
  { count: 10, free: 1, reward: "Wireless Mouse" },
];

const dates = [
  { d: "23", m: "Oct", day: "Friday" },
  { d: "24", m: "Oct", day: "Saturday" },
  { d: "25", m: "Oct", day: "Sunday" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Real യുഗം — JCI Zone 28 Zonecon 2026" },
      { name: "description", content: "JCI India Zone 28 Zonecon 2026 — hosted by JCI Palghat. Oct 23–25, 2026 at Tripenta Hotel, Malampuzha. Not a comeback, but a statement." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <header className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="font-display text-[0.7rem] md:text-xs tracking-[0.35em] text-navy-grad">
          JCI · INDIA ZONE 28
        </div>
        <a
          href="#register"
          className="hidden sm:inline-flex items-center text-[0.7rem] tracking-[0.3em] uppercase text-navy hover:text-gold transition-colors"
        >
          Register →
        </a>
      </header>

      {/* HERO — ivory poster style */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-radial-stage px-6 pt-28 pb-20">
        {/* Decorative gold ribbons */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-[28rem] h-[28rem] rounded-full bg-navy/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[1px] w-[70%] bg-gradient-to-r from-transparent via-gold to-transparent animate-shimmer" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
          <div className="animate-float-up flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
            <img src={jciPalghatLogo.url} alt="JCI Palghat" className="h-16 md:h-20 w-auto object-contain" />
            <img src={jciZone28Logo.url} alt="JCI India Zone 28" className="h-16 md:h-20 w-auto object-contain" />
            <img src={leadConnectEvolveLogo.url} alt="JCI India — Lead · Connect · Evolve 2026" className="h-16 md:h-20 w-auto object-contain" />
          </div>


          <p
            className="animate-float-up text-[0.7rem] md:text-xs tracking-[0.5em] text-gold uppercase mb-2"
            style={{ animationDelay: "0.1s" }}
          >
            Zonecon 2026
          </p>

          <img
            src={logoAsset.url}
            alt="The Real യുഗം — Zonecon 2026"
            className="animate-float-up w-full max-w-2xl drop-shadow-[0_20px_40px_rgba(20,30,80,0.25)] my-[-2rem] md:my-[-3rem]"
            style={{ animationDelay: "0.2s" }}
          />

          <div
            className="animate-float-up mt-8 flex items-center gap-4"
            style={{ animationDelay: "0.35s" }}
          >
            <span className="h-px w-10 bg-gold" />
            <p className="font-display text-xs md:text-sm tracking-[0.4em] uppercase text-navy">
              Not a Comeback · But a Statement
            </p>
            <span className="h-px w-10 bg-gold" />
          </div>

          <div
            className="animate-float-up mt-10 flex flex-col items-center"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-[0.7rem] tracking-[0.4em] uppercase text-navy/70">Ready to Witness</p>
            <p
              className="mt-2 text-5xl md:text-7xl text-gold-grad leading-none"
              style={{ fontFamily: "var(--font-script)" }}
            >
              The Grandness
            </p>
          </div>

          {/* Date + Venue cards */}
          <div
            className="animate-float-up mt-14 grid sm:grid-cols-2 gap-4 w-full max-w-2xl"
            style={{ animationDelay: "0.65s" }}
          >
            <div className="bg-navy-deep border border-gold/40 text-ivory p-5 flex items-center gap-4 text-left shadow-elev-navy">
              <div className="w-11 h-11 rounded-full bg-gold/15 border border-gold/50 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-[0.6rem] tracking-[0.35em] uppercase text-gold/80">Date</p>
                <p className="font-display text-lg tracking-wide">23, 24, 25 October 2026</p>
              </div>
            </div>
            <div className="bg-navy-deep border border-gold/40 text-ivory p-5 flex items-center gap-4 text-left shadow-elev-navy">
              <div className="w-11 h-11 rounded-full bg-gold/15 border border-gold/50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-[0.6rem] tracking-[0.35em] uppercase text-gold/80">Venue</p>
                <p className="font-display text-lg tracking-wide">Tripenta Hotel, Malampuzha</p>
              </div>
            </div>
          </div>

          <a
            href="#register"
            className="animate-float-up mt-12 group relative inline-flex items-center gap-3 px-10 py-4 bg-navy-deep text-ivory hover:shadow-glow-gold border border-gold/60 transition-all"
            style={{ animationDelay: "0.8s" }}
          >
            <span className="font-display text-sm tracking-[0.3em] uppercase text-gold-grad">
              Registration Ongoing
            </span>
          </a>

          <p
            className="animate-float-up mt-6 text-[0.65rem] tracking-[0.4em] uppercase text-navy/60"
            style={{ animationDelay: "0.9s" }}
          >
            Hosted by JCI Palghat
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative py-28 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-6">About</p>
          <h2 className="text-4xl md:text-6xl font-display mb-8 text-navy">
            The Real <span className="font-mal text-gold-grad">യുഗം</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground font-light">
            Zonecon 2026 is where the youth of JCI India Zone 28 converge — to learn,
            to lead, to celebrate. Three days of training, dialogue, recognition,
            and unforgettable nights. This is not nostalgia. This is a bold new
            statement, written loud.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <span className="font-display text-xs tracking-[0.4em] text-navy uppercase">
              Hosted by JCI Palghat
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
        </div>
      </section>

      {/* TEASER */}
      <section className="relative py-24 px-6 md:px-12 border-t border-border bg-navy-deep text-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-4">Watch</p>
          <h2 className="text-4xl md:text-5xl font-display mb-4">
            The Official Teaser
          </h2>
          <p className="text-sm md:text-base text-ivory/70 font-light mb-10 max-w-xl mx-auto">
            A first glimpse of The Real <span className="font-mal text-gold-grad">യുഗം</span> — the sound, the stage, the statement.
          </p>

          <div className="mx-auto max-w-[420px]">
            <div className="relative border border-gold/40 shadow-gold bg-black overflow-hidden" style={{ aspectRatio: "9 / 16" }}>
              <iframe
                src="https://www.instagram.com/reel/DaQIVDLzb5g/embed"
                title="Zonecon 2026 Teaser"
                loading="lazy"
                allow="autoplay; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                frameBorder={0}
                scrolling="no"
              />
            </div>
            <a
              href="https://www.instagram.com/reel/DaQIVDLzb5g/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.35em] uppercase text-gold hover:text-ivory transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Watch on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT JCI */}
      <section className="relative py-24 px-6 md:px-12 border-t border-border bg-muted/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-4">The Movement</p>
            <h2 className="text-4xl md:text-5xl font-display text-navy">A Global Network of Young Leaders</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                tag: "JCI",
                title: "Junior Chamber International",
                body: "Founded in 1915, JCI is a worldwide federation of young active citizens aged 18–40, present in over 100 countries and 5,000+ communities — creating positive change through leadership and action.",
                bullets: ["Est. 1915 · HQ Chesterfield, USA", "100+ Countries · 5,000+ Communities", "Individual · Community · International · Business"],
              },
              {
                icon: Users,
                tag: "JCI India",
                title: "One Year to Lead",
                body: "Active since 1949, JCI India is one of the largest national organisations in the JCI family — empowering young Indians to lead, train and serve through a structured one-year leadership journey.",
                bullets: ["Est. 1949", "1,200+ Local Organisations", "60,000+ Active Members · 28 Zones"],
              },
              {
                icon: Target,
                tag: "Zone 28",
                title: "Heart of Kerala",
                body: "Zone 28 covers the Palakkad district and part of the Malappuram region — a vibrant collective of 43+ Local Organisations collaborating on regional impact projects, training and youth empowerment.",
                bullets: ["Palakkad district", "Part of Malappuram region", "43+ Local Organisations (LOs)"],
              },
            ].map((c) => (
              <div key={c.tag} className="border border-border bg-card p-8 hover:border-gold hover:shadow-glow-gold transition-all">
                <c.icon className="w-6 h-6 text-gold mb-6" />
                <p className="font-display text-xs tracking-[0.3em] uppercase text-gold mb-3">{c.tag}</p>
                <h3 className="font-display text-2xl text-navy mb-4">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.body}</p>
                <ul className="text-xs text-navy/70 space-y-2 tracking-wide">
                  {c.bullets.map((b) => <li key={b}>· {b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATES */}
      <section className="relative py-24 px-6 md:px-12 bg-navy-deep border-y border-gold/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-4">Three Days · Three Nights</p>
            <h2 className="text-3xl md:text-5xl font-display text-ivory">October 2026</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dates.map((d, i) => (
              <div
                key={d.d}
                className="group relative bg-background/5 border border-gold/40 p-10 text-center hover:bg-gold/10 transition-all duration-500"
              >
                <p className="text-[0.65rem] tracking-[0.4em] uppercase text-gold/80 mb-6">Day {i + 1}</p>
                <div className="font-display text-7xl md:text-8xl text-gold-grad mb-3 leading-none">{d.d}</div>
                <p className="font-display text-sm tracking-[0.3em] uppercase text-ivory">
                  {d.m} · {d.day}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section className="relative py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-6">The Venue</p>
            <h2 className="text-4xl md:text-5xl font-display text-navy mb-8 leading-tight">
              Tripenta Hotel
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
              Set against the calm of Malampuzha's hills and waters, Tripenta is
              where Zonecon 2026 comes alive — a setting worthy of the statement
              we're here to make.
            </p>
            <div className="flex items-start gap-4 text-navy">
              <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
              <div className="text-sm tracking-wide leading-relaxed">
                Tripenta Hotel<br />
                Malampuzha, Palakkad<br />
                Kerala, India
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Tripenta+Hotel+Malampuzha+Palakkad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-xs tracking-[0.3em] uppercase text-navy border-b border-gold pb-1 hover:text-gold transition-colors"
            >
              Open in Maps →
            </a>
          </div>

          <div className="relative aspect-square bg-radial-stage border border-gold/40 flex items-center justify-center overflow-hidden shadow-elev-navy">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
            <div className="relative text-center px-8">
              <div className="font-display text-9xl text-gold-grad opacity-70 leading-none">28</div>
              <p className="mt-4 font-display text-xs tracking-[0.4em] text-navy uppercase">
                Zone Twenty Eight
              </p>
              <div className="mt-6 h-px w-16 bg-gold mx-auto" />
              <p className="mt-6 text-[0.65rem] tracking-[0.4em] text-navy/70 uppercase">
                Malampuzha · Palakkad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION OFFERS */}
      <section className="relative py-24 px-6 md:px-12 bg-navy-deep border-y border-gold/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-3">Special Offers</p>
            <h2 className="text-3xl md:text-5xl font-display text-ivory mb-3">Registration Rewards</h2>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {registrationOffers.map((o) => (
              <div
                key={o.count}
                className="relative bg-ivory/[0.03] border border-gold/40 p-5 text-center hover:bg-gold/10 transition-all"
              >
                <div className="font-display text-4xl text-gold-grad leading-none">{o.count}</div>
                <p className="text-[0.6rem] tracking-[0.3em] uppercase text-ivory/70 mt-2">Registrations</p>
                <div className="my-4 h-px w-8 bg-gold/60 mx-auto" />
                <p className="font-display text-sm tracking-[0.25em] uppercase text-gold">{o.free} Free</p>
                <p className="text-[0.65rem] text-ivory/70 leading-relaxed mt-3">{o.reward}</p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="border border-gold/40 bg-ivory/[0.04] p-6 flex items-center justify-between">
              <div>
                <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-2">Regular Single</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-ivory/50 line-through text-sm">₹2000</span>
                  <span className="font-display text-3xl text-ivory">₹1500</span>
                </div>
                <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold/80 mt-1">Early Bird</p>
              </div>
              <Wallet className="w-8 h-8 text-gold/60" />
            </div>
            <div className="border border-gold/40 bg-ivory/[0.04] p-6 flex items-center justify-between">
              <div>
                <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-2">Family</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-ivory/50 line-through text-sm">₹4000</span>
                  <span className="font-display text-3xl text-ivory">₹3000</span>
                </div>
                <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold/80 mt-1">Early Bird</p>
              </div>
              <Users className="w-8 h-8 text-gold/60" />
            </div>
          </div>
        </div>
      </section>

      {/* TITLE SPONSOR — HERO CARD */}
      <section id="sponsor" className="relative py-28 px-6 md:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-4">Partner With Us</p>
            <h2 className="text-4xl md:text-6xl font-display text-navy mb-6">Sponsorship Deliverables</h2>
            <p className="text-lg text-muted-foreground font-light">
              Three days. Hundreds of young leaders. One unmissable stage — with brand
              placements across every touchpoint of Zonecon 2026.
            </p>
          </div>

          {/* Title Sponsor */}
          <div className="relative bg-navy-deep border border-gold/50 text-ivory shadow-elev-navy overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="grid md:grid-cols-[280px_1fr]">
              <div className="p-10 border-b md:border-b-0 md:border-r border-gold/30 bg-gradient-to-br from-gold/10 to-transparent flex flex-col justify-center">
                <Crown className="w-8 h-8 text-gold mb-4" />
                <p className="text-[0.65rem] tracking-[0.4em] uppercase text-gold/80 mb-2">The Flagship</p>
                <h3 className="font-display text-4xl text-gold-grad leading-tight mb-3">Title Sponsor</h3>
                <p className="text-sm text-ivory/70 leading-relaxed">
                  The most visible partnership at Zonecon 2026 — your brand woven into
                  every stage, every space, every touchpoint.
                </p>
              </div>

              <div className="p-8 md:p-10 grid sm:grid-cols-2 gap-8">
                {titleSponsor.groups.map((g) => (
                  <div key={g.title}>
                    <p className="font-display text-xs tracking-[0.35em] uppercase text-gold mb-4 pb-2 border-b border-gold/20">
                      {g.title}
                    </p>
                    <ul className="space-y-2.5">
                      {g.items.map((it) => (
                        <li key={it} className="flex gap-2.5 text-[0.82rem] text-ivory/85 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold mt-1 flex-shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSOR TIERS — DETAILED */}
      <section className="relative py-24 px-6 md:px-12 bg-muted/60 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-4">Choose Your Tier</p>
            <h2 className="text-3xl md:text-5xl font-display text-navy mb-3">Sponsorship Packages</h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Diamond, Gold and Silver partnerships — every deliverable transparent, up front.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`group relative border p-8 bg-card transition-all ${
                  t.accent
                    ? "border-gold shadow-glow-gold"
                    : "border-border hover:border-gold hover:shadow-glow-gold"
                }`}
              >
                {t.accent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-navy-deep border border-gold/60 text-[0.55rem] tracking-[0.35em] uppercase text-gold">
                    Signature
                  </div>
                )}
                <t.icon className="w-6 h-6 text-gold mb-4" />
                <p className="font-display text-2xl tracking-[0.15em] uppercase text-navy mb-1">{t.name}</p>
                <p className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground mb-6">{t.note}</p>
                <ul className="space-y-2">
                  {t.items.map((it) => (
                    <li key={it} className="flex gap-2 text-xs text-navy/80 leading-relaxed">
                      <CheckCircle2 className="w-3 h-3 text-gold mt-1 flex-shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Add-on opportunities */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <p className="text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-3">Add-On Opportunities</p>
              <h3 className="text-2xl md:text-3xl font-display text-navy">Sponsor a Slice</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {addOns.map((a) => (
                <div key={a.name} className="border border-border bg-card p-6 hover:border-gold hover:shadow-glow-gold transition-all">
                  <Sparkles className="w-5 h-5 text-gold mb-3" />
                  <p className="font-display text-sm tracking-wide text-navy mb-2">{a.name}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{a.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <a
              href="mailto:jcipalghat@gmail.com?subject=Sponsorship%20Enquiry%20%E2%80%94%20Zonecon%202026"
              className="inline-flex items-center gap-3 px-10 py-4 bg-navy-deep border border-gold/60 text-ivory hover:shadow-glow-gold transition-all"
            >
              <span className="font-display text-sm tracking-[0.3em] uppercase text-gold-grad">
                Request Sponsor Deck
              </span>
            </a>
          </div>
        </div>
      </section>


      {/* REGISTER / CONTACT */}
      <section id="register" className="relative py-28 px-6 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-6">Register Now</p>
          <h2 className="text-4xl md:text-6xl font-display text-navy mb-6">Be Part of the Statement</h2>
          <p className="text-lg text-muted-foreground font-light mb-12 max-w-xl mx-auto">
            Registrations are open. Reach out via G-Pay, phone or email to book your seat.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-4 p-6 border border-border bg-card">
              <Wallet className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <p className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground mb-1">G-Pay</p>
                <a href="tel:+918281723459" className="text-sm text-navy hover:text-gold transition-colors">+91 82817 23459</a>
              </div>
            </div>
            <a href="tel:+916282531912" className="group flex items-center gap-4 p-6 border border-border hover:border-gold transition-all bg-card">
              <Phone className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <p className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground mb-1">Contact</p>
                <p className="text-sm text-navy group-hover:text-gold transition-colors">+91 62825 31912</p>
              </div>
            </a>
            <a
              href="https://wa.me/918281723459?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Zonecon%202026."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 border border-border hover:border-gold transition-all bg-card"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <div>
                <p className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground mb-1">WhatsApp</p>
                <p className="text-sm text-navy group-hover:text-gold transition-colors">Chat: +91 82817 23459</p>
              </div>
            </a>
            <a href="mailto:jcipalghat@gmail.com" className="group sm:col-span-2 flex items-center gap-4 p-6 border border-border hover:border-gold transition-all bg-card">
              <Mail className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <p className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground mb-1">Email</p>
                <p className="text-sm text-navy group-hover:text-gold transition-colors break-all">jcipalghat@gmail.com</p>
              </div>
            </a>
          </div>

          <p className="mt-10 text-[0.7rem] tracking-[0.4em] uppercase text-navy/60">
            Hosted by JCI Palghat
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 px-6 md:px-12 bg-navy-deep text-ivory">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-sm tracking-[0.3em] uppercase">
              The Real <span className="font-mal text-gold-grad">യുഗം</span>
            </p>
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-ivory/60 mt-2">
              Zonecon 2026 · Hosted by JCI Palghat
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="p-2 border border-gold/40 hover:border-gold hover:text-gold transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="p-2 border border-gold/40 hover:border-gold hover:text-gold transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
        <p className="text-center text-[0.6rem] tracking-[0.3em] uppercase text-ivory/50 mt-8">
          © 2026 JCI India Zone 28 · All Rights Reserved
        </p>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/918281723459?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Zonecon%202026."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 hover:scale-105 active:scale-95 transition-transform"
      >
        <span className="relative flex h-10 w-10 items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
          <svg viewBox="0 0 24 24" className="relative w-6 h-6" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </span>
        <span className="text-xs font-medium tracking-wide hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
