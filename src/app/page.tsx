import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { createPageMetadata, defaultDescription } from "./seo";
import HomeShowcase from "./components/HomeShowcase";
import "./home.css";

export const metadata = createPageMetadata("Technology & US recruitment", defaultDescription, "/");

export default function Home() {
  return (
    <div className="rv-home">
      <section className="rv-opening site-container">
        <h1><span>Good people.</span><span>Better <em>possibilities.</em></span></h1>
        <div className="rv-opening-bottom">
          <p>US IT recruitment. Web development. Technology consulting.<br />The people and expertise to move your next project forward.</p>
          <Link className="rv-text-link" href="/contactus">Let’s work together <ArrowUpRight size={23} aria-hidden /></Link>
        </div>
        <HomeShowcase mode="film" />
        <nav className="rv-focus-links" aria-label="Explore our featured services">
          <a href="#us-recruitment"><span>US recruitment</span><span>Find your next hire <ArrowUpRight size={21} aria-hidden /></span></a>
          <a href="#web-development"><span>Web development</span><span>Build your next website <ArrowUpRight size={21} aria-hidden /></span></a>
        </nav>
      </section>

      <section className="rv-recruitment site-container" id="us-recruitment">
        <div className="rv-recruitment-title">
          <h2>US recruitment.<br /><em>A people business.</em></h2>
          <p>Behind every successful project is a team that fits. We help US businesses find the technology specialists they need — and help those specialists find their next opportunity.</p>
        </div>
        <div className="rv-recruitment-grid">
          <div className="rv-portrait"><Image src="/assets/media/careers-collaboration.jpg" alt="Colleagues discussing their work" fill sizes="(max-width: 760px) 100vw, 55vw" /><span>People make the difference.</span></div>
          <div className="rv-hiring">
            <h3>The right experience.<br />The right fit.</h3>
            <p>Tell us what you are building. We’ll work with you to understand the role, the technical requirements, and the team behind it.</p>
            <ul><li>Software engineering</li><li>Cloud & infrastructure</li><li>Data & analytics</li><li>Quality engineering</li></ul>
            <Link href="/contactus?service=talent-delivery" className="rv-solid-link">Discuss your hiring needs <ArrowUpRight size={20} aria-hidden /></Link>
            <Link href="/careers" className="rv-candidate-link">Looking for your next role? <span>Explore careers ↗</span></Link>
          </div>
        </div>
      </section>

      <section className="rv-web-development site-container" id="web-development">
        <div className="rv-recruitment-title">
          <h2>Web development.<br /><em>Built for your business.</em></h2>
          <p>A company website, an online store, or a custom web application. We bring design and engineering together to make your next digital experience work beautifully.</p>
        </div>
        <div className="rv-web-grid">
          <div className="rv-hiring rv-web-copy">
            <h3>From the first idea<br />to a working website.</h3>
            <p>We help plan the experience, design the pages, build the functionality, and prepare your site for launch — with room to grow as your business does.</p>
            <ul><li>Business websites</li><li>Online stores</li><li>Custom web applications</li><li>Website redesigns</li></ul>
            <Link href="/contactus?service=web-development" className="rv-solid-link">Discuss your website <ArrowUpRight size={20} aria-hidden /></Link>
            <Link href="/services#digital-engineering" className="rv-candidate-link">Explore our approach <span>Digital engineering ↗</span></Link>
          </div>
          <div className="rv-portrait"><Image src="/assets/media/services-developers.jpg" alt="Developers working on a web application" fill sizes="(max-width: 760px) 100vw, 55vw" /><span>Designed with care. Built to work.</span></div>
        </div>
      </section>

      <section className="rv-services site-container">
        <div className="rv-services-heading"><h2>What can we<br /><em>help you build?</em></h2><p>From the first technical decision to the team that delivers it, our work meets you where you are.</p></div>
        <HomeShowcase mode="services" />
      </section>

      <section className="rv-working">
        <div className="site-container rv-working-grid">
          <div><h2>Let’s get<br />to work.</h2><p>We start by listening. Then we agree on a practical plan, make the work visible, and stay involved through delivery.</p><Link href="/about" className="rv-text-link">Get to know RV IT <ArrowUpRight size={22} aria-hidden /></Link></div>
          <div className="rv-working-photo"><Image src="/assets/media/about-workshop.jpg" alt="Team planning a project together" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
        </div>
      </section>

      <section className="rv-closing site-container"><p>Have a role to fill or a project in mind?</p><Link href="/contactus">Let’s talk.<ArrowUpRight aria-hidden /></Link><a className="rv-email" href="mailto:contact@rvit.co.in">contact@rvit.co.in</a></section>
    </div>
  );
}
