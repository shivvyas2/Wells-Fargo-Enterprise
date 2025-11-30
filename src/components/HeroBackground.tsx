interface HeroBackgroundProps {
  children?: React.ReactNode;
  component?: React.ReactNode;
}

export default function HeroBackground({ children, component }: HeroBackgroundProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#D22030] via-[#B71C2A] to-[#FFB81C]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[20px] bg-gradient-to-b from-white/20 via-transparent to-transparent" />
        <div className="absolute right-[-20%] md:right-[10%] top-[100px] w-[800px] h-[800px] bg-[#FFB81C]/30 blur-[120px] rounded-full" />
        <div className="absolute left-[-20%] md:left-[5%] bottom-[100px] w-[600px] h-[600px] bg-[#D22030]/40 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10" />
      </div>
      <div className="px-5 pb-[48px] pt-[150px] md:px-8 lg:px-12 xl:px-16 2xl:px-24 md:pb-[80px] lg:pt-[200px] relative z-10">
        {children}
      </div>
      {/* Smooth gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-28 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-0 transition-colors" />
      {component}
    </div>
  );
}

