import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Project {
  number: string;
  name: string;
  category: string;
  stack: string[];
  github: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Production EKS Platform & GitOps Pipeline',
    category: 'Personal',
    stack: ['AWS EKS', 'Terraform', 'ArgoCD', 'Helm', 'Jenkins', 'IAM/IRSA'],
    github: 'https://github.com/JustusFaby/Exercise-16-Build-a-Production-EKS-Platform',
    // Kubernetes cluster topology + Terraform IaC code + CI/CD pipeline terminal
    col1Image1: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=840&q=80',
    col1Image2: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=840&q=80',
    col2Image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=840&q=80',
  },
  {
    number: '02',
    name: 'Kubernetes Observability & Incident Sandbox',
    category: 'Personal',
    stack: ['Prometheus', 'Grafana', 'Loki', 'Amazon EKS', 'AWS S3'],
    github: 'https://github.com/JustusFaby/Exercise-25-Observability-Platform-Deployment',
    // Analytics/monitoring dashboard + dark metrics screen + data visualization
    col1Image1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=840&q=80',
    col1Image2: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=840&q=80',
    col2Image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=840&q=80',
  },
  {
    number: '03',
    name: 'Serverless Cloud Resume Analyzer & STT Platform',
    category: 'Personal',
    stack: ['AWS Lambda', 'Transcribe', 'ECS Fargate', 'Amplify', 'Textract', 'Cognito', 'Groq AI'],
    github: 'https://github.com/JustusFaby/serverless-image-processor',
    // Document/resume analysis + microphone/speech + serverless function code
    col1Image1: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=840&q=80',
    col1Image2: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=840&q=80',
    col2Image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=840&q=80',
  },
];

const TOTAL_CARDS = PROJECTS.length;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh] flex items-start"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{
          scale,
          border: '1px solid rgba(0, 212, 255, 0.2)',
          background: 'linear-gradient(135deg, #050F1A 0%, #0A1628 100%)',
          boxShadow: '0 0 40px rgba(0, 212, 255, 0.06), inset 0 0 60px rgba(0, 212, 255, 0.02)',
        }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-4 overflow-hidden"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: 'rgba(0,212,255,0.2)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-2">
              <span className="mono text-[#00D4FF]/50 uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl leading-tight">
                {project.name}
              </span>
              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      color: '#00D4FF',
                      background: 'rgba(0, 212, 255, 0.08)',
                      border: '1px solid rgba(0, 212, 255, 0.2)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mono rounded-full border px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-widest transition-all duration-200 hover:bg-[#00D4FF]/10 whitespace-nowrap flex items-center gap-2"
            style={{ borderColor: 'rgba(0,212,255,0.4)', color: '#00D4FF' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Bottom row: image grid */}
        <div className="flex-1 min-h-0 flex gap-3 sm:gap-4 overflow-hidden">
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4 min-h-0 overflow-hidden">
            <img
              src={project.col1Image1}
              alt={`${project.name} preview 1`}
              className="w-full object-cover rounded-[24px] sm:rounded-[32px] flex-shrink-0"
              style={{ height: 'clamp(110px, 14vw, 200px)' }}
              loading="lazy"
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} preview 2`}
              className="w-full object-cover rounded-[24px] sm:rounded-[32px] flex-1 min-h-0"
              style={{ minHeight: 0 }}
              loading="lazy"
            />
          </div>
          <div className="w-[60%] min-h-0 overflow-hidden rounded-[24px] sm:rounded-[32px]">
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#050F1A' }}
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projects
      </h2>

      <div className="flex flex-col max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
