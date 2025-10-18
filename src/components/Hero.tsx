import heroImage from "@/assets/hero-band.jpg";
import ticketImg from "@/assets/ticket-1.png";
import logoImg from "@/assets/logo.jpg";

interface HeroProps {
  lang: 'en' | 'ru';
}

const Hero = ({ lang }: HeroProps) => {
  const content = {
    en: {
      title: "FIREBIRDS",
      subtitle: "Punk Rock from the Garage",
      cta: "Listen Now"
    },
    ru: {
      title: "FIREBIRDS",
      subtitle: "Панк-рок из гаража",
      cta: "Слушать сейчас"
    }
  };

  const t = content[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grunge-black">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>
      
      {/* Decorative tickets - positioned at corners */}
      <img 
        src={ticketImg} 
        alt="" 
        className="absolute top-4 left-4 w-24 opacity-30 rotate-12 hidden lg:block shadow-ticket animate-scale-in"
      />
      <img 
        src={logoImg} 
        alt="" 
        className="absolute top-50% left-4 w-24 opacity-30 rotate-12 hidden lg:block shadow-ticket animate-scale-in"
      />
      <img 
        src={ticketImg} 
        alt="" 
        className="absolute top-4 right-4 w-24 opacity-30 rotate-12 hidden lg:block shadow-ticket animate-scale-in"
      />
      <img 
        src={logoImg} 
        alt="" 
        className="absolute top-50% right-4 w-24 opacity-30 rotate-12 hidden lg:block shadow-ticket animate-scale-in"
      />
      <img 
        src={ticketImg} 
        alt="" 
        className="absolute bottom-4 left-4 w-24 opacity-30 -rotate-6 hidden lg:block shadow-ticket animate-scale-in"
      />
       <img 
        src={ticketImg} 
        alt="" 
        className="absolute bottom-4 right-4 w-24 opacity-30 -rotate-6 hidden lg:block shadow-ticket animate-scale-in"
      />
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="font-grunge text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-4 leading-none tracking-tight animate-fade-in drop-shadow-2xl">
          {t.title}
        </h1>
        <div className="w-24 h-1 bg-grunge-red mx-auto mb-6"></div>
        <p className="font-bold-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 mb-10 tracking-wide animate-fade-in leading-tight">
          {t.subtitle}
        </p>
        <button className="bg-grunge-red hover:bg-white hover:text-grunge-black text-white font-bold-display text-xl md:text-2xl px-10 py-4 transition-all duration-300 hover:scale-105 shadow-dramatic uppercase tracking-wider animate-scale-in border border-white/10">
          {t.cta}
        </button>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
        <div className="w-6 h-10 border border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-0.5 h-2 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
