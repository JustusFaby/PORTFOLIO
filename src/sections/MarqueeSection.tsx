import { useEffect, useRef, useState } from 'react';

const TECH_TILES = [
  // Row 1 — cloud dashboards & infra
  { src: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=840&q=80', label: 'Cloud Architecture' },
  { src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=840&q=80', label: 'Server Infrastructure' },
  { src: 'https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?w=840&q=80', label: 'Kubernetes Cluster' },
  { src: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=840&q=80', label: 'DevOps Pipeline' },
  { src: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=840&q=80', label: 'Monitoring Dashboard' },
  { src: 'https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=840&q=80', label: 'Terminal' },
  { src: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=840&q=80', label: 'Data Center' },
  { src: 'https://images.unsplash.com/photo-1603695821069-2fde766e5f50?w=840&q=80', label: 'CI/CD Pipeline' },
  { src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=840&q=80', label: 'Cloud Storage' },
  { src: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=840&q=80', label: 'Network Topology' },
  { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=840&q=80', label: 'DevOps Team' },
  // Row 2
  { src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=840&q=80', label: 'Code Review' },
  { src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=840&q=80', label: 'Fiber Network' },
  { src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=840&q=80', label: 'AI Infrastructure' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=840&q=80', label: 'Analytics Dashboard' },
  { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=840&q=80', label: 'Team Collaboration' },
  { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=840&q=80', label: 'System Monitoring' },
  { src: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=840&q=80', label: 'Security Ops' },
  { src: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=840&q=80', label: 'Cloud Computing' },
  { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=840&q=80', label: 'Infrastructure Team' },
  { src: 'https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?w=840&q=80', label: 'Deployment' },
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
