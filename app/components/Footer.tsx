import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Catering", href: "/catering" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white/70" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h2
              className="text-2xl font-bold text-[#C9A84C] mb-1"
              style={{ fontFamily: "var(--font-oranienbaum), serif" }}
            >
              Pompeii&apos;s
            </h2>
            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
              Pizzeria &amp; Italian Eatery
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-4">
              The best Italian food in the Blue Water Area. Family-owned since 2002 —
              consistency, great food &amp; great service.
            </p>
            <p className="text-[#C9A84C]/70 text-xs italic">
              &ldquo;Freshest and homemade as possible.&rdquo;
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#C9A84C] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">
              Contact &amp; Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-white/40 block text-xs uppercase tracking-wider mb-0.5">Address</span>
                <p className="text-white/60">1120 Military St<br />Port Huron, MI 48060</p>
              </div>
              <div>
                <span className="text-white/40 block text-xs uppercase tracking-wider mb-0.5">Phone</span>
                <a href="tel:+18109663400" className="text-white/60 hover:text-[#C9A84C] transition-colors">
                  (810) 966-3400
                </a>
              </div>
              <div>
                <span className="text-white/40 block text-xs uppercase tracking-wider mb-0.5">Email</span>
                <a href="mailto:pompeiis@sbcglobal.net" className="text-white/60 hover:text-[#C9A84C] transition-colors break-all">
                  pompeiis@sbcglobal.net
                </a>
              </div>
              <div>
                <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Hours</span>
                <p className="text-white/60 text-xs">Mon–Wed: 11AM–9PM</p>
                <p className="text-white/60 text-xs">Thu: 11AM–10PM</p>
                <p className="text-white/60 text-xs">Fri–Sat: 11AM–11PM</p>
                <p className="text-white/60 text-xs">Sun: 12PM–9PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Pompeii&apos;s Pizzeria &amp; Italian Eatery. All rights reserved.
          </p>
          <p className="text-white/20 text-xs text-center sm:text-right">
            #6 of 104 Restaurants in Port Huron · Tripadvisor 4.5 ★
          </p>
        </div>
      </div>
    </footer>
  );
}
