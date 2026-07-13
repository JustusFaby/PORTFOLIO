import FadeIn from '../components/FadeIn';

const SOCIALS = [
  {
    id: 'email',
    label: 'Email Me',
    href: 'mailto:justusfaby@gmail.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m2 7 10 7 10-7"/>
      </svg>
    ),
    value: 'justusfaby@gmail.com',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/justus-faby-jeyakumar-3a6235293/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    value: 'justus-faby-jeyakumar',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/JustusFaby',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    value: 'JustusFaby',
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40"
      style={{ background: '#0A1628' }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,212,255,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-12 relative z-10">
        {/* Heading */}
        <FadeIn y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Contact
          </h2>
        </FadeIn>

        {/* Sub-line */}
        <FadeIn delay={0.1} y={20}>
          <p
            className="text-[#A8D8E8] font-light leading-relaxed max-w-xl"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
          >
            Open to new opportunities, freelance projects, and collaborations.
            <br />
            <span className="mono text-[#00D4FF]">Let's build something that never goes down.</span>
          </p>
        </FadeIn>

        {/* Social / contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-4">
          {SOCIALS.map((s, i) => (
            <FadeIn key={s.id} delay={i * 0.12} y={20}>
              <a
                id={`contact-${s.id}`}
                href={s.href}
                target={s.id !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(0, 212, 255, 0.04)',
                  border: '1px solid rgba(0, 212, 255, 0.15)',
                  boxShadow: '0 0 0 0 rgba(0,212,255,0)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    '0 0 30px rgba(0,212,255,0.12)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 rgba(0,212,255,0)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.15)';
                }}
              >
                <span className="text-[#00D4FF] group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="mono text-[#00D4FF]/60 text-xs uppercase tracking-widest">
                    {s.label}
                  </span>
                  <span className="text-[#D7E2EA] font-medium text-sm sm:text-base break-all">
                    {s.value}
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* CTA button */}
        <FadeIn delay={0.4} y={20}>
          <a
            href="mailto:justusfaby@gmail.com"
            className="inline-flex items-center gap-3 rounded-full px-10 py-4 text-sm font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.03]"
            style={{
              background: 'linear-gradient(123deg, #001F3F 7%, #00D4FF 37%, #0EA5E9 72%, #22D3A5 100%)',
              boxShadow: '0px 4px 16px rgba(0, 212, 255, 0.35), 4px 4px 20px rgba(14, 165, 233, 0.4) inset',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m2 7 10 7 10-7"/>
            </svg>
            Send me an email
          </a>
        </FadeIn>

        {/* Footer line */}
        <FadeIn delay={0.5} y={10}>
          <p className="mono text-[#00D4FF]/30 text-xs uppercase tracking-widest mt-8">
            © {new Date().getFullYear()} Justus Faby Jeyakumar — All rights reserved
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
