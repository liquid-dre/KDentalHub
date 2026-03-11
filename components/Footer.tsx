const FOOTER_LINKS = {
  Services: [
    { label: "Children's Dentistry", href: '#services' },
    { label: 'Preventive Care', href: '#services' },
    { label: 'Family Check-Ups', href: '#services' },
    { label: 'Teeth Cleaning', href: '#services' },
    { label: 'Emergency Dental', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#why' },
    { label: 'Why Choose Us', href: '#why' },
    { label: 'Our Team', href: '#' },
    { label: 'Testimonials', href: '#' },
  ],
  Contact: [
    { label: 'Book Appointment', href: '#contact' },
    { label: 'Call: (123) 456-7890', href: 'tel:+1234567890' },
    { label: 'hello@kdentalhub.com', href: 'mailto:hello@kdentalhub.com' },
    { label: '123 Smile Street, City', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A6CFF] to-[#6FD3FF] flex items-center justify-center">
                <span className="text-white text-sm font-extrabold">K</span>
              </div>
              <span className="font-bold text-white text-base">K Dental Hub</span>
            </div>

            <p className="text-sm text-white/55 leading-relaxed mb-6 max-w-xs">
              Premium dental care for children and families. A gentle, modern, and welcoming approach to healthy smiles.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                {
                  label: 'Facebook',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h6.5V9.5H7V7.5h1.5V6c0-1.65 1.01-2.55 2.48-2.55.7 0 1.44.12 1.44.12V5H11.5c-.8 0-1.04.5-1.04 1v1.5H13l-.38 2H10.5V15H14a1 1 0 001-1V2a1 1 0 00-1-1z"/>
                    </svg>
                  ),
                },
                {
                  label: 'Instagram',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
                      <rect x="2" y="2" width="12" height="12" rx="3.5"/>
                      <circle cx="8" cy="8" r="3"/>
                      <circle cx="11.2" cy="4.8" r="0.5" fill="currentColor" stroke="none"/>
                    </svg>
                  ),
                },
                {
                  label: 'Twitter',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.5 2h-2.2L8 6.6 4.8 2H2l4.5 6.2L2 14h2.2L8 9.1l3.3 4.9H14l-4.6-6.4L13.5 2z"/>
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/15 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40 mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/55 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} K Dental Hub. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-150"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
