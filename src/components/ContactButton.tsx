export default function ContactButton({ className = '' }: { className?: string }) {
  return (
    <button
      id="contact-btn"
      className={`rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white outline outline-2 outline-offset-[-3px] outline-white/60 transition-transform duration-200 hover:scale-[1.03] ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #001F3F 7%, #00D4FF 37%, #0EA5E9 72%, #22D3A5 100%)',
        boxShadow: '0px 4px 16px rgba(0, 212, 255, 0.35), 4px 4px 20px rgba(14, 165, 233, 0.4) inset',
      }}
    >
      Hire Me
    </button>
  );
}
