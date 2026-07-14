import { useEffect, useRef, useState } from 'react';

const TECH_TILES = [
  // Row 1 — code editors, terminals, infrastructure, CI/CD
  { src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=840&q=80', label: 'Code Editor' },
  { src: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=840&q=80', label: 'Data Center' },
  { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=840&q=80', label: 'Terminal / IaC' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=840&q=80', label: 'Analytics Dashboard' },
  { src: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=840&q=80', label: 'Git / Version Control' },
  { src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=840&q=80', label: 'Metrics & Monitoring' },
  { src: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=840&q=80', label: 'JavaScript / Node' },
  { src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=840&q=80', label: 'Network Infrastructure' },
  { src: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=840&q=80', label: 'Cloud Dashboard' },
  { src: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=840&q=80', label: 'Document Processing' },
  { src: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=840&q=80', label: 'Security & DevSecOps' },
  // Row 2 — servers, cloud platforms, deployments, monitoring
  { src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=840&q=80', label: 'Server Racks' },
  { src: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=840&q=80', label: 'Speech / Transcribe' },
  { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=840&q=80', label: 'Team Collaboration' },
  { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=840&q=80', label: 'System Monitoring' },
  { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=840&q=80', label: 'DevOps Workflow' },
  { src: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=840&q=80', label: 'Cloud Engineering' },
  { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=840&q=80', label: 'Agile / Scrum' },
  { src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=840&q=80', label: 'Development' },
  { src: 'https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?w=840&q=80', label: 'Deployment Pipeline' },
  { src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=840&q=80', label: 'Cloud Storage' },
];

const ROW_1 = TECH_TILES.slice(0, 11);
const ROW_2 = TECH_TILES.slice(11, 21);

function tripled<T>(arr: T[]) {
  return [...arr, ...arr, ...arr];
}

const ROW_1_TRIPLED = tripled(ROW_1);
const ROW_2_TRIPLED = tripled(ROW_2);

function Tile({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative w-[420px] h-[270px] rounded-2xl flex-shrink-0 overflow-hidden group">
      <img
        src={src}
        loading="lazy"
        alt={label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Cyan overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050F1A]/70 via-transparent to-transparent" />
      <span className="mono absolute bottom-3 left-4 text-[#00D4FF] text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const [, forceRender] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    forceRender((n) => n + 1);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#050F1A' }}
    >
      <div className="flex flex-col gap-3">
        <div
          ref={row1Ref}
          className="flex gap-3"
          style={{ willChange: 'transform' }}
        >
          {ROW_1_TRIPLED.map((tile, i) => (
            <Tile key={`row1-${i}`} src={tile.src} label={tile.label} />
          ))}
        </div>
        <div
          ref={row2Ref}
          className="flex gap-3"
          style={{ willChange: 'transform' }}
        >
          {ROW_2_TRIPLED.map((tile, i) => (
            <Tile key={`row2-${i}`} src={tile.src} label={tile.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
