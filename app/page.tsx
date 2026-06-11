import Link from 'next/link';
import Image from 'next/image';
import { business, services, cities } from './data';

export default function Home() {
  const evService = services.find(s => s.slug === 'ev-charger-installation');
  const otherServices = services.filter(s => s.slug !== 'ev-charger-installation');

  const schema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": business.name,
    "url": business.url,
    "telephone": business.phone,
    "email": business.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": business.addressLocality,
      "addressRegion": business.addressRegion,
      "postalCode": business.postalCode,
      "addressCountry": "US"
    },
    "areaServed": cities.map(c => `${c.name}, ${c.state}`),
    "serviceType": services.map(s => s.title)
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 40% - EV CHARGER FOCUS */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">EV Chargers • Electrical • Smart Solutions</div>

            <h1>EV Charger Installation in Silver Spring and the DMV.</h1>

            <p className="lead">
              Arsha Electric.co helps homeowners and small businesses install Level 2 EV chargers,
              dedicated circuits, panel-ready wiring, lighting, repairs, and smart electrical upgrades.
            </p>

            <p>
              <Link className="btn" href="/contact">Request EV Charger Estimate</Link>{' '}
              <Link className="btn dark" href="/services/ev-charger-installation">
                View EV Charger Service
              </Link>
            </p>
          </div>

          <div className="hero-card">
            <div className="logo-panel">
              <Image src="/arsha-logo.png" alt="Arsha Electric.co" width={420} height={420} />
            </div>

            <h3>Level 2 EV charger installs done cleanly</h3>

            <p>
              Dedicated circuits, garage installs, load planning, charger mounting,
              and future-ready electrical upgrades.
            </p>
          </div>
        </div>
      </section>

      {/* 20% - TRUST / REVIEWS */}
      <section className="section">
        <div className="container">
          <h2>Built for clean, professional electrical work</h2>

          <div className="grid services">
            <div className="card">
              <h3>Local DMV Service</h3>
              <p>Serving Silver Spring, Maryland, DC, and Northern Virginia.</p>
            </div>

            <div className="card">
              <h3>Clear Estimates</h3>
              <p>Send photos, describe the job, and get a straightforward estimate.</p>
            </div>

            <div className="card">
              <h3>EV-Ready Planning</h3>
              <p>We look at charger location, circuit needs, and panel capacity before the install.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 40% continued - EV CHARGER DETAILS */}
      <section className="section alt">
        <div className="container split">
          <div>
            <h2>{evService?.title}</h2>

            <p>
              EV charging is the main service focus. This page should make homeowners feel like
              Arsha Electric.co understands the full install, not just the charger hookup.
            </p>

            <div className="check">
              <div>Level 2 EV charger wiring</div>
              <div>Tesla, ChargePoint, Wallbox, and universal chargers</div>
              <div>Dedicated 240V circuits</div>
              <div>Garage and driveway charger installs</div>
              <div>Panel capacity checks and upgrade planning</div>
            </div>
          </div>

          <div className="card">
            <h3>Best-fit customers</h3>
            <p>
              Homeowners buying an EV, property owners adding charging, and small businesses
              that want EV charging as a customer or employee amenity.
            </p>

            <Link className="btn" href="/services/ev-charger-installation">
              Learn About EV Charging
            </Link>
          </div>
        </div>
      </section>

      {/* 15% - RECENT PROJECTS */}
      <section className="section">
        <div className="container">
          <h2>Recent electrical projects</h2>

          <p className="note">
            Add real job photos here. This section builds trust fast and helps customers imagine
            the work at their home or business.
          </p>

          <div className="grid services">
            <div className="card">
              <h3>Garage EV Charger Install</h3>
              <p>Level 2 charger wiring with clean routing and dedicated circuit planning.</p>
            </div>

            <div className="card">
              <h3>Exterior Motion Light</h3>
              <p>Outdoor lighting install for better visibility and security.</p>
            </div>

            <div className="card">
              <h3>Camera & Low-Voltage Work</h3>
              <p>Security camera wiring, mounting, and clean cable management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 15% - OTHER SERVICES */}
      <section className="section alt">
        <div className="container">
          <h2>Other electrical services</h2>

          <p className="note">
            EV charging is the main focus, but these service pages help capture more local searches.
          </p>

          <div className="grid services">
            {otherServices.map(s => (
              <Link className="card" key={s.slug} href={`/services/${s.slug}`}>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10% - SERVICE AREAS + CTA */}
      <section className="section">
        <div className="container">
          <h2>Service areas</h2>

          <div className="grid areas">
            {cities.map(c => (
              <Link className="card" href={`/service-areas/${c.slug}`} key={c.slug}>
                <h3>{c.name}, {c.state}</h3>
                <p>EV charger installation, electrical repairs, lighting, and smart upgrades.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta">
          <div>
            <h2>Ready to install an EV charger?</h2>
            <p>Send photos of your panel, charger location, and driveway or garage area.</p>
          </div>

          <Link className="btn" href="/contact">Get an EV Charger Quote</Link>
        </div>
      </section>
    </main>
  );
}