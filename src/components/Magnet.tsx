import { useRef, useState, useEffect, type ReactNode, type CSSProperties } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  style?: CSSProperties;
}

export default function Magnet({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
  style,
}: MagnetProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    const el = wrapperRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = Math.abs(e.clientX - centerX) - rect.width / 2;
    const distY = Math.abs(e.clientY - centerY) - rect.height / 2;
    const withinRange =
      e.clientX > rect.left - padding &&
      e.clientX < rect.right + padding &&
      e.clientY > rect.top - padding &&
      e.clientY < rect.bottom + padding &&
      distX < padding &&
      distY < padding;

    if (withinRange) {
      setIsActive(true);
      const offsetX = (e.clientX - centerX) / strength;
      const offsetY = (e.clientY - centerY) / strength;
      setPosition({ x: offsetX, y: offsetY });
    } else {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [padding, strength]);

  const { x, y } = position;

  return (
    <div ref={wrapperRef} className={className} style={style}>
      <div
        style={{
          transform: `translate3d(${x}px, ${y}px, 0)`,
          transition: isActive ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
