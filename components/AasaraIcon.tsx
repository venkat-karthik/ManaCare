export function AasaraIcon({ transparent = false }: { transparent?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-primary/10 shadow-xs overflow-hidden">
        <img
          src="/assets/Aasara_main.png"
          alt="Aasara Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`text-[18px] font-bold font-serif tracking-tight transition-colors duration-300 ${transparent ? 'text-white' : 'text-navy'}`}>Aasara</span>
        <span className="text-[9.5px] text-accent font-semibold tracking-wider uppercase font-sans">We Care. You Relax.</span>
      </div>
    </div>
  )
}
