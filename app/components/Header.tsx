import Link from 'next/link';
import Image from 'next/image';
import { business } from '../data';

export default function Header(){return <><div className="topbar"><div className="container"><span>Serving Baltimore, Silver Spring, MD & the DMV</span><span>Call {business.phone}</span></div></div><header className="nav"><div className="container"><Link className="brand" href="/"><Image src="/arsha-logo.png" alt="Arsha Electric.co logo" width={220} height={220}/></Link><nav className="menu"><Link href="/services/electrical-repairs">Services</Link><Link href="/service-areas/silver-spring-md">Service Areas</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link className="btn" href="/contact">Request Estimate</Link></nav></div></header></>}
