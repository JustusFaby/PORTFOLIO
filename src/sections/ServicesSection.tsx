import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Cloud Architecture',
    description:
      'Designing highly available topologies using Amazon EKS, ECS Fargate, Lambda, and API Gateway — built for fault tolerance and cost efficiency at production scale.',
  },
  {
    number: '02',
    name: 'CI/CD Pipeline Design',
    description:
      'Automating build, test, and deployment workflows using Jenkins and GitHub Actions with full rollback capabilities for zero-downtime production releases.',
  },
  {
    number: '03',
    name: 'Infrastructure as Code',
    description:
      'Provisioning and managing cloud infrastructure with Terraform — reproducible, version-controlled, and drift-free environments from dev to production.',
  },
  {
    number: '04',
    name: 'Kubernetes & GitOps',
    description:
      'Orchestrating declarative continuous deployments using ArgoCD, Helm, and Docker on Amazon EKS — ensuring reliable, auto-scaling, self-healing workloads.',
  },
  {
    number: '05',
    name: 'Monitoring & Observability',
    description:
      'Deploying comprehensive logging and metrics stacks using Prometheus, Grafana, and Loki — dramatically decreasing incident detection and resolution times.',
  },
];


export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0A1628' }}
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={20}>
            <div
              className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12 group"
              style={{
                borderBottom:
                  i < SERVICES.length - 1 ? '1px solid rgba(0, 212, 255, 0.12)' : undefined,
                borderTop: i === 0 ? '1px solid rgba(0, 212, 255, 0.12)' : undefined,
              }}
            >
              <span
                className="font-black leading-none flex-shrink-0 transition-colors duration-300"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 140px)',
                  color: 'rgba(0, 212, 255, 0.25)',
                }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-4">
                <h3
                  className="font-medium uppercase text-[#00D4FF]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#A8D8E8]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.7 }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
