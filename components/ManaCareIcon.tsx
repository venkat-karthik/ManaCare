export function ManaCareIcon({ transparent = false }: { transparent?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-primary/10 overflow-hidden shadow-xs relative">
        <img
          src="/assets/manacare_logo.png"
          alt="ManaCare Logo"
          className="w-full h-full object-cover scale-150"
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`text-[18px] font-bold font-serif tracking-tight transition-colors duration-300 ${transparent ? 'text-white' : 'text-navy'}`}>ManaCare</span>
        <span className="text-[9.5px] text-accent font-semibold tracking-wider uppercase font-sans">We Care. You Relax.</span>
      </div>
    </div>
  )
}
