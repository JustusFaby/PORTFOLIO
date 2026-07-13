import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

// SVG icon components for cloud/DevOps tech
function AwsIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="80" height="80" rx="16" fill="#050F1A" stroke="#00D4FF" strokeWidth="1.5" strokeOpacity="0.4"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#00D4FF" fontSize="13" fontFamily="JetBrains Mono, monospace" fontWeight="700">AWS</text>
    </svg>
  );
}

function K8sIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="80" height="80" rx="16" fill="#050F1A" stroke="#0EA5E9" strokeWidth="1.5" strokeOpacity="0.4"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#0EA5E9" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="700">K8s</text>
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="80" height="80" rx="16" fill="#050F1A" stroke="#22D3A5" strokeWidth="1.5" strokeOpacity="0.4"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#22D3A5" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700">Docker</text>
    </svg>
  );
}

function TerraformIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="80" height="80" rx="16" fill="#050F1A" stroke="#00D4FF" strokeWidth="1.5" strokeOpacity="0.4"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#00D4FF" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="700">Terraform</text>
    </svg>
  );
}

const ABOUT_TEXT =
  "I am a dynamic Cloud & DevOps Engineer specialising in AWS infrastructure automation, container orchestration, and Full-Stack Engineering. I have proven experience provisioning scalable, production-grade Kubernetes platforms using Terraform, Helm, and ArgoCD — alongside robust CI/CD pipelines and comprehensive observability stacks to secure and monitor container workloads.";


export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-5 sm:px-8 md:px-10 py-20 flex items-center justify-center overflow-hidden"
      style={{ background: '#050F1A' }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(0,212,255,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(14,165,233,0.06) 0%, transparent 50%)',
        }}
      />

      {/* Decorative corner icons */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[80px] sm:w-[100px] md:w-[120px]"
      >
        <AwsIcon />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[70px] sm:w-[90px] md:w-[110px]"
      >
        <DockerIcon />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[80px] sm:w-[100px] md:w-[120px]"
      >
        <K8sIcon />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[90px] sm:w-[110px] md:w-[130px]"
      >
        <TerraformIcon />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16 relative z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#A8D8E8] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
