export function ManaCareIcon() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-primary/10 overflow-hidden shadow-xs relative">
        <img
          src="/assets/manacare_logo.png"
          alt="ManaCare Logo"
          className="w-full h-full object-cover p-1 scale-105"
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[18px] font-bold text-navy font-serif tracking-tight">ManaCare</span>
        <span className="text-[9.5px] text-accent font-semibold tracking-wider uppercase font-sans">We Care. You Relax.</span>
      </div>
    </div>
  )
}
