import Link from 'next/link';
import { notFound } from 'next/navigation';
import { business, services, cities } from '../../data';

type Props = {
  params: Promise<{ slug: string }>;
};

const serviceDetails: Record<string, string[]> = {
  'electrical-repairs': [
    'Service calls & diagnostics',
    'Troubleshoot dead outlets',
    'Replace switches or receptacles',
    'Replace breakers',
    'Fix tripping breakers',
    'Repair flickering lights',
  ],
  'lighting-installation': [
    'Standard light fixture replacement',
    'Chandelier installation',
    'Recessed can lights',
    'Under-cabinet lighting',
    'Motion security lights',
    'Exterior lighting',
    'Dimmer switch installation',
  ],
  'ceiling-fan-installation': [
    'Ceiling fan installation with existing wiring',
    'Ceiling fan installation with new wiring',
    'Ceiling fan replacement',
    'Fan switch and control upgrades',
  ],
  'ev-charger-installation': [
    'Level 2 EV charger installation',
    'Tesla charger installation',
    'ChargePoint and Wallbox installs',
    'Dedicated 240V circuits',
    'Garage and driveway charging setups',
    'Panel capacity review',
  ],
  'security-camera-installation': [
    'Security camera installation',
    'Ring/Blink doorbell installation',
    'Low-voltage wiring',
    'Camera mounting',
    'Clean cable management',
  ],
  'smart-home-solutions': [
    'Smart switch installation',
    'Smart dimmers',
    'Smart lighting upgrades',
    'Video doorbells',
    'Smart home electrical upgrades',
  ],
  'dedicated-circuits': [
    'Dedicated 20A circuits',
    '240V outlet installation',
    'Garage circuits',
    'Appliance circuits',
    'EV-ready circuit planning',
  ],
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);

  if (!s) return {};

  return {
    title: `${s.title} in Silver Spring, Baltimore & Maryland`,
    description: `${s.title} from Arsha Electric.co. Serving Silver Spring, Baltimore, Woodlawn, Catonsville, and surrounding Maryland areas. ${s.short}`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);

  if (!s) notFound();

  const details = serviceDetails[s.slug] || [
    'Electrical service calls',
    'Clean installation work',
    'Troubleshooting and repair',
    'Smart home upgrade options',
    'Residential and light commercial service',
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    description: s.short,
    provider: {
      '@type': 'Electrician',
      name: business.name,
      telephone: business.phone,
      email: business.email,
    },
    areaServed: cities.map((c) => `${c.name}, ${c.state}`),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="page-hero">
        <div className="container">
          <div className="crumb">Service</div>

          <h1>{s.title} in Silver Spring, Baltimore & Surrounding Maryland Areas</h1>

          <p className="lead">
            {s.short} Serving homeowners and small businesses across Silver Spring,
            Baltimore, Woodlawn, Catonsville, Montgomery County, Baltimore County,
            and nearby Maryland communities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <article>
            <h2>Local {s.title.toLowerCase()} service</h2>

            <p>
              Arsha Electric.co provides clean, professional electrical work with
              clear communication from start to finish. Whether you need a repair,
              upgrade, installation, EV charger, lighting improvement, low-voltage
              wiring, or smart home solution, we focus on safe workmanship and a
              clean final result.
            </p>

            <h3>Common requests</h3>

            <div className="check">
              {details.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>

            <h3>Areas served</h3>

            <p>
              Serving Silver Spring, Baltimore, Woodlawn, Catonsville, Rockville,
              Gaithersburg, Laurel, College Park, Towson, Pikesville, Owings Mills,
              Columbia, Ellicott City, and surrounding Maryland areas.
            </p>

            <h3>Best next step</h3>

            <p>
              Send a short description, your location, and photos of the issue,
              panel, outlet, fixture, charger location, or project area. For urgent
              issues like burning smells, sparking, heat at devices, or repeated
              breaker trips, stop using the affected circuit and contact a licensed
              electrician.
            </p>
          </article>

          <aside className="sidebar card">
            <h3>Request service</h3>
            <p>{business.phone}</p>
            <p>{business.email}</p>

            <Link className="btn" href="/contact">
              Contact Arsha
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}